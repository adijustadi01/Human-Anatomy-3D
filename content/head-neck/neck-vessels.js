// HEAD & NECK — NECK VESSELS & LYMPH NODES
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/head-neck/neck-vessels.js', [
{
  id: 'hn-art-common-carotid',
  name: 'Common carotid artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['anterior', 'root'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Main artery of the head and neck.',
  location: 'Carotid sheath, from behind the sternoclavicular joint to the upper border of the thyroid cartilage.',
  parts: [],
  artery: {
    origin: 'Right: brachiocephalic trunk, behind the right sternoclavicular joint. Left: arch of aorta (has a thoracic part in the superior mediastinum).',
    course: 'Ascends in the carotid sheath and ends at the upper border of the thyroid cartilage (about C3/C4) by dividing into the [[hn-art-internal-carotid]] and [[hn-art-external-carotid]].',
    branches: ['No branches other than its terminal ones'],
    territory: 'Head and neck (through its terminal branches).'
  },
  relations: [
    { dir: 'medial', text: 'Trachea, oesophagus, larynx, pharynx, thyroid gland, recurrent laryngeal nerve.', ref: 'hn-organ-thyroid' },
    { dir: 'lateral', text: 'Internal jugular vein.', ref: 'hn-vein-internal-jugular' },
    { dir: 'posterior', text: 'Vagus (between artery and vein), sympathetic trunk, prevertebral muscles; carotid tubercle of C6 (artery can be compressed against it).', ref: 'hn-nerve-vagus' }
  ],
  clinical: [
    { title: 'Carotid pulse:', text: 'Felt in front of the SCM at the level of the upper border of the thyroid cartilage.' },
    { title: 'Carotid sinus and body:', text: 'At the bifurcation: sinus = baroreceptor (carotid sinus massage slows the heart); body = chemoreceptor. Both supplied mainly by IX.' }
  ],
  highYield: ['Has no branches in the neck.'],
  mnemonics: []
},
{
  id: 'hn-art-external-carotid',
  name: 'External carotid artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['anterior', 'face'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Artery of the neck, face, scalp and (via middle meningeal) the dura.',
  location: 'Carotid triangle, then within the parotid gland.',
  parts: [],
  artery: {
    origin: 'Terminal branch of the [[hn-art-common-carotid]] at the upper border of the thyroid cartilage.',
    course: 'Ascends at first anteromedial to the internal carotid, then lateral to it; enters the parotid gland and ends behind the neck of the mandible by dividing into the superficial temporal and maxillary arteries.',
    branches: ['Anterior: superior thyroid, lingual, facial', 'Posterior: occipital, posterior auricular', 'Medial: ascending pharyngeal', 'Terminal: superficial temporal, maxillary'],
    territory: 'Neck (thyroid, larynx, tongue), face, scalp, pharynx, jaws and teeth, dura mater (middle meningeal).'
  },
  relations: [
    { dir: 'superficial', text: 'Crossed by the hypoglossal nerve, posterior belly of digastric and stylohyoid.', ref: 'hn-nerve-hypoglossal' },
    { dir: 'between ECA and ICA', text: 'Styloglossus, stylopharyngeus, glossopharyngeal nerve, pharyngeal branch of vagus, styloid process.', ref: 'hn-nerve-glossopharyngeal' }
  ],
  clinical: [
    { title: 'Identification at surgery:', text: 'ECA has branches in the neck; ICA has none.' },
    { title: 'Ligation:', text: 'For severe facial or nasal haemorrhage; free anastomoses across the midline maintain supply.' }
  ],
  highYield: ['Eight branches.'],
  mnemonics: [{ text: 'Some Anatomists Like Freaking Out Poor Medical Students', meaning: 'Superior thyroid, Ascending pharyngeal, Lingual, Facial, Occipital, Posterior auricular, Maxillary, Superficial temporal' }]
},
{
  id: 'hn-art-internal-carotid',
  name: 'Internal carotid artery',
  aka: ['ICA'],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['anterior', 'cranial'],
  verified: false, source: '', doubtful: [], reviewNote: 'Intracranial course to be expanded under Head / Neuroanatomy.',
  description: 'Main supply to the anterior part of the brain and to the orbit.',
  location: 'Carotid triangle and carotid sheath → carotid canal → cavernous sinus → cranial cavity.',
  parts: ['Cervical, petrous, cavernous and cerebral parts'],
  artery: {
    origin: 'Terminal branch of the [[hn-art-common-carotid]] at the upper border of the thyroid cartilage (dilated at its origin — carotid sinus).',
    course: 'Ascends in the carotid sheath, at first posterolateral to the external carotid, to the carotid canal of the temporal bone; then through the cavernous sinus to the cranial cavity.',
    branches: ['No branches in the neck', 'Intracranial: ophthalmic, posterior communicating, anterior choroidal, anterior cerebral, middle cerebral'],
    territory: 'Anterior and middle parts of the cerebral hemispheres, eye and orbit, forehead.'
  },
  relations: [
    { dir: 'lateral', text: 'Internal jugular vein.', ref: 'hn-vein-internal-jugular' },
    { dir: 'posterior', text: 'Sympathetic trunk (superior cervical ganglion).', ref: 'hn-nerve-cervical-sympathetic' }
  ],
  clinical: [
    { title: 'Carotid stenosis:', text: 'Atheroma at the origin → TIA, stroke, amaurosis fugax; treated by endarterectomy.' }
  ],
  highYield: ['No branches in the neck.'],
  mnemonics: []
},
{
  id: 'hn-art-subclavian',
  name: 'Subclavian artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['root'],
  verified: false, source: '', doubtful: ['branches'], reviewNote: 'Check costocervical trunk origin on each side.',
  description: 'Artery of the upper limb; also supplies the brain, neck and thoracic wall.',
  location: 'Root of the neck, arching over the cervical pleura.',
  parts: ['Divided by [[hn-musc-scalenus-anterior]] into first (medial), second (behind the muscle) and third (lateral) parts'],
  artery: {
    origin: 'Right: brachiocephalic trunk, behind the right sternoclavicular joint. Left: arch of aorta.',
    course: 'Arches over the cervical pleura and apex of lung, passes behind scalenus anterior, and ends at the outer border of the first rib, continuing as the [[ul-art-axillary]].',
    branches: ['First part: [[hn-art-vertebral]], [[th-art-internal-thoracic]], thyrocervical trunk (inferior thyroid, suprascapular, transverse cervical); costocervical trunk (left side)', 'Second part: costocervical trunk (right side)', 'Third part: dorsal scapular artery (often)'],
    territory: 'Upper limb, brain (vertebral), thyroid, neck, upper thoracic wall, breast.'
  },
  relations: [
    { dir: 'anterior', text: 'Scalenus anterior (2nd part), phrenic nerve, subclavian vein.', ref: 'hn-musc-scalenus-anterior' },
    { dir: 'posterior / below', text: 'Cervical pleura; lower trunk of brachial plexus (3rd part on first rib).', ref: 'ul-nerve-brachial-plexus' }
  ],
  clinical: [
    { title: 'Compression for haemorrhage:', text: 'Pressed against the first rib in the supraclavicular fossa.' },
    { title: 'Subclavian steal:', text: 'Proximal stenosis → reversed flow in the vertebral artery when the arm is used.' },
    { title: 'Cervical rib:', text: 'Can compress the artery and lower trunk.' }
  ],
  highYield: ['Branches: VITamin C & D.'],
  mnemonics: [{ text: 'VIT C, D', meaning: 'Vertebral, Internal thoracic, Thyrocervical, Costocervical, Dorsal scapular' }]
},
{
  id: 'hn-art-vertebral',
  name: 'Vertebral artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular', 'nervous'],
  region: 'head-neck',
  zones: ['root', 'cranial'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Supplies the spinal cord, brainstem, cerebellum and posterior cerebrum.',
  location: 'Root of neck, foramina transversaria, suboccipital triangle, cranial cavity.',
  parts: [
    'First part: from origin to the transverse foramen of C6 (between scalenus anterior and longus colli)',
    'Second part: through the foramina transversaria of C6 to C1',
    'Third part: in the suboccipital triangle, in the groove on the posterior arch of the atlas',
    'Fourth part: pierces the dura, enters through the foramen magnum, and joins its fellow at the lower border of the pons to form the basilar artery'
  ],
  artery: {
    origin: 'First part of the [[hn-art-subclavian]].',
    course: 'See parts: ascends through the cervical transverse foramina (usually not C7) into the cranial cavity.',
    branches: ['Cervical: spinal and muscular branches', 'Cranial: meningeal, posterior inferior cerebellar artery (PICA), anterior and posterior spinal arteries, medullary branches'],
    territory: 'Cervical spinal cord, medulla, cerebellum; posterior circulation via the basilar artery.'
  },
  relations: [],
  clinical: [
    { title: 'Vertebrobasilar insufficiency:', text: 'Dizziness and drop attacks, e.g. with neck movement or cervical spondylosis.' },
    { title: 'PICA occlusion:', text: 'Lateral medullary (Wallenberg) syndrome.' },
    { title: 'Dissection:', text: 'After neck trauma or manipulation.' }
  ],
  highYield: ['Usually enters at C6, not C7.'],
  mnemonics: []
},
{
  id: 'hn-vein-internal-jugular',
  name: 'Internal jugular vein',
  aka: ['IJV'],
  type: 'vein',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['anterior', 'root'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Main vein draining the brain, face and neck.',
  location: 'Carotid sheath, from the jugular foramen to behind the sternal end of the clavicle.',
  parts: ['Superior bulb (at its beginning) and inferior bulb (above its termination, with a valve)'],
  vein: {
    origin: 'Continuation of the sigmoid sinus at the jugular foramen.',
    course: 'Descends in the carotid sheath, lateral to the internal and then the common carotid artery, with the vagus behind and between them.',
    tributaries: ['Inferior petrosal sinus', 'Pharyngeal veins', 'Common facial vein', 'Lingual vein', 'Superior and middle thyroid veins'],
    termination: 'Joins the subclavian vein behind the sternal end of the clavicle to form the brachiocephalic vein (thoracic duct ends at this junction on the left).',
    territory: 'Brain, face, scalp (part), neck.'
  },
  relations: [
    { dir: 'along it', text: 'Deep cervical lymph nodes.', ref: 'hn-lymph-deep-cervical-nodes' },
    { dir: 'medial', text: 'Internal / common carotid artery.', ref: 'hn-art-common-carotid' }
  ],
  clinical: [
    { title: 'Central venous cannulation:', text: 'Commonly at the apex of the triangle between the two heads of SCM.' },
    { title: 'Jugular venous pressure:', text: 'Reflects right atrial pressure.' }
  ],
  highYield: ['Surface marking: from the ear lobule to the medial end of the clavicle.'],
  mnemonics: []
},
{
  id: 'hn-vein-external-jugular',
  name: 'External jugular vein',
  aka: ['EJV'],
  type: 'vein',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['posterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Superficial vein of the side of the neck.',
  location: 'Superficial fascia over the sternocleidomastoid, deep to platysma.',
  parts: [],
  vein: {
    origin: 'Formed near the angle of the mandible by union of the posterior division of the retromandibular vein and the posterior auricular vein.',
    course: 'Runs downward and backward across the sternocleidomastoid; pierces the investing fascia in the lower posterior triangle above the clavicle.',
    tributaries: ['Posterior external jugular vein', 'Transverse cervical vein', 'Suprascapular vein', 'Anterior jugular vein'],
    termination: 'Subclavian vein.',
    territory: 'Scalp behind the ear, part of face, superficial neck.'
  },
  relations: [
    { dir: 'deep', text: 'Sternocleidomastoid.', ref: 'hn-musc-sternocleidomastoid' }
  ],
  clinical: [
    { title: 'Raised venous pressure:', text: 'Becomes visibly distended.' },
    { title: 'Air embolism:', text: 'If cut where it pierces the deep fascia, its wall is held open and air may be sucked in.' }
  ],
  highYield: ['Surface marking: angle of mandible to the middle of the clavicle.'],
  mnemonics: []
},
{
  id: 'hn-lymph-deep-cervical-nodes',
  name: 'Deep cervical lymph nodes',
  aka: [],
  type: 'lymphatic',
  system: ['lymphatic'],
  region: 'head-neck',
  zones: ['anterior'],
  verified: false, source: '', doubtful: [], reviewNote: 'Clinical (surgical) neck levels I–VI can be added after verification.',
  description: 'Chain of nodes along the internal jugular vein; final common pathway for lymph of the head and neck.',
  location: 'Along the internal jugular vein, mostly under cover of the sternocleidomastoid.',
  parts: [],
  lymphatic: {
    groups: [
      'Upper deep cervical — includes the jugulodigastric node (below the posterior belly of digastric; drains the palatine tonsil and tongue)',
      'Lower deep cervical — includes the jugulo-omohyoid node (above the intermediate tendon of omohyoid; drains the tongue)'
    ],
    drainageArea: ['All lymph of the head and neck, directly or via superficial groups (occipital, mastoid, parotid, submandibular, submental, superficial cervical)'],
    efferents: 'Jugular lymph trunk → thoracic duct (left) or right lymphatic duct / directly into the venous angle (right).'
  },
  relations: [
    { dir: 'along', text: 'Internal jugular vein within / on the carotid sheath.', ref: 'hn-vein-internal-jugular' }
  ],
  clinical: [
    { title: 'Neck lump:', text: 'Metastatic carcinoma (oral cavity, larynx, pharynx, thyroid) is a common cause in older adults; tuberculous lymphadenitis is common in endemic areas.' },
    { title: 'Radical neck dissection:', text: 'Removes the nodes together with IJV, SCM and the accessory nerve.' }
  ],
  highYield: ['Jugulodigastric = “tonsillar node”.'],
  mnemonics: []
}
]);
