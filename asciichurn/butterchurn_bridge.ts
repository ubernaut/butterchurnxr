import puppeteer, { type Browser, type Page } from "puppeteer";

const PRESET_PACKAGE = "npm:butterchurn-presets@3.0.0-beta.4/package.json";
const ENGINE_EXPORT = "export { Butterchurn as default };";
const DEFAULT_BLEND_SECONDS = 2.7;

export interface ButterchurnBridgeOptions {
  columns: number;
  rows: number;
  chromePath?: string;
  initialPresetIndex?: number;
}

export interface ButterchurnBridgeInfo {
  presetName: string;
  presetIndex: number;
  presetCount: number;
  presetCatalogFingerprint: string;
  columns: number;
  rows: number;
}

export interface ButterchurnPixelFrame extends ButterchurnBridgeInfo {
  rgba: Uint8Array;
}

interface BrowserFrameResult extends ButterchurnBridgeInfo {
  rgbaBase64: string;
}

let parentBundleReady: Promise<void> | undefined;

/**
 * Persistent browser bridge for the real Butterchurn WebGL2 renderer.
 *
 * Deno exposes WebGPU but no usable WebGL2/2D canvas implementation. Running
 * the parent bundle in Chromium keeps the MilkDrop renderer and EEL/WASM
 * preset pipeline intact; only the finished pixels cross back to the TUI.
 */
export class ButterchurnBridge {
  private constructor(
    private readonly browser: Browser,
    private readonly page: Page,
    private infoState: ButterchurnBridgeInfo,
  ) {}

