import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://bhanu-portfolio-1vai.onrender.com',
        changeOrigin: true,
      },
    },
  },
});