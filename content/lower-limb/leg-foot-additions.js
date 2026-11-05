// LOWER LIMB — ADDITIONS (fibular muscles, tibia, arch of foot, small saphenous vein)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/lower-limb/leg-foot-additions.js', [
{
  id: 'll-musc-fibularis-longus', name: 'Fibularis longus', aka: ['Peroneus longus'], type: 'muscle',
  system: ['musculoskeletal'], region: 'lower-limb', zones: ['leg', 'foot'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Long evertor of the foot whose tendon crosses the sole.',
  location: 'Lateral compartment of leg.', parts: [],
  muscle: {
    origin: ['Head and upper two-thirds of the lateral surface of fibula'],
    insertion: ['Lateral side of medial cuneiform and base of 1st metatarsal (tendon passes behind lateral malleolus, in the groove on the cuboid, across the sole)'],
    nerveSupply: 'Superficial fibular nerve — branch of [[ll-nerve-common-fibular]]', bloodSupply: 'Fibular artery and anterior tibial branches',
    action: ['Eversion of foot', 'Plantarflexion', 'Supports the lateral longitudinal and transverse arches']
  },
  relations: [],
  clinical: [{ title: 'Superficial fibular nerve injury:', text: 'Loss of eversion; foot held inverted.' }],
  highYield: ['With tibialis anterior forms a “stirrup” under the foot.'], mnemonics: []
},
{
  id: 'll-musc-fibularis-brevis', name: 'Fibularis brevis', aka: ['Peroneus brevis'], type: 'muscle',
  system: ['musculoskeletal'], region: 'lower-limb', zones: ['leg', 'foot'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Short evertor of the foot.',
  location: 'Lateral compartment of leg, deep to fibularis longus.', parts: [],
  muscle: {
    origin: ['Lower two-thirds of the lateral surface of fibula'],
    insertion: ['Tuberosity on the base of the 5th metatarsal'],
    nerveSupply: 'Superficial fibular nerve — branch of [[ll-nerve-common-fibular]]', bloodSupply: 'Fibular artery',
    action: ['Eversion of foot', 'Weak plantarflexion']
  },
  relations: [],
  clinical: [{ title: 'Avulsion fracture:', text: 'Of the base of the 5th metatarsal in inversion injuries.' }],
  highYield: ['Inserts on the 5th metatarsal tuberosity.'], mnemonics: []
},
{
  id: 'll-bone-tibia', name: 'Tibia', aka: ['Shin bone'], type: 'bone',
  system: ['musculoskeletal'], region: 'lower-limb', zones: ['knee', 'leg', 'foot'],
  verified: false, source: '', doubtful: [], reviewNote: 'Ossification left blank — fill from your textbook.',
  description: 'Medial, weight-bearing bone of the leg.',
  location: 'Medial side of the leg.', parts: ['Upper end', 'Shaft', 'Lower end'],
  bone: {
    features: ['Medial and lateral condyles, intercondylar eminence, tibial tuberosity', 'Shaft: sharp anterior border (shin), subcutaneous medial surface, soleal line posteriorly', 'Lower end: medial malleolus, fibular notch'],
    attachments: ['Tibial tuberosity: ligamentum patellae', 'Upper medial surface: pes anserinus (sartorius, gracilis, semitendinosus)', 'Medial condyle: semimembranosus', 'Above soleal line: [[ll-musc-popliteus]]; soleal line: [[ll-musc-soleus]]', 'Lateral surface: [[ll-musc-tibialis-anterior]]; posterior surface: [[ll-musc-tibialis-posterior]]'],
    ossification: ''
  },
  relations: [],
  clinical: [
    { title: 'Open fractures:', text: 'Commonest among long bones because the medial surface is subcutaneous.' },
    { title: 'Delayed union:', text: 'Lower third has a poor blood supply.' },
    { title: 'Intraosseous access:', text: 'Upper medial tibia used in children in emergencies.' }
  ],
  highYield: ['Subcutaneous medial surface.'], mnemonics: []
},
{
  id: 'll-space-medial-arch', name: 'Medial longitudinal arch of foot', aka: [], type: 'space',
  system: ['musculoskeletal'], region: 'lower-limb', zones: ['foot'],
  verified: false, source: '', doubtful: ['boundaries'], reviewNote: 'Texts differ on the “keystone”.',
  description: 'Higher and more mobile of the longitudinal arches; absorbs shock and spreads body weight.',
  location: 'Medial side of the foot.', parts: [],
  space: {
    boundaries: ['Bones: calcaneus, talus, navicular, three cuneiforms, medial three metatarsals', 'Posterior pillar: medial tubercle of calcaneus; anterior pillar: heads of medial three metatarsals', 'Summit / keystone: talus (head)'],
    contents: ['Supports — ligaments: spring (plantar calcaneonavicular) ligament (most important), plantar aponeurosis', 'Muscles: [[ll-musc-tibialis-posterior]], [[ll-musc-tibialis-anterior]], flexor hallucis longus, abductor hallucis, [[ll-musc-fibularis-longus]]']
  },
  relations: [],
  clinical: [{ title: 'Pes planus (flat foot):', text: 'Collapse of the arch; e.g. tibialis posterior dysfunction or spring ligament failure.' }],
  highYield: ['Spring ligament supports the head of the talus.'], mnemonics: []
},
{
  id: 'll-vein-small-saphenous', name: 'Small saphenous vein', aka: ['Short saphenous vein'], type: 'vein',
  system: ['cardiovascular'], region: 'lower-limb', zones: ['knee', 'leg', 'foot'],
  verified: false, source: '', doubtful: ['termination'], reviewNote: 'Termination is variable.',
  description: 'Superficial vein of the back of the leg.',
  location: 'Behind the lateral malleolus, then midline of the calf.', parts: [],
  vein: {
    origin: 'Lateral end of the dorsal venous arch of the foot.',
    course: 'Passes behind the lateral malleolus with the sural nerve, ascends in the midline of the calf, and pierces the deep fascia of the popliteal fossa.',
    tributaries: ['Superficial veins of the back of the leg', 'Communications with the great saphenous vein'],
    termination: 'Popliteal vein (usually).',
    territory: 'Superficial lateral foot and back of leg.'
  },
  relations: [{ dir: 'companion', text: 'Sural nerve.', ref: 'll-nerve-tibial' }],
  clinical: [{ title: 'Varicose veins / surgery:', text: 'Sural nerve may be injured.' }],
  highYield: ['Runs with the sural nerve.'], mnemonics: []
}
]);
