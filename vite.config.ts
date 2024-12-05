import { resolve } from 'node:path';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biomejs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(), biomePlugin()],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
});
