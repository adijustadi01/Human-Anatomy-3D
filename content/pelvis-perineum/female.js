// PELVIS & PERINEUM — FEMALE REPRODUCTIVE ORGANS
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/pelvis-perineum/female.js', [
{
  id: 'pp-organ-uterus',
  name: 'Uterus',
  aka: ['Womb'],
  type: 'organ',
  system: ['urogenital'],
  region: 'pelvis-perineum',
  zones: ['female'],
  verified: false, source: '', doubtful: ['parts', 'lymphatics'], reviewNote: 'Check angles of anteversion/anteflexion and dimensions quoted in your textbook.',
  description: 'Hollow, thick-walled, pear-shaped muscular organ.',
  location: 'Lesser pelvis, between the bladder in front and the rectum behind.',
  parts: [
    'Fundus, body, isthmus, cervix (supravaginal and vaginal parts)',
    'About 7.5 × 5 × 2.5 cm in the nulliparous adult',
    'Normal position: anteverted (long axis of uterus forward on the vagina) and anteflexed (body bent forward on the cervix)',
    'Supports — muscular: pelvic diaphragm ([[pp-musc-levator-ani]]), perineal body, urogenital diaphragm; ligamentous: transverse cervical (cardinal / Mackenrodt’s), uterosacral, pubocervical; secondary: broad and round ligaments'
  ],
  organ: {
    bloodSupply: '[[pp-art-uterine]] (from internal iliac), anastomosing with the ovarian artery. Veins: uterine venous plexus → internal iliac veins.',
    nerveSupply: 'Inferior hypogastric (uterovaginal) plexus: sympathetic (lower thoracic–upper lumbar) — pain from the body; parasympathetic (S2–S4) — pain from the cervix.',
    lymphatics: 'Fundus → para-aortic nodes (with ovarian vessels), and some along the round ligament → superficial inguinal nodes. Body → external iliac nodes. Cervix → external iliac, internal iliac and sacral nodes.'
  },
  relations: [
    { dir: 'anterior', text: 'Urinary bladder (vesicouterine pouch).', ref: 'pp-organ-bladder' },
    { dir: 'posterior', text: 'Rectouterine pouch (with ileum/sigmoid) and rectum.', ref: 'pp-space-rectouterine-pouch' },
    { dir: 'lateral', text: 'Broad ligament with uterine vessels; ureter about 2 cm lateral to the supravaginal cervix, crossed above by the uterine artery.', ref: 'pp-art-uterine' }
  ],
  clinical: [
    { title: 'Uterine prolapse:', text: 'From weakness of the pelvic floor and cervical ligaments (e.g. after childbirth).' },
    { title: 'Hysterectomy:', text: 'Ureter at risk when clamping the uterine artery.' },
    { title: 'Fibroids (leiomyomas):', text: 'Common benign tumours of the myometrium.' }
  ],
  highYield: ['Transverse cervical (cardinal) ligament is the main ligamentous support.'],
  mnemonics: []
},
{
  id: 'pp-organ-ovary',
  name: 'Ovary',
  aka: [],
  type: 'organ',
  system: ['urogenital', 'endocrine'],
  region: 'pelvis-perineum',
  zones: ['female'],
  verified: false, source: '', doubtful: ['nerveSupply'], reviewNote: '',
  description: 'Female gonad producing ova and hormones.',
  location: 'Ovarian fossa on the lateral pelvic wall (in nulliparous women).',
  parts: [
    'Tubal and uterine poles; medial and lateral surfaces; mesovarian and free borders',
    'Attachments: mesovarium (to broad ligament), suspensory ligament (infundibulopelvic — carries ovarian vessels), ligament of ovary (to uterus)'
  ],
  organ: {
    bloodSupply: 'Ovarian artery (from abdominal aorta at about L2), anastomosing with the uterine artery. Veins: pampiniform plexus → ovarian vein: right → IVC; left → left renal vein.',
    nerveSupply: 'Ovarian plexus (sympathetic, about T10–T11 segments; parasympathetic from pelvic plexus).',
    lymphatics: 'Lateral aortic (para-aortic) nodes.'
  },
  relations: [
    { dir: 'ovarian fossa', text: 'Bounded in front by the obliterated umbilical artery and behind by the ureter and internal iliac artery; obturator nerve and vessels in its floor.', ref: 'pp-art-internal-iliac' }
  ],
  clinical: [
    { title: 'Referred pain to medial thigh:', text: 'Ovarian disease can irritate the obturator nerve in the floor of the ovarian fossa.' },
    { title: 'Ovarian tumours:', text: 'Spread to para-aortic nodes; also transcoelomic spread in the peritoneal cavity.' }
  ],
  highYield: ['Surface covered by germinal (cuboidal) epithelium, not peritoneum.'],
  mnemonics: []
},
{
  id: 'pp-organ-uterine-tube',
  name: 'Uterine tube',
  aka: ['Fallopian tube', 'Oviduct'],
  type: 'organ',
  system: ['urogenital'],
  region: 'pelvis-perineum',
  zones: ['female'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Tube (about 10 cm) conveying the ovum from the ovary to the uterus.',
  location: 'In the upper free border of the broad ligament (mesosalpinx).',
  parts: [
    'Infundibulum — with fimbriae (one ovarian fimbria attached to the ovary)',
    'Ampulla — longest and widest part; usual site of fertilisation',
    'Isthmus — narrow part next to the uterus',
    'Intramural (uterine) part — within the uterine wall'
  ],
  organ: {
    bloodSupply: 'Uterine and ovarian arteries.',
    nerveSupply: 'Ovarian and uterine (pelvic) autonomic plexuses.',
    lymphatics: 'Para-aortic nodes (with ovarian lymphatics).'
  },
  relations: [],
  clinical: [
    { title: 'Ectopic (tubal) pregnancy:', text: 'Commonest in the ampulla; rupture causes haemoperitoneum collecting in the rectouterine pouch.' },
    { title: 'Salpingitis:', text: 'The tube opens into the peritoneal cavity, so infection can spread from the genital tract to the peritoneum.' },
    { title: 'Tubal ligation:', text: 'Method of female sterilisation.' }
  ],
  highYield: ['Ampulla: fertilisation and most ectopic pregnancies.'],
  mnemonics: []
}
]);
