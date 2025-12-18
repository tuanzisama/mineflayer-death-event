import { defineConfig } from "tsdown";

export default defineConfig({
  exports: true,
  dts: true,
  platform: "node",
  format: ["cjs", "esm"],
  external: ["mineflayer", "prismarine-chat"],
  unbundle: true,
});
