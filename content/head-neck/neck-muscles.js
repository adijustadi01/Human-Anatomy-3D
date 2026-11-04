// HEAD & NECK — NECK MUSCLES
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/head-neck/neck-muscles.js', [
{
  id: 'hn-musc-sternocleidomastoid',
  name: 'Sternocleidomastoid',
  aka: ['Sternomastoid', 'SCM'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'head-neck',
  zones: ['anterior', 'posterior'],
  verified: false, source: '', doubtful: ['nerveSupply'], reviewNote: 'Check how your textbook describes the C2–C3 contribution.',
  description: 'Key landmark muscle dividing the side of the neck into anterior and posterior triangles.',
  location: 'Side of the neck, from the sternum and clavicle to the mastoid.',
  parts: ['Sternal head', 'Clavicular head'],
  muscle: {
    origin: ['Sternal head: upper part of anterior surface of manubrium', 'Clavicular head: medial third of upper surface of clavicle'],
    insertion: ['Lateral surface of mastoid process', 'Lateral half of superior nuchal line'],
    nerveSupply: 'Motor: spinal [[hn-nerve-accessory]]; C2, C3 (proprioceptive) from the cervical plexus',
    bloodSupply: 'Branches of occipital and superior thyroid arteries',
    action: ['One side: tilts the head to the same side and turns the face to the opposite side', 'Both sides: flex the neck', 'Accessory muscle of inspiration (when head is fixed)']
  },
  relations: [
    { dir: 'deep', text: 'Carotid sheath and its contents; cervical plexus.', ref: 'hn-space-carotid-sheath' },
    { dir: 'superficial', text: 'External jugular vein crosses it.', ref: 'hn-vein-external-jugular' }
  ],
  clinical: [
    { title: 'Torticollis (wry neck):', text: 'Congenital fibrosis / sternomastoid tumour → head tilted to the affected side, face turned to the opposite side.' },
    { title: 'Testing XI:', text: 'Ask the patient to turn the face against resistance.' }
  ],
  highYield: ['Nerve point of the neck: midpoint of its posterior border.'],
  mnemonics: []
},
{
  id: 'hn-musc-digastric',
  name: 'Digastric',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'head-neck',
  zones: ['anterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Two-bellied suprahyoid muscle; a key landmark of the upper neck.',
  location: 'Below the mandible, from the mastoid to the chin.',
  parts: ['Posterior belly', 'Anterior belly', 'Intermediate tendon — held to the hyoid by a fibrous sling'],
  muscle: {
    origin: ['Posterior belly: mastoid notch of temporal bone', 'Anterior belly: digastric fossa of mandible'],
    insertion: ['Intermediate tendon attached to the body and greater horn of the hyoid'],
    nerveSupply: 'Posterior belly: facial nerve. Anterior belly: nerve to mylohyoid (mandibular nerve)',
    bloodSupply: 'Posterior auricular and occipital arteries; submental artery',
    action: ['Depresses the mandible (opens the mouth)', 'Elevates the hyoid (swallowing)']
  },
  relations: [
    { dir: 'deep to posterior belly', text: 'Internal and external carotid arteries, internal jugular vein, hypoglossal, accessory and vagus nerves.', ref: 'hn-space-carotid-triangle' }
  ],
  clinical: [],
  highYield: ['Dual nerve supply reflects origin from two pharyngeal arches (anterior belly — 1st; posterior belly — 2nd).'],
  mnemonics: []
},
{
  id: 'hn-musc-scalenus-anterior',
  name: 'Scalenus anterior',
  aka: ['Anterior scalene'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'head-neck',
  zones: ['root', 'posterior'],
  verified: false, source: '', doubtful: ['nerveSupply'], reviewNote: '',
  description: 'Key muscle of the root of the neck.',
  location: 'Deep in the lower lateral neck, behind the sternocleidomastoid.',
  parts: [],
  muscle: {
    origin: ['Anterior tubercles of transverse processes of C3–C6'],
    insertion: ['Scalene tubercle on the inner border of the first rib'],
    nerveSupply: 'Ventral rami of C4, C5, C6',
    bloodSupply: 'Ascending cervical artery',
    action: ['Elevates the first rib (inspiration)', 'Lateral flexion and rotation of the neck']
  },
  relations: [
    { dir: 'anterior', text: 'Phrenic nerve (crossing it from lateral to medial), subclavian vein, transverse cervical and suprascapular arteries, carotid sheath.', ref: 'th-nerve-phrenic' },
    { dir: 'posterior', text: 'Second part of subclavian artery, trunks of brachial plexus, cervical pleura.', ref: 'hn-art-subclavian' },
    { dir: 'medial', text: 'Vertebral artery (between scalenus anterior and longus colli).', ref: 'hn-art-vertebral' }
  ],
  clinical: [
    { title: 'Scalenus anterior / thoracic outlet syndrome:', text: 'Compression of the subclavian artery and lower trunk of the brachial plexus (also with a cervical rib).' }
  ],
  highYield: ['Subclavian vein passes in front of it; subclavian artery behind.'],
  mnemonics: []
},
{
  id: 'hn-musc-posterior-cricoarytenoid',
  name: 'Posterior cricoarytenoid',
  aka: ['Safety muscle of the larynx'],
  type: 'muscle',
  system: ['musculoskeletal', 'respiratory'],
  region: 'head-neck',
  zones: ['larynx'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Only abductor of the vocal folds.',
  location: 'Back of the cricoid lamina.',
  parts: [],
  muscle: {
    origin: ['Posterior surface of the lamina of the cricoid cartilage'],
    insertion: ['Muscular process of the arytenoid cartilage'],
    nerveSupply: '[[hn-nerve-recurrent-laryngeal]]',
    bloodSupply: 'Inferior laryngeal artery',
    action: ['Abducts the vocal folds (opens the rima glottidis)']
  },
  relations: [],
  clinical: [
    { title: 'Bilateral paralysis:', text: 'Bilateral recurrent laryngeal nerve injury → vocal folds near the midline → stridor; may need tracheostomy.' }
  ],
  highYield: ['Only abductor of the vocal cords.'],
  mnemonics: []
}
]);
