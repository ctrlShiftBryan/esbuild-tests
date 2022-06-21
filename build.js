require("esbuild").build({
  entryPoints: ["App.js"],
  outfile: "build/AppBundle.js",
  bundle: true,
  loader: {".js": "jsx"},
  format: 'esm',
  platform: 'browser'
})
.then(() => console.log("⚡ Done"))
.catch(() => process.exit(1));
