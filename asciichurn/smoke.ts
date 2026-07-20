import { ButterchurnBridge } from "./butterchurn_bridge.ts";

const columns = 48;
const rows = 20;
const samples = new Uint8Array(1024);
const bridge = await ButterchurnBridge.launch({
  columns,
  rows,
  initialPresetIndex: 0,
});

try {
  const info = bridge.info();
  if (info.presetCount !== 293) {
    throw new Error(
      `Expected the parent's 293 base+extra presets; loaded ${info.presetCount}.`,
    );
  }
  if (
    info.presetName !== "27" ||
    info.presetCatalogFingerprint !== "d40c5bcd"
  ) {
    throw new Error(
      "The Butterchurn preset names or parent-demo ordering have changed: " +
        `${info.presetName} / ${info.presetCatalogFingerprint}.`,
    );
  }

  const hashes = new Set<number>();
  let brightest = 0;
  for (let frameIndex = 0; frameIndex < 12; frameIndex++) {
    for (let sampleIndex = 0; sampleIndex < samples.length; sampleIndex++) {
      const time = (frameIndex * samples.length + sampleIndex) / 44100;
      const value = Math.sin(time * Math.PI * 2 * 73) * 0.45 +
        Math.sin(time * Math.PI * 2 * 311) * 0.2;
      samples[sampleIndex] = Math.max(
        0,
        Math.min(255, Math.round(128 + value * 127)),
      );
    }

    const frame = await bridge.render(samples, 1 / 30);
    let hash = 2166136261;
    for (let index = 0; index < frame.rgba.length; index += 4) {
      brightest = Math.max(
        brightest,
        frame.rgba[index],
        frame.rgba[index + 1],
        frame.rgba[index + 2],
      );
      hash ^= frame.rgba[index] | (frame.rgba[index + 1] << 8) |
        (frame.rgba[index + 2] << 16);
      hash = Math.imul(hash, 16777619);
    }
    hashes.add(hash >>> 0);
  }

  if (brightest < 16) {
    throw new Error("The real Butterchurn engine returned only blank frames.");
  }
  if (hashes.size < 2) {
    throw new Error(
      "The real Butterchurn engine did not produce changing frames.",
    );
  }

  const nextPreset = await bridge.nextPreset(0);
  if (
    nextPreset.presetName !== "269" || nextPreset.presetIndex !== 1
  ) {
    throw new Error(
      "The real Butterchurn preset catalog did not advance to the next preset.",
    );
  }
  const thirdPreset = await bridge.nextPreset(0);
  if (thirdPreset.presetName !== "286" || thirdPreset.presetIndex !== 2) {
    throw new Error(
      "The real Butterchurn preset catalog does not match the parent order.",
    );
  }

  console.log(
    `Butterchurn smoke passed: ${info.presetCount} presets, ` +
      `${columns}x${rows} cell capture, exact catalog verified.`,
  );
} finally {
  await bridge.close();
}
