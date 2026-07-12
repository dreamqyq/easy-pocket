import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'types': path.resolve(__dirname, 'src/types'),
      'components': path.resolve(__dirname, 'src/components'),
      'views': path.resolve(__dirname, 'src/views'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'data': path.resolve(__dirname, 'src/data'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'icons': path.resolve(__dirname, 'src/icons'),
      'static': path.resolve(__dirname, 'src/static'),
    },
  },
  server: {
    port: 3000,
  },
  base: '/easy-pocket/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ['echarts'],
          vendor: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
        },
      },
    },
  },
});
