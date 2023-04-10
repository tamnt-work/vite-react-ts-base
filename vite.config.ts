import generouted from '@generouted/react-router';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS(), generouted()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
