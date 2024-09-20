import { context } from "esbuild";

let ctx = await context({
  entryPoints: [
    "src/**/*.ts",
  ],
  outdir: "./dist/",
  bundle: false,
  format: 'cjs',
  platform: 'node',
  target: 'node20'
});

await ctx.watch();
console.log("watching...");
