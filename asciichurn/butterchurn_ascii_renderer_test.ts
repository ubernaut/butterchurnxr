import { PerspectiveCamera, Scene } from "three";

import type { AudioFrame } from "./audio.ts";
import {
  buildButterchurnBlockGrid,
  ButterchurnAsciiRenderer,
  type ButterchurnBridgeLike,
} from "./butterchurn_ascii_renderer.ts";
import type {
  ButterchurnBridgeInfo,
  ButterchurnPixelFrame,
} from "./butterchurn_bridge.ts";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

Deno.test("Butterchurn pixels become exact colored full-block cells", () => {
  const grid = buildButterchurnBlockGrid(
    new Uint8Array([
      255,
      0,
      0,
      255,
      0,
      0,
      0,
      255,
    ]),
    2,
    1,
  );

  assert(
    grid.length === 1 && grid[0].length === 2,
    "Expected a 2x1 terminal grid.",
  );
  assert(
    grid[0][0].includes("\x1b[38;2;255;0;0m█"),
    "Expected the bright red pixel to remain red.",
  );
  assert(
    !grid[0][1].includes("█"),
    "Expected a black pixel to remain a blank terminal cell.",
  );
});

Deno.test("Butterchurn ASCII renderer delegates preset, resize, frame, and cleanup lifecycle", async () => {
  const fake = new FakeBridge(2, 1);
  const audio = audioFrame();
  const renderer = new ButterchurnAsciiRenderer({
    scene: new Scene(),
    camera: new PerspectiveCamera(),
    columns: 2,
    rows: 1,
    terminalGlyphStyle: "blocks",
    audioFrame: () => audio,
    bridgeFactory: () => Promise.resolve(fake),
  });

  const first = await renderer.renderFrame(1 / 30);
  assert(
    first.grid?.[0]?.length === 2,
    "Expected the first fake frame to use the initial size.",
  );
  assert(fake.renderCalls === 1, "Expected one bridge render call.");

  renderer.requestNextPreset();
  renderer.requestNextPreset();
  renderer.requestNextPreset();
  await renderer.renderFrame(1 / 30);
  assert(
    fake.nextCalls === 1,
    "Expected p/next to delegate to the Butterchurn preset catalog.",
  );
  assert(
    renderer.getState().presetName === "Preset 2",
    "Expected renderer state to expose the changed preset.",
  );

  renderer.setSize(3, 2);
  const resized = await renderer.renderFrame(1 / 30);
  assert(
    resized.grid?.length === 2 && resized.grid[0].length === 3,
    "Expected resized cell output.",
  );
  assert(
    fake.info().columns === 3 && fake.info().rows === 2,
    "Expected bridge resize delegation.",
  );

  renderer.destroy();
  await renderer.close();
  assert(fake.closed, "Expected renderer destruction to close Chromium.");
});

Deno.test("Butterchurn ASCII renderer recreates a failed backend without going permanently offline", async () => {
  const firstBridge = new FakeBridge(2, 1);
  const replacementBridge = new FakeBridge(2, 1);
  let launchCount = 0;
  const renderer = new ButterchurnAsciiRenderer({
    scene: new Scene(),
    camera: new PerspectiveCamera(),
    columns: 2,
    rows: 1,
    terminalGlyphStyle: "blocks",
    audioFrame,
    bridgeFactory: () =>
      Promise.resolve(launchCount++ === 0 ? firstBridge : replacementBridge),
  });

  await renderer.renderFrame(1 / 30);
  firstBridge.failNextRender = true;
  const recovered = await renderer.renderFrame(1 / 30);

  assert(firstBridge.closed, "Expected the failed Chromium bridge to close.");
  assert(launchCount === 2, "Expected one bounded bridge recreation.");
  assert(
    replacementBridge.renderCalls === 1 && recovered.grid?.[0]?.length === 2,
    "Expected rendering to continue through the replacement bridge.",
  );
  await renderer.close();
  assert(replacementBridge.closed, "Expected replacement bridge cleanup.");
});