  static async launch(
    options: ButterchurnBridgeOptions,
  ): Promise<ButterchurnBridge> {
    await ensureParentEngineBundle();
    const chromePath = options.chromePath ?? await findChromeExecutable();
    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--enable-webgl",
        "--ignore-gpu-blocklist",
        "--use-gl=swiftshader",
        "--use-angle=swiftshader",
        "--enable-unsafe-swiftshader",
      ],
    });

    try {
      const page = await browser.newPage();
      await page.setContent(
        "<!doctype html><meta charset=utf-8><body style='margin:0;background:#000'>" +
          "<canvas id=output></canvas><canvas id=sample hidden></canvas></body>",
      );
      await injectParentAssets(page);

      const info = await page.evaluate(
        async ({ columns, rows, initialPresetIndex }) => {
          const scope = globalThis as typeof globalThis & {
            butterchurn: {
              createVisualizer: (
                context: null,
                canvas: HTMLCanvasElement,
                options: Record<string, unknown>,
              ) => {
                loadPreset: (
                  preset: unknown,
                  blendSeconds: number,
                ) => Promise<void>;
                render: (options: Record<string, unknown>) => void;
                setRendererSize: (
                  width: number,
                  height: number,
                  options: Record<string, unknown>,
                ) => void;
              };
            };
            base: { default: Record<string, unknown> };
            extra: { default: Record<string, unknown> };
            asciichurn?: Record<string, unknown>;
          };

          const output = document.querySelector<HTMLCanvasElement>("#output");
          const sample = document.querySelector<HTMLCanvasElement>("#sample");
          if (!output || !sample) {
            throw new Error("Asciichurn browser canvases were not created.");
          }
          const sampleContext = sample.getContext("2d", {
            willReadFrequently: true,
          });
          if (!sampleContext) {
            throw new Error("Chromium did not provide a 2D readback canvas.");
          }
          let webglContextLost = false;
          output.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            webglContextLost = true;
          });
          const requireWebglContext = () => {
            if (webglContextLost) {
              throw new Error("Butterchurn's WebGL2 context was lost.");
            }
          };

          const unsortedPresets = {
            ...scope.base.default,
            ...scope.extra.default,
          };
          // Match the parent demo exactly: it sorts entries with lodash,
          // reconstructs an object with fromPairs, then reads Object.keys().
          // Integer-like names consequently enumerate before all other names.
          const sortedPresetEntries = Object.entries(unsortedPresets).sort((
            [left],
            [right],
          ) => {
            const leftKey = left.toLowerCase();
            const rightKey = right.toLowerCase();
            return leftKey < rightKey ? -1 : leftKey > rightKey ? 1 : 0;
          });
          const presets = Object.fromEntries(sortedPresetEntries);
          const presetNames = Object.keys(presets);
          if (presetNames.length === 0) {
            throw new Error("The Butterchurn preset catalog is empty.");
          }

          let presetCatalogHash = 2166136261;
          for (const name of presetNames) {
            for (let index = 0; index < name.length; index++) {
              presetCatalogHash ^= name.charCodeAt(index);
              presetCatalogHash = Math.imul(presetCatalogHash, 16777619);
            }
            presetCatalogHash ^= 0;
            presetCatalogHash = Math.imul(presetCatalogHash, 16777619);
          }
          const presetCatalogFingerprint = (presetCatalogHash >>> 0)
            .toString(16).padStart(8, "0");

          let currentColumns = Math.max(1, Math.floor(columns));
          let currentRows = Math.max(1, Math.floor(rows));
          let presetIndex = Number.isInteger(initialPresetIndex)
            ? Number(initialPresetIndex)
            : Math.floor(Math.random() * presetNames.length);
          presetIndex =
            ((presetIndex % presetNames.length) + presetNames.length) %
            presetNames.length;

          const renderWidth = () => Math.max(64, currentColumns * 2);
          const renderHeight = () => Math.max(48, currentRows * 4);
          output.width = renderWidth();
          output.height = renderHeight();
          sample.width = currentColumns;
          sample.height = currentRows;

          const visualizer = scope.butterchurn.createVisualizer(null, output, {
            width: output.width,
            height: output.height,
            pixelRatio: 1,
            textureRatio: 1,
          });

          const info = () => ({
            presetName: presetNames[presetIndex],
            presetIndex,
            presetCount: presetNames.length,
            presetCatalogFingerprint,
            columns: currentColumns,
            rows: currentRows,
          });
          const loadPreset = async (
            nextIndex: number,
            blendSeconds: number,
          ) => {
            requireWebglContext();
            presetIndex =
              ((nextIndex % presetNames.length) + presetNames.length) %
              presetNames.length;
            await visualizer.loadPreset(
              presets[presetNames[presetIndex]],
              blendSeconds,
            );
            return info();
          };

          scope.asciichurn = {
            info,
            resize(nextColumns: number, nextRows: number) {
              requireWebglContext();
              currentColumns = Math.max(1, Math.floor(nextColumns));
              currentRows = Math.max(1, Math.floor(nextRows));
              output.width = renderWidth();
              output.height = renderHeight();
              sample.width = currentColumns;
              sample.height = currentRows;
              visualizer.setRendererSize(output.width, output.height, {
                pixelRatio: 1,
              });
              return info();
            },
            next(blendSeconds: number) {
              return loadPreset(presetIndex + 1, blendSeconds);
            },
            previous(blendSeconds: number) {
              return loadPreset(presetIndex - 1, blendSeconds);
            },
            random(blendSeconds: number) {
              let nextIndex = Math.floor(Math.random() * presetNames.length);
              if (
                presetNames.length > 1 && nextIndex === presetIndex
              ) nextIndex = (nextIndex + 1) % presetNames.length;
              return loadPreset(nextIndex, blendSeconds);
            },
            render(timeByteArrayBase64: string, elapsedTime: number) {
              requireWebglContext();
              const pcm = atob(timeByteArrayBase64);
              const mono = new Uint8Array(pcm.length);
              for (let index = 0; index < pcm.length; index++) {
                mono[index] = pcm.charCodeAt(index);
              }
              visualizer.render({
                elapsedTime,
                audioLevels: {
                  timeByteArray: mono,
                  timeByteArrayL: mono,
                  timeByteArrayR: mono,
                },
              });
              sampleContext.drawImage(
                output,
                0,
                0,
                currentColumns,
                currentRows,
              );
              const rgba = sampleContext.getImageData(
                0,
                0,
                currentColumns,
                currentRows,
              ).data;
              const chunks: string[] = [];
              const chunkSize = 8192;
              for (let offset = 0; offset < rgba.length; offset += chunkSize) {
                chunks.push(
                  String.fromCharCode(
                    ...rgba.subarray(offset, offset + chunkSize),
                  ),
                );
              }
              return { ...info(), rgbaBase64: btoa(chunks.join("")) };
            },
          };

          return await loadPreset(presetIndex, 0);
        },
        {
          columns: options.columns,
          rows: options.rows,
          initialPresetIndex: options.initialPresetIndex,
        },
      ) as ButterchurnBridgeInfo;

      return new ButterchurnBridge(browser, page, info);
    } catch (error) {
      try {
        await closeBrowser(browser);
      } catch (closeError) {
        console.error(
          "[asciichurn] Could not clean up Chromium after startup failed:",
          closeError,
        );
      }
      throw error;
    }
  }

  info(): ButterchurnBridgeInfo {
    return { ...this.infoState };
  }

  async resize(columns: number, rows: number): Promise<ButterchurnBridgeInfo> {
    if (columns === this.infoState.columns && rows === this.infoState.rows) {
      return this.info();
    }
    this.assertAvailable();
    this.infoState = await this.page.evaluate(({ columns, rows }) => {
      const api = (globalThis as {
        asciichurn?: { resize: (columns: number, rows: number) => unknown };
      }).asciichurn;
      if (!api) throw new Error("Asciichurn browser bridge is unavailable.");
      return api.resize(columns, rows);
    }, { columns, rows }) as ButterchurnBridgeInfo;
    return this.info();
  }

  async nextPreset(
    blendSeconds = DEFAULT_BLEND_SECONDS,
  ): Promise<ButterchurnBridgeInfo> {
    return await this.changePreset("next", blendSeconds);
  }

  async previousPreset(
    blendSeconds = DEFAULT_BLEND_SECONDS,
  ): Promise<ButterchurnBridgeInfo> {
    return await this.changePreset("previous", blendSeconds);
  }

  async randomPreset(
    blendSeconds = DEFAULT_BLEND_SECONDS,
  ): Promise<ButterchurnBridgeInfo> {
    return await this.changePreset("random", blendSeconds);
  }

  async render(
    timeByteArray: Uint8Array,
    elapsedTime: number,
  ): Promise<ButterchurnPixelFrame> {
    if (timeByteArray.length !== 1024) {
      throw new Error(
        `Butterchurn requires 1024 time-domain samples; received ${timeByteArray.length}.`,
      );
    }
    this.assertAvailable();
    const result = await this.page.evaluate(
      ({ samplesBase64, elapsedTime }) => {
        const api = (globalThis as {
          asciichurn?: {
            render: (samplesBase64: string, elapsedTime: number) => unknown;
          };
        }).asciichurn;
        if (!api) throw new Error("Asciichurn browser bridge is unavailable.");
        return api.render(samplesBase64, elapsedTime);
      },
      {
        samplesBase64: timeByteArray.toBase64(),
        elapsedTime: Math.max(1 / 240, Math.min(0.25, elapsedTime)),
      },
    ) as BrowserFrameResult;
    this.infoState = {
      presetName: result.presetName,
      presetIndex: result.presetIndex,
      presetCount: result.presetCount,
      presetCatalogFingerprint: result.presetCatalogFingerprint,
      columns: result.columns,
      rows: result.rows,
    };
    return {
      ...this.infoState,
      rgba: Uint8Array.fromBase64(result.rgbaBase64),
    };
  }

  async close(): Promise<void> {
    await closeBrowser(this.browser);
  }

  private async changePreset(
    action: "next" | "previous" | "random",
    blendSeconds: number,
  ): Promise<ButterchurnBridgeInfo> {
    this.assertAvailable();
    this.infoState = await this.page.evaluate(({ action, blendSeconds }) => {
      const api = (globalThis as {
        asciichurn?: Record<string, (blendSeconds: number) => unknown>;
      }).asciichurn;
      if (!api) throw new Error("Asciichurn browser bridge is unavailable.");
      return api[action](blendSeconds);
    }, {
      action,
      blendSeconds: Math.max(0, blendSeconds),
    }) as ButterchurnBridgeInfo;
    return this.info();
  }

  private assertAvailable(): void {
    if (!this.browser.connected || this.page.isClosed()) {
      throw new Error("The Butterchurn Chromium renderer disconnected.");
    }
  }
}

