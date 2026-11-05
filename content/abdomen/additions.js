// ABDOMEN — ADDITIONS (bile duct, greater omentum)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/abdomen/additions.js', [
{
  id: 'ab-organ-bile-duct', name: 'Bile duct', aka: ['Common bile duct', 'CBD'], type: 'organ',
  system: ['digestive'], region: 'abdomen', zones: ['liver', 'pancreas'],
  verified: false, source: '', doubtful: ['parts', 'bloodSupply'], reviewNote: 'Check length/diameter and the description of its arterial supply.',
  description: 'Duct carrying bile from the liver and gallbladder to the duodenum.',
  location: 'Free border of the lesser omentum → behind the duodenum → behind the head of pancreas → wall of the 2nd part of duodenum.',
  parts: [
    'Formed by union of the common hepatic and cystic ducts; about 7.5 cm long, about 6 mm wide',
    'Supraduodenal part: in the free border of the lesser omentum, to the right of the hepatic artery, in front of the portal vein',
    'Retroduodenal part: behind the 1st part of the duodenum, gastroduodenal artery to its left',
    'Infraduodenal (pancreatic) part: in a groove or tunnel on the back of the head of pancreas',
    'Intraduodenal part: passes obliquely through the wall of the 2nd part, joins the main pancreatic duct to form the hepatopancreatic ampulla (of Vater), opening at the major duodenal papilla; sphincter of Oddi'
  ],
  organ: {
    bloodSupply: 'Small branches of the cystic, right hepatic and posterior superior pancreaticoduodenal arteries, forming a fine longitudinal plexus on the duct.',
    nerveSupply: 'Coeliac plexus (sympathetic) and vagus.',
    lymphatics: 'Hepatic nodes, including the node of the epiploic foramen.'
  },
  relations: [
    { dir: 'free border of lesser omentum', text: 'Hepatic artery to the left, portal vein behind.', ref: 'ab-vein-portal' },
    { dir: 'behind', text: 'Head of pancreas, IVC.', ref: 'ab-organ-pancreas' }
  ],
  clinical: [
    { title: 'Choledocholithiasis:', text: 'Stones cause obstructive jaundice and biliary colic; impaction at the ampulla can cause pancreatitis.' },
    { title: 'Carcinoma of head of pancreas:', text: 'Painless progressive jaundice with a palpable gallbladder (Courvoisier’s law).' },
    { title: 'ERCP:', text: 'Duct is cannulated through the major papilla.' }
  ],
  highYield: ['Four parts: supraduodenal, retroduodenal, infraduodenal (pancreatic), intraduodenal.'], mnemonics: []
},
{
  id: 'ab-organ-greater-omentum', name: 'Greater omentum', aka: [], type: 'organ',
  system: ['digestive'], region: 'abdomen', zones: ['stomach', 'intestines'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Four-layered apron-like fold of peritoneum hanging from the greater curvature of the stomach.',
  location: 'In front of the intestines, from the greater curvature of the stomach, folding back up to the transverse colon.',
  parts: ['Anterior two layers descend from the stomach and turn back as the posterior two layers to the transverse colon', 'Upper part between stomach and transverse colon: gastrocolic ligament', 'Continuous on the left with the gastrosplenic ligament'],
  organ: {
    bloodSupply: 'Epiploic branches of the right and left gastro-epiploic arteries.',
    nerveSupply: 'Autonomic fibres accompanying the vessels.',
    lymphatics: 'Gastro-epiploic nodes.'
  },
  relations: [
    { dir: 'between its layers (potential)', text: 'Lower recess of the lesser sac.', ref: 'ab-space-lesser-sac' }
  ],
  clinical: [
    { title: '“Policeman of the abdomen”:', text: 'Wraps inflamed organs (e.g. appendix) and helps seal perforations; used as an omental patch for perforated duodenal ulcer.' },
    { title: 'Metastases:', text: 'Common site of peritoneal spread (“omental cake”, e.g. ovarian cancer).' }
  ],
  highYield: ['Four layers; attaches the stomach to the transverse colon.'], mnemonics: []
}
]);
