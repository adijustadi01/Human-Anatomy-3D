#!/usr/bin/env node
/* Builds models/*.js for the 3D explorer from the BodyParts3D mesh set.

   Usage:  node build-models.js <path to BodyParts3D_data>     (the folder holding stl/ and parts_list_e.txt)
   Source: https://github.com/Kevin-Mattheus-Moerman/BodyParts3D  (assets/BodyParts3D_data)
           BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution-Share Alike 2.1 Japan.

   For every mesh it: welds the STL, converts mm/Z-up to metres/Y-up, simplifies it to a triangle
   budget, quantises + compresses it (meshoptimizer), then writes one pack per app region:
     models/<region>.js  ->  AN.M3D.pack('<region>', '<base64>')
     models/index.js     ->  AN.M3D.index = { packs, views, refs }   (tiny, loaded with the page)
   Packs are plain <script> files so the app keeps working when index.html is opened from disk. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const { MeshoptSimplifier, MeshoptEncoder } = require('meshoptimizer');
const CARD_MAP = require('./card-map.js');

const SRC = process.argv[2];
if (!SRC || !fs.existsSync(path.join(SRC, 'stl'))) { console.error('usage: node build-models.js <BodyParts3D_data dir>'); process.exit(1); }
const ROOT = path.join(__dirname, '..', '..'), OUT = path.join(ROOT, 'models');
const REPORT = process.argv.includes('--report');

/* ---------- names + hierarchy ---------- */
const tsv = f => fs.readFileSync(path.join(SRC, f), 'utf8').trim().split('\n').slice(1).map(l => l.replace(/"/g, '').split('\t'));
const NAME = Object.fromEntries(tsv('parts_list_e.txt'));
const parents = {}, hname = {};
for (const [p, pn, c, cn] of tsv('conventional_part_of.txt')) { (parents[c] = parents[c] || []).push(p); hname[p] = pn; hname[c] = cn; }
function ancestors(id, seen) { seen = seen || new Set(); for (const p of parents[id] || []) if (!seen.has(p)) { seen.add(p); ancestors(p, seen); } return seen; }
const SYS = { FMA7157: 'nervous', FMA7158: 'respiratory', FMA23881: 'skeletal', FMA72954: 'muscular', FMA7152: 'alimentary', FMA7159: 'urinary',
  FMA78499: 'sense', FMA72979: 'skin', FMA74594: 'lymphoid', FMA9668: 'endocrine', FMA7161: 'cardiovascular', FMA7160: 'genital' };
const BODY = { FMA7154: 'head', FMA7155: 'neck', FMA7181: 'trunk', FMA7183: 'ul', FMA9621: 'ul', FMA7184: 'll', FMA9622: 'll', FMA14181: 'back' };

/* ---------- classification ---------- */
const DROP = /hairs|eyebrows/;
function layerOf(n, sys) {
  if (sys.has('skin')) return 'skin';
  if (/tooth|cartilage/.test(n)) return 'bones';
  if (/gingiva|eyeball/.test(n)) return 'organs';
  if (sys.has('nervous') || /pituitary/.test(n)) return 'nervous';
  if (sys.has('cardiovascular')) return 'vessels';
  if (sys.has('skeletal')) return 'bones';
  if (sys.has('muscular')) return 'muscles';
  return 'organs';
}
function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967296; }
function hsl(h, s, l) { // -> 0xrrggbb
  const a = s * Math.min(l, 1 - l), f = n => { const k = (n + h / 30) % 12; return Math.round(255 * (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)))); };
  return (f(0) << 16) | (f(8) << 8) | f(4);
}
const ORGAN_COL = [
  [/liver/, 0x8a4334], [/lung/, 0xdba3a0], [/stomach/, 0xdba183], [/duodenum/, 0xd9b08a], [/jejunum/, 0xd99c84], [/ileum/, 0xcf8f7c],
  [/colon|appendix|taenia/, 0xc4907a], [/rectum|anal/, 0xb87c6c], [/kidney/, 0x8f4c3c], [/spleen/, 0x74395a], [/gallbladder/, 0x5f8f4e],
  [/pancrea/, 0xe0c27a], [/bladder|ureter|urethra/, 0xd9c36a], [/adrenal/, 0xd6a53c], [/thymus/, 0xd6a9b8], [/eyeball/, 0xf0f0ee],
  [/\bear\b/, 0xe2b8a0], [/esophagus/, 0xc98d74], [/trachea|bronchus/, 0xb9d3d9], [/gingiva|labial/, 0xd98a8a],
  [/prostate|seminal|deferent|epididymis|testis/, 0xc9a0a8], [/penis/, 0xd6a394]
];
function colorOf(id, n, layer) {
  const j = hash(id), j2 = hash(id + 'x');
  const side = n.replace(/\b(left|right)\b ?/g, ''), js = hash(side), js2 = hash(side + 'x'); // left & right twins share a colour
  if (layer === 'skin') return 0xe3b79c;
  if (layer === 'bones') {
    if (/tooth/.test(n)) return 0xf7f4ea;
    if (/cartilage|disk/.test(n)) return 0xbfd0cf;
    if (/membrane|ligament/.test(n)) return 0xd8d3c4;
    return hsl(42 + js * 8, 0.32, 0.82 + js2 * 0.05);
  }
  if (layer === 'muscles') {
    if (/tendon|aponeurosis|linea alba|tract|retinaculum|ligament|arch/.test(n)) return 0xddd6c6;
    return hsl(2 + js * 16, 0.42 + js2 * 0.14, 0.40 + hash(side + 'l') * 0.14);
  }
  if (layer === 'vessels') {
    if (/pulmonary artery|pulmonary trunk/.test(n)) return 0x4a78bd;
    if (/pulmonary vein/.test(n)) return 0xc8443a;
    if (/vein|vena|sinus/.test(n)) return hsl(214 + j * 8, 0.5, 0.46 + j2 * 0.06);
    if (/valve/.test(n)) return 0xe6d2b0;
    if (/papillary/.test(n)) return 0xb9605a;
    if (/wall of heart/.test(n)) return 0xa3403a;
    return hsl(4 + j * 6, 0.68, 0.44 + j2 * 0.06);
  }
  if (layer === 'nervous') {
    if (/ventricle|aqueduct|canal|foramen|choroid/.test(n)) return 0x6fb2d6;
    if (/optic|nerve/.test(n)) return 0xe3c44f;
    if (/callosum|capsule|fornix|commissure|peduncle|brachium|pellucidum|lamina/.test(n)) return 0xf0e8d8;
    if (/cerebell/.test(n)) return 0xc9968a;
    if (/medulla|pons|midbrain|collicul|tectal|tegment/.test(n)) return 0xd9c4a6;
    if (/caudate|putamen|pallidus|thalam|amygdala|hippocampus|genicul|mammillary|habenula|pineal|pituitary|subthal|nucleus|nigra/.test(n))
      return hsl(20 + js * 300, 0.45, 0.6);
    return hsl(8 + js * 22, 0.36, 0.68 + js2 * 0.08); // cortex: gyri get slightly different tints
  }
  for (const [re, c] of ORGAN_COL) if (re.test(n)) return c;
  return 0xc9a39a;
}

