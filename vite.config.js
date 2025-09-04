import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { path } from 'framer-motion/client';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //   },
  // },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
