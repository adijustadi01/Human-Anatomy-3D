#!/usr/bin/env node
/* Content checker. Run:  node tools/validate.js
   Loads the content files listed in index.html and reports errors (exit 1),
   warnings, and the verification status of every structure. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
global.window = global;

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const srcs = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1])
  .filter(p => /^(js\/registry|js\/schema|diagrams\/|content\/)/.test(p));
for (const p of srcs) vm.runInThisContext(fs.readFileSync(path.join(root, p), 'utf8'), { filename: p });

const AN = global.AN, S = AN.SCHEMA, errs = [...AN.errors], warns = [];
const regions = AN.REGIONS.map(r => r.id), systems = AN.SYSTEMS.map(s => s.id);
const commonKeys = ['id', 'name', 'aka', 'type', 'system', 'region', 'zones', 'verified', 'source', 'doubtful', 'reviewNote', '_file',
  ...S.common.map(f => f.key), ...S.tail];

function refsIn(v, out) {
  if (typeof v === 'string') { for (const m of v.matchAll(AN.LINK_RE)) out.push(m[1]); }
  else if (v && typeof v === 'object') Object.values(v).forEach(x => refsIn(x, out));
  return out;
}

for (const s of AN.structures) {
  const at = `${s._file} → ${s.id || '(no id)'}`;
  if (!/^[a-z0-9-]+$/.test(s.id || '')) errs.push(`${at}: id must be lowercase letters, digits, hyphens`);
  if (!s.name) errs.push(`${at}: missing name`);
  const t = S.types[s.type];
  if (!t) { errs.push(`${at}: unknown type "${s.type}"`); continue; }
  if (!regions.includes(s.region)) errs.push(`${at}: unknown region "${s.region}"`);
  (s.system || []).forEach(y => { if (!systems.includes(y)) errs.push(`${at}: unknown system "${y}"`); });
  if (typeof s.verified !== 'boolean') errs.push(`${at}: "verified" must be true or false`);
  const d = AN.DIAGRAMS[s.region];
  if (d) (s.zones || []).forEach(z => { if (!d.zones.some(x => x.id === z)) errs.push(`${at}: unknown zone "${z}"`); });

  const typeKeys = t.fields.map(f => f.key);
  Object.keys(s).forEach(k => { if (!commonKeys.includes(k) && k !== s.type) warns.push(`${at}: unexpected key "${k}"`); });
  Object.keys(s[s.type] || {}).forEach(k => { if (!typeKeys.includes(k)) warns.push(`${at}: unexpected ${s.type} field "${k}"`); });
  if (!s[s.type]) warns.push(`${at}: no "${s.type}" block`);
  (s.doubtful || []).forEach(k => { if (![...typeKeys, ...S.common.map(f => f.key), ...S.tail].includes(k)) errs.push(`${at}: doubtful lists unknown field "${k}"`); });

  const refs = refsIn(s, []);
  (s.relations || []).forEach(r => { if (r.ref) refs.push(r.ref); });
  refs.forEach(r => { if (!AN.byId[r]) errs.push(`${at}: link to missing id "${r}"`); });
  if (s.verified && !s.source) warns.push(`${at}: verified but no source given`);
}

for (const f of AN.FIGURES || []) {
  [...(f.structures || []), ...f.labels.map(l => l.r).filter(Boolean)]
    .forEach(r => { if (!AN.byId[r]) errs.push(`figure ${f.id}: link to missing id "${r}"`); });
}
for (const c of AN.COMPARISONS || []) {
  if (c.items) {
    c.items.forEach(r => { if (!AN.byId[r]) errs.push(`comparison ${c.id}: missing structure "${r}"`); });
  } else {
    (c.structures || []).forEach(r => { if (!AN.byId[r]) errs.push(`comparison ${c.id}: link to missing id "${r}"`); });
    c.rows.forEach(r => { if (r.cells.length !== c.columns.length) errs.push(`comparison ${c.id}: row "${r.label}" has ${r.cells.length} cells, expected ${c.columns.length}`); });
  }
}
const seenCase = {};
for (const c of AN.CASES || []) {
  if (seenCase[c.id]) errs.push(`case ${c.id}: duplicate id`); seenCase[c.id] = 1;
  if (!c.stem || !c.why) errs.push(`case ${c.id}: needs stem and why`);
  if (!Array.isArray(c.options) || c.options.length < 2) errs.push(`case ${c.id}: needs at least 2 options (correct first)`);
  (c.refs || []).forEach(r => { if (!AN.byId[r]) errs.push(`case ${c.id}: link to missing id "${r}"`); });
}
const unv = AN.structures.filter(s => !s.verified);
const flagged = AN.structures.filter(s => (s.doubtful || []).length);
console.log(`\n${AN.structures.length} structures · ${AN.structures.length - unv.length} verified · ${unv.length} unverified · ${flagged.length} with flagged fields\n`);
if (process.argv.includes('--list')) {
  for (const s of AN.structures) console.log(`${s.verified ? '✔' : '⚠'} ${s.id}${(s.doubtful || []).length ? '  [check: ' + s.doubtful.join(', ') + ']' : ''}`);
  console.log('');
}
warns.forEach(w => console.log('warn  ' + w));
errs.forEach(e => console.log('ERROR ' + e));
console.log(errs.length ? `\n${errs.length} error(s).` : 'No errors.');
process.exit(errs.length ? 1 : 0);
