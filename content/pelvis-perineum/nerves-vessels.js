// PELVIS & PERINEUM — NERVES & VESSELS
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/pelvis-perineum/nerves-vessels.js', [
{
  id: 'pp-nerve-pudendal',
  name: 'Pudendal nerve',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'pelvis-perineum',
  zones: ['perineum', 'walls'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Main nerve of the perineum.',
  location: 'Gluteal region (briefly), pudendal canal, perineum.',
  parts: [],
  nerve: {
    rootValue: 'S2, S3, S4 (sacral plexus)',
    course: 'Leaves the pelvis through the greater sciatic foramen below piriformis, crosses the back of the sacrospinous ligament near the ischial spine (medial to the internal pudendal vessels), enters the perineum through the lesser sciatic foramen, and runs forward in the pudendal canal (Alcock’s) on the lateral wall of the [[pp-space-ischioanal-fossa]].',
    branches: ['Inferior rectal nerve', 'Perineal nerve — superficial (posterior scrotal/labial) and deep (muscular) branches', 'Dorsal nerve of penis / clitoris'],
    motor: ['[[pp-musc-external-anal-sphincter]]', 'External urethral sphincter', 'Muscles of the superficial and deep perineal pouches', 'Part of [[pp-musc-levator-ani]]'],
    sensory: ['Skin of perineum and lower anal canal', 'Most of the external genitalia; penis / clitoris']
  },
  relations: [
    { dir: 'companion', text: 'Internal pudendal vessels.', ref: 'pp-art-internal-pudendal' }
  ],
  clinical: [
    { title: 'Pudendal nerve block:', text: 'Injected near the ischial spine (often transvaginally) for episiotomy and instrumental delivery.' },
    { title: 'Injury:', text: 'May cause faecal and urinary incontinence.' }
  ],
  highYield: ['Leaves the pelvis by the greater and re-enters the perineum by the lesser sciatic foramen.', 'Ischial spine is the landmark for pudendal block.'],
  mnemonics: []
},
{
  id: 'pp-nerve-pelvic-splanchnic',
  name: 'Pelvic splanchnic nerves',
  aka: ['Nervi erigentes'],
  type: 'nerve',
  system: ['nervous'],
  region: 'pelvis-perineum',
  zones: ['walls'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Sacral parasympathetic outflow to the pelvic viscera and hindgut.',
  location: 'Posterolateral pelvic wall.',
  parts: [],
  nerve: {
    rootValue: 'S2, S3, S4 (preganglionic parasympathetic fibres from the ventral rami)',
    course: 'Arise from the ventral rami of S2–S4 and join the inferior hypogastric (pelvic) plexus; some fibres ascend through the hypogastric nerves to supply the hindgut.',
    branches: ['Branches to the inferior hypogastric plexus and its subsidiary plexuses (vesical, prostatic / uterovaginal, rectal)'],
    motor: ['Detrusor of bladder (micturition)', 'Hindgut from the distal transverse colon to the rectum (peristalsis, defecation)', 'Erectile tissue — vasodilatation and erection'],
    sensory: ['Visceral afferents from pelvic organs (e.g. bladder distension, cervix)']
  },
  relations: [],
  clinical: [
    { title: 'Pelvic surgery:', text: 'Injury (e.g. in rectal excision) → urinary retention and erectile dysfunction.' }
  ],
  highYield: ['Only parasympathetic supply to the hindgut (vagus stops at the midgut).'],
  mnemonics: [{ text: 'Point and Shoot', meaning: 'Parasympathetic → erection (point); Sympathetic → ejaculation (shoot)' }]
},
{
  id: 'pp-nerve-sacral-plexus',
  name: 'Sacral plexus',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'pelvis-perineum',
  zones: ['walls'],
  verified: false, source: '', doubtful: ['branches'], reviewNote: 'Check root values of each branch.',
  description: 'Plexus supplying the gluteal region, back of thigh, most of leg and foot, and the perineum.',
  location: 'Posterior pelvic wall, in front of piriformis.',
  parts: [],
  nerve: {
    rootValue: 'L4, L5 (lumbosacral trunk), S1, S2, S3, S4',
    course: 'Formed on the front of piriformis, behind the internal iliac vessels and ureter; most branches leave through the greater sciatic foramen.',
    branches: [
      '[[ll-nerve-superior-gluteal]] (L4–S1); inferior gluteal (L5–S2)',
      'Nerve to piriformis (S1, S2); nerve to quadratus femoris (L4–S1); nerve to obturator internus (L5–S2)',
      'Posterior cutaneous nerve of thigh (S1–S3); perforating cutaneous nerve (S2, S3)',
      '[[ll-nerve-sciatic]] (L4–S3)',
      '[[pp-nerve-pudendal]] (S2–S4)',
      '[[pp-nerve-pelvic-splanchnic]] (S2–S4); branches to levator ani and coccygeus (S4)'
    ],
    motor: ['Gluteal muscles and short lateral rotators', 'Hamstrings and all muscles below the knee (sciatic)', 'Pelvic floor and perineal muscles'],
    sensory: ['Back of thigh', 'Most of leg and foot', 'Perineum']
  },
  relations: [
    { dir: 'anterior', text: 'Internal iliac vessels and ureter.', ref: 'pp-art-internal-iliac' }
  ],
  clinical: [
    { title: 'Compression:', text: 'By pelvic tumours or the fetal head during labour → pain along the sciatic distribution.' }
  ],
  highYield: ['Lies on piriformis.'],
  mnemonics: []
},
{
  id: 'pp-art-internal-iliac',
  name: 'Internal iliac artery',
  aka: ['Hypogastric artery'],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'pelvis-perineum',
  zones: ['walls'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Main artery of the pelvis (about 4 cm long).',
  location: 'Posterolateral pelvic wall.',
  parts: ['Anterior and posterior divisions'],
  artery: {
    origin: 'Smaller terminal branch of the common iliac artery, at the level of the L5/S1 disc in front of the sacroiliac joint.',
    course: 'Descends to the upper margin of the greater sciatic foramen and divides into anterior and posterior divisions.',
    branches: [
      'Posterior division: iliolumbar, lateral sacral, superior gluteal',
      'Anterior division: umbilical (→ superior vesical), obturator, inferior vesical (male) / vaginal (female), [[pp-art-uterine]] (female), middle rectal, [[pp-art-internal-pudendal]], inferior gluteal'
    ],
    territory: 'Pelvic viscera and walls, perineum, gluteal region, and medial thigh (obturator).'
  },
  relations: [
    { dir: 'anterior', text: 'Ureter.', ref: 'ab-organ-ureter' },
    { dir: 'posterior', text: 'Internal iliac vein, lumbosacral trunk, sacroiliac joint.', ref: 'pp-nerve-sacral-plexus' }
  ],
  clinical: [
    { title: 'Ligation / embolisation:', text: 'For intractable pelvic or postpartum haemorrhage; collateral flow from lumbar, median sacral and superior rectal arteries keeps the pelvis viable.' }
  ],
  highYield: ['Superior gluteal is the largest branch (posterior division).'],
  mnemonics: []
},
{
  id: 'pp-art-uterine',
  name: 'Uterine artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'pelvis-perineum',
  zones: ['female'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Main artery of the uterus.',
  location: 'Base of the broad ligament, then along the side of the uterus.',
  parts: [],
  artery: {
    origin: 'Anterior division of the [[pp-art-internal-iliac]].',
    course: 'Runs medially on levator ani in the base of the broad ligament (transverse cervical ligament), crosses above and in front of the ureter about 2 cm lateral to the supravaginal cervix, then ascends tortuously along the lateral margin of the uterus between the layers of the broad ligament to anastomose with the ovarian artery.',
    branches: ['Vaginal branches', 'Branches to cervix and body of uterus', 'Tubal branch', 'Ovarian (anastomotic) branch'],
    territory: 'Uterus, upper vagina, medial part of uterine tube; contributes to the ovary.'
  },
  relations: [
    { dir: 'below', text: 'Ureter passes under it near the cervix.', ref: 'ab-organ-ureter' }
  ],
  clinical: [
    { title: 'Hysterectomy:', text: 'Ureter is at risk when the uterine artery is clamped.' },
    { title: 'Uterine artery embolisation:', text: 'Treatment option for fibroids and postpartum haemorrhage.' }
  ],
  highYield: ['“Water under the bridge” — ureter below the uterine artery.'],
  mnemonics: []
},
{
  id: 'pp-art-internal-pudendal',
  name: 'Internal pudendal artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'pelvis-perineum',
  zones: ['perineum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Main artery of the perineum.',
  location: 'Gluteal region (briefly), pudendal canal, perineum.',
  parts: [],
  artery: {
    origin: 'Anterior division of the [[pp-art-internal-iliac]].',
    course: 'Leaves the pelvis through the greater sciatic foramen below piriformis, crosses the ischial spine, enters the perineum through the lesser sciatic foramen, and runs forward in the pudendal canal with the pudendal nerve into the deep perineal pouch.',
    branches: ['Inferior rectal artery', 'Perineal artery (posterior scrotal / labial branches)', 'Artery to the bulb of penis / vestibule', 'Urethral artery', 'Deep artery of penis / clitoris', 'Dorsal artery of penis / clitoris'],
    territory: 'Perineum, external genitalia, lower anal canal.'
  },
  relations: [
    { dir: 'companion', text: 'Pudendal nerve.', ref: 'pp-nerve-pudendal' }
  ],
  clinical: [
    { title: 'Erection:', text: 'Deep arteries of the penis fill the corpora cavernosa.' }
  ],
  highYield: ['Same course as the pudendal nerve.'],
  mnemonics: []
},
{
  id: 'pp-art-testicular',
  name: 'Testicular artery',
  aka: ['Gonadal artery (male)'],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'pelvis-perineum',
  zones: ['male'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Long slender artery of the testis.',
  location: 'Posterior abdominal wall, inguinal canal, spermatic cord.',
  parts: [],
  artery: {
    origin: 'Front of the abdominal aorta at about L2, just below the renal arteries ([[ab-art-aorta]]).',
    course: 'Descends retroperitoneally on psoas, crossing in front of the ureter and the external iliac artery; enters the deep inguinal ring and runs in the spermatic cord to the posterior border of the testis.',
    branches: ['Ureteric branches', 'Branches to the epididymis', 'Anastomoses with the cremasteric artery and artery to the ductus deferens'],
    territory: 'Testis and epididymis.'
  },
  relations: [
    { dir: 'in cord', text: 'Surrounded by the pampiniform venous plexus, which cools arterial blood (countercurrent heat exchange).', ref: 'pp-organ-testis' }
  ],
  clinical: [
    { title: 'Torsion:', text: 'Twisting of the cord occludes the testicular vessels.' }
  ],
  highYield: ['Origin from the aorta reflects the testis’s abdominal development.'],
  mnemonics: []
}
]);
