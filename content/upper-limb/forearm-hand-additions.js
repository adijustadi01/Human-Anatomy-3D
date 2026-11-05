// UPPER LIMB — ADDITIONS (forearm & hand muscles, scapula, clavicle, superficial veins)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/upper-limb/forearm-hand-additions.js', [
{
  id: 'ul-musc-pronator-teres', name: 'Pronator teres', aka: [], type: 'muscle',
  system: ['musculoskeletal'], region: 'upper-limb', zones: ['elbow', 'forearm'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Two-headed superficial flexor-compartment muscle; medial boundary of the cubital fossa.',
  location: 'Upper anterior forearm.', parts: ['Humeral head', 'Ulnar head'],
  muscle: {
    origin: ['Humeral head: medial epicondyle (common flexor origin) and medial supracondylar ridge', 'Ulnar head: medial border of the coronoid process'],
    insertion: ['Middle of the lateral surface of the radius (point of maximum convexity)'],
    nerveSupply: '[[ul-nerve-median]]', bloodSupply: 'Branches of ulnar and radial arteries',
    action: ['Pronation of forearm', 'Weak flexion of elbow']
  },
  relations: [
    { dir: 'between its heads', text: 'Median nerve enters the forearm.', ref: 'ul-nerve-median' },
    { dir: 'deep to ulnar head', text: 'Ulnar artery.', ref: 'ul-art-ulnar' }
  ],
  clinical: [{ title: 'Pronator syndrome:', text: 'Compression of the median nerve between the two heads.' }],
  highYield: ['Medial boundary of the cubital fossa.'], mnemonics: []
},
{
  id: 'ul-musc-fcu', name: 'Flexor carpi ulnaris', aka: ['FCU'], type: 'muscle',
  system: ['musculoskeletal'], region: 'upper-limb', zones: ['forearm'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Most medial superficial flexor of the forearm; the only forearm flexor wholly supplied by the ulnar nerve.',
  location: 'Medial side of the anterior forearm.', parts: ['Humeral head', 'Ulnar head'],
  muscle: {
    origin: ['Humeral head: medial epicondyle (common flexor origin)', 'Ulnar head: medial margin of olecranon and upper two-thirds of posterior border of ulna'],
    insertion: ['Pisiform, and through it the hook of hamate and base of 5th metacarpal'],
    nerveSupply: '[[ul-nerve-ulnar]]', bloodSupply: 'Ulnar artery',
    action: ['Flexion of wrist', 'Adduction (ulnar deviation) of wrist']
  },
  relations: [{ dir: 'between its heads', text: 'Ulnar nerve enters the forearm (cubital tunnel).', ref: 'ul-nerve-ulnar' }],
  clinical: [{ title: 'Cubital tunnel syndrome:', text: 'Ulnar nerve compression under the arch between the two heads.' }],
  highYield: ['Pisiform is a sesamoid bone in its tendon.'], mnemonics: []
},
{
  id: 'ul-musc-brachioradialis', name: 'Brachioradialis', aka: [], type: 'muscle',
  system: ['musculoskeletal'], region: 'upper-limb', zones: ['elbow', 'forearm'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Elbow flexor that is supplied by the radial (extensor) nerve.',
  location: 'Lateral side of the forearm; lateral boundary of the cubital fossa.', parts: [],
  muscle: {
    origin: ['Upper two-thirds of the lateral supracondylar ridge of humerus'],
    insertion: ['Lateral surface of lower end of radius, just above the styloid process'],
    nerveSupply: '[[ul-nerve-radial]]', bloodSupply: 'Radial recurrent artery',
    action: ['Flexion of elbow, especially in the mid-prone position', 'Brings the forearm to the mid-prone position']
  },
  relations: [{ dir: 'deep', text: 'Radial artery and superficial branch of radial nerve in the forearm.', ref: 'ul-art-radial' }],
  clinical: [{ title: 'Supinator (brachioradialis) jerk:', text: 'Tests C5, C6.' }],
  highYield: ['A flexor supplied by the radial nerve.'], mnemonics: []
},
{
  id: 'ul-musc-supinator', name: 'Supinator', aka: [], type: 'muscle',
  system: ['musculoskeletal'], region: 'upper-limb', zones: ['elbow', 'forearm'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Deep muscle wrapping round the upper radius; pierced by the posterior interosseous nerve.',
  location: 'Deep, upper posterolateral forearm; floor of the cubital fossa (lower part).', parts: [],
  muscle: {
    origin: ['Lateral epicondyle', 'Radial collateral and annular ligaments', 'Supinator crest and fossa of ulna'],
    insertion: ['Lateral, anterior and posterior surfaces of the upper third of the radius'],
    nerveSupply: 'Deep branch of [[ul-nerve-radial]] (posterior interosseous nerve)', bloodSupply: 'Radial recurrent and posterior interosseous arteries',
    action: ['Supination of forearm (main supinator when the elbow is extended)']
  },
  relations: [{ dir: 'within', text: 'Posterior interosseous nerve passes through it.', ref: 'ul-nerve-radial' }],
  clinical: [{ title: 'Supinator syndrome:', text: 'Entrapment of the posterior interosseous nerve at the arcade of Frohse → finger drop without sensory loss.' }],
  highYield: ['Biceps supinates powerfully in flexion; supinator in extension.'], mnemonics: []
},
{
  id: 'ul-musc-lumbricals', name: 'Lumbricals (hand)', aka: [], type: 'muscle',
  system: ['musculoskeletal'], region: 'upper-limb', zones: ['hand'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Four small muscles arising from the FDP tendons.',
  location: 'Palm.', parts: ['1st and 2nd (lateral) — unipennate', '3rd and 4th (medial) — bipennate'],
  muscle: {
    origin: ['Tendons of [[ul-musc-fdp]]'],
    insertion: ['Lateral (radial) side of the extensor expansion of the medial four digits'],
    nerveSupply: 'Lateral two: [[ul-nerve-median]]; medial two: deep branch of [[ul-nerve-ulnar]]', bloodSupply: 'Superficial and deep palmar arches',
    action: ['Flexion of metacarpophalangeal joints with extension of interphalangeal joints (writing position)']
  },
  relations: [],
  clinical: [{ title: 'Claw hand:', text: 'Paralysis of lumbricals (and interossei) → MCP hyperextension with IP flexion.' }],
  highYield: ['Arise from a flexor tendon and insert into an extensor expansion.'], mnemonics: []
},
{
  id: 'ul-musc-palmar-interossei', name: 'Palmar interossei', aka: [], type: 'muscle',
  system: ['musculoskeletal'], region: 'upper-limb', zones: ['hand'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Texts differ on whether there are three or four palmar interossei.',
  description: 'Adductors of the fingers toward the axis of the middle finger.',
  location: 'Between the metacarpals, palmar side.', parts: ['Usually described as four (the first, to the thumb, is small or absent in some texts); unipennate'],
  muscle: {
    origin: ['Palmar surfaces of the metacarpals of the digits they act on (side facing the middle finger)'],
    insertion: ['Extensor expansion and base of proximal phalanx of thumb, index, ring and little fingers — on the side facing the middle finger'],
    nerveSupply: 'Deep branch of [[ul-nerve-ulnar]]', bloodSupply: 'Palmar metacarpal arteries (deep palmar arch)',
    action: ['Adduction of fingers toward the middle finger (PAD)', 'Assist MCP flexion and IP extension']
  },
  relations: [],
  clinical: [{ title: 'Card test:', text: 'Inability to grip a card between extended fingers in ulnar nerve palsy.' }],
  highYield: ['Middle finger has no palmar interosseous.'],
  mnemonics: [{ text: 'PAD & DAB', meaning: 'Palmar ADduct, Dorsal ABduct' }]
},
{
  id: 'ul-musc-dorsal-interossei', name: 'Dorsal interossei (hand)', aka: [], type: 'muscle',
  system: ['musculoskeletal'], region: 'upper-limb', zones: ['hand'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Four bipennate abductors of the fingers from the axis of the middle finger.',
  location: 'Between the metacarpals, dorsal side.', parts: ['Four; bipennate'],
  muscle: {
    origin: ['Adjacent sides of two metacarpals'],
    insertion: ['Extensor expansion and base of proximal phalanx: 1st — lateral side of index; 2nd — lateral side of middle; 3rd — medial side of middle; 4th — medial side of ring finger'],
    nerveSupply: 'Deep branch of [[ul-nerve-ulnar]]', bloodSupply: 'Dorsal and palmar metacarpal arteries',
    action: ['Abduction of fingers from the middle finger (DAB)', 'Assist MCP flexion and IP extension']
  },
  relations: [{ dir: '1st space', text: 'Radial artery passes between the two heads of the first dorsal interosseous.', ref: 'ul-art-radial' }],
  clinical: [{ title: 'Ulnar nerve palsy:', text: 'Wasting of the first dorsal interosseous (guttering of the first web space dorsally).' }],
  highYield: ['Middle finger has two dorsal interossei.'], mnemonics: []
},
{
  id: 'ul-musc-apb', name: 'Abductor pollicis brevis', aka: ['APB'], type: 'muscle',
  system: ['musculoskeletal'], region: 'upper-limb', zones: ['hand'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Superficial thenar muscle; the best test muscle for median nerve function in the hand.',
  location: 'Thenar eminence (superficial lateral).', parts: [],
  muscle: {
    origin: ['Flexor retinaculum', 'Tubercles of scaphoid and trapezium'],
    insertion: ['Lateral side of base of proximal phalanx of thumb'],
    nerveSupply: 'Recurrent (muscular) branch of [[ul-nerve-median]]', bloodSupply: 'Superficial palmar branch of radial artery',
    action: ['Abduction of thumb (at the carpometacarpal and metacarpophalangeal joints)']
  },
  relations: [],
  clinical: [{ title: 'Pen test:', text: 'Patient lifts the thumb vertically from the palm to touch a pen — weak in carpal tunnel syndrome.' }],
  highYield: ['Thenar wasting in carpal tunnel syndrome.'], mnemonics: []
},
{
  id: 'ul-bone-scapula', name: 'Scapula', aka: ['Shoulder blade'], type: 'bone',
  system: ['musculoskeletal'], region: 'upper-limb', zones: ['shoulder', 'axilla'],
  verified: false, source: '', doubtful: ['features'], reviewNote: 'Check vertebral levels. Ossification left blank.',
  description: 'Flat triangular bone of the shoulder girdle on the posterolateral chest wall.',
  location: 'Posterior thoracic wall, over the 2nd–7th ribs.', parts: ['Costal and dorsal surfaces', 'Superior, lateral and medial borders', 'Superior, inferior and lateral angles'],
  bone: {
    features: [
      'Spine ending as the acromion; coracoid process; glenoid cavity',
      'Supraglenoid and infraglenoid tubercles',
      'Suprascapular notch on the superior border, bridged by the superior transverse scapular ligament (suprascapular nerve below, artery above)',
      'Surface levels: superior angle ~T2, root of spine ~T3, inferior angle ~T7 spine'
    ],
    attachments: [
      'Fossae: [[ul-musc-subscapularis]], [[ul-musc-supraspinatus]], [[ul-musc-infraspinatus]]',
      'Medial border: [[ul-musc-serratus-anterior]] (costal side), levator scapulae and rhomboids (dorsal side)',
      'Supraglenoid tubercle: long head of biceps; infraglenoid tubercle: long head of triceps',
      'Coracoid: pectoralis minor, coracobrachialis, short head of biceps',
      'Spine and acromion: trapezius and deltoid'
    ],
    ossification: ''
  },
  relations: [],
  clinical: [
    { title: 'Winging:', text: 'From serratus anterior paralysis (long thoracic nerve).' },
    { title: 'Scapular anastomosis:', text: 'Collateral route between subclavian and axillary arteries.' }
  ],
  highYield: ['Inferior angle ≈ T7 — landmark for counting ribs posteriorly.'], mnemonics: []
},
{
  id: 'ul-bone-clavicle', name: 'Clavicle', aka: ['Collar bone'], type: 'bone',
  system: ['musculoskeletal'], region: 'upper-limb', zones: ['shoulder'],
  verified: false, source: '', doubtful: ['ossification'], reviewNote: '',
  description: 'S-shaped long bone connecting the upper limb to the trunk.',
  location: 'Root of neck, horizontally between sternum and acromion.', parts: ['Medial two-thirds: convex forward', 'Lateral one-third: concave forward'],
  bone: {
    features: ['Sternal and acromial ends', 'Conoid tubercle and trapezoid line (coracoclavicular ligament)', 'Subclavian groove (subclavius)', 'Only long bone lying horizontally; has no medullary cavity'],
    attachments: ['Sternocleidomastoid (clavicular head), pectoralis major, deltoid, trapezius, subclavius', 'Costoclavicular and coracoclavicular ligaments'],
    ossification: 'First bone to start ossifying (about the 5th–6th week of intrauterine life); largely in membrane; the sternal-end secondary centre fuses last.'
  },
  relations: [{ dir: 'behind / below', text: 'Subclavian vessels and brachial plexus.', ref: 'ul-nerve-brachial-plexus' }],
  clinical: [{ title: 'Fracture:', text: 'Commonest at the junction of medial two-thirds and lateral one-third (fall on outstretched hand). Lateral fragment pulled down by the weight of the limb; medial fragment pulled up by sternocleidomastoid.' }],
  highYield: ['First bone to ossify.'], mnemonics: []
},
{
  id: 'ul-vein-cephalic', name: 'Cephalic vein', aka: [], type: 'vein',
  system: ['cardiovascular'], region: 'upper-limb', zones: ['arm', 'elbow', 'forearm', 'shoulder'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Superficial vein of the lateral side of the upper limb.',
  location: 'Superficial fascia, lateral side of limb; deltopectoral groove.', parts: [],
  vein: {
    origin: 'Lateral end of the dorsal venous network of the hand (over the anatomical snuffbox).',
    course: 'Ascends along the lateral border of the forearm, in front of the elbow lateral to the biceps, along the lateral side of the arm, then in the deltopectoral groove; pierces the clavipectoral fascia.',
    tributaries: ['Forearm superficial veins', 'Median cubital vein links it with the basilic vein at the elbow'],
    termination: 'Axillary vein.',
    territory: 'Superficial lateral upper limb.'
  },
  relations: [{ dir: 'snuffbox', text: 'Begins in the roof of the anatomical snuffbox.', ref: 'ul-space-anatomical-snuffbox' }],
  clinical: [{ title: 'Venous access:', text: 'Cut-down in the deltopectoral groove (e.g. pacemaker leads).' }],
  highYield: ['Ends by piercing the clavipectoral fascia.'], mnemonics: []
},
{
  id: 'ul-vein-basilic', name: 'Basilic vein', aka: [], type: 'vein',
  system: ['cardiovascular'], region: 'upper-limb', zones: ['arm', 'elbow', 'forearm'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Superficial vein of the medial side of the upper limb.',
  location: 'Superficial fascia, medial side of forearm and lower arm.', parts: [],
  vein: {
    origin: 'Medial end of the dorsal venous network of the hand.',
    course: 'Ascends along the medial side of the forearm, in front of the elbow medially, pierces the deep fascia about the middle of the arm, and runs with the brachial artery.',
    tributaries: ['Median cubital vein', 'Forearm superficial veins'],
    termination: 'Joins the venae comitantes of the brachial artery at the lower border of teres major to form the axillary vein.',
    territory: 'Superficial medial upper limb.'
  },
  relations: [],
  clinical: [
    { title: 'PICC lines:', text: 'Often preferred because of its straighter course to the axillary vein.' },
    { title: 'Median cubital vein:', text: 'Links cephalic and basilic veins; commonest venepuncture site.' }
  ],
  highYield: ['Continues as the axillary vein.'], mnemonics: []
}
]);
