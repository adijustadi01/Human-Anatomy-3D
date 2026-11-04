// ABDOMEN — LIVER, GALLBLADDER, PANCREAS, SPLEEN
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/abdomen/viscera.js', [
{
  id: 'ab-organ-liver',
  name: 'Liver',
  aka: ['Hepar'],
  type: 'organ',
  system: ['digestive'],
  region: 'abdomen',
  zones: ['liver'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: 'Check the arterial/portal blood-flow percentages your textbook uses.',
  description: 'Largest gland of the body.',
  location: 'Right hypochondrium and epigastrium, extending into the left hypochondrium; under cover of the ribs.',
  parts: [
    'Anatomical lobes: right and left (divided by the falciform ligament); caudate and quadrate lobes on the visceral surface',
    'Functional division: 8 segments (Couinaud), based on portal vein and hepatic artery branches',
    'Porta hepatis: hepatic ducts (anterior), hepatic artery (middle), portal vein (posterior)',
    'Bare area: in contact with the diaphragm, not covered by peritoneum',
    'Peritoneal folds: falciform, coronary and triangular ligaments; lesser omentum'
  ],
  organ: {
    bloodSupply: 'Dual supply: portal vein (most of the blood flow) and hepatic artery proper (oxygen-rich). Drainage by hepatic veins into the IVC.',
    nerveSupply: 'Hepatic plexus (sympathetic and vagal). Capsule: lower intercostal nerves and right phrenic nerve.',
    lymphatics: 'Hepatic nodes at the porta hepatis → coeliac nodes; some (e.g. bare area) to posterior mediastinal nodes.'
  },
  relations: [
    { dir: 'visceral surface', text: 'Stomach, duodenum, gallbladder, right colic flexure, right kidney and suprarenal, oesophagus.', ref: 'ab-organ-gallbladder' },
    { dir: 'posterior', text: 'IVC lies in a groove on the bare area.', ref: 'ab-vein-ivc' }
  ],
  clinical: [
    { title: 'Hepatorenal pouch (Morison’s pouch):', text: 'Lowest part of the peritoneal cavity (above the pelvis) in the supine position — fluid collects here.' },
    { title: 'Liver resection:', text: 'Segmental anatomy allows removal of individual segments.' },
    { title: 'Portal hypertension:', text: 'See [[ab-vein-portal]] for portosystemic anastomoses.' }
  ],
  highYield: ['Porta hepatis order (front to back): duct, artery, vein.'],
  mnemonics: []
},
{
  id: 'ab-organ-gallbladder',
  name: 'Gallbladder',
  aka: [],
  type: 'organ',
  system: ['digestive'],
  region: 'abdomen',
  zones: ['liver'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Pear-shaped reservoir that stores and concentrates bile.',
  location: 'Fossa on the visceral surface of the liver.',
  parts: [
    'Fundus, body, neck (with Hartmann’s pouch); continues as the cystic duct, which joins the common hepatic duct to form the bile duct',
    'Surface marking of fundus: tip of the right 9th costal cartilage, where the lateral border of the right rectus abdominis meets the costal margin'
  ],
  organ: {
    bloodSupply: 'Cystic artery, usually from the right hepatic artery (runs in [[ab-space-calot]]). Cystic veins drain directly into the liver or into the portal vein.',
    nerveSupply: 'Coeliac plexus (sympathetic), vagus; right phrenic nerve (peritoneal covering) — referred shoulder pain.',
    lymphatics: 'Cystic node (of Lund) in Calot’s triangle → hepatic nodes.'
  },
  relations: [
    { dir: 'posterior / inferior', text: 'Transverse colon and the 1st and 2nd parts of the duodenum.', ref: 'ab-organ-duodenum' }
  ],
  clinical: [
    { title: 'Murphy’s sign:', text: 'Inspiratory arrest on palpation below the right costal margin in acute cholecystitis.' },
    { title: 'Referred pain:', text: 'Biliary pain may radiate to the right shoulder or inferior angle of scapula.' },
    { title: 'Gallstones:', text: 'May impact in Hartmann’s pouch or the cystic duct.' }
  ],
  highYield: ['Cystic artery is located in Calot’s triangle — key in cholecystectomy.'],
  mnemonics: []
},
{
  id: 'ab-organ-pancreas',
  name: 'Pancreas',
  aka: [],
  type: 'organ',
  system: ['digestive', 'endocrine'],
  region: 'abdomen',
  zones: ['pancreas'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Mixed exocrine and endocrine (islets of Langerhans) gland.',
  location: 'Retroperitoneal across the posterior abdominal wall, roughly at L1–L2; tail reaches the splenic hilum.',
  parts: [
    'Head (within the C of the duodenum) with uncinate process; neck; body; tail (in the splenorenal ligament)',
    'Main pancreatic duct joins the bile duct to form the hepatopancreatic ampulla, opening at the major duodenal papilla; accessory duct opens at the minor papilla'
  ],
  organ: {
    bloodSupply: 'Head: superior and inferior pancreaticoduodenal arteries. Neck, body, tail: pancreatic branches of the splenic artery (incl. arteria pancreatica magna). Veins to splenic, superior mesenteric and portal veins.',
    nerveSupply: 'Vagus (secretomotor); sympathetic via coeliac plexus (vasomotor, pain).',
    lymphatics: 'Pancreaticosplenic and pancreaticoduodenal nodes → coeliac and superior mesenteric nodes.'
  },
  relations: [
    { dir: 'behind head', text: 'IVC, renal veins, bile duct (in a groove or tunnel).', ref: 'ab-vein-ivc' },
    { dir: 'behind neck', text: 'Formation of the portal vein (SMV + splenic vein).', ref: 'ab-vein-portal' },
    { dir: 'behind body', text: 'Aorta with SMA origin, left crus, left suprarenal, left kidney, splenic vein.', ref: 'ab-art-aorta' },
    { dir: 'anterior', text: 'Stomach, separated by the lesser sac.', ref: 'ab-space-lesser-sac' },
    { dir: 'uncinate process', text: 'Superior mesenteric vessels cross in front of it.', ref: 'ab-art-sma' }
  ],
  clinical: [
    { title: 'Carcinoma of head:', text: 'Compresses the bile duct → progressive obstructive jaundice.' },
    { title: 'Pancreatitis:', text: 'Epigastric pain radiating to the back; pseudocyst may form in the lesser sac.' }
  ],
  highYield: ['Neck lies in front of the portal vein formation.'],
  mnemonics: []
},
{
  id: 'ab-organ-spleen',
  name: 'Spleen',
  aka: ['Lien'],
  type: 'organ',
  system: ['lymphatic'],
  region: 'abdomen',
  zones: ['stomach'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: '',
  description: 'Largest lymphoid organ.',
  location: 'Left hypochondrium, along the 9th–11th ribs, long axis along the 10th rib; normally not palpable.',
  parts: [
    'Diaphragmatic and visceral surfaces (gastric, renal, colic impressions); notched superior border',
    'Ligaments: gastrosplenic and splenorenal (lienorenal — contains splenic vessels and tail of pancreas)',
    'Approximate dimensions: 1 × 3 × 5 inches, about 7 oz, lies under ribs 9–11 (“1-3-5-7-9-11”)'
  ],
  organ: {
    bloodSupply: 'Splenic artery (from coeliac trunk), dividing into segmental end-arteries at the hilum. Splenic vein joins the SMV behind the neck of pancreas to form the portal vein.',
    nerveSupply: 'Coeliac plexus (mainly sympathetic).',
    lymphatics: 'Pancreaticosplenic nodes.'
  },
  relations: [
    { dir: 'visceral surface', text: 'Stomach, left kidney, left colic flexure, tail of pancreas.', ref: 'ab-organ-stomach' },
    { dir: 'diaphragmatic surface', text: 'Diaphragm, separating it from pleura and lung (9th–11th ribs).', ref: '' }
  ],
  clinical: [
    { title: 'Splenic rupture:', text: 'With fractures of left lower ribs; pain may be referred to the left shoulder (Kehr’s sign).' },
    { title: 'Splenomegaly:', text: 'Enlarges downward and medially toward the right iliac fossa; the notched border helps identify it on palpation.' },
    { title: 'Post-splenectomy:', text: 'Risk of overwhelming infection with encapsulated organisms.' }
  ],
  highYield: ['Must enlarge about 2–3 times to be palpable.'],
  mnemonics: [{ text: '1, 3, 5, 7, 9, 11', meaning: '1 × 3 × 5 inches, 7 oz, ribs 9–11' }]
}
]);
