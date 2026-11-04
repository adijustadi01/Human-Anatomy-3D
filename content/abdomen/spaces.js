// ABDOMEN — SPACES (inguinal canal, rectus sheath, lesser sac, Calot's triangle)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/abdomen/spaces.js', [
{
  id: 'ab-space-inguinal-canal',
  name: 'Inguinal canal',
  aka: [],
  type: 'space',
  system: [],
  region: 'abdomen',
  zones: ['inguinal', 'wall'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Oblique passage (about 4 cm) through the lower anterior abdominal wall, above the medial half of the inguinal ligament.',
  location: 'From the deep inguinal ring to the superficial inguinal ring.',
  parts: [
    'Deep ring: opening in the transversalis fascia, about 1.25 cm above the midinguinal point, lateral to the inferior epigastric vessels',
    'Superficial ring: opening in the external oblique aponeurosis, above and lateral to the pubic tubercle'
  ],
  space: {
    boundaries: [
      'Anterior wall: external oblique aponeurosis (whole length); internal oblique (lateral third)',
      'Posterior wall: transversalis fascia (whole length); conjoint tendon (medial part)',
      'Roof: arching fibres of internal oblique and transversus abdominis',
      'Floor: grooved upper surface of the inguinal ligament; lacunar ligament medially'
    ],
    contents: [
      'Spermatic cord (male) or round ligament of uterus (female)',
      'Ilioinguinal nerve (enters through the wall, not through the deep ring)',
      'Genital branch of the genitofemoral nerve (with the cord)'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Indirect inguinal hernia:', text: 'Enters the deep ring lateral to the inferior epigastric vessels and may descend into the scrotum.' },
    { title: 'Direct inguinal hernia:', text: 'Pushes through the posterior wall medial to the inferior epigastric vessels (Hesselbach’s triangle).' },
    { title: 'Ilioinguinal nerve injury:', text: 'In appendicectomy or hernia surgery may weaken the conjoint tendon area, predisposing to direct hernia.' }
  ],
  highYield: ['Inferior epigastric vessels distinguish indirect (lateral) from direct (medial) hernia.'],
  mnemonics: []
},
{
  id: 'ab-space-rectus-sheath',
  name: 'Rectus sheath',
  aka: [],
  type: 'space',
  system: [],
  region: 'abdomen',
  zones: ['wall'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Aponeurotic sheath enclosing the rectus abdominis, formed by the aponeuroses of the three flat abdominal muscles.',
  location: 'Anterior abdominal wall, on either side of the linea alba.',
  parts: ['Arcuate line: lower free border of the posterior wall, about midway between umbilicus and pubic symphysis'],
  space: {
    boundaries: [
      'Above the costal margin — anterior wall: external oblique aponeurosis; posterior wall: deficient (rectus lies on 5th–7th costal cartilages)',
      'Costal margin to arcuate line — anterior wall: external oblique + anterior lamina of internal oblique; posterior wall: posterior lamina of internal oblique + transversus abdominis',
      'Below the arcuate line — anterior wall: all three aponeuroses; posterior wall: transversalis fascia only'
    ],
    contents: [
      '[[ab-musc-rectus-abdominis]] and pyramidalis',
      'Superior and inferior epigastric vessels',
      'Terminal parts of the lower six thoracic nerves (T7–T12)'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Rectus sheath haematoma:', text: 'Rupture of the inferior epigastric vessels, usually below the arcuate line.' }
  ],
  highYield: ['Below the arcuate line the posterior wall is only transversalis fascia.'],
  mnemonics: []
},
{
  id: 'ab-space-lesser-sac',
  name: 'Lesser sac',
  aka: ['Omental bursa'],
  type: 'space',
  system: [],
  region: 'abdomen',
  zones: ['stomach'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Part of the peritoneal cavity behind the stomach and lesser omentum, communicating with the greater sac through the epiploic foramen.',
  location: 'Behind the stomach, in front of the pancreas and stomach bed.',
  parts: [
    'Epiploic foramen (of Winslow) — anterior: free border of lesser omentum (bile duct, hepatic artery, portal vein); posterior: IVC; superior: caudate process of liver; inferior: 1st part of duodenum'
  ],
  space: {
    boundaries: [
      'Anterior: lesser omentum, posterior surface of stomach, anterior two layers of greater omentum',
      'Posterior: posterior two layers of greater omentum, transverse colon and mesocolon, structures of the stomach bed',
      'Superior: caudate lobe of liver, diaphragm',
      'Left: gastrosplenic and splenorenal ligaments, spleen',
      'Right: epiploic foramen'
    ],
    contents: ['Normally a potential space (thin film of peritoneal fluid)']
  },
  relations: [
    { dir: 'anterior', text: 'Stomach.', ref: 'ab-organ-stomach' },
    { dir: 'posterior', text: 'Pancreas.', ref: 'ab-organ-pancreas' }
  ],
  clinical: [
    { title: 'Pancreatic pseudocyst:', text: 'Fluid collects in the lesser sac.' },
    { title: 'Pringle manoeuvre:', text: 'Compressing the free border of the lesser omentum (in front of the epiploic foramen) controls hepatic inflow bleeding.' }
  ],
  highYield: ['Free border of lesser omentum: bile duct (right), hepatic artery (left), portal vein (posterior).'],
  mnemonics: []
},
{
  id: 'ab-space-calot',
  name: 'Calot’s triangle',
  aka: ['Cystohepatic triangle', 'Hepatobiliary triangle'],
  type: 'space',
  system: [],
  region: 'abdomen',
  zones: ['liver'],
  verified: false, source: '', doubtful: ['boundaries'], reviewNote: 'Calot’s original upper boundary was the cystic artery; most texts now use the inferior surface of the liver.',
  description: 'Small triangle at the neck of the gallbladder, important in cholecystectomy.',
  location: 'Between the cystic duct, common hepatic duct and liver.',
  parts: [],
  space: {
    boundaries: [
      'Inferior / lateral: cystic duct',
      'Medial: common hepatic duct',
      'Superior: inferior (visceral) surface of the liver'
    ],
    contents: ['Cystic artery (usually)', 'Right hepatic artery', 'Cystic lymph node (of Lund)', 'Lymphatics']
  },
  relations: [
    { dir: 'organ', text: 'Neck of the gallbladder.', ref: 'ab-organ-gallbladder' }
  ],
  clinical: [
    { title: 'Cholecystectomy:', text: 'Dissection of this triangle to identify the cystic duct and artery before division (critical view of safety) prevents bile duct injury.' }
  ],
  highYield: ['Contains the cystic artery and cystic lymph node.'],
  mnemonics: []
}
]);
