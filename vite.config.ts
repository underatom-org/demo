import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import banner from "rollup-plugin-banner2";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";
const isLibrary = process.env.BUILD_TARGET === "library";

export default defineConfig({
  plugins: [
    react(),
    ...(isLibrary
      ? [
          dts({
            insertTypesEntry: true,
          }),
        ]
      : []),
    visualizer({ gzipSize: true, brotliSize: true }),
    banner(() => '"use client";'),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "underspacial",
      formats: ["es"],
      fileName: () => `index.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
