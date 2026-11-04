// PELVIS & PERINEUM — BLADDER AND MALE ORGANS
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/pelvis-perineum/urinary-male.js', [
{
  id: 'pp-organ-bladder',
  name: 'Urinary bladder',
  aka: [],
  type: 'organ',
  system: ['urogenital'],
  region: 'pelvis-perineum',
  zones: ['bladder'],
  verified: false, source: '', doubtful: ['nerveSupply'], reviewNote: '',
  description: 'Muscular reservoir of urine.',
  location: 'Empty: in the lesser pelvis behind the pubic symphysis. Full: rises into the abdomen, extraperitoneally, stripping peritoneum off the anterior abdominal wall.',
  parts: [
    'Apex, base (fundus), superior surface, two inferolateral surfaces, neck',
    'Trigone: smooth triangular area of the base between the two ureteric orifices and the internal urethral orifice'
  ],
  organ: {
    bloodSupply: 'Superior vesical artery (from the umbilical part of the internal iliac); inferior vesical artery (male) or vaginal artery (female). Veins form the vesical venous plexus → internal iliac veins.',
    nerveSupply: 'Parasympathetic: [[pp-nerve-pelvic-splanchnic]] (S2–S4) — contract the detrusor (micturition). Sympathetic: lower thoracic–upper lumbar segments — in the male, contract the bladder neck during ejaculation. Somatic: [[pp-nerve-pudendal]] to the external urethral sphincter.',
    lymphatics: 'External and internal iliac nodes.'
  },
  relations: [
    { dir: 'base (male)', text: 'Seminal vesicles, ductus deferens, rectovesical pouch and rectum.', ref: 'pp-organ-rectum' },
    { dir: 'base (female)', text: 'Cervix of uterus and vagina.', ref: 'pp-organ-uterus' },
    { dir: 'neck (male)', text: 'Rests on the prostate.', ref: 'pp-organ-prostate' },
    { dir: 'inferolateral', text: 'Retropubic space (of Retzius), levator ani, obturator internus.', ref: 'pp-musc-levator-ani' }
  ],
  clinical: [
    { title: 'Suprapubic cystostomy / aspiration:', text: 'Possible without entering the peritoneal cavity when the bladder is full.' },
    { title: 'Rupture:', text: 'Intraperitoneal (full bladder, blow to lower abdomen) or extraperitoneal (pelvic fracture).' },
    { title: 'Neurogenic bladder:', text: 'Spinal cord lesions above the sacral segments → automatic (reflex) bladder; lesions of sacral segments/nerves → autonomous (atonic) bladder.' }
  ],
  highYield: ['Trigone mucosa is smooth and firmly attached.'],
  mnemonics: []
},
{
  id: 'pp-organ-male-urethra',
  name: 'Male urethra',
  aka: [],
  type: 'organ',
  system: ['urogenital'],
  region: 'pelvis-perineum',
  zones: ['male', 'perineum'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check part lengths against your textbook.',
  description: 'Common passage for urine and semen, about 18–20 cm long.',
  location: 'From the internal urethral orifice through the prostate, deep perineal pouch and penis to the external urethral meatus.',
  parts: [
    'Preprostatic (intramural) part — in the bladder neck',
    'Prostatic part (about 3 cm) — widest and most dilatable; urethral crest, seminal colliculus with openings of the prostatic utricle and ejaculatory ducts; prostatic ducts open into the prostatic sinuses',
    'Membranous part (about 1.5–2 cm) — in the deep perineal pouch, surrounded by the external urethral sphincter; narrowest and least dilatable part apart from the external meatus',
    'Spongy (penile) part (about 15 cm) — in the corpus spongiosum; receives bulbourethral gland ducts; navicular fossa near the external meatus'
  ],
  organ: {
    bloodSupply: 'Inferior vesical and middle rectal arteries (prostatic part); branches of the [[pp-art-internal-pudendal]] (membranous and spongy parts).',
    nerveSupply: 'Prostatic plexus (autonomic); [[pp-nerve-pudendal]] (external sphincter and sensation).',
    lymphatics: 'Prostatic and membranous parts → internal iliac nodes; spongy part → deep inguinal nodes.'
  },
  relations: [],
  clinical: [
    { title: 'Rupture of bulbar (spongy) urethra:', text: 'Fall-astride injury; urine extravasates into the [[pp-space-superficial-perineal-pouch]] and spreads to the scrotum, penis and anterior abdominal wall, but not into the thighs.' },
    { title: 'Rupture of membranous urethra:', text: 'With pelvic fractures; extravasation into the deep pouch and extraperitoneal pelvic tissue.' },
    { title: 'Catheterisation:', text: 'Must follow the curves of the urethra; the external meatus is the narrowest point.' }
  ],
  highYield: ['Widest: prostatic part. Narrowest: external meatus, then membranous part.'],
  mnemonics: []
},
{
  id: 'pp-organ-prostate',
  name: 'Prostate',
  aka: [],
  type: 'organ',
  system: ['urogenital'],
  region: 'pelvis-perineum',
  zones: ['male'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Lobes vs zones are described differently in texts — confirm your textbook’s version.',
  description: 'Fibromuscular glandular organ surrounding the prostatic urethra.',
  location: 'Lesser pelvis, below the bladder neck, above the deep perineal pouch, behind the pubic symphysis and in front of the rectum.',
  parts: [
    'Base (above), apex (below), anterior, posterior and inferolateral surfaces',
    'Lobes: anterior (isthmus), median (between urethra and ejaculatory ducts), posterior, and two lateral lobes',
    'Zones (McNeal): peripheral (largest; site of most carcinomas), central, transition (site of benign hyperplasia), anterior fibromuscular stroma',
    'True capsule and false capsule (prostatic sheath of pelvic fascia), with the prostatic venous plexus between them'
  ],
  organ: {
    bloodSupply: 'Inferior vesical, middle rectal and internal pudendal arteries. Veins: prostatic venous plexus → internal iliac veins; communicates with the vertebral venous plexus.',
    nerveSupply: 'Prostatic plexus from the inferior hypogastric plexus (sympathetic and parasympathetic).',
    lymphatics: 'Internal iliac and sacral nodes (some to external iliac).'
  },
  relations: [
    { dir: 'posterior', text: 'Rectum (ampulla), separated by the rectovesical fascia (of Denonvilliers) — palpable on rectal examination.', ref: 'pp-organ-rectum' },
    { dir: 'superior', text: 'Neck of bladder.', ref: 'pp-organ-bladder' },
    { dir: 'inferior', text: 'Deep perineal pouch / external urethral sphincter.', ref: 'pp-space-deep-perineal-pouch' },
    { dir: 'inferolateral', text: 'Levator ani (levator prostatae fibres).', ref: 'pp-musc-levator-ani' }
  ],
  clinical: [
    { title: 'Benign prostatic hyperplasia:', text: 'Mainly transition zone / median lobe; obstructs urine outflow.' },
    { title: 'Carcinoma prostate:', text: 'Mainly peripheral zone (posterior) — felt as a hard nodule per rectum; spreads to the vertebrae via the vertebral venous plexus (Batson).' }
  ],
  highYield: ['BPH: transition zone. Carcinoma: peripheral zone.'],
  mnemonics: []
},
{
  id: 'pp-organ-testis',
  name: 'Testis',
  aka: ['Testicle'],
  type: 'organ',
  system: ['urogenital', 'endocrine'],
  region: 'pelvis-perineum',
  zones: ['male'],
  verified: false, source: '', doubtful: ['nerveSupply'], reviewNote: '',
  description: 'Male gonad producing spermatozoa and testosterone.',
  location: 'Scrotum, suspended by the spermatic cord; the left usually hangs lower.',
  parts: [
    'Coverings: tunica vaginalis (parietal and visceral layers), tunica albuginea, tunica vasculosa',
    'Lobules of seminiferous tubules → straight tubules → rete testis → efferent ductules → epididymis (head, body, tail) → [[pp-organ-ductus-deferens]]'
  ],
  organ: {
    bloodSupply: '[[pp-art-testicular]] (from abdominal aorta). Veins form the pampiniform plexus → testicular vein: right → IVC; left → left renal vein.',
    nerveSupply: 'Testicular plexus (sympathetic, about T10 segment) — pain referred to the periumbilical region.',
    lymphatics: 'Lateral aortic (para-aortic) nodes at about L1/L2. Scrotal skin drains to superficial inguinal nodes.'
  },
  relations: [],
  clinical: [
    { title: 'Torsion of testis:', text: 'Surgical emergency; twisting of the spermatic cord compromises the testicular artery.' },
    { title: 'Varicocele:', text: 'Dilated pampiniform plexus; commoner on the left (left vein drains at a right angle into the left renal vein).' },
    { title: 'Testicular tumours:', text: 'Spread to para-aortic nodes (not inguinal) — testis develops in the abdomen.' },
    { title: 'Hydrocele:', text: 'Fluid in the tunica vaginalis.' }
  ],
  highYield: ['Lymph → para-aortic nodes; scrotal skin → superficial inguinal nodes.'],
  mnemonics: []
},
{
  id: 'pp-organ-ductus-deferens',
  name: 'Ductus deferens',
  aka: ['Vas deferens'],
  type: 'organ',
  system: ['urogenital'],
  region: 'pelvis-perineum',
  zones: ['male'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Thick-walled muscular tube (about 45 cm) carrying sperm from the epididymis to the ejaculatory duct.',
  location: 'Scrotum, spermatic cord, inguinal canal, lateral pelvic wall, base of bladder.',
  parts: [
    'Begins at the tail of the epididymis; ascends in the spermatic cord through the [[ab-space-inguinal-canal]]',
    'At the deep ring hooks round the lateral side of the inferior epigastric artery; crosses the external iliac vessels and runs on the lateral pelvic wall',
    'Crosses above the ureter near the bladder; dilates as the ampulla behind the bladder',
    'Joins the duct of the seminal vesicle to form the ejaculatory duct, which opens into the prostatic urethra on the seminal colliculus'
  ],
  organ: {
    bloodSupply: 'Artery to the ductus deferens (from the superior or inferior vesical artery).',
    nerveSupply: 'Sympathetic fibres from the pelvic plexus — contraction during emission.',
    lymphatics: 'External and internal iliac nodes.'
  },
  relations: [
    { dir: 'near bladder', text: 'Crosses above (in front of) the ureter.', ref: 'ab-organ-ureter' }
  ],
  clinical: [
    { title: 'Vasectomy:', text: 'Ductus is palpable as a firm cord in the spermatic cord and is divided for sterilisation.' }
  ],
  highYield: ['Ductus deferens crosses the ureter from above.'],
  mnemonics: []
}
]);