/* trunk bands along the body's long axis (source mm, Z up; feet 0, vertex ~1640) */
const BANDS = [['pelvis-perineum', 700, 930], ['abdomen', 930, 1125], ['thorax', 1125, 1370], ['head-neck', 1370, 1700]];
function bands(z0, z1, min) {
  const ext = Math.max(z1 - z0, 1), fr = BANDS.map(([id, a, b]) => [id, Math.max(0, Math.min(z1, b) - Math.max(z0, a)) / ext]);
  const best = fr.slice().sort((a, b) => b[1] - a[1])[0][0];
  return fr.filter(f => f[1] >= min || f[0] === best).map(f => f[0]);
}
const FIXED = [ // name pattern -> regions (overrides the geometric rule)
  [/\brib\b|costal|intercostal|sternum|manubrium|xiphoid|thoracic vertebra|levatores costarum|transversus thoracis|subcostal/, ['thorax']],
  [/lumbar vertebra/, ['abdomen']], [/sacrum|coccy/, ['pelvis-perineum']], [/hip bone/, ['pelvis-perineum', 'lower-limb']],
  [/clavicle$|scapula$/, ['upper-limb', 'thorax']], [/descending part of .*trapezius|levator scapulae/, ['upper-limb', 'thorax', 'head-neck']],
  [/common carotid|jugular|subclavian (artery|vein)|brachiocephalic/, ['thorax', 'head-neck']], [/iliocostalis lumborum/, ['abdomen', 'thorax']], [/diaphragm/, ['thorax', 'abdomen']],
  [/liver|spleen|stomach|kidney|adrenal|gallbladder|pancrea|duodenum|jejunum|colon|taenia|appendix/, ['abdomen']],
  [/ileum/, ['abdomen', 'pelvis-perineum']],
  [/lung|heart|thymus|bronchus|coronary|cardiac|papillary|valve|pulmonary|ascending aorta|arch of aorta/, ['thorax']],
  [/cervical vertebra|atlas|axis|hyoid|thyroid cartilage|nasal cartilage/, ['head-neck']],
  [/gluteus|inguinal ligament/, ['lower-limb', 'pelvis-perineum']], [/psoas|iliacus/, ['abdomen', 'pelvis-perineum', 'lower-limb']],
  [/rectus abdominis|oblique$|external oblique|internal oblique|transversus abdominis|linea alba|pyramidalis|quadratus lumborum/, ['abdomen']]
];
function regionsOf(p) {
  const n = p.name, b = p.body, [x0, , z0] = p.min, [x1, , z1] = p.max, zm = (z0 + z1) / 2, xm = Math.max(Math.abs(x0), Math.abs(x1));
  if (p.layer === 'skin') return ['skin'];
  if (p.layer === 'nervous') return ['neuroanatomy'];
  for (const [re, r] of FIXED) if (re.test(n)) return r;
  let ul = b.has('ul'), ll = b.has('ll');
  if (ul && ll) { ul = zm > 600; ll = !ul; }           // toe phalanges are tagged with both limbs in the source hierarchy
  if (!b.size) {                                          // untagged: place by position
    if (zm < 740 && !/penis|testis|epididymis|urethra|anal/.test(n)) ll = true;
    else if (xm > 200 && zm < 1340) ul = true;
  }
  const R = new Set();
  if (ul) R.add('upper-limb');
  if (ll) R.add('lower-limb');
  if (b.has('head') || (b.has('neck') && !b.has('trunk'))) R.add('head-neck');
  if (ul && b.has('trunk')) R.add('thorax');             // pectoral-girdle muscles
  else if (ll && b.has('trunk')) bands(z0, z1, 0.3).filter(r => r !== 'thorax' && r !== 'head-neck').forEach(r => R.add(r));
  else if (!ul && !ll && !b.has('head') && (b.has('trunk') || b.has('back') || b.has('neck') || !b.size))
    bands(z0, z1, 0.25).forEach(r => R.add(r));
  if (!R.size) bands(z0, z1, 0.3).forEach(r => R.add(r));
  return [...R];
}

