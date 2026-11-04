// ABDOMEN — KIDNEY, URETER, SUPRARENAL
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/abdomen/urinary-endocrine.js', [
{
  id: 'ab-organ-kidney',
  name: 'Kidney',
  aka: [],
  type: 'organ',
  system: ['urogenital'],
  region: 'abdomen',
  zones: ['retro'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Paired bean-shaped excretory organs.',
  location: 'Retroperitoneal on the posterior abdominal wall, about T12–L3; right kidney slightly lower than left.',
  parts: [
    'About 11 × 6 × 3 cm, ~150 g',
    'Cortex, medulla (renal pyramids), sinus, pelvis; hilum at about L1 (transpyloric plane)',
    'Hilum structures (front to back): renal vein, renal artery, renal pelvis',
    'Coverings (inside out): fibrous capsule, perirenal fat, renal fascia (Gerota’s), pararenal fat'
  ],
  organ: {
    bloodSupply: 'Renal artery (from abdominal aorta at about L1/L2), dividing into segmental end-arteries. Renal vein → IVC; the left renal vein is longer, crosses in front of the aorta just below the SMA, and receives the left gonadal and left suprarenal veins.',
    nerveSupply: 'Renal plexus — sympathetic (lower thoracic and upper lumbar segments); pain referred from loin to groin.',
    lymphatics: 'Lateral aortic (para-aortic) nodes.'
  },
  relations: [
    { dir: 'anterior (right)', text: 'Right suprarenal, liver, 2nd part of duodenum, right colic flexure, small intestine.', ref: 'ab-organ-duodenum' },
    { dir: 'anterior (left)', text: 'Left suprarenal, spleen, stomach, pancreas, left colic flexure, jejunum.', ref: 'ab-organ-spleen' },
    { dir: 'posterior (both)', text: 'Diaphragm, psoas major, quadratus lumborum, transversus abdominis; subcostal vessels and nerve, iliohypogastric and ilioinguinal nerves; 12th rib (right), 11th and 12th ribs (left).', ref: 'ab-musc-psoas-major' }
  ],
  clinical: [
    { title: 'Renal angle tenderness:', text: 'Between the 12th rib and lateral border of erector spinae — in pyelonephritis/perinephric abscess.' },
    { title: 'Nutcracker phenomenon:', text: 'Compression of the left renal vein between the SMA and aorta; can cause left varicocele.' }
  ],
  highYield: ['Hilum order (front to back): vein, artery, pelvis.', 'Left kidney is higher.'],
  mnemonics: []
},
{
  id: 'ab-organ-ureter',
  name: 'Ureter',
  aka: [],
  type: 'organ',
  system: ['urogenital'],
  region: 'abdomen',
  zones: ['retro'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: 'Pelvic part to be detailed under Pelvis & perineum.',
  description: 'Muscular tube carrying urine from the renal pelvis to the bladder (about 25 cm).',
  location: 'Abdominal part on psoas major; pelvic part on the lateral pelvic wall.',
  parts: [
    'Begins at the pelviureteric junction; descends on psoas major, crossed anteriorly by the gonadal vessels',
    'Enters the pelvis by crossing the bifurcation of the common iliac artery, in front of the sacroiliac joint',
    'Constrictions: pelviureteric junction, pelvic brim, intramural (vesicoureteric) part'
  ],
  organ: {
    bloodSupply: 'Segmental branches from renal, gonadal, abdominal aorta, common and internal iliac, and vesical (and uterine) arteries, forming a longitudinal anastomosis in the adventitia.',
    nerveSupply: 'Sympathetic (lower thoracic–upper lumbar segments) and parasympathetic fibres; pain referred from loin to groin.',
    lymphatics: 'Lateral aortic and iliac nodes.'
  },
  relations: [
    { dir: 'anterior (abdomen)', text: 'Gonadal vessels cross it; on the right also duodenum (2nd part), root of mesentery; on the left, sigmoid mesocolon.', ref: '' }
  ],
  clinical: [
    { title: 'Ureteric colic:', text: 'Stones lodge at the constrictions; severe loin-to-groin pain.' },
    { title: 'Surgical injury:', text: 'At risk in hysterectomy where the uterine artery crosses above it (“water under the bridge”).' }
  ],
  highYield: ['Three constrictions: PUJ, pelvic brim, vesicoureteric junction.'],
  mnemonics: [{ text: 'Water under the bridge', meaning: 'Ureter (water) passes under the uterine artery (bridge)' }]
},
{
  id: 'ab-organ-suprarenal',
  name: 'Suprarenal gland',
  aka: ['Adrenal gland'],
  type: 'organ',
  system: ['endocrine'],
  region: 'abdomen',
  zones: ['retro'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Paired endocrine gland capping the upper pole of each kidney.',
  location: 'Retroperitoneal, superomedial to each kidney, within the renal fascia.',
  parts: [
    'Right: triangular/pyramidal; left: semilunar',
    'Cortex: zona glomerulosa (mineralocorticoids — aldosterone), zona fasciculata (glucocorticoids — cortisol), zona reticularis (sex steroids)',
    'Medulla: adrenaline and noradrenaline (modified sympathetic ganglion)'
  ],
  organ: {
    bloodSupply: 'Superior (from inferior phrenic), middle (from aorta) and inferior (from renal) suprarenal arteries. Single vein: right → IVC; left → left renal vein.',
    nerveSupply: 'Preganglionic sympathetic fibres (via splanchnic nerves and coeliac plexus) directly to medullary chromaffin cells.',
    lymphatics: 'Lateral aortic nodes.'
  },
  relations: [
    { dir: 'anterior (right)', text: 'IVC and bare area of liver.', ref: 'ab-vein-ivc' },
    { dir: 'anterior (left)', text: 'Stomach (across lesser sac), pancreas, splenic artery.', ref: 'ab-organ-pancreas' }
  ],
  clinical: [
    { title: 'Phaeochromocytoma:', text: 'Medullary tumour causing paroxysmal hypertension.' },
    { title: 'Adrenalectomy:', text: 'Right suprarenal vein is very short and drains directly into the IVC — a surgical hazard.' }
  ],
  highYield: ['Medulla receives preganglionic sympathetic fibres directly.'],
  mnemonics: [{ text: 'GFR — Salt, Sugar, Sex', meaning: 'Glomerulosa (aldosterone), Fasciculata (cortisol), Reticularis (androgens)' }]
}
]);
