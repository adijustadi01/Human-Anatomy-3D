// HEAD & NECK — HEAD: SCALP & CRANIAL CAVITY
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/head-neck/head-cranial.js', [
{
  id: 'hn-space-scalp',
  name: 'Scalp',
  aka: [],
  type: 'space',
  system: [],
  region: 'head-neck',
  zones: ['cranial'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Soft tissue covering the vault of the skull, in five layers.',
  location: 'Vault of the skull.',
  parts: [
    'Skin',
    'Connective tissue (dense) — contains vessels and nerves; vessels held open when cut',
    'Aponeurosis (epicranial aponeurosis / galea) with occipitofrontalis',
    'Loose areolar tissue — “danger area” (emissary veins)',
    'Pericranium'
  ],
  space: {
    boundaries: [
      'Anterior: supraorbital margins',
      'Posterior: external occipital protuberance and superior nuchal lines',
      'Lateral: superior temporal lines'
    ],
    contents: [
      'Arteries — in front of the ear: supratrochlear and supraorbital (from ophthalmic, i.e. ICA), superficial temporal; behind the ear: posterior auricular and occipital (ECA)',
      'Sensory nerves — supratrochlear and supraorbital (V1), zygomaticotemporal (V2), auriculotemporal (V3), great auricular and lesser occipital (cervical plexus), greater occipital (C2 dorsal ramus), third occipital (C3)',
      'Motor — temporal and posterior auricular branches of the [[hn-nerve-facial]] (to occipitofrontalis)',
      'Lymph drains to parotid (preauricular), mastoid and occipital nodes'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Scalp wounds:', text: 'Bleed profusely (vessels held open by dense connective tissue); gape if the aponeurosis is cut transversely.' },
    { title: 'Danger area (loose areolar layer):', text: 'Infection can spread to the dural venous sinuses via emissary veins.' },
    { title: 'Black eye:', text: 'Blood in the loose areolar layer tracks into the eyelids (frontalis has no bony attachment).' },
    { title: 'Cephalhaematoma:', text: 'Subperiosteal bleed in the newborn, limited by the sutures.' }
  ],
  highYield: ['Fourth layer (loose areolar tissue) is the danger area.'],
  mnemonics: [{ text: 'SCALP', meaning: 'Skin, Connective tissue, Aponeurosis, Loose areolar tissue, Pericranium' }]
},
{
  id: 'hn-space-cavernous-sinus',
  name: 'Cavernous sinus',
  aka: [],
  type: 'space',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['cranial'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check the list of tributaries/communications against your textbook.',
  description: 'Paired dural venous sinus on each side of the body of the sphenoid.',
  location: 'Middle cranial fossa, from the superior orbital fissure to the apex of the petrous temporal bone.',
  parts: [
    'Tributaries: superior and inferior ophthalmic veins, sphenoparietal sinus, superficial middle cerebral vein',
    'Drainage / communications: superior and inferior petrosal sinuses; emissary veins to the pterygoid venous plexus; intercavernous sinuses (opposite side)'
  ],
  space: {
    boundaries: [
      'Medial: body of sphenoid with the pituitary gland and sphenoidal sinus',
      'Lateral wall (dura): from above down — oculomotor, trochlear, ophthalmic and maxillary nerves',
      'Anterior: superior orbital fissure',
      'Posterior: apex of petrous temporal bone',
      'Floor: greater wing of sphenoid'
    ],
    contents: [
      'Passing through the sinus: [[hn-art-internal-carotid]] (with its sympathetic plexus) and [[hn-nerve-abducent]] (inferolateral to the artery)',
      'In the lateral wall: [[hn-nerve-oculomotor]], [[hn-nerve-trochlear]], ophthalmic (V1) and maxillary (V2) divisions of the [[hn-nerve-trigeminal]]'
    ]
  },
  relations: [
    { dir: 'medial', text: 'Pituitary gland.', ref: 'hn-organ-pituitary' }
  ],
  clinical: [
    { title: 'Cavernous sinus thrombosis:', text: 'Spread of infection from the danger area of the face (via facial/ophthalmic veins or deep facial vein → pterygoid plexus). Causes ophthalmoplegia (VI often first), proptosis, chemosis, sensory loss in V1/V2.' },
    { title: 'Carotid–cavernous fistula:', text: 'Pulsating exophthalmos with a bruit.' }
  ],
  highYield: ['Abducent nerve lies inside the sinus; III, IV, V1, V2 lie in its lateral wall.'],
  mnemonics: []
},
{
  id: 'hn-vein-dural-sinuses',
  name: 'Dural venous sinuses',
  aka: [],
  type: 'vein',
  system: ['cardiovascular', 'nervous'],
  region: 'head-neck',
  zones: ['cranial'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Endothelium-lined venous channels between the layers of the dura; they have no valves and no muscle in their walls.',
  location: 'Cranial cavity.',
  parts: [
    'Unpaired: superior sagittal, inferior sagittal, straight, occipital, intercavernous, basilar plexus',
    'Paired: [[hn-space-cavernous-sinus]], superior petrosal, inferior petrosal, transverse, sigmoid, sphenoparietal'
  ],
  vein: {
    origin: 'Formed between the endosteal and meningeal layers of the dura or within dural folds.',
    course: 'Superior sagittal sinus (attached margin of falx cerebri) → confluence of sinuses (internal occipital protuberance) → usually the right transverse sinus. Inferior sagittal sinus + great cerebral vein → straight sinus (junction of falx and tentorium) → usually the left transverse sinus. Transverse → sigmoid sinus → jugular foramen.',
    tributaries: ['Cerebral and cerebellar veins', 'Diploic and meningeal veins', 'Emissary veins (connect with veins outside the skull)', 'Arachnoid granulations return CSF (mainly into the superior sagittal sinus)'],
    termination: 'Internal jugular vein (via the sigmoid sinus and inferior petrosal sinus).',
    territory: 'Brain, meninges, skull bones, orbit (via ophthalmic veins), internal ear.'
  },
  relations: [],
  clinical: [
    { title: 'Venous sinus thrombosis:', text: 'Headache, raised intracranial pressure, seizures; may follow infection, dehydration or hypercoagulable states.' },
    { title: 'Spread of infection:', text: 'Through valveless emissary veins (e.g. scalp, face, mastoid).' }
  ],
  highYield: ['Arachnoid granulations absorb CSF into the superior sagittal sinus.'],
  mnemonics: []
},
{
  id: 'hn-art-middle-meningeal',
  name: 'Middle meningeal artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['cranial'],
  verified: false, source: '', doubtful: ['course'], reviewNote: 'Check the surface marking of the pterion your textbook gives.',
  description: 'Largest meningeal artery; supplies mainly the bones of the vault and the dura.',
  location: 'Infratemporal fossa → foramen spinosum → middle cranial fossa (extradural).',
  parts: [],
  artery: {
    origin: 'First part of the maxillary artery in the infratemporal fossa.',
    course: 'Ascends between the two roots of the auriculotemporal nerve, enters the skull through the foramen spinosum, runs outside the dura in the middle cranial fossa and divides into frontal (anterior) and parietal (posterior) branches. The frontal branch runs deep to the pterion.',
    branches: ['Frontal (anterior) branch', 'Parietal (posterior) branch', 'Petrosal and superior tympanic branches'],
    territory: 'Dura mater and bones of the cranial vault.'
  },
  relations: [],
  clinical: [
    { title: 'Extradural haematoma:', text: 'Fracture at the pterion tears the frontal branch → biconvex (lens-shaped) bleed on CT, classically with a lucid interval; treated by evacuation through a burr hole.' }
  ],
  highYield: ['Enters the skull through the foramen spinosum.', 'Pterion: weak meeting point of frontal, parietal, temporal and sphenoid bones.'],
  mnemonics: []
},
{
  id: 'hn-organ-pituitary',
  name: 'Pituitary gland',
  aka: ['Hypophysis cerebri'],
  type: 'organ',
  system: ['endocrine', 'nervous'],
  region: 'head-neck',
  zones: ['cranial'],
  verified: false, source: '', doubtful: [], reviewNote: 'Can also be linked from Neuroanatomy later.',
  description: 'Master endocrine gland attached to the hypothalamus by the infundibulum.',
  location: 'Hypophyseal fossa (sella turcica) of the sphenoid, roofed by the diaphragma sellae.',
  parts: [
    'Adenohypophysis (anterior lobe: pars distalis, pars tuberalis, pars intermedia) — from Rathke’s pouch (oral ectoderm)',
    'Neurohypophysis (posterior lobe: pars nervosa and infundibulum) — from the floor of the diencephalon'
  ],
  organ: {
    bloodSupply: 'Superior and inferior hypophyseal arteries (from the internal carotid). The anterior lobe receives most of its blood through the hypophyseal portal system. Veins drain to the cavernous and intercavernous sinuses.',
    nerveSupply: 'Posterior lobe: hypothalamo-hypophyseal tract from the supraoptic and paraventricular nuclei (ADH, oxytocin). Anterior lobe: controlled by hypothalamic releasing hormones carried by the portal system.',
    lymphatics: ''
  },
  relations: [
    { dir: 'superior', text: 'Diaphragma sellae; optic chiasma above it.', ref: '' },
    { dir: 'inferior', text: 'Sphenoidal sinus.', ref: '' },
    { dir: 'lateral', text: 'Cavernous sinus with ICA and cranial nerves.', ref: 'hn-space-cavernous-sinus' }
  ],
  clinical: [
    { title: 'Pituitary adenoma:', text: 'Upward growth compresses the optic chiasma → bitemporal hemianopia; may also cause hormonal syndromes.' },
    { title: 'Trans-sphenoidal surgery:', text: 'Gland approached through the nasal cavity and sphenoidal sinus.' }
  ],
  highYield: ['Bitemporal hemianopia = chiasmal compression.'],
  mnemonics: []
}
]);
