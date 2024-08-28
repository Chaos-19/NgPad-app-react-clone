import path from 'path';
import react from '@vitejs/plugin-react';
import {
  defineConfig
} from 'vite';
import prettierPlugin from 'vite-plugin-prettier';
/*import { VitePWA } from "vite-plugin-pwa";*/

export default defineConfig( {
  plugins: [react(), prettierPlugin()],
  /*optimizeDeps: {
    exclude: ['node_modules/.cache']
  },*/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});