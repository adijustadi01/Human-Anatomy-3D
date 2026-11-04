// ABDOMEN — GUT (stomach, duodenum, jejunum & ileum, appendix, colon)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/abdomen/gut.js', [
{
  id: 'ab-organ-stomach',
  name: 'Stomach',
  aka: [],
  type: 'organ',
  system: ['digestive'],
  region: 'abdomen',
  zones: ['stomach'],
  verified: false, source: '', doubtful: ['lymphatics'], reviewNote: '',
  description: 'Most dilated part of the alimentary canal, between oesophagus and duodenum.',
  location: 'Left hypochondrium, epigastrium and umbilical regions.',
  parts: [
    'Cardia, fundus, body, pyloric part (pyloric antrum and canal), pylorus',
    'Lesser and greater curvatures; anterior and posterior surfaces',
    'Cardiac orifice: about T11, behind the left 7th costal cartilage; pyloric orifice: about L1 (transpyloric plane), just right of the midline'
  ],
  organ: {
    bloodSupply: 'Left gastric artery (from coeliac trunk); right gastric (from hepatic artery); right gastro-epiploic (from gastroduodenal); left gastro-epiploic and short gastric arteries (from splenic). Veins drain to the portal system.',
    nerveSupply: 'Parasympathetic: anterior and posterior vagal trunks (motor and secretomotor). Sympathetic: via coeliac plexus (vasomotor; carries pain).',
    lymphatics: 'Follows the arteries to left and right gastric, gastro-epiploic and pancreaticosplenic nodes, ultimately to coeliac nodes.'
  },
  relations: [
    { dir: 'anterior', text: 'Left lobe of liver, diaphragm, anterior abdominal wall, transverse colon.', ref: 'ab-organ-liver' },
    { dir: 'posterior (stomach bed)', text: 'Separated by the lesser sac from: diaphragm, spleen, left suprarenal, upper left kidney, splenic artery, pancreas, transverse mesocolon.', ref: 'ab-space-lesser-sac' }
  ],
  clinical: [
    { title: 'Gastric ulcer:', text: 'A posterior wall ulcer may perforate into the lesser sac or erode the splenic artery or pancreas.' },
    { title: 'Vagotomy:', text: 'Division of vagal fibres reduces acid secretion; may impair gastric emptying.' }
  ],
  highYield: ['Stomach bed structures are a favourite viva question.', 'Left gastric artery is the only direct gastric branch of the coeliac trunk.'],
  mnemonics: []
},
{
  id: 'ab-organ-duodenum',
  name: 'Duodenum',
  aka: [],
  type: 'organ',
  system: ['digestive'],
  region: 'abdomen',
  zones: ['pancreas'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check part lengths and vertebral levels against your textbook.',
  description: 'First, shortest and widest part of the small intestine; C-shaped around the head of the pancreas.',
  location: 'Mostly retroperitoneal, on the posterior abdominal wall at L1–L3.',
  parts: [
    'About 25 cm long',
    '1st (superior) part — about 5 cm, at L1; first 2.5 cm (duodenal cap) is intraperitoneal and mobile',
    '2nd (descending) part — about 7.5 cm, L1–L3; bile and main pancreatic ducts open at the major duodenal papilla; accessory duct at the minor papilla',
    '3rd (horizontal) part — about 10 cm, at L3; crossed anteriorly by the superior mesenteric vessels',
    '4th (ascending) part — about 2.5 cm, ends at the duodenojejunal flexure (about L2), suspended by the suspensory ligament (of Treitz)'
  ],
  organ: {
    bloodSupply: 'Superior pancreaticoduodenal arteries (from gastroduodenal, coeliac territory) and inferior pancreaticoduodenal artery (from [[ab-art-sma]]). Foregut/midgut junction is at the major papilla.',
    nerveSupply: 'Vagus (parasympathetic) and sympathetic fibres via coeliac and superior mesenteric plexuses.',
    lymphatics: 'Pancreaticoduodenal nodes → coeliac and superior mesenteric nodes.'
  },
  relations: [
    { dir: 'posterior (2nd part)', text: 'Right kidney (hilum), renal vessels, right ureter (beginning).', ref: 'ab-organ-kidney' },
    { dir: 'medial (2nd part)', text: 'Head of pancreas.', ref: 'ab-organ-pancreas' },
    { dir: 'anterior (3rd part)', text: 'Superior mesenteric vessels and root of mesentery.', ref: 'ab-art-sma' },
    { dir: 'posterior (3rd part)', text: 'IVC, aorta, right psoas, right ureter.', ref: 'ab-vein-ivc' }
  ],
  clinical: [
    { title: 'Duodenal ulcer:', text: 'Commonest in the first part; a posterior ulcer may erode the gastroduodenal artery causing severe haemorrhage.' },
    { title: 'Superior mesenteric artery syndrome:', text: 'Compression of the 3rd part between the SMA and aorta.' }
  ],
  highYield: ['Major papilla in the 2nd part, about 8–10 cm from the pylorus.'],
  mnemonics: []
},
{
  id: 'ab-organ-small-intestine',
  name: 'Jejunum and ileum',
  aka: ['Small intestine (mesenteric part)'],
  type: 'organ',
  system: ['digestive'],
  region: 'abdomen',
  zones: ['intestines'],
  verified: false, source: '', doubtful: ['nerveSupply'], reviewNote: '',
  description: 'Mobile, mesentery-suspended small intestine from the duodenojejunal flexure to the ileocaecal junction (several metres long).',
  location: 'Central and lower abdomen and pelvis; jejunum mostly upper left, ileum lower right.',
  parts: [
    'Jejunum: upper two-fifths — wider, thicker-walled, redder; prominent plicae circulares; 1–2 rows of arterial arcades with long vasa recta; less mesenteric fat',
    'Ileum: lower three-fifths — narrower, thinner; more arcades with short vasa recta; more mesenteric fat; Peyer’s patches',
    'Root of mesentery: about 15 cm, from the duodenojejunal flexure (left of L2) to the right sacroiliac joint'
  ],
  organ: {
    bloodSupply: 'Jejunal and ileal branches of the [[ab-art-sma]]; veins to the superior mesenteric vein.',
    nerveSupply: 'Superior mesenteric plexus (sympathetic and vagal fibres).',
    lymphatics: 'Lacteals → mesenteric nodes → superior mesenteric nodes.'
  },
  relations: [
    { dir: 'root of mesentery crosses', text: '3rd part of duodenum, aorta, IVC, right ureter, right psoas major.', ref: 'ab-organ-duodenum' }
  ],
  clinical: [
    { title: 'Meckel’s diverticulum:', text: 'Remnant of the vitello-intestinal duct on the antimesenteric border of the ileum (“rule of 2s”: ~2% of people, ~2 feet from the ileocaecal junction, ~2 inches long).' },
    { title: 'Referred pain:', text: 'Small-gut pain is felt in the periumbilical region.' }
  ],
  highYield: ['Jejunum vs ileum differences are a common viva question.'],
  mnemonics: []
},
{
  id: 'ab-organ-appendix',
  name: 'Vermiform appendix',
  aka: ['Appendix'],
  type: 'organ',
  system: ['digestive', 'lymphatic'],
  region: 'abdomen',
  zones: ['intestines'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check position frequencies your textbook quotes.',
  description: 'Narrow blind-ended tube arising from the caecum, rich in lymphoid tissue.',
  location: 'Right iliac fossa.',
  parts: [
    'Base attached to the posteromedial wall of the caecum, about 2 cm below the ileocaecal junction; the three taeniae coli converge on it',
    'Length variable (average about 9 cm)',
    'Positions: retrocaecal (commonest), pelvic, subcaecal, pre-ileal, post-ileal, paracolic',
    'Surface marking of base: McBurney’s point — junction of lateral one-third and medial two-thirds of the line from the anterior superior iliac spine to the umbilicus'
  ],
  organ: {
    bloodSupply: 'Appendicular artery (from ileocolic artery, a branch of [[ab-art-sma]]), running in the mesoappendix — an end artery.',
    nerveSupply: 'Sympathetic (T10 segment) and vagal fibres via superior mesenteric plexus.',
    lymphatics: 'Ileocolic nodes.'
  },
  relations: [],
  clinical: [
    { title: 'Appendicitis:', text: 'Pain starts periumbilically (visceral, T10) and shifts to the right iliac fossa when the parietal peritoneum is involved. Psoas sign in retrocaecal and obturator sign in pelvic positions.' },
    { title: 'Gangrene / perforation:', text: 'Appendicular artery is an end artery, so thrombosis leads to gangrene.' }
  ],
  highYield: ['Taeniae coli lead to the base — used to find it at surgery.'],
  mnemonics: []
},
{
  id: 'ab-organ-colon',
  name: 'Colon',
  aka: ['Large intestine (colon)'],
  type: 'organ',
  system: ['digestive'],
  region: 'abdomen',
  zones: ['intestines'],
  verified: false, source: '', doubtful: [], reviewNote: 'Rectum and anal canal to be detailed under Pelvis & perineum.',
  description: 'Part of the large intestine between caecum and rectum.',
  location: 'Frames the small intestine around the abdomen.',
  parts: [
    'Caecum, ascending colon, right colic (hepatic) flexure, transverse colon, left colic (splenic) flexure, descending colon, sigmoid colon',
    'Features: taeniae coli, haustrations, appendices epiploicae',
    'Transverse and sigmoid colon have a mesentery (mesocolon); ascending and descending colon are retroperitoneal'
  ],
  organ: {
    bloodSupply: 'Midgut part (up to the proximal two-thirds of transverse colon): ileocolic, right colic and middle colic branches of the [[ab-art-sma]]. Hindgut part: left colic and sigmoid branches of the [[ab-art-ima]]. Marginal artery links them. Veins to the portal system.',
    nerveSupply: 'Up to proximal two-thirds of transverse colon: vagus; beyond: pelvic splanchnic nerves (S2–S4). Sympathetic via superior and inferior mesenteric plexuses.',
    lymphatics: 'Epicolic → paracolic → intermediate → terminal (superior and inferior mesenteric) nodes.'
  },
  relations: [],
  clinical: [
    { title: 'Ischaemic colitis:', text: 'The splenic flexure is a watershed area between SMA and IMA territories.' },
    { title: 'Sigmoid volvulus:', text: 'Long sigmoid mesocolon allows twisting.' }
  ],
  highYield: ['Midgut/hindgut junction: junction of the proximal two-thirds and distal one-third of transverse colon.'],
  mnemonics: []
}
]);
