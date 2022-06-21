require("esbuild").build({
  entryPoints: ["App.js"],
  outfile: "build/AppBundle2.js",
  bundle: true,
  loader: {".js": "jsx"},
  format: 'iife',
  platform: 'browser'
})
.then(() => console.log("⚡ Done"))
.catch(() => process.exit(1));
