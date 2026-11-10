#!/usr/bin/env node
/* Bundles three.js + the meshopt decoder into one classic script (js/vendor/three3d.min.js) that
   defines window.THREE and window.MeshoptDecoder. A classic script (not an ES module) is used so the
   3D explorer still works when index.html is opened straight from disk.   Run: npm run vendor */
const esbuild = require('esbuild'), path = require('path'), fs = require('fs');
const out = path.join(__dirname, '..', '..', 'js', 'vendor', 'three3d.min.js');
const ver = JSON.parse(fs.readFileSync(path.join(__dirname, 'node_modules/three/package.json'), 'utf8')).version;
const mver = JSON.parse(fs.readFileSync(path.join(__dirname, 'node_modules/meshoptimizer/package.json'), 'utf8')).version;
esbuild.buildSync({
  stdin: {
    contents: "import * as THREE from 'three'; import { MeshoptDecoder } from 'meshoptimizer/meshopt_decoder.module.js';" +
      "window.THREE = THREE; window.MeshoptDecoder = MeshoptDecoder;",
    resolveDir: __dirname
  },
  bundle: true, minify: true, format: 'iife', target: 'es2018', outfile: out, legalComments: 'none',
  banner: { js: '/* three.js r' + ver + ' (MIT, (c) three.js authors) + meshoptimizer decoder ' + mver + ' (MIT, (c) Arseny Kapoulkine). Built by tools/build-3d/build-vendor.js */' }
});
console.log(out, (fs.statSync(out).size / 1024).toFixed(0) + ' KB');
