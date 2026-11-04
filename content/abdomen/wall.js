// ABDOMEN — ANTERIOR & POSTERIOR WALL (muscles, lumbar plexus)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/abdomen/wall.js', [
{
  id: 'ab-musc-external-oblique',
  name: 'External oblique',
  aka: ['Obliquus externus abdominis'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'abdomen',
  zones: ['wall', 'inguinal'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Largest and most superficial flat muscle of the anterolateral abdominal wall; fibres run downward, forward and medially (“hands in pockets”).',
  location: 'Anterolateral abdominal wall.',
  parts: ['Aponeurosis forms the inguinal ligament, superficial inguinal ring, and contributes to the rectus sheath and linea alba'],
  muscle: {
    origin: ['Outer surfaces of the lower eight ribs (interdigitating with serratus anterior and latissimus dorsi)'],
    insertion: ['Outer lip of anterior part of iliac crest', 'Aponeurosis to linea alba, pubic crest and pubic tubercle'],
    nerveSupply: 'Lower six thoracic nerves (T7–T12)',
    bloodSupply: 'Lower posterior intercostal and subcostal arteries; superior and inferior epigastric; deep circumflex iliac',
    action: ['Compresses abdominal viscera (raising intra-abdominal pressure)', 'Flexes the trunk (both sides)', 'Rotates the trunk to the opposite side (one side)', 'Assists forced expiration']
  },
  relations: [
    { dir: 'deep', text: 'Internal oblique.', ref: 'ab-musc-internal-oblique' }
  ],
  clinical: [],
  highYield: ['Its aponeurosis forms the anterior wall of the inguinal canal.'],
  mnemonics: []
},
{
  id: 'ab-musc-internal-oblique',
  name: 'Internal oblique',
  aka: ['Obliquus internus abdominis'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'abdomen',
  zones: ['wall', 'inguinal'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Middle flat muscle of the anterolateral abdominal wall; fibres mostly run upward and medially.',
  location: 'Anterolateral abdominal wall, deep to external oblique.',
  parts: ['Lowest fibres join transversus to form the conjoint tendon; cremaster muscle is derived from it'],
  muscle: {
    origin: ['Lateral two-thirds of the inguinal ligament', 'Anterior two-thirds of the intermediate area of the iliac crest', 'Thoracolumbar fascia'],
    insertion: ['Lower three or four ribs and costal cartilages', 'Aponeurosis to linea alba (splitting around rectus above the arcuate line)', 'Pubic crest and pectineal line via the conjoint tendon'],
    nerveSupply: 'Lower six thoracic nerves and L1 (iliohypogastric and ilioinguinal)',
    bloodSupply: 'Lower posterior intercostal and subcostal arteries; superior and inferior epigastric; deep circumflex iliac',
    action: ['Compresses abdominal viscera', 'Flexes the trunk', 'Rotates the trunk to the same side (one side)']
  },
  relations: [],
  clinical: [],
  highYield: ['Forms the roof of the inguinal canal with transversus.'],
  mnemonics: []
},
{
  id: 'ab-musc-transversus-abdominis',
  name: 'Transversus abdominis',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'abdomen',
  zones: ['wall'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Innermost flat muscle of the anterolateral abdominal wall; fibres run horizontally.',
  location: 'Deep to internal oblique; the neurovascular plane lies between them.',
  parts: [],
  muscle: {
    origin: ['Lateral one-third of the inguinal ligament', 'Anterior two-thirds of the inner lip of the iliac crest', 'Thoracolumbar fascia', 'Inner surfaces of the lower six costal cartilages'],
    insertion: ['Aponeurosis to linea alba', 'Pubic crest and pectineal line via the conjoint tendon'],
    nerveSupply: 'Lower six thoracic nerves and L1 (iliohypogastric and ilioinguinal)',
    bloodSupply: 'Lower posterior intercostal and subcostal arteries; deep circumflex iliac',
    action: ['Compresses abdominal viscera']
  },
  relations: [
    { dir: 'superficial', text: 'Neurovascular plane (between it and internal oblique) carries the nerves of the abdominal wall.', ref: 'ab-musc-internal-oblique' }
  ],
  clinical: [
    { title: 'TAP block:', text: 'Local anaesthetic injected in the transversus abdominis plane blocks the abdominal wall nerves.' }
  ],
  highYield: ['Nerves of the abdominal wall run between internal oblique and transversus.'],
  mnemonics: []
},
{
  id: 'ab-musc-rectus-abdominis',
  name: 'Rectus abdominis',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'abdomen',
  zones: ['wall'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Long strap muscle on either side of the linea alba, enclosed in the rectus sheath.',
  location: 'Anterior abdominal wall.',
  parts: ['Usually three tendinous intersections (at the xiphoid, the umbilicus and midway between), adherent to the anterior wall of the sheath'],
  muscle: {
    origin: ['Lateral head: pubic crest', 'Medial head: front of the pubic symphysis'],
    insertion: ['5th, 6th and 7th costal cartilages', 'Xiphoid process'],
    nerveSupply: 'Lower six thoracic nerves (T7–T12)',
    bloodSupply: 'Superior and inferior epigastric arteries',
    action: ['Flexes the trunk', 'Compresses abdominal viscera', 'Stabilises the pelvis']
  },
  relations: [
    { dir: 'sheath', text: 'Enclosed in the rectus sheath.', ref: 'ab-space-rectus-sheath' }
  ],
  clinical: [
    { title: 'Divarication of recti:', text: 'Separation of the two recti at the linea alba (e.g. after pregnancy).' },
    { title: 'Paramedian incision:', text: 'Rectus retracted laterally, preserving its segmental nerve supply.' }
  ],
  highYield: ['Tendinous intersections attach to the anterior, not posterior, sheath.'],
  mnemonics: []
},
{
  id: 'ab-musc-psoas-major',
  name: 'Psoas major',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'abdomen',
  zones: ['retro'],
  verified: false, source: '', doubtful: ['nerveSupply'], reviewNote: '',
  description: 'Long muscle of the posterior abdominal wall; with iliacus forms iliopsoas.',
  location: 'Beside the lumbar vertebral column, passing behind the inguinal ligament into the thigh.',
  parts: ['The lumbar plexus forms within its substance'],
  muscle: {
    origin: ['Transverse processes of all lumbar vertebrae', 'Sides of bodies and intervertebral discs of T12–L5 (with tendinous arches)'],
    insertion: ['Lesser trochanter of femur (with iliacus)'],
    nerveSupply: 'Ventral rami of L1, L2, L3',
    bloodSupply: 'Lumbar arteries',
    action: ['Flexion of hip (with iliacus)', 'Flexion of trunk on the thigh (sitting up from lying)', 'Lateral flexion of lumbar spine (one side)']
  },
  relations: [
    { dir: 'within', text: 'Lumbar plexus.', ref: 'ab-nerve-lumbar-plexus' },
    { dir: 'anterior', text: 'Kidney, ureter, gonadal vessels.', ref: 'ab-organ-kidney' }
  ],
  clinical: [
    { title: 'Psoas abscess:', text: 'Tuberculosis of lumbar spine can track within the psoas sheath into the thigh.' },
    { title: 'Psoas sign:', text: 'Pain on hip extension in retrocaecal appendicitis.' }
  ],
  highYield: ['Lumbar plexus lies within it.'],
  mnemonics: []
},
{
  id: 'ab-nerve-lumbar-plexus',
  name: 'Lumbar plexus',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'abdomen',
  zones: ['retro'],
  verified: false, source: '', doubtful: [], reviewNote: 'Lower-limb course of femoral and obturator nerves to be detailed under Lower limb.',
  description: 'Plexus supplying the lower abdominal wall, and the front and medial side of the thigh.',
  location: 'Within the psoas major, in front of the lumbar transverse processes.',
  parts: [],
  nerve: {
    rootValue: 'Ventral rami of L1–L4 (usually with a contribution from T12)',
    course: 'Forms within psoas major; branches emerge from its lateral border, anterior surface and medial border.',
    branches: [
      'Iliohypogastric nerve (L1)',
      'Ilioinguinal nerve (L1)',
      'Genitofemoral nerve (L1, L2) — emerges on the front of psoas',
      'Lateral cutaneous nerve of thigh (L2, L3)',
      'Femoral nerve (L2–L4, posterior divisions) — lateral border of psoas',
      'Obturator nerve (L2–L4, anterior divisions) — medial border of psoas',
      'Lumbosacral trunk (L4, L5) — joins the sacral plexus'
    ],
    motor: ['Lower anterior abdominal wall muscles (iliohypogastric, ilioinguinal)', 'Cremaster (genital branch of genitofemoral)', 'Anterior thigh muscles (femoral)', 'Adductors of thigh (obturator)'],
    sensory: ['Skin of lower abdomen, groin, upper medial thigh, scrotum/labia (ilioinguinal, genitofemoral)', 'Lateral thigh (lateral cutaneous nerve)', 'Front and medial thigh (femoral, obturator)']
  },
  relations: [
    { dir: 'emergence from psoas', text: 'Lateral border: iliohypogastric, ilioinguinal, lateral cutaneous of thigh, femoral. Anterior surface: genitofemoral. Medial border: obturator, lumbosacral trunk.', ref: 'ab-musc-psoas-major' }
  ],
  clinical: [
    { title: 'Meralgia paraesthetica:', text: 'Entrapment of the lateral cutaneous nerve of thigh near the anterior superior iliac spine → burning pain/numbness of lateral thigh.' },
    { title: 'Cremasteric reflex:', text: 'Stroking medial thigh elevates the testis (L1, L2 — genitofemoral and ilioinguinal).' }
  ],
  highYield: ['Genitofemoral is the only branch that pierces the front of psoas.'],
  mnemonics: [{ text: 'I, I Get Lunch On Fridays', meaning: 'Iliohypogastric, Ilioinguinal, Genitofemoral, Lateral cutaneous of thigh, Obturator, Femoral' }]
}
]);
