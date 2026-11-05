// TEACHING DIAGRAMS — NEUROANATOMY (schematic; verify against your textbook)
AN.registerFigure({
  id: 'fig-circle-of-willis',
  title: 'Circle of Willis (inferior view, schematic)',
  region: 'neuroanatomy',
  verified: false, source: '',
  viewBox: '0 0 520 475',
  structures: ['na-art-circle-of-willis'],
  shapes:
    '<path class="art" d="M220 455 L260 405 M300 455 L260 405"/>' +
    '<path class="art" d="M260 405 L260 300"/>' +
    '<path class="art" d="M260 300 L160 300 Q110 300 80 345 M260 300 L360 300 Q410 300 440 345"/>' +
    '<path class="art" d="M260 322 L180 342 M260 322 L340 342"/>' +
    '<path class="art" d="M260 372 L195 388 M260 372 L325 388"/>' +
    '<path class="art" d="M238 432 L185 445 M282 432 L335 445"/>' +
    '<path class="art" d="M180 300 L190 192 M340 300 L330 192"/>' +
    '<path class="art" d="M190 190 L80 200 Q50 205 35 235 M330 190 L440 200 Q470 205 485 235"/>' +
    '<path class="art" d="M190 190 L240 120 L240 35 M330 190 L280 120 L280 35"/>' +
    '<path class="art" d="M240 120 L280 120"/>' +
    '<circle class="artf" cx="190" cy="190" r="10"/><circle class="artf" cx="330" cy="190" r="10"/>' +
    '<path class="lead" d="M280 120 L306 128 M70 176 L90 198"/>' +
    '<text class="ft" x="260" y="18" text-anchor="middle">Anterior ↑</text>',
  labels: [
    { x: 232, y: 60, t: 'Anterior cerebral a.', a: 'end', r: 'na-art-aca' },
    { x: 310, y: 132, t: 'Anterior communicating a.' },
    { x: 345, y: 180, t: 'Internal carotid a.', r: 'hn-art-internal-carotid' },
    { x: 20, y: 172, t: 'Middle cerebral a.', r: 'na-art-mca' },
    { x: 178, y: 252, t: 'Posterior communicating a.', a: 'end' },
    { x: 30, y: 368, t: 'Posterior cerebral a.', r: 'na-art-pca' },
    { x: 270, y: 355, t: 'Basilar a.', r: 'na-art-basilar' },
    { x: 345, y: 364, t: 'Superior cerebellar a.' },
    { x: 330, y: 400, t: 'AICA' },
    { x: 180, y: 455, t: 'PICA', a: 'end' },
    { x: 308, y: 466, t: 'Vertebral a.', r: 'hn-art-vertebral' }
  ],
  note: 'Commonest berry-aneurysm site: anterior communicating artery. Posterior communicating aneurysm can compress the oculomotor nerve.'
});

AN.registerFigure({
  id: 'fig-spinal-cord-tracts',
  title: 'Spinal cord cross-section — main tracts (schematic)',
  region: 'neuroanatomy',
  verified: false, source: '',
  viewBox: '-110 0 860 400',
  structures: ['na-cns-spinal-cord'],
  shapes:
    '<ellipse class="sh" cx="330" cy="200" rx="200" ry="140"/>' +
    '<path class="grey" d="M315 190 L260 80 L240 85 L285 195 L250 310 L300 310 L320 210 L340 210 L360 310 L410 310 L375 195 L420 85 L400 80 L345 190 Z"/>' +
    '<circle class="ln" cx="330" cy="205" r="4"/>' +
    '<path class="ln" d="M330 60 L330 150 M330 340 L330 305"/>' +
    '<ellipse class="trA" cx="318" cy="110" rx="9" ry="38"/><ellipse class="trA" cx="296" cy="115" rx="10" ry="34"/>' +
    '<ellipse class="trA" cx="160" cy="170" rx="14" ry="32"/><ellipse class="trA" cx="185" cy="255" rx="22" ry="22"/>' +
    '<ellipse class="trD" cx="460" cy="185" rx="26" ry="30"/><ellipse class="trD" cx="352" cy="320" rx="8" ry="18"/>' +
    '<path class="lead" d="M318 72 L325 36 M290 82 L204 50 M262 100 L124 102 M146 165 L124 156 M163 256 L124 262 M275 290 L204 356 M486 185 L541 186 M358 334 L541 352"/>' +
    '<text class="ft" x="740" y="24" text-anchor="end">Posterior (dorsal) ↑</text>' +
    '<text class="ft" x="740" y="392" text-anchor="end">Anterior (ventral) ↓</text>' +
    '<text class="ft" x="-100" y="392">Blue = ascending (left half) · Orange = descending (right half)</text>',
  labels: [
    { x: 330, y: 30, t: 'Fasciculus gracilis', a: 'middle', r: 'na-tract-dcml' },
    { x: 200, y: 50, t: 'Fasciculus cuneatus', a: 'end', r: 'na-tract-dcml' },
    { x: 120, y: 106, t: 'Posterior horn', a: 'end' },
    { x: 120, y: 160, t: 'Posterior spinocerebellar tract', a: 'end', r: 'na-tract-posterior-spinocerebellar' },
    { x: 120, y: 266, t: 'Lateral spinothalamic tract', a: 'end', r: 'na-tract-spinothalamic' },
    { x: 200, y: 360, t: 'Anterior horn', a: 'end' },
    { x: 545, y: 190, t: 'Lateral corticospinal tract', r: 'na-tract-corticospinal' },
    { x: 545, y: 356, t: 'Anterior corticospinal tract', r: 'na-tract-corticospinal' }
  ],
  note: 'Ascending tracts are drawn on one half and descending tracts on the other for clarity; all exist on both sides. Gracilis is medial (lower limb), cuneatus lateral (upper limb).'
});

