import type { Camera, Scene } from "three";
import {
  type AcerolaAsciiNodeOptions,
  type TerminalGlyphStyle,
  ThreeAsciiAnsiGridAssembler,
  type ThreeAsciiGridRenderer,
  type ThreeAsciiRendererOptions,
  type ThreeAsciiRenderFrame,
  type ThreeAsciiRenderFrameOptions,
} from "tui";

import type { AudioFrame } from "./audio.ts";
import {
  ButterchurnBridge,
  type ButterchurnBridgeInfo,
  type ButterchurnPixelFrame,
} from "./butterchurn_bridge.ts";

const AUTO_CYCLE_SECONDS = 15;
const DARK_CELL_LUMINANCE = 0.015;
const INITIAL_RECOVERY_DELAY_MS = 250;
const MAX_RECOVERY_DELAY_MS = 4000;

type PresetAction = "next" | "previous" | "random";

export interface ButterchurnBridgeLike {
  info(): ButterchurnBridgeInfo;
  resize(columns: number, rows: number): Promise<ButterchurnBridgeInfo>;
  nextPreset(): Promise<ButterchurnBridgeInfo>;
  previousPreset(): Promise<ButterchurnBridgeInfo>;
  randomPreset(): Promise<ButterchurnBridgeInfo>;
  render(
    timeByteArray: Uint8Array,
    elapsedTime: number,
  ): Promise<ButterchurnPixelFrame>;
  close(): Promise<void>;
}

export interface ButterchurnAsciiRendererState {
  presetName: string;
  presetIndex: number;
  presetCount: number;
  autoCycle: boolean;
}

export interface ButterchurnAsciiRendererOptions
  extends ThreeAsciiRendererOptions {
  audioFrame: () => AudioFrame;
  onState?: (state: ButterchurnAsciiRendererState) => void;
  bridgeFactory?: (
    columns: number,
    rows: number,
  ) => Promise<ButterchurnBridgeLike>;
}

/** Adapts real Butterchurn pixels to deno_tui's CPU-side colored block grid. */
export class ButterchurnAsciiRenderer implements ThreeAsciiGridRenderer {
  readonly scene: Scene;
  readonly camera: Camera;

  private columns: number;
  private rows: number;
  private terminalEdgeBias: number;
  private readonly audioFrame: () => AudioFrame;
  private readonly onState?: (state: ButterchurnAsciiRendererState) => void;
  private readonly bridgeFactory: (
    columns: number,
    rows: number,
  ) => Promise<ButterchurnBridgeLike>;
  private readonly assembler = new ThreeAsciiAnsiGridAssembler({
    reuseGrid: true,
  });
  private bridgePromise?: Promise<ButterchurnBridgeLike>;
  private bridge?: ButterchurnBridgeLike;
  private presetAction?: PresetAction;
  private elapsedSincePreset = 0;
  private revision = 0;
  private destroyed = false;
  private closePromise?: Promise<void>;
  private lastGrid: string[][] = [];
  private renderedOnce = false;
  private recoveryNotBefore = 0;
  private recoveryDelayMs = INITIAL_RECOVERY_DELAY_MS;
  private state: ButterchurnAsciiRendererState = {
    presetName: "loading Butterchurn presets",
    presetIndex: 0,
    presetCount: 0,
    autoCycle: true,
  };

  constructor(options: ButterchurnAsciiRendererOptions) {
    this.scene = options.scene;
    this.camera = options.camera;
    this.columns = Math.max(1, options.columns);
    this.rows = Math.max(1, options.rows);
    this.terminalEdgeBias = options.terminalEdgeBias ?? 1;
    this.audioFrame = options.audioFrame;
    this.onState = options.onState;
    this.bridgeFactory = options.bridgeFactory ??
      ((columns, rows) =>
        ButterchurnBridge.launch({
          columns,
          rows,
          initialPresetIndex: this.state.presetCount > 0
            ? this.state.presetIndex
            : undefined,
        }));
  }

