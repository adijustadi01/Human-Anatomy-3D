// LOWER LIMB — BONES & JOINTS
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/lower-limb/bones-joints.js', [
{
  id: 'll-bone-femur',
  name: 'Femur',
  aka: ['Thigh bone'],
  type: 'bone',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['hip', 'thigh', 'knee'],
  verified: false, source: '', doubtful: ['features'], reviewNote: 'Ossification left blank — fill from your textbook. Check neck–shaft angle value.',
  description: 'Longest and strongest bone of the body.',
  location: 'Thigh; articulates with the hip bone above and tibia and patella below.',
  parts: ['Upper end', 'Shaft', 'Lower end'],
  bone: {
    features: [
      'Upper end: head (with fovea), neck (neck–shaft angle about 125° in adults), greater and lesser trochanters, intertrochanteric line and crest, trochanteric fossa',
      'Shaft: linea aspera posteriorly, with medial and lateral supracondylar lines below; gluteal tuberosity above',
      'Lower end: medial and lateral condyles and epicondyles, adductor tubercle, intercondylar fossa, patellar surface'
    ],
    attachments: [
      'Greater trochanter: gluteus medius and minimus, piriformis, obturator internus with gemelli; trochanteric fossa — obturator externus',
      'Lesser trochanter: iliopsoas',
      'Linea aspera: adductors, vastus medialis and lateralis, short head of biceps femoris',
      'Adductor tubercle: hamstring part of [[ll-musc-adductor-magnus]]'
    ],
    ossification: ''
  },
  relations: [],
  clinical: [
    { title: 'Fracture neck of femur:', text: 'Common in elderly (osteoporosis); limb shortened and laterally rotated. Intracapsular fractures risk avascular necrosis of the head because the retinacular arteries (mainly from the medial circumflex femoral) are torn.' },
    { title: 'Shaft fracture:', text: 'Can cause major blood loss into the thigh.' }
  ],
  highYield: ['Head’s main blood supply: retinacular branches of the medial circumflex femoral artery.'],
  mnemonics: []
},
{
  id: 'll-joint-hip',
  name: 'Hip joint',
  aka: [],
  type: 'joint',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['hip'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Stable, weight-bearing ball-and-socket joint between the pelvis and femur.',
  location: 'Between the acetabulum of the hip bone and the head of the femur.',
  parts: [],
  joint: {
    jointType: 'Synovial joint, ball-and-socket (multiaxial) variety',
    articulation: 'Head of femur with the lunate surface of the acetabulum, deepened by the acetabular labrum.',
    ligaments: ['Capsular ligament', 'Iliofemoral ligament (Y-shaped; strongest)', 'Pubofemoral ligament', 'Ischiofemoral ligament', 'Ligament of the head of femur (ligamentum teres)', 'Acetabular labrum', 'Transverse acetabular ligament'],
    movements: ['Flexion and extension', 'Abduction and adduction', 'Medial and lateral rotation', 'Circumduction'],
    bloodSupply: 'Medial and lateral circumflex femoral arteries; acetabular branch of obturator artery (artery of ligamentum teres); superior and inferior gluteal arteries',
    nerveSupply: 'Femoral, obturator, sciatic (nerve to quadratus femoris) and superior gluteal nerves (Hilton’s law)'
  },
  relations: [
    { dir: 'anterior', text: 'Iliopsoas; femoral nerve, artery and vein.', ref: 'll-space-femoral-triangle' },
    { dir: 'posterior', text: 'Short lateral rotators; sciatic nerve.', ref: 'll-nerve-sciatic' },
    { dir: 'superior', text: 'Gluteus minimus, reflected head of rectus femoris.', ref: '' },
    { dir: 'inferior', text: 'Obturator externus.', ref: '' }
  ],
  clinical: [
    { title: 'Posterior dislocation:', text: 'E.g. dashboard injury with hip flexed; limb flexed, adducted and medially rotated; risk to sciatic nerve.' },
    { title: 'Referred pain:', text: 'Hip disease may present as knee pain (shared femoral and obturator supply).' }
  ],
  highYield: ['Iliofemoral ligament is the strongest ligament; it prevents hyperextension.'],
  mnemonics: []
},
{
  id: 'll-joint-knee',
  name: 'Knee joint',
  aka: [],
  type: 'joint',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['knee'],
  verified: false, source: '', doubtful: ['clinical'], reviewNote: 'Check which meniscus your textbook lists in the “unhappy triad”.',
  description: 'Largest and most complex joint of the body.',
  location: 'Between the lower end of femur, upper end of tibia and the patella.',
  parts: ['Two femorotibial (condylar) articulations', 'Femoropatellar articulation'],
  joint: {
    jointType: 'Synovial joint; modified hinge (condylar) — a compound joint',
    articulation: 'Condyles of femur with condyles of tibia (with menisci between); patellar surface of femur with posterior surface of patella.',
    ligaments: [
      'Capsule; ligamentum patellae',
      'Medial (tibial) collateral ligament — attached to the medial meniscus',
      'Lateral (fibular) collateral ligament — separated from the lateral meniscus by the popliteus tendon',
      'Oblique and arcuate popliteal ligaments',
      'Anterior cruciate ligament — anterior intercondylar area of tibia → medial surface of lateral femoral condyle; prevents anterior displacement of tibia',
      'Posterior cruciate ligament — posterior intercondylar area of tibia → lateral surface of medial femoral condyle; prevents posterior displacement of tibia',
      'Medial meniscus (C-shaped, less mobile) and lateral meniscus (more circular, more mobile); transverse ligament'
    ],
    movements: ['Flexion and extension', 'Medial and lateral rotation (in the flexed knee)', 'Locking: medial rotation of femur on tibia at the end of extension; unlocking by [[ll-musc-popliteus]]'],
    bloodSupply: 'Genicular anastomosis: genicular branches of popliteal artery, descending genicular (femoral), descending branch of lateral circumflex femoral, recurrent branches of anterior tibial, circumflex fibular',
    nerveSupply: 'Femoral, obturator, tibial and common fibular nerves'
  },
  relations: [
    { dir: 'posterior', text: 'Popliteal fossa and its contents.', ref: 'll-space-popliteal-fossa' },
    { dir: 'anterior', text: 'Quadriceps tendon, patella, ligamentum patellae.', ref: 'll-musc-quadriceps' }
  ],
  clinical: [
    { title: 'Unhappy triad:', text: 'Combined injury of ACL, medial collateral ligament and medial meniscus from a blow to the lateral side of the knee.' },
    { title: 'Cruciate tests:', text: 'Anterior drawer and Lachman tests (ACL); posterior drawer (PCL).' },
    { title: 'Bursitis:', text: 'Prepatellar (“housemaid’s knee”) and infrapatellar (“clergyman’s knee”).' }
  ],
  highYield: ['Medial meniscus is torn more often (fixed to the MCL).'],
  mnemonics: []
},
{
  id: 'll-joint-ankle',
  name: 'Ankle joint',
  aka: ['Talocrural joint'],
  type: 'joint',
  system: ['musculoskeletal'],
  region: 'lower-limb',
  zones: ['foot'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Hinge joint between the leg bones and the talus.',
  location: 'Between the lower ends of tibia and fibula and the body of the talus.',
  parts: [],
  joint: {
    jointType: 'Synovial joint, hinge variety',
    articulation: 'Mortise formed by the lower end of tibia, medial malleolus and lateral malleolus of fibula, receiving the trochlea of the talus.',
    ligaments: [
      'Capsular ligament',
      'Medial (deltoid) ligament — superficial: tibionavicular, tibiocalcaneal, posterior tibiotalar; deep: anterior tibiotalar',
      'Lateral ligament — anterior talofibular, calcaneofibular, posterior talofibular'
    ],
    movements: ['Dorsiflexion', 'Plantarflexion (inversion and eversion occur at the subtalar and midtarsal joints)'],
    bloodSupply: 'Malleolar branches of anterior tibial, posterior tibial and fibular arteries',
    nerveSupply: 'Deep fibular and tibial nerves'
  },
  relations: [
    { dir: 'behind medial malleolus', text: 'Tibialis posterior, FDL, posterior tibial vessels, tibial nerve, FHL.', ref: 'll-nerve-tibial' }
  ],
  clinical: [
    { title: 'Inversion sprain:', text: 'Commonest ankle injury; the anterior talofibular ligament is most often torn.' },
    { title: 'Pott’s fracture:', text: 'Fracture–dislocation involving the malleoli from forced eversion.' }
  ],
  highYield: ['Most stable in dorsiflexion (wider anterior part of the trochlea fits the mortise).'],
  mnemonics: []
}
]);