AN.registerFigure({
  id: 'fig-visual-pathway',
  title: 'Visual pathway & lesion sites (schematic, viewed from above)',
  region: 'neuroanatomy',
  verified: false, source: '',
  viewBox: '-110 0 750 430',
  structures: ['na-tract-visual-pathway', 'na-cns-visual-cortex', 'hn-nerve-optic'],
  shapes:
    '<circle class="sh" cx="180" cy="60" r="35"/><circle class="sh" cx="380" cy="60" r="35"/>' +
    '<text class="ft" x="180" y="16" text-anchor="middle">Left eye</text><text class="ft" x="380" y="16" text-anchor="middle">Right eye</text>' +
    '<path class="nv" d="M180 95 L255 170 M380 95 L305 170"/>' +
    '<path class="nv" d="M255 170 L255 200 M305 170 L305 200 M255 170 L305 200 M305 170 L255 200"/>' +
    '<path class="nv" d="M255 200 L210 280 M305 200 L350 280"/>' +
    '<rect class="sh" x="195" y="280" width="30" height="20" rx="5"/><rect class="sh" x="335" y="280" width="30" height="20" rx="5"/>' +
    '<path class="nv" d="M210 300 Q150 330 195 380 M215 300 Q245 340 235 380 M350 300 Q410 330 365 380 M345 300 Q315 340 325 380"/>' +
    '<rect class="sh" x="180" y="380" width="80" height="26" rx="6"/><rect class="sh" x="300" y="380" width="80" height="26" rx="6"/>' +
    '<path class="lead" d="M340 135 L416 130 M306 185 L416 185 M328 240 L416 240 M365 290 L416 290 M384 335 L416 340 M380 393 L416 395 M205 130 L140 130 M270 185 L140 185 M222 240 L140 240 M166 335 L140 335 M210 393 L140 393"/>' +
    '<g><circle class="mark" cx="215" cy="130" r="10"/><text class="markt" x="215" y="134">A</text></g>' +
    '<g><circle class="mark" cx="280" cy="185" r="10"/><text class="markt" x="280" y="189">B</text></g>' +
    '<g><circle class="mark" cx="232" cy="240" r="10"/><text class="markt" x="232" y="244">C</text></g>' +
    '<g><circle class="mark" cx="176" cy="335" r="10"/><text class="markt" x="176" y="339">D</text></g>' +
    '<g><circle class="mark" cx="220" cy="393" r="10"/><text class="markt" x="220" y="397">E</text></g>',
  labels: [
    { x: 420, y: 134, t: 'Optic nerve', r: 'hn-nerve-optic' },
    { x: 420, y: 189, t: 'Optic chiasma' },
    { x: 420, y: 244, t: 'Optic tract', r: 'na-tract-visual-pathway' },
    { x: 420, y: 294, t: 'Lateral geniculate body', r: 'na-cns-thalamus' },
    { x: 420, y: 344, t: 'Optic radiation (Meyer’s loop)' },
    { x: 420, y: 399, t: 'Primary visual cortex', r: 'na-cns-visual-cortex' },
    { x: 136, y: 134, t: 'A: blind left eye', a: 'end' },
    { x: 136, y: 189, t: 'B: bitemporal hemianopia', a: 'end' },
    { x: 136, y: 244, t: 'C: right homonymous hemianopia', a: 'end' },
    { x: 136, y: 339, t: 'D: right upper quadrantanopia', a: 'end' },
    { x: 136, y: 397, t: 'E: R hom. hemianopia, macula spared', a: 'end' }
  ],
  note: 'Hide labels to test both the structures and the field defect produced by each lesion (A–E). Nasal retinal fibres cross at the chiasma; temporal fibres stay on the same side.'
});
