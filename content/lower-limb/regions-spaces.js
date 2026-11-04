// LOWER LIMB — REGIONS & SPACES
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/lower-limb/regions-spaces.js', [
{
  id: 'll-space-femoral-triangle',
  name: 'Femoral triangle',
  aka: ['Scarpa’s triangle'],
  type: 'space',
  system: [],
  region: 'lower-limb',
  zones: ['hip', 'thigh'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Triangular depression in the upper third of the front of the thigh.',
  location: 'Front of upper thigh, just below the inguinal ligament.',
  parts: [],
  space: {
    boundaries: [
      'Base (superior): inguinal ligament',
      'Lateral: medial border of [[ll-musc-sartorius]]',
      'Medial: medial border of adductor longus',
      'Apex: where sartorius crosses adductor longus; continues as the [[ll-space-adductor-canal]]',
      'Floor (lateral to medial): iliacus, psoas major, pectineus, adductor longus',
      'Roof: skin, superficial fascia (great saphenous vein, superficial inguinal nodes), fascia lata with the saphenous opening'
    ],
    contents: [
      'Lateral to medial: [[ll-nerve-femoral]], [[ll-art-femoral]], femoral vein, femoral canal',
      'Femoral sheath (enclosing artery, vein and canal — not the nerve)',
      'Profunda femoris vessels',
      'Deep inguinal lymph nodes',
      'Femoral branch of genitofemoral nerve; lateral cutaneous nerve of thigh'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Vascular access:', text: 'Femoral artery puncture and femoral vein cannulation (vein medial to the palpable artery).' }
  ],
  highYield: ['Contents lateral → medial: NAVEL.'],
  mnemonics: [{ text: 'NAVEL', meaning: 'Nerve, Artery, Vein, Empty space (femoral canal), Lymphatics — lateral to medial' }]
},
{
  id: 'll-space-femoral-canal',
  name: 'Femoral canal',
  aka: [],
  type: 'space',
  system: [],
  region: 'lower-limb',
  zones: ['hip'],
  verified: false, source: '', doubtful: ['clinical'], reviewNote: '',
  description: 'Medial compartment of the femoral sheath (about 1.25 cm long); allows expansion of the femoral vein.',
  location: 'Medial to the femoral vein, below the medial part of the inguinal ligament.',
  parts: ['Upper opening: femoral ring'],
  space: {
    boundaries: [
      'Femoral ring — anterior: inguinal ligament',
      'Posterior: pectineus and pectineal ligament (of Cooper)',
      'Medial: lacunar ligament (sharp edge)',
      'Lateral: femoral vein (separated by a septum)'
    ],
    contents: ['Lymph node of Cloquet (Rosenmüller)', 'Lymphatics', 'Fat (femoral septum closes the ring above)']
  },
  relations: [
    { dir: 'lateral', text: 'Femoral vein.', ref: 'll-space-femoral-triangle' }
  ],
  clinical: [
    { title: 'Femoral hernia:', text: 'More common in females (wider pelvis); neck lies below and lateral to the pubic tubercle (inguinal hernia: above and medial). Prone to strangulation because of the narrow ring and sharp lacunar ligament.' },
    { title: 'Abnormal obturator artery:', text: 'May run along the edge of the lacunar ligament and be injured when the ring is enlarged during hernia repair.' }
  ],
  highYield: ['Pubic tubercle relation distinguishes femoral from inguinal hernia.'],
  mnemonics: []
},
{
  id: 'll-space-adductor-canal',
  name: 'Adductor canal',
  aka: ['Subsartorial canal', 'Hunter’s canal'],
  type: 'space',
  system: [],
  region: 'lower-limb',
  zones: ['thigh'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Intermuscular tunnel in the middle third of the thigh (about 15 cm), triangular in section.',
  location: 'From the apex of the femoral triangle to the adductor hiatus.',
  parts: [],
  space: {
    boundaries: [
      'Anterolateral: vastus medialis',
      'Posterior (floor): adductor longus above, adductor magnus below',
      'Roof (anteromedial): fibrous sheet between vastus medialis and adductors, covered by [[ll-musc-sartorius]]'
    ],
    contents: ['[[ll-art-femoral]] and femoral vein', 'Saphenous nerve', 'Nerve to vastus medialis', 'Descending genicular artery', 'Branches of the obturator nerve (subsartorial plexus)']
  },
  relations: [],
  clinical: [
    { title: 'Adductor canal block:', text: 'Blocks the saphenous nerve for analgesia after knee surgery.' }
  ],
  highYield: ['Ends at the adductor hiatus, where femoral vessels become popliteal.'],
  mnemonics: []
},
{
  id: 'll-space-popliteal-fossa',
  name: 'Popliteal fossa',
  aka: [],
  type: 'space',
  system: [],
  region: 'lower-limb',
  zones: ['knee'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Diamond-shaped space behind the knee.',
  location: 'Posterior aspect of the knee.',
  parts: [],
  space: {
    boundaries: [
      'Superolateral: biceps femoris',
      'Superomedial: semitendinosus and semimembranosus',
      'Inferolateral: lateral head of [[ll-musc-gastrocnemius]] (and plantaris)',
      'Inferomedial: medial head of gastrocnemius',
      'Floor: popliteal surface of femur, capsule of knee (oblique popliteal ligament), fascia over [[ll-musc-popliteus]]',
      'Roof: skin, superficial fascia (small saphenous vein), deep fascia'
    ],
    contents: [
      '[[ll-art-popliteal]] and popliteal vein',
      '[[ll-nerve-tibial]] and [[ll-nerve-common-fibular]]',
      'Termination of the small saphenous vein',
      'Popliteal lymph nodes',
      'Posterior cutaneous nerve of thigh; genicular branch of obturator nerve; fat',
      'Superficial to deep in the midline: tibial nerve, popliteal vein, popliteal artery'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Baker’s cyst:', text: 'Synovial (popliteal) cyst bulging into the fossa.' },
    { title: 'Popliteal aneurysm:', text: 'Pulsatile swelling; may compress the tibial nerve.' }
  ],
  highYield: ['Superficial → deep: Nerve, Vein, Artery.'],
  mnemonics: []
}
]);
