// LOWER LIMB — MUSCLES
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/lower-limb/muscles.js', [
{
  id: 'll-musc-gluteus-maximus',
  name: 'Gluteus maximus',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['hip'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest and most superficial gluteal muscle.',
  location: 'Gluteal region.',
  parts: [],
  muscle: {
    origin: ['Outer surface of ilium behind the posterior gluteal line', 'Posterior surface of sacrum and coccyx', 'Sacrotuberous ligament', 'Aponeurosis of erector spinae'],
    insertion: ['Iliotibial tract (most fibres)', 'Gluteal tuberosity of femur (deep lower fibres)'],
    nerveSupply: 'Inferior gluteal nerve (L5, S1, S2)',
    bloodSupply: 'Superior and inferior gluteal arteries',
    action: ['Powerful extension of hip (rising from sitting, climbing stairs, running)', 'Lateral rotation of hip', 'Through the iliotibial tract, stabilises the extended knee']
  },
  relations: [
    { dir: 'deep', text: 'Sciatic nerve, piriformis and short lateral rotators.', ref: 'll-nerve-sciatic' }
  ],
  clinical: [
    { title: 'Paralysis:', text: 'Difficulty rising from sitting and climbing stairs.' },
    { title: 'Intramuscular injection:', text: 'Given in the upper outer quadrant of the buttock to avoid the sciatic nerve.' }
  ],
  highYield: ['Not required for ordinary walking on level ground.'],
  mnemonics: []
},
{
  id: 'll-musc-gluteus-medius',
  name: 'Gluteus medius',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['hip'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Fan-shaped abductor of the hip, partly under cover of gluteus maximus.',
  location: 'Gluteal region.',
  parts: [],
  muscle: {
    origin: ['Outer surface of ilium between the anterior and posterior gluteal lines'],
    insertion: ['Oblique ridge on the lateral surface of the greater trochanter'],
    nerveSupply: '[[ll-nerve-superior-gluteal]] (L4, L5, S1)',
    bloodSupply: 'Superior gluteal artery',
    action: ['Abduction and medial rotation of hip', 'With gluteus minimus, keeps the pelvis level (prevents sagging of the opposite side) when standing on one leg during walking']
  },
  relations: [
    { dir: 'deep', text: 'Gluteus minimus, with superior gluteal nerve and vessels between them.', ref: 'll-nerve-superior-gluteal' }
  ],
  clinical: [
    { title: 'Trendelenburg sign:', text: 'With paralysis, the pelvis drops on the unsupported (opposite) side when standing on the affected leg.' }
  ],
  highYield: ['Key muscle tested by the Trendelenburg test.'],
  mnemonics: []
},
{
  id: 'll-musc-quadriceps',
  name: 'Quadriceps femoris',
  aka: ['Quadriceps'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['thigh', 'knee'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Four-headed extensor of the knee occupying the front of the thigh.',
  location: 'Anterior compartment of thigh.',
  parts: ['Rectus femoris', 'Vastus lateralis', 'Vastus medialis', 'Vastus intermedius'],
  muscle: {
    origin: [
      'Rectus femoris: straight head — anterior inferior iliac spine; reflected head — groove above the acetabulum',
      'Vastus lateralis: upper intertrochanteric line, base of greater trochanter, lateral lip of linea aspera',
      'Vastus medialis: lower intertrochanteric line, spiral line, medial lip of linea aspera',
      'Vastus intermedius: anterior and lateral surfaces of upper two-thirds of femoral shaft'
    ],
    insertion: ['Base of patella, and through the ligamentum patellae to the tibial tuberosity'],
    nerveSupply: '[[ll-nerve-femoral]] (L2, L3, L4)',
    bloodSupply: 'Lateral circumflex femoral artery; branches of femoral and profunda femoris arteries',
    action: ['Extension of knee', 'Rectus femoris also flexes the hip']
  },
  relations: [],
  clinical: [
    { title: 'Knee jerk:', text: 'Tests L3, L4 (femoral nerve).' },
    { title: 'Patellar stability:', text: 'Lowest oblique fibres of vastus medialis resist lateral dislocation of the patella.' },
    { title: 'Quadriceps wasting:', text: 'Rapid after knee injury or immobilisation.' }
  ],
  highYield: ['Rectus femoris is the only part crossing the hip.'],
  mnemonics: []
},
{
  id: 'll-musc-sartorius',
  name: 'Sartorius',
  aka: ['Tailor’s muscle'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['thigh'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Long strap muscle crossing the front of the thigh obliquely; longest muscle of the body.',
  location: 'Anterior compartment of thigh.',
  parts: [],
  muscle: {
    origin: ['Anterior superior iliac spine'],
    insertion: ['Upper part of medial surface of tibia (pes anserinus, with gracilis and semitendinosus)'],
    nerveSupply: '[[ll-nerve-femoral]]',
    bloodSupply: 'Branches of the femoral artery',
    action: ['Flexion, abduction and lateral rotation of the hip', 'Flexion of the knee (together: the cross-legged “tailor’s” position)']
  },
  relations: [
    { dir: 'boundary', text: 'Lateral boundary of the femoral triangle.', ref: 'll-space-femoral-triangle' },
    { dir: 'roof', text: 'Covers the adductor canal.', ref: 'll-space-adductor-canal' }
  ],
  clinical: [],
  highYield: ['Pes anserinus: sartorius, gracilis, semitendinosus (“Say Grace before Tea”).'],
  mnemonics: [{ text: 'Say Grace before Tea', meaning: 'Pes anserinus: Sartorius, Gracilis, semiTendinosus (anterior to posterior)' }]
},
{
  id: 'll-musc-hamstrings',
  name: 'Hamstring muscles',
  aka: ['Hamstrings'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['thigh', 'knee'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Muscles of the back of the thigh that extend the hip and flex the knee.',
  location: 'Posterior compartment of thigh.',
  parts: ['Semitendinosus', 'Semimembranosus', 'Biceps femoris (long head; short head is not a true hamstring)', 'Hamstring (ischial) part of adductor magnus'],
  muscle: {
    origin: ['Ischial tuberosity (semitendinosus, semimembranosus, long head of biceps)', 'Short head of biceps: lateral lip of linea aspera and lateral supracondylar line'],
    insertion: ['Semitendinosus: upper medial surface of tibia (pes anserinus)', 'Semimembranosus: groove on the posterior surface of the medial condyle of tibia', 'Biceps femoris: head of fibula'],
    nerveSupply: 'Tibial part of the [[ll-nerve-sciatic]] (short head of biceps: common fibular part)',
    bloodSupply: 'Perforating branches of the profunda femoris artery',
    action: ['Extension of hip', 'Flexion of knee', 'Semitendinosus and semimembranosus: medial rotation of flexed knee; biceps: lateral rotation']
  },
  relations: [
    { dir: 'deep', text: 'Sciatic nerve lies deep to the long head of biceps femoris.', ref: 'll-nerve-sciatic' },
    { dir: 'popliteal fossa', text: 'Form its upper boundaries.', ref: 'll-space-popliteal-fossa' }
  ],
  clinical: [
    { title: 'Hamstring strain:', text: 'Common sports injury during sprinting.' }
  ],
  highYield: ['True hamstring criteria: origin from ischial tuberosity, insertion below the knee, tibial-part nerve supply, action on both hip and knee.'],
  mnemonics: []
},
{
  id: 'll-musc-adductor-magnus',
  name: 'Adductor magnus',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['thigh'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Largest adductor; a hybrid muscle with adductor and hamstring parts.',
  location: 'Medial compartment of thigh.',
  parts: ['Adductor part', 'Hamstring (ischial) part', 'Adductor hiatus — gap above the adductor tubercle'],
  muscle: {
    origin: ['Adductor part: ischiopubic ramus', 'Hamstring part: ischial tuberosity'],
    insertion: ['Adductor part: linea aspera and medial supracondylar line', 'Hamstring part: adductor tubercle of femur'],
    nerveSupply: 'Adductor part: [[ll-nerve-obturator]]; hamstring part: tibial part of [[ll-nerve-sciatic]]',
    bloodSupply: 'Profunda femoris and obturator arteries',
    action: ['Adduction of hip', 'Hamstring part: extension of hip']
  },
  relations: [
    { dir: 'adductor hiatus', text: 'Femoral vessels pass through into the popliteal fossa.', ref: 'll-art-popliteal' }
  ],
  clinical: [],
  highYield: ['Dual nerve supply (obturator + tibial).'],
  mnemonics: []
},
{
  id: 'll-musc-gastrocnemius',
  name: 'Gastrocnemius',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['knee', 'leg'],
  verified: false, source: '', doubtful: ['clinical'], reviewNote: 'Check root value quoted for ankle jerk.',
  description: 'Two-headed superficial calf muscle.',
  location: 'Superficial layer of the posterior compartment of leg.',
  parts: ['Medial head', 'Lateral head'],
  muscle: {
    origin: ['Medial head: posterior surface of femur above the medial condyle', 'Lateral head: lateral surface of the lateral femoral condyle'],
    insertion: ['Through the tendo calcaneus (Achilles tendon) to the middle part of the posterior surface of the calcaneus'],
    nerveSupply: '[[ll-nerve-tibial]] (S1, S2)',
    bloodSupply: 'Sural branches of the popliteal artery',
    action: ['Plantarflexion of ankle (propulsion in walking, running, jumping)', 'Flexion of knee']
  },
  relations: [
    { dir: 'deep', text: 'Soleus.', ref: 'll-musc-soleus' }
  ],
  clinical: [
    { title: 'Ankle jerk:', text: 'Tests S1 (S1, S2).' },
    { title: 'Rupture of tendo calcaneus:', text: 'Loss of push-off; palpable gap.' }
  ],
  highYield: ['With soleus forms triceps surae.'],
  mnemonics: []
},
{
  id: 'll-musc-soleus',
  name: 'Soleus',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['leg'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Broad flat calf muscle deep to gastrocnemius.',
  location: 'Superficial layer of the posterior compartment of leg, deep to gastrocnemius.',
  parts: [],
  muscle: {
    origin: ['Soleal line and middle third of medial border of tibia', 'Posterior surface of head and upper quarter of fibula', 'Tendinous arch between tibia and fibula'],
    insertion: ['Through the tendo calcaneus to the calcaneus'],
    nerveSupply: '[[ll-nerve-tibial]]',
    bloodSupply: 'Branches of popliteal, posterior tibial and fibular arteries',
    action: ['Plantarflexion of ankle', 'Steadies the leg on the foot in standing']
  },
  relations: [
    { dir: 'deep', text: 'Posterior tibial vessels and tibial nerve.', ref: 'll-art-posterior-tibial' }
  ],
  clinical: [
    { title: '“Peripheral heart”:', text: 'Soleal venous sinuses act as a muscle pump for venous return; stasis predisposes to deep vein thrombosis.' }
  ],
  highYield: ['Acts only on the ankle (does not cross the knee).'],
  mnemonics: []
},
{
  id: 'll-musc-tibialis-anterior',
  name: 'Tibialis anterior',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['leg', 'foot'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Main dorsiflexor of the foot.',
  location: 'Anterior compartment of leg.',
  parts: [],
  muscle: {
    origin: ['Lateral condyle and upper two-thirds of lateral surface of tibia', 'Interosseous membrane'],
    insertion: ['Medial and inferior surfaces of medial cuneiform and base of 1st metatarsal'],
    nerveSupply: 'Deep fibular nerve (L4, L5) — branch of [[ll-nerve-common-fibular]]',
    bloodSupply: '[[ll-art-anterior-tibial]]',
    action: ['Dorsiflexion of ankle', 'Inversion of foot', 'Supports the medial longitudinal arch']
  },
  relations: [],
  clinical: [
    { title: 'Foot drop:', text: 'Paralysis (common fibular nerve injury) → high-stepping gait.' },
    { title: 'Anterior compartment syndrome:', text: 'Swelling in the tight anterior compartment compresses muscles and the deep fibular nerve.' }
  ],
  highYield: ['Dorsiflexor + invertor.'],
  mnemonics: []
},
{
  id: 'll-musc-tibialis-posterior',
  name: 'Tibialis posterior',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['leg', 'foot'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Deepest muscle of the back of the leg; principal invertor of the foot.',
  location: 'Deep layer of the posterior compartment of leg.',
  parts: [],
  muscle: {
    origin: ['Posterior surface of interosseous membrane and adjoining surfaces of tibia and fibula'],
    insertion: ['Tuberosity of navicular, with slips to other tarsal bones (except talus) and bases of 2nd–4th metatarsals'],
    nerveSupply: '[[ll-nerve-tibial]] (L4, L5)',
    bloodSupply: 'Posterior tibial and fibular arteries',
    action: ['Inversion of foot', 'Plantarflexion of ankle', 'Main dynamic support of the medial longitudinal arch']
  },
  relations: [
    { dir: 'behind medial malleolus', text: 'Most anterior tendon under the flexor retinaculum.', ref: 'll-joint-ankle' }
  ],
  clinical: [
    { title: 'Tibialis posterior dysfunction:', text: 'Leads to acquired flat foot.' }
  ],
  highYield: ['Order behind medial malleolus (front to back): tibialis posterior, FDL, posterior tibial artery (and veins), tibial nerve, FHL.'],
  mnemonics: [{ text: 'Tom, Dick And Very Nervous Harry', meaning: 'Tibialis posterior, flexor Digitorum longus, Artery, Vein, Nerve, flexor Hallucis longus' }]
},
{
  id: 'll-musc-popliteus',
  name: 'Popliteus',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['knee'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Small triangular muscle in the floor of the popliteal fossa; “key of the knee”.',
  location: 'Back of the knee, deep.',
  parts: [],
  muscle: {
    origin: ['Groove on the lateral surface of the lateral femoral condyle (intracapsular)', 'Lateral meniscus'],
    insertion: ['Posterior surface of tibia above the soleal line'],
    nerveSupply: '[[ll-nerve-tibial]]',
    bloodSupply: 'Genicular branches of the popliteal artery',
    action: ['Unlocks the extended knee: lateral rotation of femur on the fixed tibia (or medial rotation of tibia)', 'Pulls the lateral meniscus backward during flexion']
  },
  relations: [
    { dir: 'tendon', text: 'Separates the lateral collateral ligament from the lateral meniscus.', ref: 'll-joint-knee' }
  ],
  clinical: [],
  highYield: ['Unlocks the knee at the start of flexion.'],
  mnemonics: []
}
]);
