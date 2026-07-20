// System-microphone analyser for asciichurn.
//
// Captures raw PCM from the first available CLI recorder (parec, pw-record,
// arecord), keeps a ring buffer of recent samples, and exposes per-frame
// spectrum bands, bass/mid/treble energy, overall level, and beat pulses.
// Falls back to a synthesized "noise" signal when no recorder works, matching
// the mic-denied fallback of the main butterchurnxr demo.

const SAMPLE_RATE = 44100;
const FFT_SIZE = 2048;
export const BUTTERCHURN_SAMPLE_COUNT = 1024;
export const BUTTERCHURN_MIC_GAIN = 4;
const RING_SIZE = FFT_SIZE * 4;
const MIN_FREQ = 35;
const MAX_FREQ = 12000;
const MIN_DB = -62;
const MAX_DB = -14;

export type AudioSource = "starting" | "mic" | "noise";

export interface AudioFrame {
  /** Overall loudness, 0..1. */
  level: number;
  /** Low-band energy (< 160 Hz), 0..1. */
  bass: number;
  /** Mid-band energy (160 Hz .. 2 kHz), 0..1. */
  mid: number;
  /** High-band energy (> 2 kHz), 0..1. */
  treble: number;
  /** Smoothed log-spaced spectrum bands, each 0..1. */
  bands: Float32Array;
  /** True on frames where a bass transient was detected. */
  beat: boolean;
  /** Unsigned mono PCM expected by Butterchurn's AudioProcessor. */
  timeByteArray: Uint8Array;
  source: AudioSource;
}

export interface AudioAnalyser {
  frame(): AudioFrame;
  /** Short label for status lines, e.g. "mic:parec" or "noise". */
  label(): string;
  close(): void;
}

interface RecorderCandidate {
  name: string;
  args: string[];
}

const RECORDERS: RecorderCandidate[] = [
  {
    name: "parec",
    args: [
      "--format=s16le",
      `--rate=${SAMPLE_RATE}`,
      "--channels=1",
      "--latency-msec=30",
    ],
  },
  {
    name: "pw-record",
    args: [
      "--format",
      "s16",
      "--rate",
      `${SAMPLE_RATE}`,
      "--channels",
      "1",
      "-",
    ],
  },
  {
    name: "arecord",
    args: [
      "-f",
      "S16_LE",
      "-r",
      `${SAMPLE_RATE}`,
      "-c",
      "1",
      "-t",
      "raw",
      "-q",
    ],
  },
];

const FIRST_DATA_TIMEOUT_MS = 2000;

function fft(re: Float32Array, im: Float32Array): void {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) {
      const tr = re[i];
      re[i] = re[j];
      re[j] = tr;
      const ti = im[i];
      im[i] = im[j];
      im[j] = ti;
    }
  }
  for (let len = 2; len <= n; len <<= 1) {
    const half = len >> 1;
    const angle = -2 * Math.PI / len;
    const wr = Math.cos(angle);
    const wi = Math.sin(angle);
    for (let i = 0; i < n; i += len) {
      let curR = 1;
      let curI = 0;
      for (let j = 0; j < half; j++) {
        const a = i + j;
        const b = a + half;
        const vr = re[b] * curR - im[b] * curI;
        const vi = re[b] * curI + im[b] * curR;
        re[b] = re[a] - vr;
        im[b] = im[a] - vi;
        re[a] += vr;
        im[a] += vi;
        const nr = curR * wr - curI * wi;
        curI = curR * wi + curI * wr;
        curR = nr;
      }
    }
  }
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

export function butterchurnTimeByte(sample: number, gain = 1): number {
  const value = Number.isFinite(sample) ? sample * gain : 0;
  return Math.max(0, Math.min(255, Math.round(128 + value * 128)));
}

export function fillButterchurnMicTimeBytes(
  target: Uint8Array,
  ring: Float32Array,
  ringWrite: number,
  gain = BUTTERCHURN_MIC_GAIN,
): void {
  if (ring.length < target.length) {
    throw new Error("The microphone ring is shorter than the PCM frame.");
  }
  const write = ((Math.floor(ringWrite) % ring.length) + ring.length) %
    ring.length;
  const offset = (write - target.length + ring.length) % ring.length;
  for (let index = 0; index < target.length; index++) {
    target[index] = butterchurnTimeByte(
      ring[(offset + index) % ring.length],
      gain,
    );
  }
}

export function fillButterchurnNoiseTimeBytes(
  target: Uint8Array,
  noiseTime: number,
  noiseBeatClock: number,
): void {
  const kick = Math.max(0, 1 - noiseBeatClock / 0.16);
  for (let index = 0; index < target.length; index++) {
    const time = noiseTime - (target.length - index) / SAMPLE_RATE;
    const sample = Math.sin(time * Math.PI * 2 * 55) * (0.22 + kick * 0.34) +
      Math.sin(time * Math.PI * 2 * 173) * 0.16 +
      Math.sin(time * Math.PI * 2 * 811) * 0.08;
    target[index] = butterchurnTimeByte(sample);
  }
}