async function injectParentAssets(page: Page): Promise<void> {
  const engineUrl = new URL("../dist/butterchurn.js", import.meta.url);
  const presetPackageUrl = new URL(import.meta.resolve(PRESET_PACKAGE));
  const [engineSource, basePresets, extraPresets] = await Promise.all([
    Deno.readTextFile(engineUrl),
    Deno.readTextFile(new URL("./dist/base.min.js", presetPackageUrl)),
    Deno.readTextFile(new URL("./dist/extra.min.js", presetPackageUrl)),
  ]);
  if (!engineSource.includes(ENGINE_EXPORT)) {
    throw new Error(
      "The local Butterchurn bundle has an unexpected export shape; run `pnpm dev-build` in the parent project.",
    );
  }
  const browserEngineSource = engineSource.replace(
    ENGINE_EXPORT,
    "globalThis.butterchurn = Butterchurn;",
  );
  await page.addScriptTag({ content: browserEngineSource });
  await page.addScriptTag({ content: basePresets });
  await page.addScriptTag({ content: extraPresets });
}

async function ensureParentEngineBundle(): Promise<void> {
  parentBundleReady ??= rebuildParentBundleWhenStale();
  return await parentBundleReady;
}

async function rebuildParentBundleWhenStale(): Promise<void> {
  const rootUrl = new URL("../", import.meta.url);
  const engineUrl = new URL("./dist/butterchurn.js", rootUrl);
  const inputs = [
    new URL("./src/", rootUrl),
    new URL("./config/", rootUrl),
    new URL("./rollup.config.js", rootUrl),
    new URL("./package.json", rootUrl),
    new URL("./pnpm-lock.yaml", rootUrl),
  ];

  const [bundleModified, ...inputModified] = await Promise.all([
    modificationTime(engineUrl),
    ...inputs.map(latestModificationTime),
  ]);
  if (
    bundleModified !== undefined &&
    bundleModified >= Math.max(...inputModified.filter(isDefined))
  ) return;

  const output = await new Deno.Command("corepack", {
    args: ["pnpm", "dev-build"],
    cwd: rootUrl,
    stdin: "null",
    stdout: "piped",
    stderr: "piped",
  }).output();
  if (!output.success) {
    throw new Error(
      `Could not build the parent Butterchurn engine (exit ${output.code}).`,
    );
  }
  if (await modificationTime(engineUrl) === undefined) {
    throw new Error("The parent build did not create dist/butterchurn.js.");
  }
}

