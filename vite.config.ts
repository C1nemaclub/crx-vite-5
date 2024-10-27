import { crx, defineManifest } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import manifest from './manifest.json' assert { type: 'json' };

const manifest = defineManifest({
  manifest_version: 3,
  name: 'CRX Vite 5',
  version: '0.0.1',
  description: '',
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['scripts/content.ts'],
    },
  ],
  permissions: ['activeTab', 'scripting', 'sidePanel', 'storage'],
  content_security_policy: {
    extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self';",
  },
  action: {
    default_popup: '',
  },
  background: {
    service_worker: 'scripts/background.ts',
  },
  // side_panel: {
  //   default_path: 'index.html', // Main file for the side panel
  // },
  web_accessible_resources: [
    {
      resources: ['index.html'],
      matches: ['<all_urls>'],
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react(), crx({ manifest })],
  // build: {
  //   // rollupOptions: {
  //   //   input: { main: 'index.html' },
  //   // },
  // },
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
});

// const hotPlugin = (): Plugin => {
//   return {
//     name: 'hot-build',
//     async handleHotUpdate({ file }) {
//       console.log('Hot update:', file);
//       try {
//         await build({
//           configFile: false,
//           build: {
//             outDir: 'dist',
//             emptyOutDir: false,
//             // create manifest json chrome extension
//             manifest: true,
//             // create crx file
//           },
//         });
//         console.log('Build ✅');
//       } catch (e) {
//         console.error(e, 'Error building ❌');
//       }
//     },
//   };
// };
