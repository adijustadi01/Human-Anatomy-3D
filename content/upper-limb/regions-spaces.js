// UPPER LIMB — REGIONS & SPACES (axilla, cubital fossa, carpal tunnel, snuffbox…)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/upper-limb/regions-spaces.js', [
{
  id: 'ul-space-axilla',
  name: 'Axilla',
  aka: ['Armpit'],
  type: 'space',
  system: [],
  region: 'upper-limb',
  zones: ['axilla'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Pyramidal space between the upper arm and the side of the chest; passage for vessels and nerves from neck to upper limb.',
  location: 'Below the shoulder joint, between arm and thoracic wall.',
  parts: ['Apex', 'Base', 'Four walls (anterior, posterior, medial, lateral)'],
  space: {
    boundaries: [
      'Apex (cervico-axillary canal): clavicle in front, outer border of first rib medially, superior border of scapula behind',
      'Base: axillary fascia and skin',
      'Anterior wall: pectoralis major, pectoralis minor, subclavius, clavipectoral fascia',
      'Posterior wall: [[ul-musc-subscapularis]], teres major, latissimus dorsi',
      'Medial wall: upper ribs and intercostal spaces covered by [[ul-musc-serratus-anterior]]',
      'Lateral wall: intertubercular sulcus of humerus with coracobrachialis and short head of biceps'
    ],
    contents: [
      '[[ul-art-axillary]] and its branches',
      'Axillary vein and tributaries',
      'Cords and branches of the [[ul-nerve-brachial-plexus]]',
      '[[ul-lymph-axillary-nodes]]',
      'Long thoracic and intercostobrachial nerves',
      'Axillary fat'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Axillary abscess / node enlargement:', text: 'Examined in breast and upper-limb disease.' }
  ],
  highYield: ['Apex communicates with the posterior triangle of the neck.'],
  mnemonics: []
},
{
  id: 'ul-space-cubital-fossa',
  name: 'Cubital fossa',
  aka: [],
  type: 'space',
  system: [],
  region: 'upper-limb',
  zones: ['elbow'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Triangular hollow in front of the elbow.',
  location: 'Anterior aspect of elbow.',
  parts: [],
  space: {
    boundaries: [
      'Lateral: medial border of brachioradialis',
      'Medial: lateral border of pronator teres',
      'Base (superior): line joining the two epicondyles of humerus',
      'Floor: [[ul-musc-brachialis]] (above) and supinator (below)',
      'Roof: skin, superficial fascia (with median cubital vein), deep fascia reinforced by bicipital aponeurosis'
    ],
    contents: [
      'Medial to lateral: [[ul-nerve-median]], [[ul-art-brachial]] (dividing into radial and ulnar), tendon of [[ul-musc-biceps-brachii]], [[ul-nerve-radial]] (at lateral margin, under brachioradialis)'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Venepuncture:', text: 'Median cubital vein in the roof is the commonest site; bicipital aponeurosis protects the brachial artery and median nerve beneath.' },
    { title: 'Blood pressure:', text: 'Brachial artery auscultated here, medial to the biceps tendon.' }
  ],
  highYield: ['Contents medial → lateral: median nerve, brachial artery, biceps tendon, radial nerve.'],
  mnemonics: []
},
{
  id: 'ul-space-carpal-tunnel',
  name: 'Carpal tunnel',
  aka: [],
  type: 'space',
  system: [],
  region: 'upper-limb',
  zones: ['hand'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Osseofibrous tunnel on the front of the wrist.',
  location: 'Between the carpal bones and the flexor retinaculum.',
  parts: [],
  space: {
    boundaries: [
      'Floor and sides: concave anterior surface of the carpal bones',
      'Roof: flexor retinaculum — attached medially to pisiform and hook of hamate, laterally to tubercle of scaphoid and trapezium'
    ],
    contents: [
      '[[ul-nerve-median]]',
      'Four tendons of [[ul-musc-fds]]',
      'Four tendons of [[ul-musc-fdp]]',
      'Tendon of flexor pollicis longus',
      '(Flexor carpi radialis tendon runs in a separate compartment within the retinaculum)'
    ]
  },
  relations: [
    { dir: 'superficial to retinaculum', text: 'Ulnar nerve and artery, palmar cutaneous branches of median and ulnar nerves, palmaris longus tendon.', ref: 'ul-nerve-ulnar' }
  ],
  clinical: [
    { title: 'Carpal tunnel syndrome:', text: 'Compression of median nerve (pregnancy, hypothyroidism, rheumatoid arthritis, repetitive use). Treatment may include division of the flexor retinaculum.' }
  ],
  highYield: ['Palm sensation is spared in CTS (palmar cutaneous branch passes superficial to retinaculum).'],
  mnemonics: []
},
{
  id: 'ul-space-anatomical-snuffbox',
  name: 'Anatomical snuffbox',
  aka: [],
  type: 'space',
  system: [],
  region: 'upper-limb',
  zones: ['hand'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Triangular depression on the lateral side of the wrist, seen when the thumb is extended.',
  location: 'Dorsolateral aspect of wrist.',
  parts: [],
  space: {
    boundaries: [
      'Lateral (radial): tendons of abductor pollicis longus and extensor pollicis brevis',
      'Medial (ulnar): tendon of extensor pollicis longus',
      'Floor: scaphoid and trapezium (radial styloid proximally, base of first metacarpal distally)',
      'Roof: skin, fascia; beginning of cephalic vein and superficial branch of radial nerve cross it'
    ],
    contents: ['[[ul-art-radial]]']
  },
  relations: [],
  clinical: [
    { title: 'Scaphoid fracture:', text: 'Tenderness in the snuffbox after a fall on the outstretched hand; risk of avascular necrosis of the proximal fragment.' }
  ],
  highYield: ['Radial artery pulse can be felt in its floor.'],
  mnemonics: []
}
]);
