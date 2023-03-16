import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";
import generouted from "@generouted/react-router";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS(), generouted()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
