// PELVIS & PERINEUM — SPACES
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/pelvis-perineum/spaces.js', [
{
  id: 'pp-space-ischioanal-fossa',
  name: 'Ischioanal fossa',
  aka: ['Ischiorectal fossa'],
  type: 'space',
  system: [],
  region: 'pelvis-perineum',
  zones: ['perineum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Wedge-shaped, fat-filled space on each side of the anal canal.',
  location: 'Anal triangle of the perineum.',
  parts: ['Anterior recess (above the perineal membrane) and posterior recess (deep to gluteus maximus)'],
  space: {
    boundaries: [
      'Base: skin of the perineum',
      'Apex: where the obturator fascia meets the inferior fascia of levator ani',
      'Medial wall: [[pp-musc-levator-ani]], [[pp-musc-external-anal-sphincter]] and anal canal',
      'Lateral wall: obturator internus with obturator fascia (containing the pudendal canal); ischial tuberosity',
      'Anterior: posterior border of the perineal membrane',
      'Posterior: sacrotuberous ligament and gluteus maximus'
    ],
    contents: [
      'Ischioanal pad of fat',
      'Inferior rectal nerve and vessels (crossing from lateral to medial)',
      'Pudendal canal with [[pp-nerve-pudendal]] and internal pudendal vessels (in the lateral wall)',
      'Posterior scrotal / labial nerves and vessels (anteriorly)',
      'Perineal branch of S4; perforating cutaneous nerve'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Ischioanal abscess:', text: 'Common; may spread to the opposite fossa behind the anal canal (horseshoe abscess).' }
  ],
  highYield: ['Fat allows distension of the anal canal during defecation.'],
  mnemonics: []
},
{
  id: 'pp-space-superficial-perineal-pouch',
  name: 'Superficial perineal pouch',
  aka: ['Superficial perineal space'],
  type: 'space',
  system: [],
  region: 'pelvis-perineum',
  zones: ['perineum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Space in the urogenital triangle between the membranous layer of superficial fascia and the perineal membrane.',
  location: 'Urogenital triangle of the perineum.',
  parts: [],
  space: {
    boundaries: [
      'Superficial: membranous layer of superficial perineal fascia (Colles’ fascia)',
      'Deep: perineal membrane',
      'Lateral: ischiopubic rami',
      'Posterior: closed — Colles’ fascia fuses with the posterior border of the perineal membrane',
      'Anterior: open — continuous with the space deep to the membranous fascia of the anterior abdominal wall (Scarpa’s), scrotum and penis'
    ],
    contents: [
      'Male: root of penis (bulb and crura), bulbospongiosus, ischiocavernosus, superficial transverse perineal muscles; spongy urethra in the bulb; posterior scrotal nerves and vessels',
      'Female: crura of clitoris, bulbs of vestibule, greater vestibular (Bartholin’s) glands, the same muscles; posterior labial nerves and vessels'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Extravasation of urine:', text: 'From rupture of the bulbar urethra spreads into the scrotum, penis and anterior abdominal wall, but not into the thigh (Colles’ fascia attaches to the fascia lata) or back into the anal triangle.' },
    { title: 'Bartholin’s cyst / abscess:', text: 'Of the greater vestibular gland.' }
  ],
  highYield: ['Open anteriorly, closed posteriorly and laterally.'],
  mnemonics: []
},
{
  id: 'pp-space-deep-perineal-pouch',
  name: 'Deep perineal pouch',
  aka: ['Deep perineal space'],
  type: 'space',
  system: [],
  region: 'pelvis-perineum',
  zones: ['perineum'],
  verified: false, source: '', doubtful: ['boundaries'], reviewNote: 'Classical (closed) vs modern (open above) descriptions differ — confirm your textbook’s version.',
  description: 'Space in the urogenital triangle above (deep to) the perineal membrane.',
  location: 'Urogenital triangle of the perineum.',
  parts: [],
  space: {
    boundaries: [
      'Inferior: perineal membrane',
      'Superior: superior fascia of the urogenital diaphragm (classical description; many modern texts describe the pouch as open above, continuous with the pelvis)',
      'Lateral: ischiopubic rami'
    ],
    contents: [
      'Male: membranous urethra, external urethral sphincter, deep transverse perineal muscles, bulbourethral (Cowper’s) glands, internal pudendal vessels, dorsal nerve of penis, artery of bulb',
      'Female: part of urethra and vagina, external urethral sphincter (with compressor urethrae and sphincter urethrovaginalis), deep transverse perineal muscles, internal pudendal vessels, dorsal nerve of clitoris'
    ]
  },
  relations: [
    { dir: 'superior (male)', text: 'Apex of the prostate.', ref: 'pp-organ-prostate' }
  ],
  clinical: [
    { title: 'Rupture of membranous urethra:', text: 'With pelvic fracture; urine extravasates into the deep pouch and extraperitoneal pelvic tissue.' }
  ],
  highYield: ['Bulbourethral glands lie in the deep pouch, but their ducts open into the spongy urethra.'],
  mnemonics: []
},
{
  id: 'pp-space-rectouterine-pouch',
  name: 'Rectouterine pouch',
  aka: ['Pouch of Douglas'],
  type: 'space',
  system: [],
  region: 'pelvis-perineum',
  zones: ['female', 'rectum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Lowest part of the peritoneal cavity in the female (in the erect posture).',
  location: 'Between the rectum and the uterus.',
  parts: [],
  space: {
    boundaries: [
      'Anterior: uterus, supravaginal cervix and posterior fornix of vagina',
      'Posterior: rectum',
      'Lateral: rectouterine (uterosacral) folds',
      'Floor: peritoneum over the posterior vaginal fornix'
    ],
    contents: ['Normally coils of ileum and sigmoid colon', 'Pathologically: pus, blood, ascitic fluid, tumour deposits']
  },
  relations: [
    { dir: 'anterior', text: 'Uterus.', ref: 'pp-organ-uterus' },
    { dir: 'posterior', text: 'Rectum.', ref: 'pp-organ-rectum' }
  ],
  clinical: [
    { title: 'Collections:', text: 'Pus (pelvic abscess) or blood (e.g. ruptured ectopic pregnancy) gather here; can be drained/aspirated through the posterior vaginal fornix (culdocentesis).' },
    { title: 'Examination:', text: 'Felt on rectal or vaginal examination.' }
  ],
  highYield: ['Male equivalent: rectovesical pouch.'],
  mnemonics: []
}
]);
