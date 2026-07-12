import { resolve } from 'node:path';
import { copyFileSync, writeFileSync } from 'node:fs';
import basicSsl from '@vitejs/plugin-basic-ssl';

// GitHub Pages build (pnpm build:pages): bundles examples/demo.html into
// docs/, which Pages serves at https://ubernaut.github.io/butterchurnxr/.
// base './' keeps every asset reference relative so the project subpath works.
export default {
  root: 'examples',
  base: './',
  plugins: [
    basicSsl(),
    {
      name: 'pages-index',
      closeBundle() {
        const docs = resolve(import.meta.dirname, 'docs');
        // demo.html sits at the docs root, so a straight copy keeps its
        // relative asset paths valid as index.html
        copyFileSync(resolve(docs, 'demo.html'), resolve(docs, 'index.html'));
        writeFileSync(resolve(docs, '.nojekyll'), '');
      },
    },
  ],
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(import.meta.dirname, 'examples/demo.html'),
    },
  },
};
