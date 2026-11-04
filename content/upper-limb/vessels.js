// UPPER LIMB — VESSELS (arteries, veins, lymphatics)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/upper-limb/vessels.js', [
{
  id: 'ul-art-axillary',
  name: 'Axillary artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'upper-limb',
  zones: ['axilla'],
  verified: false,
  source: '',
  doubtful: [],
  reviewNote: '',
  description: 'Main artery of the axilla; continuation of the subclavian artery.',
  location: 'Axilla.',
  parts: [
    'First part: from outer border of 1st rib to upper border of pectoralis minor',
    'Second part: behind pectoralis minor',
    'Third part: from lower border of pectoralis minor to lower border of teres major'
  ],
  artery: {
    origin: 'Continuation of the subclavian artery at the outer border of the first rib.',
    course: 'Runs through the axilla; becomes the [[ul-art-brachial]] at the lower border of teres major.',
    branches: [
      '1st part: superior thoracic artery',
      '2nd part: thoracoacromial artery, lateral thoracic artery',
      '3rd part: subscapular artery, anterior circumflex humeral artery, posterior circumflex humeral artery'
    ],
    territory: 'Walls of the axilla, shoulder region, upper lateral chest wall (incl. breast via lateral thoracic), and the whole upper limb via its continuation.'
  },
  relations: [
    { dir: 'second part', text: 'Cords of the brachial plexus are arranged around it (lateral, medial, posterior).', ref: 'ul-nerve-brachial-plexus' },
    { dir: 'medially', text: 'Axillary vein.', ref: '' }
  ],
  clinical: [
    { title: 'Collateral circulation:', text: 'Scapular anastomosis links branches of the subclavian artery with the subscapular artery, so ligation between the thyrocervical trunk and the subscapular artery can be tolerated.' }
  ],
  highYield: [
    'Number of branches matches the part number: 1, 2, 3.',
    'Pectoralis minor divides it into three parts.'
  ],
  mnemonics: [
    { text: 'Screw The Lawyer, Save A Patient', meaning: 'Superior thoracic, Thoracoacromial, Lateral thoracic, Subscapular, Anterior & Posterior circumflex humeral' }
  ]
},
{
  id: 'ul-art-brachial',
  name: 'Brachial artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'upper-limb',
  zones: ['arm', 'elbow'],
  verified: false,
  source: '',
  doubtful: [],
  reviewNote: '',
  description: 'Main artery of the arm.',
  location: 'Medial side of the arm, then cubital fossa.',
  parts: [],
  artery: {
    origin: 'Continuation of the [[ul-art-axillary]] at the lower border of teres major.',
    course: 'Runs down the medial side of the arm, then lies in front of the elbow in the cubital fossa, where it ends (at the level of the neck of the radius) by dividing into the [[ul-art-radial]] and [[ul-art-ulnar]].',
    branches: ['Profunda brachii artery', 'Superior ulnar collateral artery', 'Inferior ulnar collateral artery', 'Nutrient artery to humerus', 'Muscular branches'],
    territory: 'Arm; through its terminal branches, the forearm and hand.'
  },
  relations: [
    { dir: 'anterior (mid-arm)', text: 'Crossed by the median nerve from lateral to medial.', ref: 'ul-nerve-median' },
    { dir: 'cubital fossa', text: 'Lies medial to the biceps tendon and lateral to the median nerve; bicipital aponeurosis in front.', ref: 'ul-space-cubital-fossa' }
  ],
  clinical: [
    { title: 'Blood pressure measurement:', text: 'The cuff compresses the brachial artery; stethoscope placed over it in the cubital fossa, medial to the biceps tendon.' },
    { title: 'Supracondylar fracture of humerus:', text: 'Can injure or compress the brachial artery → Volkmann’s ischaemic contracture of forearm flexors.' }
  ],
  highYield: [
    'Ends in the cubital fossa by dividing into radial and ulnar arteries.',
    'Pulse felt medial to the biceps tendon.'
  ],
  mnemonics: []
},
{
  id: 'ul-art-radial',
  name: 'Radial artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'upper-limb',
  zones: ['elbow', 'forearm', 'hand'],
  verified: false,
  source: '',
  doubtful: [],
  reviewNote: '',
  description: 'Smaller terminal branch of the brachial artery.',
  location: 'Lateral side of forearm, wrist, anatomical snuffbox, palm.',
  parts: [],
  artery: {
    origin: 'Smaller terminal branch of the [[ul-art-brachial]] in the cubital fossa, at the level of the neck of the radius.',
    course: 'Descends on the lateral side of the forearm under cover of brachioradialis; at the wrist lies lateral to the flexor carpi radialis tendon (pulse); winds dorsally across the floor of the [[ul-space-anatomical-snuffbox]]; enters the palm between the two heads of the first dorsal interosseous to form the [[ul-art-deep-palmar-arch]].',
    branches: ['Radial recurrent artery', 'Muscular branches', 'Palmar carpal and dorsal carpal branches', 'Superficial palmar branch', 'First dorsal metacarpal artery', 'Princeps pollicis artery', 'Radialis indicis artery'],
    territory: 'Lateral forearm, wrist, thumb and lateral side of index finger; deep palm via the deep arch.'
  },
  relations: [
    { dir: 'at wrist', text: 'Lateral to the tendon of flexor carpi radialis.', ref: '' }
  ],
  clinical: [
    { title: 'Radial pulse / arterial puncture:', text: 'Commonest site for pulse; used for arterial blood gas sampling and cannulation. Perform Allen’s test first to check ulnar collateral supply.' },
    { title: 'Arteriovenous fistula:', text: 'Radiocephalic fistula at the wrist for haemodialysis access.' }
  ],
  highYield: [
    'Forms mainly the deep palmar arch.',
    'Felt in the anatomical snuffbox.'
  ],
  mnemonics: []
},
{
  id: 'ul-art-ulnar',
  name: 'Ulnar artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'upper-limb',
  zones: ['elbow', 'forearm', 'hand'],
  verified: false,
  source: '',
  doubtful: [],
  reviewNote: '',
  description: 'Larger terminal branch of the brachial artery.',
  location: 'Medial side of forearm, wrist (Guyon’s canal), palm.',
  parts: [],
  artery: {
    origin: 'Larger terminal branch of the [[ul-art-brachial]] in the cubital fossa.',
    course: 'Passes deep to the deep head of pronator teres and to FDS, then descends on FDP under cover of FCU, with the ulnar nerve on its medial side. Crosses the wrist superficial to the flexor retinaculum, lateral to the pisiform, and continues as the [[ul-art-superficial-palmar-arch]].',
    branches: ['Anterior and posterior ulnar recurrent arteries', 'Common interosseous artery (→ anterior and posterior interosseous arteries)', 'Muscular branches', 'Palmar and dorsal carpal branches', 'Deep palmar branch'],
    territory: 'Medial forearm, deep forearm (via interosseous arteries), medial hand and fingers via the superficial arch.'
  },
  relations: [
    { dir: 'medially', text: 'Ulnar nerve in the distal forearm and at the wrist.', ref: 'ul-nerve-ulnar' }
  ],
  clinical: [
    { title: 'Allen’s test:', text: 'Assesses ulnar artery contribution to the hand before radial artery cannulation or harvest.' }
  ],
  highYield: [
    'Forms mainly the superficial palmar arch.',
    'Common interosseous artery supplies the deep forearm.'
  ],
  mnemonics: []
},
{
  id: 'ul-art-superficial-palmar-arch',
  name: 'Superficial palmar arch',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'upper-limb',
  zones: ['hand'],
  verified: false,
  source: '',
  doubtful: ['course'],
  reviewNote: 'Check surface marking wording against your textbook.',
  description: 'Arterial arcade in the palm, formed mainly by the ulnar artery.',
  location: 'Palm, deep to the palmar aponeurosis and superficial to the long flexor tendons.',
  parts: [],
  artery: {
    origin: 'Direct continuation of the [[ul-art-ulnar]], completed laterally (usually) by the superficial palmar branch of the [[ul-art-radial]].',
    course: 'Curves across the palm; its convexity lies at about the level of the distal border of the fully extended thumb. Lies distal to the deep arch.',
    branches: ['Three common palmar digital arteries', 'Proper palmar digital artery to the medial side of the little finger'],
    territory: 'Medial 3½ digits (palmar aspect) and the superficial palm.'
  },
  relations: [
    { dir: 'superficial', text: 'Palmar aponeurosis.', ref: '' },
    { dir: 'deep', text: 'Long flexor tendons, branches of median and ulnar nerves.', ref: '' }
  ],
  clinical: [
    { title: 'Palmar wounds:', text: 'Bleed profusely because both arches are well-anastomosed; ligating a single vessel is often insufficient.' }
  ],
  highYield: ['Superficial arch = ulnar artery mainly; deep arch = radial artery mainly.'],
  mnemonics: []
},
{
  id: 'ul-art-deep-palmar-arch',
  name: 'Deep palmar arch',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'upper-limb',
  zones: ['hand'],
  verified: false,
  source: '',
  doubtful: [],
  reviewNote: '',
  description: 'Deep arterial arcade of the palm, formed mainly by the radial artery.',
  location: 'Palm, deep to the long flexor tendons, on the bases of the metacarpals.',
  parts: [],
  artery: {
    origin: 'Terminal part of the [[ul-art-radial]], completed medially by the deep palmar branch of the [[ul-art-ulnar]].',
    course: 'Lies across the bases of the metacarpals, proximal to the superficial arch; the deep branch of the ulnar nerve lies in its concavity.',
    branches: ['Palmar metacarpal arteries', 'Perforating branches (to dorsal metacarpal arteries)', 'Recurrent branches (to palmar carpal network)'],
    territory: 'Deep structures of the palm; contributes to digital supply via metacarpal arteries.'
  },
  relations: [
    { dir: 'in concavity', text: 'Deep branch of ulnar nerve.', ref: 'ul-nerve-ulnar' },
    { dir: 'superficial', text: 'Long flexor tendons.', ref: '' }
  ],
  clinical: [],
  highYield: ['Deep branch of ulnar nerve accompanies the deep arch.'],
  mnemonics: []
},
{
  id: 'ul-lymph-axillary-nodes',
  name: 'Axillary lymph nodes',
  aka: [],
  type: 'lymphatic',
  system: ['lymphatic'],
  region: 'upper-limb',
  zones: ['axilla'],
  verified: false,
  source: '',
  doubtful: [],
  reviewNote: 'Add surgical levels (I–III relative to pectoralis minor) after verification.',
  description: 'Groups of lymph nodes embedded in axillary fat.',
  location: 'Axilla.',
  parts: [],
  lymphatic: {
    groups: [
      'Anterior (pectoral) — along lateral thoracic vessels',
      'Posterior (subscapular) — along subscapular vessels',
      'Lateral (humeral) — along axillary vein',
      'Central — in axillary fat',
      'Apical — at the apex of axilla'
    ],
    drainageArea: ['Upper limb', 'Most of the breast', 'Skin of the trunk above the level of the umbilicus (front and back)'],
    efferents: 'Apical nodes → subclavian lymph trunk.'
  },
  relations: [],
  clinical: [
    { title: 'Carcinoma breast:', text: 'Axillary nodes are the main route of lymphatic spread; examined in all breast lumps.' },
    { title: 'Axillary clearance:', text: 'Can cause lymphoedema of the upper limb; risk to long thoracic and thoracodorsal nerves.' }
  ],
  highYield: ['Five groups: anterior, posterior, lateral, central, apical.'],
  mnemonics: []
}
]);
