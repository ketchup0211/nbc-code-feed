import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      pages: "/src/pages",
      shared: "/src/shared",
    },
  },
  build: {
    chunkSizeWarningLimit: 1050, // 크기를 kB 단위로 설정
    outDir: "build",
  },
});
