// LOWER LIMB — NERVES (lumbar plexus origin: see content/abdomen/wall.js)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/lower-limb/nerves.js', [
{
  id: 'll-nerve-femoral',
  name: 'Femoral nerve',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'lower-limb',
  zones: ['hip', 'thigh'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest branch of the [[ab-nerve-lumbar-plexus]]; nerve of the anterior compartment of the thigh.',
  location: 'Abdomen (in psoas), femoral triangle, thigh; saphenous branch to leg and foot.',
  parts: [],
  nerve: {
    rootValue: 'L2, L3, L4 (posterior divisions)',
    course: 'Emerges from the lateral border of psoas, runs between psoas and iliacus, passes behind the inguinal ligament lateral to the femoral sheath (outside it) into the femoral triangle, and soon divides into anterior and posterior divisions.',
    branches: [
      'In abdomen: nerve to iliacus',
      'Anterior division: medial and intermediate cutaneous nerves of thigh; nerves to sartorius and pectineus',
      'Posterior division: saphenous nerve; nerves to the four parts of quadriceps; articular branches to hip and knee'
    ],
    motor: ['Iliacus, pectineus', '[[ll-musc-sartorius]]', '[[ll-musc-quadriceps]]'],
    sensory: ['Front and medial side of thigh', 'Saphenous nerve: medial side of leg and medial border of foot']
  },
  relations: [
    { dir: 'femoral triangle', text: 'Lateral to the femoral artery, outside the femoral sheath.', ref: 'll-space-femoral-triangle' }
  ],
  clinical: [
    { title: 'Injury:', text: 'Weak knee extension, loss of knee jerk, sensory loss front of thigh and medial leg.' },
    { title: 'Saphenous nerve injury:', text: 'Possible during great saphenous vein stripping or harvest.' }
  ],
  highYield: ['Lies outside the femoral sheath.', 'Saphenous nerve is its longest branch.'],
  mnemonics: []
},
{
  id: 'll-nerve-obturator',
  name: 'Obturator nerve',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'lower-limb',
  zones: ['thigh'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Nerve of the medial (adductor) compartment of the thigh.',
  location: 'Lateral pelvic wall, obturator canal, medial thigh.',
  parts: ['Anterior and posterior divisions, separated by adductor brevis'],
  nerve: {
    rootValue: 'L2, L3, L4 (anterior divisions)',
    course: 'Emerges from the medial border of psoas, runs along the lateral wall of the pelvis, passes through the obturator canal into the thigh, and divides into anterior and posterior divisions around adductor brevis.',
    branches: ['Anterior division: adductor longus, adductor brevis, gracilis (± pectineus); cutaneous branch to medial thigh; articular to hip', 'Posterior division: obturator externus, adductor part of adductor magnus (± adductor brevis); articular to knee'],
    motor: ['Adductor longus, brevis, gracilis', 'Adductor part of [[ll-musc-adductor-magnus]]', 'Obturator externus'],
    sensory: ['Skin of the medial thigh', 'Hip and knee joints']
  },
  relations: [],
  clinical: [
    { title: 'Referred pain:', text: 'Hip disease felt at the knee; pelvic disease (e.g. ovary) felt in the medial thigh.' },
    { title: 'Injury:', text: 'Weak adduction; the leg tends to swing outward when walking.' }
  ],
  highYield: ['Supplies both hip and knee joints.'],
  mnemonics: []
},
{
  id: 'll-nerve-sciatic',
  name: 'Sciatic nerve',
  aka: ['Ischiadic nerve'],
  type: 'nerve',
  system: ['nervous'],
  region: 'lower-limb',
  zones: ['hip', 'thigh'],
  verified: false, source: '', doubtful: ['course'], reviewNote: 'Level of division is variable — confirm your textbook’s statement.',
  description: 'Thickest nerve of the body; consists of tibial and common fibular components in one sheath.',
  location: 'Gluteal region and back of thigh.',
  parts: ['Tibial component', 'Common fibular component'],
  nerve: {
    rootValue: 'L4, L5, S1, S2, S3 (sacral plexus)',
    course: 'Leaves the pelvis through the greater sciatic foramen below piriformis; descends in the gluteal region midway between the ischial tuberosity and greater trochanter, deep to gluteus maximus, on the short lateral rotators; in the back of the thigh lies on adductor magnus, crossed by the long head of biceps femoris. Usually divides into tibial and common fibular nerves at the upper angle of the popliteal fossa (may divide higher).',
    branches: ['Articular branches to hip', 'Muscular branches to hamstrings and hamstring part of adductor magnus (tibial part); short head of biceps (common fibular part)', 'Terminal: [[ll-nerve-tibial]] and [[ll-nerve-common-fibular]]'],
    motor: ['[[ll-musc-hamstrings]]', 'All muscles below the knee (through its terminal branches)'],
    sensory: ['Leg (except medial side) and foot, through its terminal branches']
  },
  relations: [
    { dir: 'gluteal region', text: 'Deep to gluteus maximus; emerges below piriformis.', ref: 'll-musc-gluteus-maximus' }
  ],
  clinical: [
    { title: 'Injection injury:', text: 'Avoided by giving gluteal injections in the upper outer quadrant.' },
    { title: 'Posterior dislocation of hip:', text: 'May injure the sciatic nerve.' },
    { title: 'Sciatica:', text: 'Pain radiating along its distribution, usually from L4/L5 or L5/S1 disc prolapse.' }
  ],
  highYield: ['Common fibular component is more often injured.'],
  mnemonics: []
},
{
  id: 'll-nerve-tibial',
  name: 'Tibial nerve',
  aka: ['Medial popliteal nerve'],
  type: 'nerve',
  system: ['nervous'],
  region: 'lower-limb',
  zones: ['knee', 'leg', 'foot'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Larger terminal branch of the sciatic nerve; nerve of the back of the leg and sole.',
  location: 'Popliteal fossa, posterior compartment of leg, tarsal tunnel, sole.',
  parts: [],
  nerve: {
    rootValue: 'L4, L5, S1, S2, S3',
    course: 'Descends vertically through the popliteal fossa, superficial to the popliteal vessels (crossing them from lateral to medial); passes deep to gastrocnemius and soleus with the posterior tibial vessels, and ends under the flexor retinaculum by dividing into the medial and lateral plantar nerves.',
    branches: ['Sural nerve', 'Muscular branches: gastrocnemius, soleus, plantaris, popliteus, tibialis posterior, FDL, FHL', 'Articular branches to knee and ankle', 'Medial calcaneal branches', 'Terminal: medial and lateral plantar nerves'],
    motor: ['Posterior compartment of leg ([[ll-musc-gastrocnemius]], [[ll-musc-soleus]], [[ll-musc-popliteus]], [[ll-musc-tibialis-posterior]], FDL, FHL)', 'Intrinsic muscles of the sole (via plantar nerves)'],
    sensory: ['Lateral side of leg and foot (sural nerve)', 'Heel and sole']
  },
  relations: [
    { dir: 'popliteal fossa', text: 'Most superficial of the central structures (nerve, vein, artery).', ref: 'll-space-popliteal-fossa' },
    { dir: 'ankle', text: 'Between posterior tibial vessels and FHL behind the medial malleolus.', ref: 'll-joint-ankle' }
  ],
  clinical: [
    { title: 'Injury:', text: 'Loss of plantarflexion and inversion, loss of ankle jerk, sensory loss of sole.' },
    { title: 'Tarsal tunnel syndrome:', text: 'Compression under the flexor retinaculum → pain and paraesthesia of the sole.' }
  ],
  highYield: ['Sural nerve is a common site for nerve biopsy.'],
  mnemonics: []
},
{
  id: 'll-nerve-common-fibular',
  name: 'Common fibular nerve',
  aka: ['Common peroneal nerve', 'Lateral popliteal nerve'],
  type: 'nerve',
  system: ['nervous'],
  region: 'lower-limb',
  zones: ['knee', 'leg', 'foot'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Smaller terminal branch of the sciatic nerve; supplies the anterior and lateral compartments of the leg and dorsum of foot.',
  location: 'Popliteal fossa, neck of fibula, leg.',
  parts: ['Superficial fibular nerve', 'Deep fibular nerve'],
  nerve: {
    rootValue: 'L4, L5, S1, S2',
    course: 'Runs along the medial border of biceps femoris in the popliteal fossa, winds round the neck of the fibula (subcutaneous, palpable), and divides in the substance of fibularis longus into superficial and deep fibular nerves.',
    branches: ['Lateral cutaneous nerve of calf', 'Sural communicating (fibular communicating) branch', 'Articular branches to knee', 'Superficial fibular nerve: fibularis longus and brevis; skin of lower lateral leg and most of dorsum of foot', 'Deep fibular nerve: tibialis anterior, EHL, EDL, fibularis tertius, extensor digitorum brevis; skin of the first web space'],
    motor: ['Anterior compartment (deep fibular): [[ll-musc-tibialis-anterior]], EHL, EDL, fibularis tertius', 'Lateral compartment (superficial fibular): fibularis longus and brevis', 'Extensor digitorum brevis'],
    sensory: ['Lateral side of upper leg', 'Lower lateral leg and dorsum of foot (superficial fibular)', 'First web space (deep fibular)']
  },
  relations: [
    { dir: 'bone', text: 'In contact with the neck of the fibula.', ref: '' }
  ],
  clinical: [
    { title: 'Injury at neck of fibula:', text: 'Most commonly injured nerve of the lower limb (fracture, tight plaster, crossed legs) → foot drop with high-stepping gait, inversion of the foot, sensory loss over dorsum of foot.' }
  ],
  highYield: ['Deep fibular nerve has an autonomous sensory area in the first web space.'],
  mnemonics: []
},
{
  id: 'll-nerve-superior-gluteal',
  name: 'Superior gluteal nerve',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'lower-limb',
  zones: ['hip'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Motor nerve to the hip abductors.',
  location: 'Gluteal region, between gluteus medius and minimus.',
  parts: [],
  nerve: {
    rootValue: 'L4, L5, S1 (sacral plexus)',
    course: 'Leaves the pelvis through the greater sciatic foramen above piriformis with the superior gluteal vessels, and runs forward between gluteus medius and gluteus minimus.',
    branches: ['Muscular branches only'],
    motor: ['[[ll-musc-gluteus-medius]]', 'Gluteus minimus', 'Tensor fasciae latae'],
    sensory: []
  },
  relations: [
    { dir: 'gluteal region', text: 'The only nerve to leave above piriformis.', ref: '' }
  ],
  clinical: [
    { title: 'Injury:', text: 'Positive Trendelenburg sign; lurching (gluteal) gait — waddling if bilateral.' }
  ],
  highYield: ['Only structure (with vessels) leaving the greater sciatic foramen above piriformis.'],
  mnemonics: []
}
]);
