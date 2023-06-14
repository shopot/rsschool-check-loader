import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import { dependencies } from './package.json';

export const pathResolver = (p: string) => resolve(__dirname, '.', p);

const renderChunks = (deps: Record<string, string>) => {
  let chunks = {};

  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom', '@types/compose-function'].includes(key)) {
      return;
    }

    chunks[key] = [key];
  });

  return chunks;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    alias: {
      '@': pathResolver('./src'),
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
