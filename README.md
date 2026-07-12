# Butterchurn XR

Butterchurn is a WebGL implementation of the Milkdrop Visualizer.

This fork adds a WebXR mixed-reality demo that projects the visualizer onto the
walls, floor, ceiling, and furniture of your real room on a Meta Quest 3 (or any
headset whose browser supports `immersive-ar` with plane detection).

## Running the XR demo

WebXR requires a secure context, so the dev server runs HTTPS with a
self-signed certificate and binds to `0.0.0.0` so a headset on your local
network can reach it:

    pnpm install
    pnpm dev-build     # builds dist/butterchurn.js, which the demo imports
    pnpm demo          # vite + https on https://0.0.0.0:8443

Vite prints your LAN address (e.g. `https://192.168.1.50:8443`). In the Quest
browser, open `https://<your-lan-ip>:8443/examples/demo.html`, click through
the certificate warning (Advanced → Proceed), pick an audio source, and press
**Enter AR**.

Prerequisites on the headset:

* Run **Space Setup** (Settings → Environment setup) in the room you'll use —
  detected planes and furniture come from this scan. No scan means no planes;
  the demo then falls back to a single panel floating in front of you.
* Grant the browser permission for spatial data (and the microphone, if using
  mic input) when prompted.

### XR features

* **Visuals on every detected plane** — each wall/floor/ceiling/table plane the
  headset reports gets the visualization mapped across its actual polygon,
  tracked every frame.
* **Multiple simultaneous visualizations** — a pool of 1–5 independent
  butterchurn instances (dropdown in the UI, changeable live in AR) is dealt
  round-robin across the planes so neighboring surfaces show different presets.
* **Occlusion modes** (checkbox + dropdown, also live in AR):
  * *furniture occludes (room mesh)* — scanned furniture renders as depth-only
    occluders, so your real couch/table show through visuals behind them
  * *visualize on furniture too* — projects the visualizer onto the furniture
    meshes as well
  * *live depth occlusion* — uses the headset's real-time depth sensor so
    people and pets occlude the visuals too (select **before** entering AR;
    the WebXR feature set is fixed at session start)
* **Controller input** — A or B on the right controller loads new random
  presets on every surface. Presets also auto-cycle (configurable on the page).
* **In-AR UI** — the page controls are a DOM overlay inside the session, so
  everything is clickable with the controller pointer while in AR. A HUD shows
  detected plane/mesh counts, semantic labels, and tracking diagnostics.
* **Audio input** — local audio files or microphone (gain boosted and browser
  auto-gain disabled so music actually drives the visuals).

## [Try the original out](https://butterchurnviz.com)

[![Butterchurn Screenshot](preview.png)](https://butterchurnviz.com)

## Usage

### Installation

With [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/) or [npm](https://npmjs.org/) installed, run

    $ pnpm add butterchurn butterchurn-presets
    or
    $ yarn add butterchurn butterchurn-presets
    or
    $ npm install butterchurn butterchurn-presets

### Create a visualizer

```JavaScript
import butterchurn from 'butterchurn';
import butterchurnPresets from 'butterchurn-presets';

// initialize audioContext and get canvas

const visualizer = butterchurn.createVisualizer(audioContext, canvas, {
  width: 800,
  height: 600
});

// get audioNode from audio source or microphone

visualizer.connectAudio(audioNode);

// load a preset

const presets = butterchurnPresets.getPresets();
const preset = presets['Flexi, martin + geiss - dedicated to the sherwin maxawow'];

visualizer.loadPreset(preset, 0.0); // 2nd argument is the number of seconds to blend presets

// resize visualizer

visualizer.setRendererSize(1600, 1200);

// render a frame

visualizer.render();
```

### Browser Support

Butterchurn requires the [browser support WebGL 2](https://caniuse.com/#feat=webgl2).

You can test for support using our minimal isSupported script:

```Javacript
import isButterchurnSupported from "butterchurn/lib/isSupported.min";

if (isButterchurnSupported()) {
  // Load and use butterchurn
}
```

## Integrations
* [Webamp](https://github.com/captbaritone/webamp), the fantastic reimplementation of Winamp 2.9 in HTML5 and Javascript, built by [captbaritone](https://github.com/captbaritone)
* [Butterchurn Extension](https://chrome.google.com/webstore/detail/butterchurn-music-visuali/jfdmelgfepjcmlljpdeajbiiibkehnih), use Butterchurn to visualize the audio from any page
* [Rekt Networks](https://nightride.fm/#Mathdrop), Live DJs, Archives & Exclusive Releases, built by [Zei](https://twitter.com/TheRektNetwork)
* [mStream](http://mstream.io/), your personal music streaming server, built by [IrosTheBeggar](https://github.com/IrosTheBeggar)
* [pasteur](https://www.pasteur.cc/), trippy videos generated from your music, built by [markneub](https://github.com/markneub)
* [ChromeAudioVisualizerExtension](https://chrome.google.com/webstore/detail/audiovisualizer/bojhikphaecldnbdekplmadjkflgbkfh), put on some music and turn your browsing session into a party! built by [afreakk](https://github.com/afreakk)
* [Karaoke Forever](https://www.karaoke-forever.com), an open karaoke party system, built by [bhj](https://github.com/bhj)
* [Syqel](https://syqel.com/), the World's Best AI Powered Music Visualizer


## Thanks

* [Ryan Geiss](http://www.geisswerks.com/) for creating [MilkDrop](http://www.geisswerks.com/about_milkdrop.html)
* Nullsoft for creating [Winamp](http://www.winamp.com/)
* All the amazing preset creators, special thanks to [Flexi](https://twitter.com/Flexi23)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