Deno.test("Butterchurn ASCII renderer preserves its last frame during bounded recovery backoff", async () => {
  const firstBridge = new FakeBridge(2, 1);
  const failedReplacement = new FakeBridge(2, 1);
  const healthyReplacement = new FakeBridge(2, 1);
  const bridges = [firstBridge, failedReplacement, healthyReplacement];
  let launchCount = 0;
  const renderer = new ButterchurnAsciiRenderer({
    scene: new Scene(),
    camera: new PerspectiveCamera(),
    columns: 2,
    rows: 1,
    terminalGlyphStyle: "blocks",
    audioFrame,
    bridgeFactory: () => Promise.resolve(bridges[launchCount++]),
  });

  const first = await renderer.renderFrame(1 / 30);
  firstBridge.failNextRender = true;
  failedReplacement.failNextRender = true;
  const preserved = await renderer.renderFrame(1 / 30);
  assert(
    preserved.grid === first.grid,
    "Expected the last complete frame while both bounded attempts fail.",
  );
  assert(
    firstBridge.closed && failedReplacement.closed && launchCount === 2,
    "Expected both failed bridges to close.",
  );

  await renderer.renderFrame(1 / 30);
  assert(launchCount === 2, "Expected retry backoff to prevent a launch loop.");
  await new Promise((resolve) => setTimeout(resolve, 275));
  const recovered = await renderer.renderFrame(1 / 30);
  assert(
    Number(launchCount) === 3 && healthyReplacement.renderCalls === 1 &&
      recovered.grid?.[0]?.length === 2,
    "Expected rendering to resume after the recovery backoff.",
  );
  await renderer.close();
});

function audioFrame(): AudioFrame {
  return {
    level: 0,
    bass: 0,
    mid: 0,
    treble: 0,
    bands: new Float32Array(24),
    beat: false,
    timeByteArray: new Uint8Array(1024).fill(128),
    source: "noise",
  };
}

class FakeBridge implements ButterchurnBridgeLike {
  renderCalls = 0;
  nextCalls = 0;
  closed = false;
  failNextRender = false;
  private state: ButterchurnBridgeInfo;

  constructor(columns: number, rows: number) {
    this.state = {
      presetName: "Preset 1",
      presetIndex: 0,
      presetCount: 293,
      presetCatalogFingerprint: "test-catalog",
      columns,
      rows,
    };
  }

  info(): ButterchurnBridgeInfo {
    return { ...this.state };
  }

  resize(columns: number, rows: number): Promise<ButterchurnBridgeInfo> {
    this.state = { ...this.state, columns, rows };
    return Promise.resolve(this.info());
  }

  nextPreset(): Promise<ButterchurnBridgeInfo> {
    this.nextCalls += 1;
    this.state = { ...this.state, presetIndex: 1, presetName: "Preset 2" };
    return Promise.resolve(this.info());
  }

  previousPreset(): Promise<ButterchurnBridgeInfo> {
    this.state = { ...this.state, presetIndex: 0, presetName: "Preset 1" };
    return Promise.resolve(this.info());
  }

  randomPreset(): Promise<ButterchurnBridgeInfo> {
    this.state = { ...this.state, presetIndex: 2, presetName: "Preset 3" };
    return Promise.resolve(this.info());
  }

  render(
    _timeByteArray: Uint8Array,
    _elapsedTime: number,
  ): Promise<ButterchurnPixelFrame> {
    this.renderCalls += 1;
    if (this.failNextRender) {
      this.failNextRender = false;
      return Promise.reject(new Error("simulated Chromium failure"));
    }
    const rgba = new Uint8Array(this.state.columns * this.state.rows * 4);
    for (let index = 0; index < rgba.length; index += 4) {
      rgba[index] = 32;
      rgba[index + 1] = 224;
      rgba[index + 2] = 96;
      rgba[index + 3] = 255;
    }
    return Promise.resolve({ ...this.info(), rgba });
  }

  close(): Promise<void> {
    this.closed = true;
    return Promise.resolve();
  }
}