async function latestModificationTime(url: URL): Promise<number | undefined> {
  let latest = await modificationTime(url);
  let stat: Deno.FileInfo;
  try {
    stat = await Deno.stat(url);
  } catch {
    return latest;
  }
  if (!stat.isDirectory) return latest;

  for await (const entry of Deno.readDir(url)) {
    const child = new URL(encodeURIComponent(entry.name), url);
    const modified = entry.isDirectory
      ? await latestModificationTime(new URL(`${child.href}/`))
      : await modificationTime(child);
    if (modified !== undefined) latest = Math.max(latest ?? 0, modified);
  }
  return latest;
}

async function modificationTime(url: URL): Promise<number | undefined> {
  try {
    return (await Deno.stat(url)).mtime?.getTime();
  } catch {
    return undefined;
  }
}

function isDefined(value: number | undefined): value is number {
  return value !== undefined;
}

async function closeBrowser(browser: Browser): Promise<void> {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    await Promise.race([
      browser.close(),
      new Promise<never>((_resolve, reject) => {
        timeout = setTimeout(
          () => reject(new Error("Timed out closing Chromium.")),
          3000,
        );
      }),
    ]);
  } catch (error) {
    const process = browser.process();
    if (process && !process.killed) {
      try {
        process.kill("SIGKILL");
      } catch {
        // Preserve the original close error below.
      }
    }
    throw error;
  } finally {
    if (timeout !== undefined) clearTimeout(timeout);
  }
}

async function findChromeExecutable(): Promise<string> {
  const configured = Deno.env.get("ASCIICHURN_CHROME");
  const candidates = [
    configured,
    "/opt/google/chrome/chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter((candidate): candidate is string => !!candidate);

  for (const candidate of candidates) {
    try {
      const stat = await Deno.stat(candidate);
      if (stat.isFile) return candidate;
    } catch {
      // Try the next common installation path.
    }
  }
  throw new Error(
    "Chrome/Chromium is required to run the Butterchurn WebGL2 engine. " +
      "Install it or set ASCIICHURN_CHROME to the executable path.",
  );
}
