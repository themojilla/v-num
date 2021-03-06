import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VNum",
      formats: ["es", "umd", "iife"],
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
});