/* ---------- geometry ---------- */
function readSTL(file) { // binary STL -> welded, indexed, metres, Y-up (x = patient's left, y = up, z = anterior)
  const b = fs.readFileSync(file), n = b.readUInt32LE(80);
  const map = new Map(), pos = [], idx = new Uint32Array(n * 3), min = [1e9, 1e9, 1e9], max = [-1e9, -1e9, -1e9];
  for (let i = 0; i < n; i++) for (let v = 0; v < 3; v++) {
    const o = 84 + i * 50 + 12 + v * 12, key = b.toString('latin1', o, o + 12);
    let k = map.get(key);
    if (k === undefined) {
      k = pos.length / 3; map.set(key, k);
      const x = b.readFloatLE(o), y = b.readFloatLE(o + 4), z = b.readFloatLE(o + 8), s = [x, y, z];
      for (let a = 0; a < 3; a++) { if (s[a] < min[a]) min[a] = s[a]; if (s[a] > max[a]) max[a] = s[a]; }
      pos.push(x / 1000, z / 1000, -y / 1000);
    }
    idx[i * 3 + v] = k;
  }
  return { pos: new Float32Array(pos), idx, min, max };
}
function area(pos, idx) {
  let A = 0;
  for (let i = 0; i < idx.length; i += 3) {
    const a = idx[i] * 3, b = idx[i + 1] * 3, c = idx[i + 2] * 3;
    const ux = pos[b] - pos[a], uy = pos[b + 1] - pos[a + 1], uz = pos[b + 2] - pos[a + 2];
    const vx = pos[c] - pos[a], vy = pos[c + 1] - pos[a + 1], vz = pos[c + 2] - pos[a + 2];
    A += Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx) / 2;
  }
  return A; // m^2
}
/* triangle budget: proportional to surface area, with a floor so small intricate parts keep their shape */
const DENSITY = { skin: 2.4, muscles: 13, bones: 40, organs: 32, vessels: 60, nervous: 58 }; // triangles per cm^2
const FLOOR = { skin: 0, muscles: 500, bones: 900, organs: 900, vessels: 700, nervous: 700 };
function budget(p) {
  const t = Math.max(FLOOR[p.layer], p.area * 1e4 * DENSITY[p.layer]);
  return Math.min(p.tris, Math.round(t));
}
function simplify(m, target) {
  let idx = m.idx;
  if (target < idx.length / 3) {
    const r = MeshoptSimplifier.simplify(idx, m.pos, 3, target * 3, 0.05);
    idx = r[0];
  }
  const remap = new Int32Array(m.pos.length / 3).fill(-1), pos = []; let nv = 0;
  const out = new Uint32Array(idx.length);
  for (let i = 0; i < idx.length; i++) {
    let k = remap[idx[i]];
    if (k < 0) { k = remap[idx[i]] = nv++; pos.push(m.pos[idx[i] * 3], m.pos[idx[i] * 3 + 1], m.pos[idx[i] * 3 + 2]); }
    out[i] = k;
  }
  return { pos: new Float32Array(pos), idx: out };
}
function encode(m) { // -> { head fields, vbuf, ibuf }
  const nv0 = m.pos.length / 3, min = [1e9, 1e9, 1e9], max = [-1e9, -1e9, -1e9];
  for (let i = 0; i < m.pos.length; i++) { const a = i % 3; if (m.pos[i] < min[a]) min[a] = m.pos[i]; if (m.pos[i] > max[a]) max[a] = m.pos[i]; }
  const ext = max.map((v, a) => Math.max(v - min[a], 1e-6));
  const [remap, nv] = MeshoptEncoder.reorderMesh(m.idx, true, true); // reorders m.idx in place for compression
  const q = new Uint16Array(nv * 4);
  for (let i = 0; i < nv0; i++) {
    const k = remap[i]; if (k === 0xffffffff) continue;
    for (let a = 0; a < 3; a++) q[k * 4 + a] = Math.round((m.pos[i * 3 + a] - min[a]) / ext[a] * 65535);
  }
  const wide = nv > 65535, ind = wide ? m.idx : Uint16Array.from(m.idx);
  return {
    nv, ni: m.idx.length, w: wide ? 4 : 2, min: min.map(v => +v.toFixed(5)), ext: ext.map(v => +v.toFixed(5)),
    vbuf: MeshoptEncoder.encodeVertexBuffer(new Uint8Array(q.buffer), nv, 8),
    ibuf: MeshoptEncoder.encodeIndexBuffer(new Uint8Array(ind.buffer, ind.byteOffset, ind.byteLength), m.idx.length, wide ? 4 : 2)
  };
}

