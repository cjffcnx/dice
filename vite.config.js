import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dice/build', // Make sure the build output is set to the right folder
  },
  base: './', // This makes the app work correctly when deployed to GitHub Pages
});
