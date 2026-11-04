// UPPER LIMB — NERVES
// Source of truth. Draft content: every entry starts verified:false.
// To verify: check each field against your textbook, fix it, empty "doubtful",
// fill "source", then set verified:true. Cross-link with [[structure-id]].
AN.registerStructures('content/upper-limb/nerves.js', [
{
  id: 'ul-nerve-brachial-plexus',
  name: 'Brachial plexus',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'upper-limb',
  zones: ['shoulder', 'axilla'],
  verified: false,
  source: '',
  doubtful: [],
  reviewNote: '',
  description: 'Network of ventral rami that supplies the upper limb.',
  location: 'Roots and trunks in the posterior triangle of the neck; divisions behind the clavicle; cords in the axilla.',
  parts: [
    'Roots: ventral rami C5, C6, C7, C8, T1',
    'Trunks: upper (C5, C6), middle (C7), lower (C8, T1)',
    'Divisions: each trunk divides into anterior and posterior divisions',
    'Cords: lateral (anterior divisions of upper + middle trunks), medial (anterior division of lower trunk), posterior (all three posterior divisions)',
    'Cords are named by their relation to the second part of the [[ul-art-axillary]]'
  ],
  nerve: {
    rootValue: 'C5–T1 (ventral rami)',
    course: 'Emerges between scalenus anterior and scalenus medius, descends through the posterior triangle, passes behind the clavicle into the axilla, where the cords surround the axillary artery.',
    branches: [
      'From roots: dorsal scapular nerve (C5); long thoracic nerve (C5, C6, C7)',
      'From upper trunk: suprascapular nerve (C5, C6); nerve to subclavius',
      'Lateral cord: lateral pectoral nerve, [[ul-nerve-musculocutaneous]], lateral root of [[ul-nerve-median]]',
      'Medial cord: medial pectoral nerve, medial cutaneous nerve of arm, medial cutaneous nerve of forearm, [[ul-nerve-ulnar]], medial root of [[ul-nerve-median]]',
      'Posterior cord: upper subscapular, thoracodorsal, lower subscapular, [[ul-nerve-axillary]], [[ul-nerve-radial]]'
    ],
    motor: ['Muscles of the upper limb and shoulder girdle (via its branches)'],
    sensory: ['Skin of the upper limb (via its branches; upper medial arm also from intercostobrachial nerve, T2)']
  },
  relations: [
    { dir: 'in neck', text: 'Roots/trunks lie between scalenus anterior and medius, above the third part of the subclavian artery.', ref: '' },
    { dir: 'in axilla', text: 'Cords arranged around the second part of the axillary artery (behind pectoralis minor).', ref: 'ul-art-axillary' }
  ],
  clinical: [
    { title: 'Erb’s (Erb–Duchenne) palsy:', text: 'Upper trunk (C5, C6) injury, e.g. excessive separation of head and shoulder during birth or a fall. Arm adducted and medially rotated, elbow extended, forearm pronated — “waiter’s tip” position.' },
    { title: 'Klumpke’s palsy:', text: 'Lower trunk (C8, T1) injury, e.g. forcible abduction of the arm. Claw hand from paralysis of intrinsic hand muscles; Horner’s syndrome if T1 sympathetic fibres are involved.' }
  ],
  highYield: [
    'Erb’s point: the junction of C5 and C6 roots forming the upper trunk.',
    'Long thoracic nerve (C5–C7) injury → winging of scapula.',
    'Remember the order: Roots → Trunks → Divisions → Cords → Branches.'
  ],
  mnemonics: [
    { text: 'Real Teenagers Drink Cold Beer', meaning: 'Roots, Trunks, Divisions, Cords, Branches' }
  ]
},
{
  id: 'ul-nerve-musculocutaneous',
  name: 'Musculocutaneous nerve',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'upper-limb',
  zones: ['axilla', 'arm', 'elbow', 'forearm'],
  verified: false,
  source: '',
  doubtful: [],
  reviewNote: '',
  description: 'Nerve of the flexor compartment of the arm.',
  location: 'Axilla and anterior compartment of arm; continues into forearm as a cutaneous nerve.',
  parts: [],
  nerve: {
    rootValue: 'C5, C6, C7 (lateral cord)',
    course: 'Arises from the lateral cord in the axilla, pierces coracobrachialis, runs downward and laterally between biceps brachii and brachialis, and emerges lateral to the biceps tendon above the elbow to continue as the lateral cutaneous nerve of the forearm.',
    branches: ['Muscular branches', 'Lateral cutaneous nerve of forearm (terminal)', 'Articular branch to elbow joint'],
    motor: ['[[ul-musc-biceps-brachii]]', 'Coracobrachialis', '[[ul-musc-brachialis]]'],
    sensory: ['Lateral side of forearm (via lateral cutaneous nerve of forearm)']
  },
  relations: [
    { dir: 'in arm', text: 'Lies between biceps brachii (in front) and brachialis (behind).', ref: 'ul-musc-brachialis' }
  ],
  clinical: [
    { title: 'Injury:', text: 'Weak elbow flexion and supination (brachioradialis and others still flex the elbow); sensory loss on lateral forearm. Isolated injury is uncommon.' }
  ],
  highYield: [
    'Pierces coracobrachialis — a classic identification point.',
    'Supplies all three muscles of the front of the arm.'
  ],
  mnemonics: []
},
{
  id: 'ul-nerve-axillary',
  name: 'Axillary nerve',
  aka: ['Circumflex nerve'],
  type: 'nerve',
  system: ['nervous'],
  region: 'upper-limb',
  zones: ['axilla', 'shoulder'],
  verified: false,
  source: '',
  doubtful: [],
  reviewNote: '',
  description: 'Branch of the posterior cord supplying deltoid and teres minor.',
  location: 'Axilla → quadrangular space → around the surgical neck of humerus.',
  parts: [],
  nerve: {
    rootValue: 'C5, C6 (posterior cord)',
    course: 'Arises from the posterior cord, passes backward through the quadrangular space with the posterior circumflex humeral vessels, winds around the surgical neck of the humerus deep to deltoid, and divides into anterior and posterior branches.',
    branches: ['Anterior branch (to deltoid)', 'Posterior branch (to teres minor, posterior deltoid; continues as upper lateral cutaneous nerve of arm)', 'Articular branch to shoulder joint'],
    motor: ['[[ul-musc-deltoid]]', '[[ul-musc-teres-minor]]'],
    sensory: ['Skin over the lower half of deltoid (upper lateral cutaneous nerve of arm) — “regimental badge” area']
  },
  relations: [
    { dir: 'quadrangular space', text: 'Accompanied by the posterior circumflex humeral artery.', ref: '' },
    { dir: 'bone', text: 'In contact with the surgical neck of humerus.', ref: 'ul-bone-humerus' }
  ],
  clinical: [
    { title: 'Injury:', text: 'Fracture of surgical neck of humerus or (inferior/anterior) dislocation of shoulder. Loss of abduction beyond initiation, flattened shoulder contour from deltoid wasting, sensory loss over regimental badge area.' }
  ],
  highYield: [
    'Tested by sensation over the regimental badge area after shoulder dislocation.',
    'Passes through the quadrangular space.'
  ],
  mnemonics: []
},
{
  id: 'ul-nerve-radial',
  name: 'Radial nerve',
  aka: ['Musculospiral nerve'],
  type: 'nerve',
  system: ['nervous'],
  region: 'upper-limb',
  zones: ['axilla', 'arm', 'elbow', 'forearm', 'hand'],
  verified: false,
  source: '',
  doubtful: [],
  reviewNote: '',
  description: 'Largest branch of the brachial plexus; nerve of the extensor compartments of arm and forearm.',
  location: 'Axilla, posterior arm (radial groove), front of lateral epicondyle, forearm and dorsum of hand.',
  parts: [],
  nerve: {
    rootValue: 'C5, C6, C7, C8, T1 (posterior cord)',
    course: 'Begins in the axilla behind the axillary artery, leaves through the lower triangular space with the profunda brachii artery, runs in the radial (spiral) groove of the humerus between the lateral and medial heads of triceps, pierces the lateral intermuscular septum, and enters the front of the arm between brachialis and brachioradialis. In front of the lateral epicondyle it divides into superficial (sensory) and deep (posterior interosseous) branches.',
    branches: [
      'In axilla/arm: posterior cutaneous nerve of arm; muscular branches to triceps and anconeus',
      'In radial groove: lower lateral cutaneous nerve of arm; posterior cutaneous nerve of forearm',
      'Lateral to elbow: branches to brachioradialis, extensor carpi radialis longus, lateral part of brachialis',
      'Terminal: superficial branch (cutaneous) and deep branch / posterior interosseous nerve (muscular)'
    ],
    motor: ['[[ul-musc-triceps-brachii]], anconeus', 'Brachioradialis, extensor carpi radialis longus', 'Deep branch: extensor carpi radialis brevis, supinator, and the extensor muscles of the back of the forearm'],
    sensory: ['Posterior arm and lower lateral arm', 'Posterior forearm', 'Superficial branch: lateral dorsum of hand and dorsum of lateral 3½ digits (proximal parts)']
  },
  relations: [
    { dir: 'radial groove', text: 'In direct contact with the shaft of humerus, accompanied by the profunda brachii artery.', ref: 'ul-bone-humerus' }
  ],
  clinical: [
    { title: 'Mid-shaft humerus fracture / “Saturday night palsy”:', text: 'Lesion at the radial groove → wrist drop; triceps largely spared because its branches arise higher.' },
    { title: 'Crutch palsy (axillary lesion):', text: 'Triceps is also paralysed, with loss of elbow extension in addition to wrist drop.' },
    { title: 'Posterior interosseous nerve lesion:', text: 'Finger drop without significant wrist drop (ECRL spared) and no sensory loss.' }
  ],
  highYield: [
    'Wrist drop is the classic sign.',
    'Autonomous sensory area: dorsum of the first web space.'
  ],
  mnemonics: [
    { text: 'BEST', meaning: 'Radial nerve supplies Brachioradialis, Extensors, Supinator, Triceps' }
  ]
},
{
  id: 'ul-nerve-median',
  name: 'Median nerve',
  aka: ['Labourer’s nerve', 'Eye of the hand'],
  type: 'nerve',
  system: ['nervous'],
  region: 'upper-limb',
  zones: ['axilla', 'arm', 'elbow', 'forearm', 'hand'],
  verified: false,
  source: '',
  doubtful: ['branches'],
  reviewNote: 'Check: whether a branch to pronator teres arises above the elbow (variable; often stated "no branches in arm").',
  description: 'Main nerve of the flexor compartment of the forearm and the thenar muscles.',
  location: 'Axilla, arm, cubital fossa, front of forearm, carpal tunnel, palm.',
  parts: [],
  nerve: {
    rootValue: 'C5, C6, C7, C8, T1 (lateral root from lateral cord C5–C7; medial root from medial cord C8, T1)',
    course: 'Formed by the union of lateral and medial roots, lateral to the axillary artery. In the arm it lies lateral to the brachial artery, crosses in front of it at mid-arm, and lies medial to it in the cubital fossa. Enters the forearm between the two heads of pronator teres, runs deep to flexor digitorum superficialis (adherent to its deep surface), becomes superficial just above the wrist between FDS and FCR tendons, and passes through the carpal tunnel into the palm.',
    branches: [
      'Generally no branches in the axilla and arm',
      'Muscular branches in forearm: pronator teres, flexor carpi radialis, palmaris longus, flexor digitorum superficialis',
      'Anterior interosseous nerve: flexor pollicis longus, lateral half of flexor digitorum profundus, pronator quadratus',
      'Palmar cutaneous branch (arises above the wrist, passes superficial to the flexor retinaculum)',
      'In palm: recurrent (muscular) branch to thenar muscles; digital branches incl. to lateral two lumbricals'
    ],
    motor: ['Most flexors and pronators of the forearm (except FCU and medial half of FDP)', 'Thenar muscles: abductor pollicis brevis, flexor pollicis brevis, opponens pollicis', 'Lateral two lumbricals'],
    sensory: ['Lateral palm (palmar cutaneous branch)', 'Palmar surface of lateral 3½ digits and their dorsal distal parts (nail beds)']
  },
  relations: [
    { dir: 'arm', text: 'Crosses the brachial artery from lateral to medial, anterior to it.', ref: 'ul-art-brachial' },
    { dir: 'cubital fossa', text: 'Most medial of the main contents.', ref: 'ul-space-cubital-fossa' },
    { dir: 'wrist', text: 'Passes through the carpal tunnel deep to the flexor retinaculum.', ref: 'ul-space-carpal-tunnel' }
  ],
  clinical: [
    { title: 'Carpal tunnel syndrome:', text: 'Compression in the carpal tunnel → pain/paraesthesia of lateral 3½ digits, thenar wasting; palm sensation spared because the palmar cutaneous branch passes superficial to the retinaculum. Tinel’s and Phalen’s tests.' },
    { title: 'Lesion at or above the elbow (e.g. supracondylar fracture):', text: 'Loss of flexion of index (and partly middle) finger — “hand of benediction” on attempting to make a fist; ape-thumb deformity.' },
    { title: 'Anterior interosseous nerve lesion:', text: 'Cannot make an “O” with thumb and index finger (FPL and lateral FDP weak); no sensory loss.' }
  ],
  highYield: [
    'Ape-thumb deformity = thenar paralysis.',
    'Pointing index / hand of benediction = high median lesion.'
  ],
  mnemonics: [
    { text: 'LOAF', meaning: 'Median nerve in the hand: Lateral two lumbricals, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis' }
  ]
},
{
  id: 'ul-nerve-ulnar',
  name: 'Ulnar nerve',
  aka: ['Musician’s nerve'],
  type: 'nerve',
  system: ['nervous'],
  region: 'upper-limb',
  zones: ['axilla', 'arm', 'elbow', 'forearm', 'hand'],
  verified: false,
  source: '',
  doubtful: ['rootValue'],
  reviewNote: 'Check: C7 contribution (via lateral root from lateral cord) — mentioned in some texts.',
  description: 'Nerve of most intrinsic hand muscles (fine movements).',
  location: 'Axilla, medial arm, behind medial epicondyle, medial forearm, Guyon’s canal, hand.',
  parts: [],
  nerve: {
    rootValue: 'C8, T1 (medial cord); sometimes C7',
    course: 'Arises from the medial cord, runs medial to the axillary and brachial arteries, pierces the medial intermuscular septum at mid-arm, passes behind the medial epicondyle, enters the forearm between the two heads of flexor carpi ulnaris, descends on FDP under cover of FCU, and crosses the wrist superficial to the flexor retinaculum, lateral to the pisiform (Guyon’s canal), dividing into superficial and deep branches.',
    branches: [
      'Muscular branches in forearm: flexor carpi ulnaris, medial half of flexor digitorum profundus',
      'Palmar cutaneous branch',
      'Dorsal cutaneous branch (arises in the forearm)',
      'Superficial terminal branch: palmaris brevis; digital nerves',
      'Deep terminal branch: hypothenar muscles, medial two lumbricals, all interossei, adductor pollicis'
    ],
    motor: ['FCU and medial half of FDP', 'Hypothenar muscles, palmaris brevis', 'All interossei, medial two lumbricals, adductor pollicis'],
    sensory: ['Medial palm and dorsum of hand', 'Medial 1½ digits (palmar and dorsal)']
  },
  relations: [
    { dir: 'elbow', text: 'Lies behind the medial epicondyle of humerus (palpable — the “funny bone”).', ref: 'ul-bone-humerus' },
    { dir: 'wrist', text: 'Superficial to the flexor retinaculum, with the ulnar artery lateral to it.', ref: 'ul-art-ulnar' }
  ],
  clinical: [
    { title: 'Ulnar claw hand:', text: 'Hyperextension at MCP and flexion at IP joints of ring and little fingers (medial lumbricals and interossei paralysed).' },
    { title: 'Ulnar paradox:', text: 'Lesion at the elbow causes less clawing than lesion at the wrist, because medial FDP is also paralysed.' },
    { title: 'Froment’s sign:', text: 'Patient flexes the thumb IP joint (FPL, median) to hold paper, compensating for a paralysed adductor pollicis.' }
  ],
  highYield: [
    'Card test: loss of adduction of fingers (palmar interossei).',
    'Medial epicondyle fracture → ulnar nerve injury.'
  ],
  mnemonics: []
}
]);
