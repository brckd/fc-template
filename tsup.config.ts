import { defineConfig } from "tsup";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

export default defineConfig({
  esbuildPlugins: [polyfillNode()],
  esbuildOptions(options) {
    options.drop = ["console"];
  },
  tsconfig: "src/tsconfig.json",
  entry: ["src/**/*.ts"],
  clean: true,
  bundle: true,
  minify: true,
  sourcemap: true,
  dts: true,
});
