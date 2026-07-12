import basicSsl from '@vitejs/plugin-basic-ssl';

// Dev server for the demo (examples/demo.html). HTTPS + LAN binding so
// WebXR devices (e.g. Quest) on the local network can reach it.
export default {
  plugins: [basicSsl()],
  server: {
    host: '0.0.0.0',
    port: 8443,
    open: '/examples/demo.html',
    // the full-screen error overlay blocks all input on the headset
    hmr: { overlay: false },
  },
};