/* ---------- study cards (for "open card" / "view in 3D" links) ---------- */
function loadCards() {
  const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]).filter(p => /^(js\/registry|js\/schema|content\/)/.test(p))
    .forEach(p => vm.runInContext(fs.readFileSync(path.join(ROOT, p), 'utf8'), ctx, { filename: p }));
  return ctx.AN.structures;
}

/* ---------- main ---------- */
(async function () {
  await MeshoptSimplifier.ready; await MeshoptEncoder.ready;
  const cards = loadCards(), cardById = Object.fromEntries(cards.map(c => [c.id, c]));
  const files = fs.readdirSync(path.join(SRC, 'stl')).filter(f => /\.stl$/.test(f)).sort();
  const parts = [];
  let done = 0;
  for (const f of files) {
    const id = f.replace('.stl', ''), name = (NAME[id] || id).replace(/, nsn$/, '');
    if (DROP.test(name)) continue;
    const anc = ancestors(id), sys = new Set(), body = new Set();
    anc.forEach(a => { if (SYS[a]) sys.add(SYS[a]); if (BODY[a]) body.add(BODY[a]); });
    const m = readSTL(path.join(SRC, 'stl', f));
    const p = { id: id.replace(/nsn$/, ''), name, sys, body, min: m.min, max: m.max, tris: m.idx.length / 3, area: area(m.pos, m.idx) };
    p.layer = layerOf(name, sys); p.color = colorOf(p.id, name, p.layer); p.regions = regionsOf(p);
    p.ref = CARD_MAP.match(name, p.regions, cardById);
    if (!REPORT) { const s = simplify(m, budget(p)); p.out = s.idx.length / 3; p.enc = encode(s); }
    parts.push(p);
    if (++done % 100 === 0) process.stderr.write(done + '/' + files.length + '\n');
  }

  if (REPORT) {
    parts.forEach(p => console.log([p.id, p.name, p.layer, p.regions.join('+'), (p.ref || []).join(','), p.tris, budget(p)].join('\t')));
    const used = new Set(parts.flatMap(p => p.ref || []));
    console.error('cards with a mesh: ' + used.size + ' / ' + cards.length);
    console.error('total budget: ' + parts.reduce((a, p) => a + budget(p), 0));
    return;
  }

  fs.mkdirSync(OUT, { recursive: true });
  const packIds = ['upper-limb', 'thorax', 'abdomen', 'pelvis-perineum', 'lower-limb', 'head-neck', 'neuroanatomy', 'skin'];
  const index = { packs: {}, refs: {} };
  for (const pk of packIds) {
    const list = parts.filter(p => p.regions.includes(pk)), head = [], bufs = []; let off = 0, tris = 0;
    for (const p of list) {
      const e = p.enc, h = { k: p.id, n: p.name, l: p.layer, c: p.color, nv: e.nv, ni: e.ni, w: e.w, min: e.min, ext: e.ext, vo: off, vl: e.vbuf.length };
      off += e.vbuf.length; h.io = off; h.il = e.ibuf.length; off += e.ibuf.length;
      if (p.ref) { h.r = p.ref; p.ref.forEach(r => (index.refs[r] = index.refs[r] || []).push(pk + '/' + p.id)); }
      head.push(h); bufs.push(Buffer.from(e.vbuf), Buffer.from(e.ibuf)); tris += p.out;
    }
    const hj = Buffer.from(JSON.stringify(head), 'utf8'), len = Buffer.alloc(4); len.writeUInt32LE(hj.length);
    const bin = Buffer.concat([len, hj, ...bufs]);
    fs.writeFileSync(path.join(OUT, pk + '.js'),
      '/* Generated by tools/build-3d/build-models.js. Meshes derived from BodyParts3D, (c) The Database Center for Life Science, CC BY-SA 2.1 Japan. */\n' +
      'AN.M3D.pack(' + JSON.stringify(pk) + ',"' + bin.toString('base64') + '");\n');
    index.packs[pk] = { n: list.length, tris, kb: Math.round(bin.length * 4 / 3 / 1024) };
    console.log(pk.padEnd(16), String(list.length).padStart(4) + ' parts', String(tris).padStart(8) + ' tris', (bin.length / 1048576).toFixed(2) + ' MB');
  }
  index.unique = new Set(parts.filter(p => p.layer !== 'skin').map(p => p.id)).size; // some structures sit in two regions
  fs.writeFileSync(path.join(OUT, 'index.js'),
    '/* Generated by tools/build-3d/build-models.js — what each 3D pack holds, and which meshes belong to which study card. */\n' +
    'AN.M3D.index = ' + JSON.stringify(index) + ';\n');
  const uniq = new Set(parts.filter(p => p.layer !== 'skin').map(p => p.id));
  console.log('unique parts', uniq.size, '· triangles', parts.reduce((a, p) => a + p.out, 0), '· cards linked', Object.keys(index.refs).length, '/', cards.length);
})();