export function createAudioAnalyser(bandCount = 24): AudioAnalyser {
  const ring = new Float32Array(RING_SIZE);
  let ringWrite = 0;
  let totalSamples = 0;
  let source: AudioSource = "starting";
  let recorderName = "";
  let process: Deno.ChildProcess | null = null;
  let closed = false;

  const window = new Float32Array(FFT_SIZE);
  for (let i = 0; i < FFT_SIZE; i++) {
    window[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (FFT_SIZE - 1)));
  }

  const re = new Float32Array(FFT_SIZE);
  const im = new Float32Array(FFT_SIZE);

  // Log-spaced band edges expressed as FFT bin indices.
  const binHz = SAMPLE_RATE / FFT_SIZE;
  const bandEdges = new Array<number>(bandCount + 1);
  for (let i = 0; i <= bandCount; i++) {
    const freq = MIN_FREQ * Math.pow(MAX_FREQ / MIN_FREQ, i / bandCount);
    bandEdges[i] = Math.max(
      1,
      Math.min(FFT_SIZE / 2 - 1, Math.round(freq / binHz)),
    );
  }
  const bandFreq = (i: number) =>
    MIN_FREQ * Math.pow(MAX_FREQ / MIN_FREQ, (i + 0.5) / bandCount);

  const rawBands = new Float32Array(bandCount);
  const bands = new Float32Array(bandCount);
  const timeByteArray = new Uint8Array(BUTTERCHURN_SAMPLE_COUNT);
  timeByteArray.fill(128);
  let level = 0;
  let bassAverage = 0.08;
  let beatCooldown = 0;
  let lastFrameAt = performance.now();
  let noiseTime = 0;
  let noiseBeatClock = 0;

  function pushSamples(
    bytes: Uint8Array,
    carry: { byte: number | null },
  ): void {
    let start = 0;
    if (carry.byte !== null && bytes.length > 0) {
      const value = (bytes[0] << 8) | carry.byte;
      ring[ringWrite] = ((value << 16) >> 16) / 32768;
      ringWrite = (ringWrite + 1) % RING_SIZE;
      totalSamples++;
      carry.byte = null;
      start = 1;
    }
    const usable = bytes.length - start;
    const pairs = usable >> 1;
    for (let i = 0; i < pairs; i++) {
      const lo = bytes[start + i * 2];
      const hi = bytes[start + i * 2 + 1];
      ring[ringWrite] = (((hi << 8) | lo) << 16 >> 16) / 32768;
      ringWrite = (ringWrite + 1) % RING_SIZE;
      totalSamples++;
    }
    if (usable & 1) carry.byte = bytes[bytes.length - 1];
  }

  async function readStream(proc: Deno.ChildProcess): Promise<void> {
    const carry = { byte: null as number | null };
    const reader = proc.stdout.getReader();
    try {
      while (!closed) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) pushSamples(value, carry);
      }
    } finally {
      reader.releaseLock();
    }
  }

  async function startCapture(): Promise<void> {
    for (const recorder of RECORDERS) {
      if (closed) return;
      let proc: Deno.ChildProcess;
      try {
        proc = new Deno.Command(recorder.name, {
          args: recorder.args,
          stdin: "null",
          stdout: "piped",
          stderr: "null",
        }).spawn();
      } catch {
        continue;
      }

      const before = totalSamples;
      const readDone = readStream(proc).catch(() => {});
      const deadline = performance.now() + FIRST_DATA_TIMEOUT_MS;
      while (
        !closed && totalSamples === before && performance.now() < deadline
      ) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      if (totalSamples > before && !closed) {
        process = proc;
        recorderName = recorder.name;
        source = "mic";
        await readDone;
        // The recorder exited (device unplugged, daemon restart, ...).
        if (!closed) {
          process = null;
          source = "starting";
          continue;
        }
        return;
      }

      try {
        proc.kill();
      } catch {
        // already gone
      }
      await proc.status.catch(() => {});
    }
    if (!closed && source !== "mic") source = "noise";
  }

  const captureDone = startCapture();

  function analyseMic(): void {
    const offset = (ringWrite - FFT_SIZE + RING_SIZE) % RING_SIZE;
    let sumSquares = 0;
    for (let i = 0; i < FFT_SIZE; i++) {
      const sample = ring[(offset + i) % RING_SIZE];
      sumSquares += sample * sample;
      re[i] = sample * window[i];
      im[i] = 0;
    }
    fft(re, im);

    for (let band = 0; band < bandCount; band++) {
      const from = bandEdges[band];
      const to = Math.max(from + 1, bandEdges[band + 1]);
      let peak = 0;
      for (let bin = from; bin < to; bin++) {
        const magnitude = Math.hypot(re[bin], im[bin]) * (2 / FFT_SIZE);
        if (magnitude > peak) peak = magnitude;
      }
      const db = 20 * Math.log10(peak + 1e-9);
      rawBands[band] = clamp01((db - MIN_DB) / (MAX_DB - MIN_DB));
    }

    const rms = Math.sqrt(sumSquares / FFT_SIZE);
    const rmsDb = 20 * Math.log10(rms + 1e-9);
    level = clamp01((rmsDb - MIN_DB) / (MAX_DB - MIN_DB));
  }

  function analyseNoise(dt: number): void {
    noiseTime += dt;
    noiseBeatClock += dt;
    const pulse = noiseBeatClock > 0.62;
    if (pulse) noiseBeatClock = 0;
    for (let band = 0; band < bandCount; band++) {
      const t = noiseTime;
      const wobble = 0.5 +
        0.28 * Math.sin(t * (0.7 + band * 0.13) + band * 1.7) +
        0.18 * Math.sin(t * (1.9 + band * 0.07) + band * 0.6);
      const rolloff = 1 - band / (bandCount * 1.6);
      const kick = pulse && band < 5 ? 0.45 : 0;
      rawBands[band] = clamp01(wobble * rolloff * 0.75 + kick);
    }
    level = clamp01(
      0.35 + 0.2 * Math.sin(noiseTime * 0.9) + (pulse ? 0.25 : 0),
    );
  }

  function updateTimeByteArray(): void {
    if (source === "mic" && totalSamples >= BUTTERCHURN_SAMPLE_COUNT) {
      // The parent demo routes its microphone through a 4x GainNode before
      // Butterchurn's analyser. Apply that same gain to our raw PCM transport.
      fillButterchurnMicTimeBytes(timeByteArray, ring, ringWrite);
      return;
    }

    if (source === "noise") {
      // Keep the no-microphone fallback musical enough for MilkDrop presets to
      // exercise their own FFT, beat, and attenuation equations.
      fillButterchurnNoiseTimeBytes(
        timeByteArray,
        noiseTime,
        noiseBeatClock,
      );
      return;
    }

    timeByteArray.fill(128);
  }

  function frame(): AudioFrame {
    const now = performance.now();
    const dt = Math.min(0.25, Math.max(0.001, (now - lastFrameAt) / 1000));
    lastFrameAt = now;

    if (source === "mic" && totalSamples >= FFT_SIZE) {
      analyseMic();
    } else if (source === "noise") {
      analyseNoise(dt);
    } else {
      rawBands.fill(0);
      level = 0;
    }
    updateTimeByteArray();

    // Fast attack, slow release smoothing.
    for (let band = 0; band < bandCount; band++) {
      const target = rawBands[band];
      const rate = target > bands[band] ? 22 : 5;
      bands[band] += (target - bands[band]) * Math.min(1, rate * dt);
    }

    let bass = 0;
    let bassCount = 0;
    let mid = 0;
    let midCount = 0;
    let treble = 0;
    let trebleCount = 0;
    for (let band = 0; band < bandCount; band++) {
      const freq = bandFreq(band);
      if (freq < 160) {
        bass += bands[band];
        bassCount++;
      } else if (freq < 2000) {
        mid += bands[band];
        midCount++;
      } else {
        treble += bands[band];
        trebleCount++;
      }
    }
    bass /= Math.max(1, bassCount);
    mid /= Math.max(1, midCount);
    treble /= Math.max(1, trebleCount);

    beatCooldown = Math.max(0, beatCooldown - dt);
    let beat = false;
    if (beatCooldown === 0 && bass > 0.18 && bass > bassAverage * 1.45) {
      beat = true;
      beatCooldown = 0.18;
    }
    bassAverage += (bass - bassAverage) * Math.min(1, 1.4 * dt);

    return { level, bass, mid, treble, bands, beat, timeByteArray, source };
  }

  return {
    frame,
    label: () => source === "mic" ? `mic:${recorderName}` : source,
    close: () => {
      closed = true;
      try {
        process?.kill();
      } catch {
        // already gone
      }
      captureDone.catch(() => {});
    },
  };
}

// Standalone smoke test: `deno task audio-test`
if (import.meta.main) {
  const analyser = createAudioAnalyser();
  console.log("capturing... (3s)");
  const startedAt = performance.now();
  const timer = setInterval(() => {
    const f = analyser.frame();
    const bar = Array.from(
      f.bands,
      (v) => " .:-=+*#%@"[Math.min(9, Math.floor(v * 10))],
    ).join("");
    console.log(
      `[${f.source.padEnd(8)}] level=${f.level.toFixed(2)} bass=${
        f.bass.toFixed(2)
      } ` +
        `mid=${f.mid.toFixed(2)} treble=${f.treble.toFixed(2)} ${
          f.beat ? "BEAT" : "    "
        } |${bar}|`,
    );
    if (performance.now() - startedAt > 3000) {
      clearInterval(timer);
      analyser.close();
    }
  }, 200);
}
