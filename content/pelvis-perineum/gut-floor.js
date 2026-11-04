// PELVIS & PERINEUM — RECTUM, ANAL CANAL, PELVIC FLOOR, BONY PELVIS
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/pelvis-perineum/gut-floor.js', [
{
  id: 'pp-organ-rectum',
  name: 'Rectum',
  aka: [],
  type: 'organ',
  system: ['digestive'],
  region: 'pelvis-perineum',
  zones: ['rectum'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check length and peritoneal-covering details against your textbook.',
  description: 'Part of the large intestine between the sigmoid colon and anal canal (about 12 cm).',
  location: 'Posterior part of the lesser pelvis, in front of the sacrum and coccyx.',
  parts: [
    'Begins at S3 as the continuation of the sigmoid colon; ends 2–3 cm in front of and below the tip of the coccyx, becoming the anal canal where it passes through the pelvic diaphragm (puborectalis sling)',
    'Curvatures: sacral (anteroposterior) and lateral curves; transverse rectal folds (of Houston), usually three — the middle one, on the right, is the largest and most constant',
    'Lower dilated part: rectal ampulla',
    'No taeniae coli, sacculations, appendices epiploicae or mesentery',
    'Peritoneum: upper third — front and sides; middle third — front only; lower third — none'
  ],
  organ: {
    bloodSupply: 'Superior rectal artery (continuation of [[ab-art-ima]]) — main supply; middle rectal (internal iliac); median sacral. Veins: superior rectal → inferior mesenteric (portal); middle and inferior rectal → systemic (a portosystemic anastomosis).',
    nerveSupply: 'Sympathetic via the hypogastric plexuses; parasympathetic from [[pp-nerve-pelvic-splanchnic]] (S2–S4). Sensitive to distension only.',
    lymphatics: 'Pararectal nodes → inferior mesenteric nodes (along superior rectal vessels); lower part → internal iliac nodes.'
  },
  relations: [
    { dir: 'anterior (male)', text: 'Rectovesical pouch (with ileum/sigmoid), base of bladder, seminal vesicles, ductus deferens, prostate.', ref: 'pp-organ-prostate' },
    { dir: 'anterior (female)', text: 'Rectouterine pouch, vagina and cervix.', ref: 'pp-space-rectouterine-pouch' },
    { dir: 'posterior', text: 'Sacrum, coccyx, median sacral vessels, sacral plexus, sympathetic trunks.', ref: 'pp-nerve-sacral-plexus' }
  ],
  clinical: [
    { title: 'Per rectal examination:', text: 'Palpates the prostate/cervix, rectouterine or rectovesical pouch and the rectal wall.' },
    { title: 'Rectal carcinoma:', text: 'Spreads to inferior mesenteric and internal iliac nodes.' }
  ],
  highYield: ['Lower third has no peritoneal covering.'],
  mnemonics: []
},
{
  id: 'pp-organ-anal-canal',
  name: 'Anal canal',
  aka: [],
  type: 'organ',
  system: ['digestive'],
  region: 'pelvis-perineum',
  zones: ['rectum', 'perineum'],
  verified: false, source: '', doubtful: ['parts', 'lymphatics'], reviewNote: 'Check zone lengths and the lymph drainage of the upper part.',
  description: 'Terminal part of the large intestine (about 3.8 cm), directed downward and backward.',
  location: 'Perineum (anal triangle), from the anorectal junction to the anus.',
  parts: [
    'Upper part (above the pectinate line): anal columns and valves; endodermal, lined by columnar epithelium',
    'Middle part (pecten / transitional zone): stratified squamous non-keratinised, ends at the white line (of Hilton)',
    'Lower part: true skin',
    'Sphincters: internal (involuntary smooth muscle), external (voluntary, [[pp-musc-external-anal-sphincter]]), puborectalis; together form the anorectal ring'
  ],
  organ: {
    bloodSupply: 'Above the pectinate line: superior rectal artery; below: inferior rectal artery (from [[pp-art-internal-pudendal]]). Veins likewise: above → portal; below → systemic.',
    nerveSupply: 'Above the pectinate line: autonomic (insensitive to pain). Below: somatic — inferior rectal nerve (from [[pp-nerve-pudendal]]) — pain-sensitive.',
    lymphatics: 'Above the pectinate line → internal iliac (and inferior mesenteric) nodes; below → superficial inguinal nodes.'
  },
  relations: [
    { dir: 'lateral', text: 'Ischioanal fossae.', ref: 'pp-space-ischioanal-fossa' }
  ],
  clinical: [
    { title: 'Internal haemorrhoids:', text: 'Above the pectinate line — painless bleeding; classically at 3, 7 and 11 o’clock (lithotomy position).' },
    { title: 'External haemorrhoids / fissure:', text: 'Below the pectinate line — painful. Fissures are commonest in the posterior midline.' },
    { title: 'Carcinoma below the pectinate line:', text: 'Spreads to superficial inguinal nodes.' }
  ],
  highYield: ['Pectinate line divides: epithelium, arterial supply, venous drainage, nerve supply and lymph drainage.'],
  mnemonics: []
},
{
  id: 'pp-musc-levator-ani',
  name: 'Levator ani',
  aka: ['Pelvic diaphragm (with coccygeus)'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'pelvis-perineum',
  zones: ['walls'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Broad muscular sheet forming most of the pelvic floor.',
  location: 'Floor of the pelvis, between the pelvic cavity and the perineum.',
  parts: ['Pubococcygeus (including puborectalis, and levator prostatae / pubovaginalis)', 'Iliococcygeus', 'Coccygeus (ischiococcygeus) completes the pelvic diaphragm behind'],
  muscle: {
    origin: ['Back of the body of the pubis', 'Tendinous arch of the obturator fascia (white line)', 'Ischial spine'],
    insertion: ['Perineal body', 'Anococcygeal raphe (ligament) and coccyx', 'Walls of prostate/vagina, rectum and anal canal'],
    nerveSupply: 'Nerve to levator ani (S4) on its pelvic surface; inferior rectal branch of [[pp-nerve-pudendal]] on its perineal surface',
    bloodSupply: 'Inferior gluteal, inferior vesical and internal pudendal arteries',
    action: ['Supports the pelvic viscera', 'Resists rises in intra-abdominal pressure (coughing, straining)', 'Puborectalis maintains the anorectal angle — faecal continence', 'Sphincter action on vagina; guides rotation of the fetal head in labour']
  },
  relations: [
    { dir: 'below', text: 'Ischioanal fossa.', ref: 'pp-space-ischioanal-fossa' }
  ],
  clinical: [
    { title: 'Childbirth injury:', text: 'Weakening of the pelvic floor → uterine/vaginal prolapse and stress incontinence.' }
  ],
  highYield: ['Puborectalis sling forms the anorectal angle.'],
  mnemonics: []
},
{
  id: 'pp-musc-external-anal-sphincter',
  name: 'External anal sphincter',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal', 'digestive'],
  region: 'pelvis-perineum',
  zones: ['perineum', 'rectum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Voluntary sphincter around the lower anal canal.',
  location: 'Anal triangle of the perineum.',
  parts: ['Subcutaneous part', 'Superficial part', 'Deep part (blends with puborectalis)'],
  muscle: {
    origin: ['Superficial part: tip of coccyx and anococcygeal ligament'],
    insertion: ['Perineal body'],
    nerveSupply: 'Inferior rectal nerve (branch of [[pp-nerve-pudendal]], S2–S4) and perineal branch of S4',
    bloodSupply: 'Inferior rectal artery',
    action: ['Voluntary closure of the anal canal']
  },
  relations: [
    { dir: 'deep', text: 'Internal anal sphincter.', ref: 'pp-organ-anal-canal' }
  ],
  clinical: [
    { title: 'Obstetric (3rd-degree) perineal tear:', text: 'Damage may cause faecal incontinence.' }
  ],
  highYield: ['Voluntary (somatic) — pudendal nerve.'],
  mnemonics: []
},
{
  id: 'pp-bone-pelvis',
  name: 'Bony pelvis',
  aka: ['Pelvic girdle'],
  type: 'bone',
  system: ['musculoskeletal'],
  region: 'pelvis-perineum',
  zones: ['walls'],
  verified: false, source: '', doubtful: ['features'], reviewNote: 'Ossification left blank. Check sex-difference values (e.g. subpubic angle) against your textbook.',
  description: 'Basin-shaped ring of bones connecting the vertebral column to the lower limbs.',
  location: 'Lower trunk.',
  parts: ['Two hip bones (ilium, ischium, pubis fused at the acetabulum)', 'Sacrum', 'Coccyx'],
  bone: {
    features: [
      'Joints: sacroiliac, pubic symphysis, sacrococcygeal, lumbosacral',
      'Pelvic brim (inlet): sacral promontory, ala of sacrum, arcuate line, pectineal line, pubic crest, upper border of symphysis — divides greater (false) from lesser (true) pelvis',
      'Sex differences (female vs male): wider, more circular inlet; wider subpubic angle (about 80–85° vs 50–60°); wider greater sciatic notch; shorter, wider, less curved sacrum; everted ischial tuberosities; smaller acetabulum; triangular (vs oval) obturator foramen'
    ],
    attachments: [
      'Sacrotuberous and sacrospinous ligaments convert the sciatic notches into the greater and lesser sciatic foramina',
      'Obturator foramen closed by the obturator membrane (obturator canal above)',
      'Pelvic floor ([[pp-musc-levator-ani]]) attached around the lesser pelvis'
    ],
    ossification: ''
  },
  relations: [],
  clinical: [
    { title: 'Pelvic fractures:', text: 'May injure the bladder, membranous urethra, and pelvic vessels (major haemorrhage).' },
    { title: 'Obstetrics:', text: 'Shape and diameters of the female pelvis determine the course of labour.' }
  ],
  highYield: ['Greater sciatic foramen: piriformis, with structures above and below it.'],
  mnemonics: []
}
]);
