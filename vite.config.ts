import { crx, defineManifest } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import manifest from './manifest.json' assert { type: 'json' };


const manifest = defineManifest({
  manifest_version: 3,
  name: "CRX Vite 5",
  version: "0.0.1",
  description: "",
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["scripts/content.ts"],
    }
  ],
  side_panel: {
    default_path: "index.html",
    open_at_install: true,
  },
  permissions: ["activeTab", "scripting", "sidePanel", "storage"],
  content_security_policy: {
    extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self';"
  },
  background: {
    service_worker: "scripts/background.ts",
  }
})



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
});
