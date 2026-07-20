// asciichurn — the real Butterchurn/MilkDrop engine rendered as terminal blocks.
//
// System microphone PCM is passed into the parent Butterchurn renderer running
// in local headless Chromium. Its finished WebGL2 frame is downsampled to the
// terminal and assembled with deno_tui's colored full-block renderer.
//
//   deno task start
//
// Keys: q quit · p/space next preset · b previous · r random · c auto-cycle

import { crayon } from "crayon";
import { PerspectiveCamera, Scene } from "three";

import {
  Computed,
  emptyStyle,
  handleInput,
  handleKeyboardControls,
  Signal,
  Text,
  ThreeAsciiObject,
  Tui,
} from "tui";

import { createAudioAnalyser } from "./audio.ts";
import {
  ButterchurnAsciiRenderer,
  type ButterchurnAsciiRendererState,
} from "./butterchurn_ascii_renderer.ts";

if (!Deno.stdin.isTerminal()) {
  console.error(
    "asciichurn needs an interactive terminal. Run it directly: deno task start",
  );
  Deno.exit(1);
}

const audio = createAudioAnalyser();
let audioFrame = audio.frame();

const sourceLabel = new Signal("starting");
const presetLabel = new Signal("loading the parent preset catalog");
const cycleLabel = new Signal("auto:on");

const tui = new Tui({
  style: crayon.bgBlack,
  refreshRate: 1000 / 30,
});

void handleInput(tui);
handleKeyboardControls(tui);
tui.run();

// ThreeAsciiObject supplies the mature TUI diff/render loop. The placeholder
// scene and camera satisfy its renderer interface; no Three.js/WebGPU render is
// performed because rendererFactory installs ButterchurnAsciiRenderer.
const placeholderScene = new Scene();
const placeholderCamera = new PerspectiveCamera();
let renderer: ButterchurnAsciiRenderer | undefined;

const publishRendererState = (state: ButterchurnAsciiRendererState) => {
  presetLabel.value = state.presetCount > 0
    ? `${state.presetIndex + 1}/${state.presetCount} ${state.presetName}`
    : state.presetName;
  cycleLabel.value = state.autoCycle ? "auto:on" : "auto:off";
};

const ascii = new ThreeAsciiObject({
  canvas: tui.canvas,
  style: emptyStyle,
  rectangle: new Computed(() => ({
    column: 0,
    row: 0,
    width: tui.rectangle.value.width,
    height: tui.rectangle.value.height,
  })),
  zIndex: 0,
  scene: placeholderScene,
  camera: placeholderCamera,
  frameInterval: 1000 / 24,
  terminalGlyphStyle: "blocks",
  rendererFactory: (options) =>
    renderer = new ButterchurnAsciiRenderer({
      ...options,
      audioFrame: () => audioFrame,
      onState: publishRendererState,
    }),
  onFrame: () => {
    audioFrame = audio.frame();
    sourceLabel.value = audio.label();
  },
});
ascii.draw();

new Text({
  parent: tui,
  theme: { base: crayon.bgBlack.green },
  text: new Computed(
    () =>
      ` ASCIICHURN · ${sourceLabel.value} · ${presetLabel.value} · ${cycleLabel.value} · ` +
      "p next · b back · r random · c cycle · q quit ",
  ),
  rectangle: { column: 1, row: 0 },
  zIndex: 2,
});

let shuttingDown = false;
const shutdownSignals: Deno.Signal[] = ["SIGINT", "SIGTERM"];

async function shutdown(): Promise<void> {
  if (shuttingDown) return;
  shuttingDown = true;
  try {
    ascii.erase();
    audio.close();
    await renderer?.close();
  } finally {
    for (const signal of shutdownSignals) {
      try {
        Deno.removeSignalListener(signal, requestShutdown);
      } catch {
        // Signal was not installed or the platform removed it already.
      }
    }
    tui.destroy();
    Deno.exit(0);
  }
}

function requestShutdown(): void {
  void shutdown();
}

for (const signal of shutdownSignals) {
  Deno.addSignalListener(signal, requestShutdown);
}
tui.on("destroy", requestShutdown);

tui.on("keyPress", ({ key, ctrl, meta }) => {
  if (ctrl && key === "c") {
    requestShutdown();
    return;
  }
  if (ctrl || meta) return;

  if (key === "q" || key === "escape") {
    requestShutdown();
    return;
  }

  if (key === "p" || key === "space") {
    renderer?.requestNextPreset();
  } else if (key === "b") {
    renderer?.requestPreviousPreset();
  } else if (key === "r") {
    renderer?.requestRandomPreset();
  } else if (key === "c") {
    renderer?.toggleAutoCycle();
  }
});
