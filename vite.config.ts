import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), tailwindcss(), react()],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
});
