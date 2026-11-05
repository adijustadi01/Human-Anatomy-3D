// TEACHING DIAGRAMS — UPPER LIMB (schematic; verify against your textbook)
AN.registerFigure({
  id: 'fig-brachial-plexus',
  title: 'Brachial plexus (schematic)',
  region: 'upper-limb',
  verified: false, source: '',
  viewBox: '0 0 720 345',
  structures: ['ul-nerve-brachial-plexus'],
  shapes:
    '<path class="nv" d="M40 30 L200 60 M40 90 L200 60 M40 150 L200 150 M40 210 L200 240 M40 270 L200 240"/>' +
    '<path class="nv" d="M200 60 L260 60 M200 150 L260 150 M200 240 L260 240"/>' +
    '<path class="nv" d="M250 60 L285 18"/>' +
    '<path class="nv" d="M260 60 L400 70 M260 150 L400 70 M260 240 L400 170"/>' +
    '<path class="nv dash" d="M260 60 L400 290 M260 150 L400 290 M260 240 L400 290"/>' +
    '<path class="nv" d="M400 70 L470 70 M400 170 L470 170 M400 290 L470 290"/>' +
    '<path class="nv" d="M470 70 L600 30 M470 70 L540 120 M470 170 L540 120 M540 120 L620 120 M470 170 L600 200 M470 290 L600 260 M470 290 L600 320"/>' +
    '<text class="ft" x="330" y="340" text-anchor="middle">Solid = anterior divisions · Dashed = posterior divisions</text>',
  labels: [
    { x: 34, y: 34, t: 'C5', a: 'end' }, { x: 34, y: 94, t: 'C6', a: 'end' }, { x: 34, y: 154, t: 'C7', a: 'end' },
    { x: 34, y: 214, t: 'C8', a: 'end' }, { x: 34, y: 274, t: 'T1', a: 'end' },
    { x: 230, y: 78, t: 'Upper trunk', a: 'middle' }, { x: 230, y: 168, t: 'Middle trunk', a: 'middle' }, { x: 232, y: 260, t: 'Lower trunk', a: 'middle' },
    { x: 289, y: 20, t: 'Suprascapular n.' },
    { x: 435, y: 62, t: 'Lateral cord', a: 'middle' }, { x: 435, y: 162, t: 'Medial cord', a: 'middle' }, { x: 435, y: 282, t: 'Posterior cord', a: 'middle' },
    { x: 604, y: 34, t: 'Musculocutaneous', r: 'ul-nerve-musculocutaneous' },
    { x: 624, y: 124, t: 'Median', r: 'ul-nerve-median' },
    { x: 604, y: 204, t: 'Ulnar', r: 'ul-nerve-ulnar' },
    { x: 604, y: 264, t: 'Axillary', r: 'ul-nerve-axillary' },
    { x: 604, y: 324, t: 'Radial', r: 'ul-nerve-radial' }
  ],
  note: 'The “M” is formed by musculocutaneous, lateral root of median, median, medial root of median and ulnar nerves. Erb’s point: union of C5 and C6.'
});

AN.registerFigure({
  id: 'fig-cubital-fossa',
  title: 'Cubital fossa — boundaries & contents (right, anterior view)',
  region: 'upper-limb',
  verified: false, source: '',
  viewBox: '0 0 640 320',
  structures: ['ul-space-cubital-fossa'],
  shapes:
    '<path class="sh" d="M60 50 L460 50 L260 290 Z"/>' +
    '<path class="nv" d="M150 58 L150 140"/>' +
    '<rect class="tend" x="208" y="56" width="14" height="114" rx="6"/>' +
    '<path class="art" d="M270 56 L270 170 M270 170 L238 245 M270 170 L282 245"/>' +
    '<path class="nv" d="M335 56 L312 195"/>' +
    '<path class="lead" d="M150 40 L150 58 M215 22 L215 56 M270 40 L270 56 M335 22 L335 56 M238 245 L228 256 M282 245 L292 256 M461 50 L470 46"/>' +
    '<text class="ft" x="20" y="312">LATERAL</text><text class="ft" x="470" y="312" text-anchor="end">MEDIAL</text>',
  labels: [
    { x: 150, y: 36, t: 'Radial nerve', a: 'middle', r: 'ul-nerve-radial' },
    { x: 215, y: 18, t: 'Biceps tendon', a: 'middle', r: 'ul-musc-biceps-brachii' },
    { x: 270, y: 36, t: 'Brachial artery', a: 'middle', r: 'ul-art-brachial' },
    { x: 335, y: 18, t: 'Median nerve', a: 'middle', r: 'ul-nerve-median' },
    { x: 226, y: 262, t: 'Radial a.', a: 'end', r: 'ul-art-radial' },
    { x: 294, y: 262, t: 'Ulnar a.', r: 'ul-art-ulnar' },
    { x: 152, y: 178, t: 'Brachioradialis', a: 'end', r: 'ul-musc-brachioradialis' },
    { x: 368, y: 178, t: 'Pronator teres', r: 'ul-musc-pronator-teres' },
    { x: 474, y: 50, t: 'Base: interepicondylar line' }
  ],
  note: 'Contents medial → lateral: median nerve, brachial artery, biceps tendon, radial nerve. Floor: brachialis and supinator. Roof includes the bicipital aponeurosis and the median cubital vein (superficial).'
});
