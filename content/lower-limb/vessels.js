// LOWER LIMB — VESSELS (arteries, veins, lymphatics)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/lower-limb/vessels.js', [
{
  id: 'll-art-femoral',
  name: 'Femoral artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'lower-limb',
  zones: ['hip', 'thigh'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Main artery of the lower limb.',
  location: 'Femoral triangle and adductor canal.',
  parts: [],
  artery: {
    origin: 'Continuation of the external iliac artery behind the inguinal ligament at the midinguinal point (midway between ASIS and pubic symphysis).',
    course: 'Descends through the [[ll-space-femoral-triangle]] and [[ll-space-adductor-canal]]; becomes the [[ll-art-popliteal]] at the adductor hiatus.',
    branches: ['Superficial epigastric, superficial circumflex iliac, superficial external pudendal', 'Deep external pudendal', 'Profunda femoris (→ medial and lateral circumflex femoral arteries, perforating arteries)', 'Descending genicular artery', 'Muscular branches'],
    territory: 'Lower limb; lower abdominal wall and external genitalia (superficial branches).'
  },
  relations: [
    { dir: 'femoral triangle', text: 'Femoral nerve lateral; femoral vein medial (vein comes to lie behind the artery at the apex).', ref: 'll-nerve-femoral' },
    { dir: 'adductor canal', text: 'Crossed by the saphenous nerve from lateral to medial.', ref: '' }
  ],
  clinical: [
    { title: 'Femoral pulse and access:', text: 'Felt at the midinguinal point; used for arterial puncture and catheterisation (angiography).' }
  ],
  highYield: ['Profunda femoris is the main artery of the thigh.'],
  mnemonics: []
},
{
  id: 'll-art-popliteal',
  name: 'Popliteal artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'lower-limb',
  zones: ['knee'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Continuation of the femoral artery behind the knee.',
  location: 'Popliteal fossa — its deepest structure.',
  parts: [],
  artery: {
    origin: 'Continuation of the [[ll-art-femoral]] at the adductor hiatus.',
    course: 'Descends through the popliteal fossa on the popliteal surface of the femur, the capsule of the knee and popliteus; ends at the lower border of popliteus by dividing into the [[ll-art-anterior-tibial]] and [[ll-art-posterior-tibial]] arteries.',
    branches: ['Muscular and sural arteries', 'Genicular arteries: superior medial, superior lateral, middle, inferior medial, inferior lateral'],
    territory: 'Knee joint and calf muscles; leg and foot through its terminal branches.'
  },
  relations: [
    { dir: 'superficial', text: 'Popliteal vein, then tibial nerve.', ref: 'll-nerve-tibial' }
  ],
  clinical: [
    { title: 'Popliteal pulse:', text: 'Difficult to feel because of its depth; palpated with the knee flexed to relax the deep fascia.' },
    { title: 'Popliteal aneurysm / supracondylar fracture of femur:', text: 'Can compress or injure the artery.' }
  ],
  highYield: ['Deepest structure in the popliteal fossa.'],
  mnemonics: []
},
{
  id: 'll-art-anterior-tibial',
  name: 'Anterior tibial artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'lower-limb',
  zones: ['leg', 'foot'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Artery of the anterior compartment of the leg; continues as dorsalis pedis.',
  location: 'Anterior compartment of leg; front of ankle; dorsum of foot.',
  parts: ['Dorsalis pedis artery (continuation on the dorsum of the foot)'],
  artery: {
    origin: 'Smaller terminal branch of the [[ll-art-popliteal]] at the lower border of popliteus.',
    course: 'Passes forward above the interosseous membrane into the anterior compartment, descends on the membrane with the deep fibular nerve, and in front of the ankle (midway between the malleoli) continues as the dorsalis pedis artery, which runs to the first intermetatarsal space and dives into the sole to join the plantar arch.',
    branches: ['Anterior and posterior tibial recurrent arteries', 'Muscular branches', 'Anterior medial and lateral malleolar arteries', 'Dorsalis pedis: tarsal, arcuate (→ dorsal metatarsal), first dorsal metatarsal, deep plantar arteries'],
    territory: 'Anterior compartment of leg, ankle, dorsum of foot.'
  },
  relations: [
    { dir: 'companion', text: 'Deep fibular nerve.', ref: 'll-nerve-common-fibular' }
  ],
  clinical: [
    { title: 'Dorsalis pedis pulse:', text: 'Felt on the dorsum of the foot just lateral to the extensor hallucis longus tendon; important in peripheral vascular assessment.' }
  ],
  highYield: ['Dorsalis pedis is its continuation.'],
  mnemonics: []
},
{
  id: 'll-art-posterior-tibial',
  name: 'Posterior tibial artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'lower-limb',
  zones: ['leg', 'foot'],
  verified: false, source: '', doubtful: ['branches'], reviewNote: '',
  description: 'Artery of the posterior compartment of the leg and the sole.',
  location: 'Posterior compartment of leg; behind the medial malleolus.',
  parts: [],
  artery: {
    origin: 'Larger terminal branch of the [[ll-art-popliteal]] at the lower border of popliteus.',
    course: 'Descends on tibialis posterior deep to soleus, with the tibial nerve; ends under the flexor retinaculum, midway between the medial malleolus and the medial tubercle of the calcaneus, by dividing into medial and lateral plantar arteries.',
    branches: ['Fibular (peroneal) artery — its largest branch', 'Nutrient artery to tibia', 'Circumflex fibular artery', 'Muscular branches', 'Medial malleolar and calcaneal branches', 'Terminal: medial and lateral plantar arteries'],
    territory: 'Posterior and lateral compartments of the leg (latter via fibular artery), heel and sole.'
  },
  relations: [
    { dir: 'companion', text: 'Tibial nerve.', ref: 'll-nerve-tibial' }
  ],
  clinical: [
    { title: 'Posterior tibial pulse:', text: 'Felt behind the medial malleolus, midway to the heel.' }
  ],
  highYield: ['Fibular artery supplies the lateral compartment (no artery of its own).'],
  mnemonics: []
},
{
  id: 'll-vein-great-saphenous',
  name: 'Great saphenous vein',
  aka: ['Long saphenous vein'],
  type: 'vein',
  system: ['cardiovascular'],
  region: 'lower-limb',
  zones: ['thigh', 'knee', 'leg', 'foot'],
  verified: false, source: '', doubtful: ['course'], reviewNote: 'Check saphenous opening position and number of valves quoted in your textbook.',
  description: 'Longest vein of the body; main superficial vein of the lower limb.',
  location: 'Superficial fascia along the medial side of the leg and thigh.',
  parts: [],
  vein: {
    origin: 'Medial end of the dorsal venous arch of the foot.',
    course: 'Ascends in front of the medial malleolus, along the medial side of the leg with the saphenous nerve, behind the medial condyles of tibia and femur, up the medial thigh, and passes through the saphenous opening (about 3–4 cm below and lateral to the pubic tubercle) to join the femoral vein. Has many valves; connected to deep veins by perforators.',
    tributaries: ['Superficial epigastric, superficial circumflex iliac and superficial external pudendal veins (near termination)', 'Posteromedial and anterolateral (accessory) veins of thigh', 'Many unnamed superficial tributaries'],
    termination: 'Femoral vein, at the saphenous opening (saphenofemoral junction).',
    territory: 'Superficial tissues of the medial and anterior leg and thigh, and dorsum of foot.'
  },
  relations: [
    { dir: 'companion (leg)', text: 'Saphenous nerve.', ref: 'll-nerve-femoral' }
  ],
  clinical: [
    { title: 'Varicose veins:', text: 'Due to incompetent saphenofemoral junction and/or perforator valves; Trendelenburg and tourniquet tests.' },
    { title: 'Venous cut-down:', text: 'In front of the medial malleolus.' },
    { title: 'Grafting:', text: 'Used as a conduit in coronary artery bypass.' }
  ],
  highYield: ['Constant position in front of the medial malleolus.'],
  mnemonics: []
},
{
  id: 'll-lymph-inguinal-nodes',
  name: 'Superficial inguinal lymph nodes',
  aka: [],
  type: 'lymphatic',
  system: ['lymphatic'],
  region: 'lower-limb',
  zones: ['hip', 'thigh'],
  verified: false, source: '', doubtful: ['drainageArea'], reviewNote: '',
  description: 'Nodes in the superficial fascia of the groin.',
  location: 'Below the inguinal ligament and along the termination of the great saphenous vein.',
  parts: [],
  lymphatic: {
    groups: ['Horizontal (upper) group — below and parallel to the inguinal ligament (lateral and medial sets)', 'Vertical (lower) group — along the terminal part of the great saphenous vein'],
    drainageArea: [
      'Horizontal group: anterior abdominal wall below the umbilicus, gluteal region, perineum, external genitalia (except glans and testis), lower anal canal (below the pectinate line), lower vagina',
      'Vertical group: superficial tissues of the lower limb (except the posterolateral leg and lateral foot, which drain to popliteal nodes)'
    ],
    efferents: 'Deep inguinal nodes (incl. node of Cloquet in the femoral canal) and external iliac nodes.'
  },
  relations: [],
  clinical: [
    { title: 'Inguinal lymphadenopathy:', text: 'Look for a source in the lower limb, perineum, external genitalia or lower anal canal.' },
    { title: 'Testicular tumours:', text: 'Spread to para-aortic nodes, NOT inguinal nodes (testis develops in the abdomen).' }
  ],
  highYield: ['Two groups: horizontal and vertical.'],
  mnemonics: []
}
]);
