import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/the-burning-bandit-kerpen/',
  server: {
    port: 7055,
    host: true
  }
});
