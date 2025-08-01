import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: {
    index: "src/index.tsx",
  },
  format: ["cjs", "esm"],
  external: ["react"],
  dts: true,
  ...options,
}));
