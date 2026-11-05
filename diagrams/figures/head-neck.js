// TEACHING DIAGRAMS — HEAD & NECK (schematic; verify against your textbook)
AN.registerFigure({
  id: 'fig-cavernous-sinus',
  title: 'Cavernous sinus — coronal section (one side, schematic)',
  region: 'head-neck',
  verified: false, source: '',
  viewBox: '0 0 560 380',
  structures: ['hn-space-cavernous-sinus'],
  shapes:
    '<ellipse class="sh" cx="110" cy="150" rx="45" ry="32"/>' +
    '<rect class="sh" x="55" y="215" width="150" height="95" rx="10"/>' +
    '<path class="vnf" d="M170 110 L330 110 Q350 200 300 260 L190 260 Q160 200 170 110 Z"/>' +
    '<circle class="artf" cx="230" cy="180" r="20"/>' +
    '<circle class="nvf" cx="262" cy="216" r="7"/>' +
    '<circle class="nvf" cx="326" cy="128" r="8"/><circle class="nvf" cx="333" cy="160" r="6"/>' +
    '<circle class="nvf" cx="333" cy="196" r="9"/><circle class="nvf" cx="318" cy="234" r="9"/>' +
    '<path class="lead" d="M334 128 L376 126 M339 160 L376 158 M342 196 L376 195 M327 236 L376 238 M262 223 L376 280 M232 200 L250 332"/>' +
    '<text class="ft" x="20" y="372">← Medial</text><text class="ft" x="540" y="372" text-anchor="end">Lateral →</text>',
  labels: [
    { x: 110, y: 105, t: 'Pituitary gland', a: 'middle', r: 'hn-organ-pituitary' },
    { x: 250, y: 100, t: 'Cavernous sinus', a: 'middle', r: 'hn-space-cavernous-sinus' },
    { x: 130, y: 268, t: 'Sphenoidal sinus', a: 'middle' },
    { x: 380, y: 130, t: 'Oculomotor n. (III)', r: 'hn-nerve-oculomotor' },
    { x: 380, y: 162, t: 'Trochlear n. (IV)', r: 'hn-nerve-trochlear' },
    { x: 380, y: 199, t: 'Ophthalmic n. (V1)', r: 'hn-nerve-trigeminal' },
    { x: 380, y: 242, t: 'Maxillary n. (V2)', r: 'hn-nerve-trigeminal' },
    { x: 380, y: 284, t: 'Abducent n. (VI)', r: 'hn-nerve-abducent' },
    { x: 250, y: 345, t: 'Internal carotid a.', a: 'middle', r: 'hn-art-internal-carotid' }
  ],
  note: 'Lateral wall, from above down: III, IV, V1, V2. Within the sinus: internal carotid artery with the abducent nerve inferolateral to it.'
});
