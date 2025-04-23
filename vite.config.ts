import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import linaria from "@linaria/vite";
import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    reactRefresh(),
    linaria({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@assets": "/assets",
    },
  },
  server: {
    allowedHosts: [".csb.app"],
  },
});
