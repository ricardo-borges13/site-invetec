import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
    filename: './dist/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true
  }),
    checker({
      typescript: true,
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  ssr: {
    noExternal: ['react-helmet-async', 'styled-components'],
  },
});