  getState(): ButterchurnAsciiRendererState {
    return { ...this.state };
  }

  requestNextPreset(): void {
    this.presetAction = "next";
  }

  requestPreviousPreset(): void {
    this.presetAction = "previous";
  }

  requestRandomPreset(): void {
    this.presetAction = "random";
  }

  toggleAutoCycle(): boolean {
    this.state = { ...this.state, autoCycle: !this.state.autoCycle };
    this.publishState();
    return this.state.autoCycle;
  }

  setSize(columns: number, rows: number): void {
    this.columns = Math.max(1, Math.floor(columns));
    this.rows = Math.max(1, Math.floor(rows));
  }

  setEffectOptions(_options: Partial<AcerolaAsciiNodeOptions>): void {
    // Butterchurn presets own the visual effect. The terminal transport stays
    // fixed to the requested full-block style.
  }

  getTerminalEdgeBias(): number {
    return this.terminalEdgeBias;
  }

  setTerminalEdgeBias(value: number): void {
    this.terminalEdgeBias = value;
  }

  getTerminalGlyphStyle(): TerminalGlyphStyle {
    return "blocks";
  }

  setTerminalGlyphStyle(_value: TerminalGlyphStyle): void {
    // Intentionally fixed: this version is the colored block renderer.
  }

  async renderToAnsiGrid(
    deltaTime = 0,
    onFrame?: (deltaTime: number) => void | Promise<void>,
  ): Promise<string[][]> {
    const frame = await this.renderFrame(deltaTime, onFrame, { ansi: true });
    return frame.grid ?? [];
  }

  async renderFrame(
    deltaTime = 0,
    onFrame?: (deltaTime: number) => void | Promise<void>,
    _options: ThreeAsciiRenderFrameOptions = { ansi: true },
  ): Promise<ThreeAsciiRenderFrame> {
    if (this.destroyed) return { grid: [], gridRevision: this.revision };
    await onFrame?.(deltaTime);

    if (this.renderedOnce && performance.now() < this.recoveryNotBefore) {
      return { grid: this.lastGrid, gridRevision: this.revision };
    }

    let lastError: unknown;
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const bridge = await this.getBridge();
        await bridge.resize(this.columns, this.rows);
        await this.applyPresetAction(bridge, attempt === 0 ? deltaTime : 0);

        const frame = await bridge.render(
          this.audioFrame().timeByteArray,
          deltaTime,
        );
        this.updateState(frame);
        this.lastGrid = buildButterchurnBlockGrid(
          frame.rgba,
          frame.columns,
          frame.rows,
          this.assembler,
        );
        this.renderedOnce = true;
        this.recoveryNotBefore = 0;
        this.recoveryDelayMs = INITIAL_RECOVERY_DELAY_MS;
        this.revision += 1;
        return { grid: this.lastGrid, gridRevision: this.revision };
      } catch (error) {
        lastError = error;
        await this.releaseBridge();
        if (this.destroyed) {
          return { grid: [], gridRevision: this.revision };
        }
      }
    }

    if (!this.renderedOnce) throw lastError;
    this.recoveryNotBefore = performance.now() + this.recoveryDelayMs;
    this.recoveryDelayMs = Math.min(
      MAX_RECOVERY_DELAY_MS,
      this.recoveryDelayMs * 2,
    );
    this.state = { ...this.state, presetName: "reconnecting Butterchurn" };
    this.publishState();
    return { grid: this.lastGrid, gridRevision: this.revision };
  }

  destroy(): void {
    void this.close();
  }

  async close(): Promise<void> {
    if (this.closePromise) return await this.closePromise;
    this.destroyed = true;
    this.assembler.clear();
    this.closePromise = this.releaseBridge();
    return await this.closePromise;
  }

  private async getBridge(): Promise<ButterchurnBridgeLike> {
    if (!this.bridgePromise) {
      this.bridgePromise = this.bridgeFactory(this.columns, this.rows).then(
        async (bridge) => {
          if (this.destroyed) {
            await bridge.close();
            throw new Error(
              "Butterchurn renderer was destroyed during startup.",
            );
          }
          this.bridge = bridge;
          this.updateState(bridge.info());
          return bridge;
        },
      );
    }
    return await this.bridgePromise;
  }

  private async applyPresetAction(
    bridge: ButterchurnBridgeLike,
    deltaTime: number,
  ): Promise<void> {
    this.elapsedSincePreset += Math.max(0, deltaTime);
    if (
      this.state.autoCycle && this.elapsedSincePreset >= AUTO_CYCLE_SECONDS &&
      this.presetAction === undefined
    ) {
      this.presetAction = "random";
    }

    const action = this.presetAction;
    this.presetAction = undefined;
    if (!action) return;
    const info = action === "next"
      ? await bridge.nextPreset()
      : action === "previous"
      ? await bridge.previousPreset()
      : await bridge.randomPreset();
    this.elapsedSincePreset = 0;
    this.updateState(info);
  }

  private async releaseBridge(): Promise<void> {
    const pending = this.bridgePromise;
    this.bridgePromise = undefined;
    this.bridge = undefined;
    if (!pending) return;

    let bridge: ButterchurnBridgeLike;
    try {
      bridge = await pending;
    } catch {
      // ButterchurnBridge.launch closes a partially-created browser itself.
      return;
    }
    try {
      await bridge.close();
    } catch (error) {
      console.error("[asciichurn] Could not close Chromium cleanly:", error);
    }
  }

  private updateState(info: ButterchurnBridgeInfo): void {
    this.state = {
      ...this.state,
      presetName: info.presetName,
      presetIndex: info.presetIndex,
      presetCount: info.presetCount,
    };
    this.publishState();
  }

  private publishState(): void {
    this.onState?.(this.getState());
  }
}

