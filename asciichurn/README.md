# asciichurn

The real Butterchurn/MilkDrop effects engine and the same preset catalog as the
parent ButterchurnXR demo, rendered as colored full-block ASCII in the terminal.

`asciichurn` sends the latest 1,024 microphone samples to the local
`dist/butterchurn.js` bundle in persistent headless Chromium. Chromium runs
Butterchurn's WebGL2 renderer and EEL/WASM preset equations, then the finished
pixels are downsampled and assembled with [deno_tui](../../deno_tui)'s block
grid. Its microphone PCM receives the same 4x gain as the parent demo. The
parent demo's `butterchurn-presets@3.0.0-beta.4` base and extra packs are merged
and sorted, providing the same 293 presets.

At launch, `asciichurn` checks the parent source and automatically runs its
`pnpm dev-build` when `dist/butterchurn.js` is missing or stale. This keeps a
clean checkout and newly edited engine source on the same local engine build.

If no microphone can be captured, a synthesized waveform keeps Butterchurn's own
FFT and beat equations active.

## Requirements

- [Deno](https://deno.com) 2.x
- Chrome or Chromium with WebGL2 (set `ASCIICHURN_CHROME` for a nonstandard
  path)
- A sibling checkout of `deno_tui` at `../../deno_tui` (imported by path)
- One of `parec`, `pw-record`, or `arecord` on PATH for mic capture

No WebGPU adapter is required. Chromium uses the same software-WebGL path as the
parent project's visual regression harness, avoiding the old ThreeAscii WebGPU
readback failure.

## Run

```sh
deno task start
```

| Key       | Action                                      |
| --------- | ------------------------------------------- |
| `q`       | quit (also `Esc` / `Ctrl+C`)                |
| `p`/Space | next Butterchurn preset (2.7 second blend)  |
| `b`       | previous Butterchurn preset                 |
| `r`       | random Butterchurn preset                   |
| `c`       | toggle random 15-second preset auto-cycling |

## Test without a TUI

```sh
deno task audio-test   # prints 3s of live levels + a spectrum strip
deno task check        # typecheck
deno task test         # block conversion and renderer lifecycle tests
deno task smoke        # real engine + exact 293-preset browser smoke test
```

The real-engine smoke test also fingerprints the ordered preset names, rather
than checking only the count. If Chromium or its WebGL context transiently
disconnects after rendering begins, the terminal keeps its last frame visible
while it recreates the backend with bounded retry/backoff.
