import { defineConfig } from "tsup";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

export default defineConfig({
  esbuildPlugins: [polyfillNode()],
  entry: ["src/**/*.ts"],
  tsconfig: "src/tsconfig.json",
  sourcemap: true,
  dts: true,
  minify: true,
  clean: true,
});
