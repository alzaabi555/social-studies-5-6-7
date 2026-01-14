
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    // Base must be relative (./) for Electron and Capacitor to load assets from local file system correctly
    // هذا التعديل ضروري جداً لنسخ الموبايل والويندوز
    base: './', 
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
    },
    server: {
      host: true, // Allow access from network for testing on mobile devices
      port: 5173
    }
  };
});