import {
  BUTTERCHURN_SAMPLE_COUNT,
  butterchurnTimeByte,
  fillButterchurnMicTimeBytes,
  fillButterchurnNoiseTimeBytes,
} from "./audio.ts";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

Deno.test("microphone ring extraction produces parent-compatible unsigned PCM", () => {
  const ring = new Float32Array([0, 0.5, 0, 0, -1, -0.5]);
  const target = new Uint8Array(4);
  fillButterchurnMicTimeBytes(target, ring, 2, 1);

  assert(
    target.join(",") === "0,64,128,192",
    `Unexpected wrapped microphone bytes: ${target.join(",")}`,
  );
  assert(
    butterchurnTimeByte(0.25, 4) === 255 &&
      butterchurnTimeByte(-0.25, 4) === 0,
    "Expected the parent's 4x microphone gain and byte clipping.",
  );
});

Deno.test("noise fallback produces a full changing Butterchurn PCM frame", () => {
  const target = new Uint8Array(BUTTERCHURN_SAMPLE_COUNT);
  fillButterchurnNoiseTimeBytes(target, 1.25, 0.08);
  let minimum = 255;
  let maximum = 0;
  for (const sample of target) {
    minimum = Math.min(minimum, sample);
    maximum = Math.max(maximum, sample);
  }

  assert(target.length === 1024, "Expected Butterchurn's 1,024 samples.");
  assert(
    minimum < 112 && maximum > 144,
    `Expected a non-silent synthesized waveform; range=${minimum}..${maximum}.`,
  );
});
