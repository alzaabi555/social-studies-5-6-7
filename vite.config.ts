import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const cwd = path.resolve('.');
  const env = loadEnv(mode, cwd, '');

  return {
    plugins: [react()],
    base: './', 
    resolve: {
      alias: {
        '@': cwd,
      },
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1600,
    }
  };
});