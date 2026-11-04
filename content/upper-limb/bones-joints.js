// UPPER LIMB — BONES & JOINTS
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/upper-limb/bones-joints.js', [
{
  id: 'ul-bone-humerus',
  name: 'Humerus',
  aka: [],
  type: 'bone',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['shoulder', 'arm', 'elbow'],
  verified: false, source: '', doubtful: [], reviewNote: 'Ossification left blank — fill from your textbook.',
  description: 'Long bone of the arm.',
  location: 'Arm; articulates with scapula above and radius and ulna below.',
  parts: ['Upper end', 'Shaft', 'Lower end'],
  bone: {
    features: [
      'Upper end: head, anatomical neck, surgical neck, greater and lesser tubercles, intertubercular sulcus',
      'Shaft: deltoid tuberosity, radial (spiral) groove',
      'Lower end: capitulum, trochlea, medial and lateral epicondyles; radial, coronoid and olecranon fossae'
    ],
    attachments: [
      'Surgical neck — [[ul-nerve-axillary]] and posterior circumflex humeral vessels',
      'Radial groove — [[ul-nerve-radial]] and profunda brachii vessels',
      'Behind medial epicondyle — [[ul-nerve-ulnar]]',
      'Greater tubercle — supraspinatus, infraspinatus, teres minor; lesser tubercle — subscapularis'
    ],
    ossification: ''
  },
  relations: [],
  clinical: [
    { title: 'Fracture of surgical neck:', text: 'Risk to axillary nerve.' },
    { title: 'Mid-shaft fracture:', text: 'Risk to radial nerve (wrist drop).' },
    { title: 'Supracondylar fracture (children):', text: 'Risk to brachial artery (Volkmann’s ischaemic contracture) and median nerve.' },
    { title: 'Medial epicondyle fracture:', text: 'Risk to ulnar nerve.' }
  ],
  highYield: ['Three nerves in direct contact with bone: axillary (surgical neck), radial (radial groove), ulnar (medial epicondyle).'],
  mnemonics: []
},
{
  id: 'ul-joint-shoulder',
  name: 'Shoulder joint',
  aka: ['Glenohumeral joint'],
  type: 'joint',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['shoulder'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Most mobile joint of the body; stability sacrificed for mobility.',
  location: 'Between scapula and humerus.',
  parts: [],
  joint: {
    jointType: 'Synovial joint, ball-and-socket (multiaxial) variety',
    articulation: 'Head of humerus with glenoid cavity of scapula (deepened by the glenoid labrum).',
    ligaments: ['Capsular ligament', 'Glenohumeral ligaments (superior, middle, inferior)', 'Coracohumeral ligament', 'Transverse humeral ligament', 'Glenoid labrum', 'Coracoacromial ligament (accessory, part of coracoacromial arch)'],
    movements: ['Flexion and extension', 'Abduction and adduction', 'Medial and lateral rotation', 'Circumduction'],
    bloodSupply: 'Anterior and posterior circumflex humeral, suprascapular and subscapular arteries',
    nerveSupply: 'Axillary, suprascapular and lateral pectoral nerves (Hilton’s law)'
  },
  relations: [
    { dir: 'superior', text: 'Coracoacromial arch, subacromial bursa, supraspinatus.', ref: 'ul-musc-supraspinatus' },
    { dir: 'anterior', text: 'Subscapularis.', ref: 'ul-musc-subscapularis' },
    { dir: 'posterior', text: 'Infraspinatus and teres minor.', ref: 'ul-musc-infraspinatus' },
    { dir: 'inferior', text: 'Long head of triceps, axillary nerve, posterior circumflex humeral vessels — the weakest (unsupported) part of the capsule.', ref: 'ul-nerve-axillary' }
  ],
  clinical: [
    { title: 'Dislocation:', text: 'Usually anterior (subcoracoid), the head leaving through the weak inferior part of the capsule; risk to axillary nerve.' },
    { title: 'Frozen shoulder (adhesive capsulitis):', text: 'Painful restriction of movements.' }
  ],
  highYield: ['Rotator cuff provides most of the stability.', 'Inferior capsule is weakest.'],
  mnemonics: []
},
{
  id: 'ul-joint-elbow',
  name: 'Elbow joint',
  aka: [],
  type: 'joint',
  system: ['musculoskeletal'],
  region: 'upper-limb',
  zones: ['elbow'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Hinge joint between arm and forearm.',
  location: 'Between lower end of humerus and upper ends of radius and ulna.',
  parts: ['Humero-ulnar articulation', 'Humeroradial articulation'],
  joint: {
    jointType: 'Synovial joint, hinge variety',
    articulation: 'Trochlea of humerus with trochlear notch of ulna; capitulum of humerus with head of radius. Cavity is continuous with that of the superior radioulnar joint.',
    ligaments: ['Capsular ligament', 'Ulnar (medial) collateral ligament — anterior, posterior and oblique bands', 'Radial (lateral) collateral ligament — blends with the annular ligament'],
    movements: ['Flexion', 'Extension'],
    bloodSupply: 'Anastomosis around the elbow (collateral branches of brachial and recurrent branches of radial and ulnar arteries)',
    nerveSupply: 'Musculocutaneous, radial, ulnar and median nerves'
  },
  relations: [
    { dir: 'anterior', text: 'Brachialis; contents of the cubital fossa.', ref: 'ul-space-cubital-fossa' },
    { dir: 'posterior', text: 'Triceps tendon.', ref: 'ul-musc-triceps-brachii' },
    { dir: 'medial', text: 'Ulnar nerve behind medial epicondyle.', ref: 'ul-nerve-ulnar' }
  ],
  clinical: [
    { title: 'Carrying angle:', text: 'Angle between arm and extended forearm (about 10–15°), usually greater in females; it disappears in flexion.' },
    { title: 'Posterior dislocation vs supracondylar fracture:', text: 'The normal relation of the two epicondyles and olecranon (a straight line in extension, a triangle in flexion) is disturbed in dislocation but maintained in supracondylar fracture.' }
  ],
  highYield: ['Shares its synovial cavity with the superior radioulnar joint.'],
  mnemonics: []
}
]);
