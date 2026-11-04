// ABDOMEN — VESSELS
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/abdomen/vessels.js', [
{
  id: 'ab-art-aorta',
  name: 'Abdominal aorta',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'abdomen',
  zones: ['retro'],
  verified: false, source: '', doubtful: ['branches'], reviewNote: 'Check vertebral levels of branches.',
  description: 'Abdominal continuation of the descending aorta.',
  location: 'Posterior abdominal wall, on the lumbar vertebrae slightly left of the midline.',
  parts: [],
  artery: {
    origin: 'Continuation of the [[th-art-descending-aorta]] at the aortic opening of the diaphragm (T12).',
    course: 'Descends in front of the lumbar vertebrae and ends at L4 by dividing into the right and left common iliac arteries (surface marking: about level with the umbilicus, slightly to the left).',
    branches: [
      'Ventral (unpaired): [[ab-art-coeliac]] (T12), [[ab-art-sma]] (L1), [[ab-art-ima]] (L3)',
      'Lateral (paired): inferior phrenic, middle suprarenal, renal (L1/L2), gonadal (L2)',
      'Dorsal: lumbar arteries (four pairs), median sacral artery'
    ],
    territory: 'Abdominal viscera, abdominal walls, and (via common iliacs) the pelvis and lower limbs.'
  },
  relations: [
    { dir: 'anterior', text: 'Coeliac plexus, body of pancreas, splenic vein, left renal vein, 3rd part of duodenum, root of mesentery.', ref: 'ab-organ-pancreas' },
    { dir: 'right', text: 'IVC, right crus, cisterna chyli (above).', ref: 'ab-vein-ivc' }
  ],
  clinical: [
    { title: 'Abdominal aortic aneurysm:', text: 'Usually infrarenal; pulsatile expansile mass; rupture is life-threatening.' }
  ],
  highYield: ['Ends at L4; unpaired gut arteries at T12, L1, L3.'],
  mnemonics: []
},
{
  id: 'ab-art-coeliac',
  name: 'Coeliac trunk',
  aka: ['Celiac trunk', 'Coeliac axis'],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'abdomen',
  zones: ['retro', 'stomach'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Artery of the foregut; a short wide trunk (about 1.25 cm).',
  location: 'Front of the aorta, just below the aortic opening, above the pancreas.',
  parts: [],
  artery: {
    origin: 'Front of the abdominal aorta at T12, just below the aortic opening of the diaphragm.',
    course: 'Runs forward for about 1.25 cm, surrounded by the coeliac plexus, and divides into three branches.',
    branches: [
      'Left gastric artery',
      'Common hepatic artery → gastroduodenal, (right gastric), proper hepatic arteries',
      'Splenic artery → pancreatic, short gastric, left gastro-epiploic branches'
    ],
    territory: 'Foregut derivatives from the abdominal oesophagus to the 2nd part of duodenum (to the major papilla); liver, gallbladder, part of pancreas; also the spleen.'
  },
  relations: [
    { dir: 'around', text: 'Coeliac plexus and coeliac lymph nodes.', ref: '' },
    { dir: 'inferior', text: 'Upper border of pancreas.', ref: 'ab-organ-pancreas' }
  ],
  clinical: [
    { title: 'Median arcuate ligament syndrome:', text: 'Compression of the coeliac trunk by the median arcuate ligament.' }
  ],
  highYield: ['Three branches: left gastric, common hepatic, splenic.'],
  mnemonics: []
},
{
  id: 'ab-art-sma',
  name: 'Superior mesenteric artery',
  aka: ['SMA'],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'abdomen',
  zones: ['retro', 'intestines'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Artery of the midgut.',
  location: 'Behind the pancreas, then in the root of the mesentery.',
  parts: [],
  artery: {
    origin: 'Front of the abdominal aorta at L1, about 1 cm below the coeliac trunk.',
    course: 'Passes behind the neck of the pancreas, then forward over the uncinate process, the left renal vein and the 3rd part of the duodenum, and enters the root of the mesentery, running toward the right iliac fossa.',
    branches: ['Inferior pancreaticoduodenal artery', 'Jejunal and ileal arteries (from its left side)', 'Ileocolic artery (→ appendicular artery)', 'Right colic artery', 'Middle colic artery'],
    territory: 'Midgut: duodenum below the major papilla to the junction of the proximal two-thirds and distal one-third of the transverse colon.'
  },
  relations: [
    { dir: 'posterior', text: 'Left renal vein, uncinate process, 3rd part of duodenum.', ref: 'ab-organ-duodenum' },
    { dir: 'right', text: 'Superior mesenteric vein.', ref: 'ab-vein-portal' }
  ],
  clinical: [
    { title: 'Acute mesenteric ischaemia:', text: 'Embolism (often lodging past the middle colic origin) causes gut infarction; pain out of proportion to signs.' },
    { title: 'SMA syndrome:', text: 'Narrow aorto-mesenteric angle compresses the duodenum.' }
  ],
  highYield: ['Left renal vein and 3rd part of duodenum lie between SMA and aorta.'],
  mnemonics: []
},
{
  id: 'ab-art-ima',
  name: 'Inferior mesenteric artery',
  aka: ['IMA'],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'abdomen',
  zones: ['retro', 'intestines'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Artery of the hindgut.',
  location: 'Posterior abdominal wall, left side, behind the peritoneum.',
  parts: [],
  artery: {
    origin: 'Front of the abdominal aorta at L3, behind the 3rd part of the duodenum, about 4 cm above the aortic bifurcation.',
    course: 'Descends to the left behind the peritoneum, crosses the left common iliac artery, and continues into the pelvis as the superior rectal artery.',
    branches: ['Left colic artery', 'Sigmoid arteries (2–4)', 'Superior rectal artery (continuation)'],
    territory: 'Hindgut: distal one-third of transverse colon to the upper part of the anal canal (above the pectinate line).'
  },
  relations: [],
  clinical: [
    { title: 'Colorectal surgery:', text: 'Ligated in left-sided colon and rectal cancer resections; viability then depends on the marginal artery.' }
  ],
  highYield: ['Superior rectal artery is its continuation.'],
  mnemonics: []
},
{
  id: 'ab-vein-portal',
  name: 'Portal vein',
  aka: ['Hepatic portal vein'],
  type: 'vein',
  system: ['cardiovascular', 'digestive'],
  region: 'abdomen',
  zones: ['liver', 'pancreas'],
  verified: false, source: '', doubtful: ['origin'], reviewNote: 'Check vertebral level of formation in your textbook.',
  description: 'Valveless vein carrying blood from the abdominal gut, spleen, pancreas and gallbladder to the liver (about 8 cm).',
  location: 'Behind the neck of pancreas → behind 1st part of duodenum → free border of lesser omentum → porta hepatis.',
  parts: [],
  vein: {
    origin: 'Union of the superior mesenteric and splenic veins behind the neck of the pancreas (about L1/L2).',
    course: 'Ascends behind the 1st part of the duodenum, then in the free border of the lesser omentum (behind the bile duct and hepatic artery), in front of the epiploic foramen, to the porta hepatis.',
    tributaries: ['Splenic vein (usually receives the inferior mesenteric vein)', 'Superior mesenteric vein', 'Left and right gastric veins', 'Cystic veins', 'Paraumbilical veins', 'Superior pancreaticoduodenal vein'],
    termination: 'Divides into right and left branches at the porta hepatis, ending in the hepatic sinusoids.',
    territory: 'Abdominal part of the alimentary canal (lower oesophagus to upper anal canal), spleen, pancreas, gallbladder.'
  },
  relations: [
    { dir: 'anterior (free border of lesser omentum)', text: 'Bile duct (right) and hepatic artery (left).', ref: 'ab-space-lesser-sac' },
    { dir: 'posterior', text: 'IVC, separated by the epiploic foramen.', ref: 'ab-vein-ivc' }
  ],
  clinical: [
    { title: 'Portal hypertension — portosystemic anastomoses:', text: 'Lower oesophagus (left gastric ↔ oesophageal veins of azygos) → varices; anal canal (superior rectal ↔ middle/inferior rectal); umbilicus (paraumbilical ↔ epigastric veins) → caput medusae; retroperitoneum (colic ↔ lumbar/renal veins); bare area of liver (↔ phrenic veins).' }
  ],
  highYield: ['Formed behind the neck of pancreas by SMV + splenic vein.'],
  mnemonics: []
},
{
  id: 'ab-vein-ivc',
  name: 'Inferior vena cava (abdominal part)',
  aka: ['IVC'],
  type: 'vein',
  system: ['cardiovascular'],
  region: 'abdomen',
  zones: ['retro'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest vein, returning blood from the lower body to the right atrium.',
  location: 'Posterior abdominal wall, to the right of the aorta.',
  parts: [],
  vein: {
    origin: 'Union of the right and left common iliac veins at L5, to the right of the midline.',
    course: 'Ascends on the right of the aorta, grooves the bare area of the liver, and passes through the caval opening of the diaphragm (T8).',
    tributaries: ['Common iliac veins', 'Lumbar veins (3rd and 4th)', 'Right gonadal vein', 'Renal veins', 'Right suprarenal vein', 'Inferior phrenic veins', 'Hepatic veins'],
    termination: 'Right atrium of the heart.',
    territory: 'Lower limbs, pelvis, abdominal wall and paired abdominal organs; liver via hepatic veins.'
  },
  relations: [
    { dir: 'anterior', text: 'Root of mesentery, 3rd part of duodenum, head of pancreas, bile duct, portal vein, liver.', ref: 'ab-organ-pancreas' },
    { dir: 'left', text: 'Abdominal aorta.', ref: 'ab-art-aorta' }
  ],
  clinical: [
    { title: 'IVC obstruction:', text: 'Collateral venous return via the azygos system and superficial abdominal wall veins.' }
  ],
  highYield: ['Left gonadal and left suprarenal veins drain into the left renal vein, not the IVC.'],
  mnemonics: []
}
]);
