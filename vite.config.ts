import path from "path";
import react from "@vitejs/plugin-react";
import {
  defineConfig
} from 'vite';
import prettierPlugin from 'vite-plugin-prettier';

export default defineConfig( {
  plugins: [react(), prettierPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});