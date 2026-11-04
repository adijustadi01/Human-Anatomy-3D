// UPPER LIMB — MUSCLES
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/upper-limb/muscles.js', [
{
  id: 'ul-musc-deltoid',
  name: 'Deltoid',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['shoulder'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Thick triangular muscle forming the rounded contour of the shoulder.',
  location: 'Covers the shoulder joint anteriorly, laterally and posteriorly.',
  parts: ['Anterior (clavicular) fibres', 'Middle (acromial) fibres — multipennate', 'Posterior (spinal) fibres'],
  muscle: {
    origin: ['Anterior border and upper surface of lateral third of clavicle', 'Lateral border of acromion', 'Lower lip of crest of spine of scapula'],
    insertion: ['Deltoid tuberosity of humerus'],
    nerveSupply: '[[ul-nerve-axillary]] (C5, C6)',
    bloodSupply: 'Posterior circumflex humeral artery; deltoid branch of thoracoacromial artery',
    action: ['Middle fibres: abduction of arm (after initiation by supraspinatus) up to about 90°', 'Anterior fibres: flexion and medial rotation', 'Posterior fibres: extension and lateral rotation']
  },
  relations: [
    { dir: 'deep', text: 'Subacromial (subdeltoid) bursa, rotator cuff, axillary nerve and posterior circumflex humeral vessels.', ref: 'ul-nerve-axillary' }
  ],
  clinical: [
    { title: 'Intramuscular injection:', text: 'Given into the upper part of deltoid to avoid the axillary nerve, which runs around the surgical neck.' },
    { title: 'Axillary nerve injury:', text: 'Deltoid paralysis and wasting → flattened shoulder, weak abduction.' }
  ],
  highYield: ['Middle fibres are multipennate (strength over range).'],
  mnemonics: []
},
{
  id: 'ul-musc-supraspinatus',
  name: 'Supraspinatus',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['shoulder'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Rotator cuff muscle above the spine of the scapula.',
  location: 'Supraspinous fossa; tendon passes under the acromion.',
  parts: [],
  muscle: {
    origin: ['Medial two-thirds of supraspinous fossa of scapula'],
    insertion: ['Superior facet (impression) of greater tubercle of humerus'],
    nerveSupply: 'Suprascapular nerve (C5, C6)',
    bloodSupply: 'Suprascapular artery',
    action: ['Initiates abduction of arm (first ~15°)', 'Stabilises head of humerus in glenoid cavity (rotator cuff)']
  },
  relations: [
    { dir: 'superior', text: 'Coracoacromial arch and subacromial bursa.', ref: 'ul-joint-shoulder' }
  ],
  clinical: [
    { title: 'Rotator cuff tear / supraspinatus tendinitis:', text: 'Most commonly involved cuff tendon; painful arc of abduction (about 60–120°) and impingement under the acromion.' }
  ],
  highYield: ['Initiator of abduction.', 'Commonest rotator cuff tendon to tear.'],
  mnemonics: [{ text: 'SITS', meaning: 'Rotator cuff: Supraspinatus, Infraspinatus, Teres minor, Subscapularis' }]
},
{
  id: 'ul-musc-infraspinatus',
  name: 'Infraspinatus',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['shoulder'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Rotator cuff muscle below the spine of the scapula.',
  location: 'Infraspinous fossa.',
  parts: [],
  muscle: {
    origin: ['Medial two-thirds of infraspinous fossa of scapula'],
    insertion: ['Middle facet (impression) of greater tubercle of humerus'],
    nerveSupply: 'Suprascapular nerve (C5, C6)',
    bloodSupply: 'Suprascapular and circumflex scapular arteries',
    action: ['Lateral rotation of arm', 'Stabilises shoulder joint (rotator cuff)']
  },
  relations: [],
  clinical: [],
  highYield: ['Supraspinatus and infraspinatus share the suprascapular nerve.'],
  mnemonics: []
},
{
  id: 'ul-musc-teres-minor',
  name: 'Teres minor',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['shoulder'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Small rotator cuff muscle along the lateral border of the scapula.',
  location: 'Posterior scapular region; forms upper boundary of quadrangular and triangular spaces.',
  parts: [],
  muscle: {
    origin: ['Upper two-thirds of dorsal surface of lateral border of scapula'],
    insertion: ['Lower facet (impression) of greater tubercle of humerus'],
    nerveSupply: '[[ul-nerve-axillary]] (C5, C6)',
    bloodSupply: 'Circumflex scapular artery',
    action: ['Lateral rotation of arm', 'Stabilises shoulder joint (rotator cuff)']
  },
  relations: [
    { dir: 'below', text: 'Quadrangular space (axillary nerve, posterior circumflex humeral vessels).', ref: 'ul-nerve-axillary' }
  ],
  clinical: [],
  highYield: ['Only rotator cuff muscle supplied by the axillary nerve.'],
  mnemonics: []
},
{
  id: 'ul-musc-subscapularis',
  name: 'Subscapularis',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['shoulder', 'axilla'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Large rotator cuff muscle on the costal surface of the scapula.',
  location: 'Subscapular fossa; forms most of the posterior wall of the axilla.',
  parts: [],
  muscle: {
    origin: ['Medial two-thirds of subscapular fossa'],
    insertion: ['Lesser tubercle of humerus'],
    nerveSupply: 'Upper and lower subscapular nerves (C5, C6)',
    bloodSupply: 'Subscapular artery',
    action: ['Medial rotation of arm', 'Stabilises shoulder joint anteriorly (rotator cuff)']
  },
  relations: [
    { dir: 'anterior', text: 'Forms the posterior wall of the axilla.', ref: 'ul-space-axilla' }
  ],
  clinical: [],
  highYield: ['Only rotator cuff muscle inserting on the lesser tubercle.'],
  mnemonics: []
},
{
  id: 'ul-musc-serratus-anterior',
  name: 'Serratus anterior',
  aka: ['Boxer’s muscle'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['shoulder', 'axilla'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Broad muscle on the side of the chest wall, holding the scapula against the thorax.',
  location: 'Medial wall of the axilla.',
  parts: [],
  muscle: {
    origin: ['Outer surfaces of upper eight ribs (by digitations)'],
    insertion: ['Costal surface of medial border of scapula (lower digitations concentrated at inferior angle)'],
    nerveSupply: 'Long thoracic nerve (C5, C6, C7)',
    bloodSupply: 'Lateral thoracic artery; thoracodorsal artery',
    action: ['Protraction of scapula (pushing, punching)', 'Lateral (upward) rotation of scapula with trapezius — overhead abduction beyond 90°', 'Holds scapula against chest wall']
  },
  relations: [
    { dir: 'superficial', text: 'Long thoracic nerve runs on its outer surface.', ref: '' }
  ],
  clinical: [
    { title: 'Winging of scapula:', text: 'Paralysis (long thoracic nerve injury, e.g. during axillary surgery) → medial border lifts off chest wall when pushing against a wall; difficulty raising arm above head.' }
  ],
  highYield: ['Long thoracic nerve = “nerve of Bell”.'],
  mnemonics: []
},
{
  id: 'ul-musc-biceps-brachii',
  name: 'Biceps brachii',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['arm', 'elbow'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Two-headed muscle of the front of the arm.',
  location: 'Anterior compartment of arm.',
  parts: ['Short head', 'Long head (tendon intracapsular in shoulder joint, enclosed in a synovial sheath)'],
  muscle: {
    origin: ['Short head: tip of coracoid process (with coracobrachialis)', 'Long head: supraglenoid tubercle of scapula'],
    insertion: ['Posterior rough part of radial tuberosity', 'Bicipital aponeurosis into deep fascia of medial forearm'],
    nerveSupply: '[[ul-nerve-musculocutaneous]] (C5, C6)',
    bloodSupply: 'Muscular branches of brachial artery',
    action: ['Powerful supinator of forearm (when elbow is flexed)', 'Flexor of elbow', 'Weak flexor of shoulder (long head also helps stabilise humeral head)']
  },
  relations: [
    { dir: 'deep', text: 'Brachialis, with musculocutaneous nerve between them.', ref: 'ul-musc-brachialis' },
    { dir: 'cubital fossa', text: 'Its tendon lies lateral to the brachial artery.', ref: 'ul-space-cubital-fossa' }
  ],
  clinical: [
    { title: 'Biceps jerk:', text: 'Tests C5, C6.' },
    { title: 'Rupture of long head tendon:', text: 'Bulge of muscle belly in lower arm (“Popeye” sign).' }
  ],
  highYield: ['Supination is its most powerful action (used in screwing).'],
  mnemonics: []
},
{
  id: 'ul-musc-brachialis',
  name: 'Brachialis',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['arm', 'elbow'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Main flexor of the elbow, deep to biceps.',
  location: 'Anterior compartment of arm; forms floor of cubital fossa.',
  parts: [],
  muscle: {
    origin: ['Lower half of anterior surface of humerus'],
    insertion: ['Coronoid process and tuberosity of ulna'],
    nerveSupply: '[[ul-nerve-musculocutaneous]]; lateral part also from [[ul-nerve-radial]]',
    bloodSupply: 'Branches of brachial artery',
    action: ['Flexion of elbow in all positions of the forearm']
  },
  relations: [
    { dir: 'superficial', text: 'Biceps brachii.', ref: 'ul-musc-biceps-brachii' }
  ],
  clinical: [
    { title: 'Myositis ossificans:', text: 'Can follow elbow injury (e.g. supracondylar fracture), with ossification within brachialis.' }
  ],
  highYield: ['“Workhorse” of elbow flexion — pure flexor.', 'Dual nerve supply.'],
  mnemonics: []
},
{
  id: 'ul-musc-triceps-brachii',
  name: 'Triceps brachii',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['arm'],
  verified: false, source: '', doubtful: ['clinical'], reviewNote: 'Check root value quoted for triceps jerk in your textbook.',
  description: 'Three-headed muscle of the back of the arm.',
  location: 'Posterior compartment of arm.',
  parts: ['Long head', 'Lateral head', 'Medial head'],
  muscle: {
    origin: ['Long head: infraglenoid tubercle of scapula', 'Lateral head: posterior surface of humerus above the radial groove', 'Medial head: posterior surface of humerus below the radial groove'],
    insertion: ['Upper surface of olecranon process of ulna (posterior part)'],
    nerveSupply: '[[ul-nerve-radial]]',
    bloodSupply: 'Profunda brachii artery',
    action: ['Extension of elbow', 'Long head: helps adduct and stabilise shoulder joint']
  },
  relations: [
    { dir: 'between heads', text: 'Radial nerve and profunda brachii artery in the radial groove.', ref: 'ul-nerve-radial' }
  ],
  clinical: [
    { title: 'Triceps jerk:', text: 'Tests C6, C7 (mainly C7).' }
  ],
  highYield: ['Long head separates the quadrangular space from the triangular space.'],
  mnemonics: []
},
{
  id: 'ul-musc-fds',
  name: 'Flexor digitorum superficialis',
  aka: ['FDS', 'Flexor digitorum sublimis'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['forearm', 'hand'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest superficial flexor of the forearm (intermediate layer).',
  location: 'Anterior compartment of forearm, intermediate layer.',
  parts: ['Humero-ulnar head', 'Radial head'],
  muscle: {
    origin: ['Humero-ulnar head: medial epicondyle (common flexor origin) and medial border of coronoid process', 'Radial head: anterior oblique line of radius'],
    insertion: ['Four tendons, each splitting to insert on the sides of the middle phalanx of the medial four digits'],
    nerveSupply: '[[ul-nerve-median]]',
    bloodSupply: 'Ulnar and radial arteries (muscular branches)',
    action: ['Flexion of proximal interphalangeal joints', 'Assists flexion of MCP joints and wrist']
  },
  relations: [
    { dir: 'deep', text: 'Median nerve adheres to its deep surface.', ref: 'ul-nerve-median' }
  ],
  clinical: [
    { title: 'Testing FDS:', text: 'Hold the other fingers in full extension (to block FDP) and ask the patient to flex the free finger at the PIP joint.' }
  ],
  highYield: ['Its tendons split to let FDP tendons pass through.'],
  mnemonics: [{ text: '“Superficialis splits in two to let profundus pass through”', meaning: 'FDS inserts on middle phalanx; FDP passes through to the distal phalanx' }]
},
{
  id: 'ul-musc-fdp',
  name: 'Flexor digitorum profundus',
  aka: ['FDP'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['forearm', 'hand'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Deep flexor of the fingers; only muscle that flexes the DIP joints.',
  location: 'Anterior compartment of forearm, deep layer.',
  parts: [],
  muscle: {
    origin: ['Upper three-quarters of anterior and medial surfaces of ulna', 'Adjoining interosseous membrane'],
    insertion: ['Bases of distal phalanges of medial four digits'],
    nerveSupply: 'Medial half: [[ul-nerve-ulnar]]; lateral half: anterior interosseous branch of [[ul-nerve-median]]',
    bloodSupply: 'Ulnar artery and anterior interosseous artery',
    action: ['Flexion of distal interphalangeal joints', 'Assists flexion of PIP, MCP and wrist joints']
  },
  relations: [
    { dir: 'superficial', text: 'FDS; ulnar nerve and artery run on it under FCU.', ref: 'ul-musc-fds' }
  ],
  clinical: [
    { title: 'Ulnar paradox:', text: 'High ulnar lesion paralyses medial FDP, so clawing of ring and little fingers is less marked.' }
  ],
  highYield: ['Dual nerve supply (ulnar + median via AIN).', 'Lumbricals arise from its tendons.'],
  mnemonics: []
}
]);