const SRGB_TO_LINEAR = new Float32Array(256);
for (let byte = 0; byte < SRGB_TO_LINEAR.length; byte++) {
  const value = byte / 255;
  SRGB_TO_LINEAR[byte] = value <= 0.04045
    ? value / 12.92
    : Math.pow((value + 0.055) / 1.055, 2.4);
}

/** Convert cell-sized browser RGBA into deno_tui's exact colored block cells. */
export function buildButterchurnBlockGrid(
  rgba: Uint8Array,
  columns: number,
  rows: number,
  assembler = new ThreeAsciiAnsiGridAssembler(),
): string[][] {
  const cellCount = Math.max(0, Math.floor(columns)) *
    Math.max(0, Math.floor(rows));
  if (rgba.length !== cellCount * 4) {
    throw new Error(
      `Expected ${
        cellCount * 4
      } RGBA bytes for ${columns}x${rows}; received ${rgba.length}.`,
    );
  }

  const colors = new Float32Array(cellCount * 4);
  const fillGlyphs = new Uint8Array(cellCount);
  for (let index = 0; index < cellCount; index++) {
    const offset = index * 4;
    const red = SRGB_TO_LINEAR[rgba[offset]];
    const green = SRGB_TO_LINEAR[rgba[offset + 1]];
    const blue = SRGB_TO_LINEAR[rgba[offset + 2]];
    const alpha = rgba[offset + 3] / 255;
    const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
    colors[offset] = red;
    colors[offset + 1] = green;
    colors[offset + 2] = blue;
    colors[offset + 3] = alpha >= 0.5 && luminance > DARK_CELL_LUMINANCE
      ? 1
      : 0;
  }

  return assembler.build({
    columns,
    rows,
    fillGlyphs,
    colors,
    terminalGlyphStyle: "blocks",
    backgroundColor: 0x000000,
    blockVisibilityFromColorAlpha: true,
  });
}
