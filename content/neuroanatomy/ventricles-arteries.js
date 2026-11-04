// NEUROANATOMY — VENTRICLES, CSF & ARTERIES OF THE BRAIN
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/neuroanatomy/ventricles-arteries.js', [
{
  id: 'na-space-lateral-ventricle',
  name: 'Lateral ventricle',
  aka: [],
  type: 'space',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['ventricles'],
  verified: false, source: '', doubtful: ['boundaries'], reviewNote: 'Boundaries are described in detail differently between texts — check yours.',
  description: 'C-shaped CSF-filled cavity in each cerebral hemisphere.',
  location: 'Within each cerebral hemisphere.',
  parts: ['Anterior (frontal) horn, body (central part), posterior (occipital) horn, inferior (temporal) horn; atrium (collateral trigone)', 'Communicates with the 3rd ventricle through the interventricular foramen (of Monro)'],
  space: {
    boundaries: [
      'Anterior horn — roof and front: [[na-cns-corpus-callosum]] (trunk, genu); floor: head of caudate and rostrum; medial: septum pellucidum',
      'Body — roof: trunk of corpus callosum; medial: septum pellucidum; floor: body of caudate, thalamus, thalamostriate vein, stria terminalis, fornix, choroid plexus',
      'Inferior horn — roof: tail of caudate, tapetum; floor: hippocampus, collateral eminence',
      'Posterior horn — roof and lateral wall: tapetum; medial wall: bulb of posterior horn (forceps major) and calcar avis'
    ],
    contents: ['CSF', 'Choroid plexus (in the body and inferior horn, not in the anterior or posterior horns)']
  },
  relations: [],
  clinical: [
    { title: 'Hydrocephalus:', text: 'Ventricles dilate when CSF flow or absorption is obstructed.' },
    { title: 'Ventricular drain / shunt:', text: 'Usually placed in the anterior horn.' }
  ],
  highYield: ['Choroid plexus is absent from the anterior and posterior horns.'],
  mnemonics: []
},
{
  id: 'na-space-fourth-ventricle',
  name: 'Fourth ventricle',
  aka: [],
  type: 'space',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['ventricles', 'brainstem'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Tent-shaped cavity of the hindbrain.',
  location: 'Between the cerebellum behind and the pons and upper medulla in front.',
  parts: ['Continuous above with the cerebral aqueduct and below with the central canal', 'Lateral recesses with lateral apertures (foramina of Luschka); median aperture (foramen of Magendie)'],
  space: {
    boundaries: [
      'Floor (rhomboid fossa): dorsal surface of pons and upper medulla — median sulcus, medial eminence, facial colliculus, hypoglossal and vagal trigones, vestibular area, striae medullares',
      'Roof: superior cerebellar peduncles and superior medullary velum (upper part); inferior medullary velum and tela choroidea with the median aperture (lower part)',
      'Lateral: cerebellar peduncles'
    ],
    contents: ['CSF', 'Choroid plexus (in the lower roof)']
  },
  relations: [
    { dir: 'anterior', text: 'Pons and medulla.', ref: 'na-cns-pons' },
    { dir: 'posterior', text: 'Cerebellum.', ref: 'na-cns-cerebellum' }
  ],
  clinical: [
    { title: 'Posterior fossa tumours (children):', text: 'Medulloblastoma and ependymoma obstruct the ventricle → hydrocephalus.' }
  ],
  highYield: ['Three apertures (one median, two lateral) let CSF into the subarachnoid space.'],
  mnemonics: [{ text: 'Magendie = Medial, Luschka = Lateral', meaning: 'Apertures of the fourth ventricle' }]
},
{
  id: 'na-space-csf',
  name: 'CSF circulation & subarachnoid space',
  aka: ['Cerebrospinal fluid'],
  type: 'space',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['ventricles'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check volume and daily production figures.',
  description: 'Production, circulation and absorption of cerebrospinal fluid.',
  location: 'Ventricles and subarachnoid space around brain and spinal cord.',
  parts: [
    'Volume about 150 ml; produced about 500 ml/day, mainly by the choroid plexuses of the lateral ventricles',
    'Circulation: lateral ventricles → interventricular foramina → 3rd ventricle → cerebral aqueduct → 4th ventricle → median and lateral apertures → subarachnoid space',
    'Absorption: arachnoid villi and granulations → dural venous sinuses (mainly superior sagittal) — see [[hn-vein-dural-sinuses]]',
    'Cisterns: cerebellomedullary (cisterna magna), pontine, interpeduncular, chiasmatic, ambient; lumbar cistern below the cord'
  ],
  space: {
    boundaries: ['Outer: arachnoid mater', 'Inner: pia mater', 'Inferiorly the spinal subarachnoid space ends at about S2'],
    contents: ['CSF', 'Cerebral arteries and veins', 'Cranial and spinal nerve roots']
  },
  relations: [],
  clinical: [
    { title: 'Hydrocephalus:', text: 'Obstructive (non-communicating) when flow is blocked within the ventricular system; communicating when absorption is impaired.' },
    { title: 'Lumbar puncture:', text: 'Needle enters the lumbar cistern (L3/L4 or L4/L5) below the end of the cord.' },
    { title: 'Subarachnoid haemorrhage:', text: 'Usually from a ruptured berry aneurysm — sudden “thunderclap” headache, blood in CSF.' }
  ],
  highYield: ['Arachnoid granulations drain CSF into the superior sagittal sinus.'],
  mnemonics: []
},
{
  id: 'na-art-circle-of-willis',
  name: 'Circle of Willis',
  aka: ['Circulus arteriosus'],
  type: 'artery',
  system: ['cardiovascular', 'nervous'],
  region: 'neuroanatomy',
  zones: ['vessels'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Arterial anastomosis at the base of the brain linking the carotid and vertebrobasilar systems.',
  location: 'Interpeduncular fossa, around the optic chiasma and tuber cinereum.',
  parts: ['Anterior communicating artery', 'Two anterior cerebral arteries (proximal parts)', 'Two internal carotid arteries (terminal parts)', 'Two posterior communicating arteries', 'Two posterior cerebral arteries (proximal parts)'],
  artery: {
    origin: 'Formed by the two [[hn-art-internal-carotid]] arteries and the [[na-art-basilar]] artery (from the two vertebral arteries).',
    course: 'Forms a polygon at the base of the brain; variations are common.',
    branches: ['Central (perforating) branches: anteromedial, anterolateral (lenticulostriate), posteromedial, posterolateral groups', 'Cortical: [[na-art-aca]], [[na-art-mca]], [[na-art-pca]]'],
    territory: 'Entire brain.'
  },
  relations: [],
  clinical: [
    { title: 'Berry (saccular) aneurysms:', text: 'Commonest at the anterior communicating artery; rupture → subarachnoid haemorrhage.' },
    { title: 'Posterior communicating aneurysm:', text: 'Compresses the oculomotor nerve (pupil-involving III palsy).' },
    { title: 'Collateral circulation:', text: 'Can maintain flow after slow occlusion of one carotid.' }
  ],
  highYield: ['Commonest aneurysm site: anterior communicating artery.'],
  mnemonics: []
},
{
  id: 'na-art-aca',
  name: 'Anterior cerebral artery',
  aka: ['ACA'],
  type: 'artery',
  system: ['cardiovascular', 'nervous'],
  region: 'neuroanatomy',
  zones: ['vessels', 'cerebrum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Artery of the medial surface of the frontal and parietal lobes.',
  location: 'Longitudinal fissure, around the corpus callosum.',
  parts: [],
  artery: {
    origin: 'Smaller terminal branch of the [[hn-art-internal-carotid]], below the anterior perforated substance.',
    course: 'Runs forward and medially above the optic nerve into the longitudinal fissure, where it is joined to its fellow by the anterior communicating artery; curves round the genu and runs back on the upper surface of the corpus callosum.',
    branches: ['Central: medial striate (recurrent artery of Heubner)', 'Cortical: orbital, frontal and parietal branches (pericallosal, callosomarginal)'],
    territory: 'Medial surface of frontal and parietal lobes including the paracentral lobule (leg area); a strip of the superolateral surface; most of the corpus callosum; head of caudate and anterior limb of internal capsule (Heubner).'
  },
  relations: [],
  clinical: [
    { title: 'ACA occlusion:', text: 'Contralateral weakness and sensory loss of the leg and foot; urinary incontinence; frontal behavioural changes.' }
  ],
  highYield: ['Leg area = ACA territory.'],
  mnemonics: []
},
{
  id: 'na-art-mca',
  name: 'Middle cerebral artery',
  aka: ['MCA'],
  type: 'artery',
  system: ['cardiovascular', 'nervous'],
  region: 'neuroanatomy',
  zones: ['vessels', 'cerebrum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest cerebral artery; supplies most of the lateral surface of the hemisphere.',
  location: 'Lateral sulcus and insula, then the lateral surface.',
  parts: [],
  artery: {
    origin: 'Larger terminal branch (direct continuation) of the [[hn-art-internal-carotid]].',
    course: 'Runs laterally in the stem of the lateral sulcus, then backward and upward over the insula, dividing into branches on the lateral surface.',
    branches: ['Central: lateral striate (lenticulostriate) arteries — to lentiform nucleus, caudate and internal capsule', 'Cortical: orbital, frontal, parietal and temporal branches'],
    territory: 'Most of the lateral surface of the hemisphere: motor and sensory areas for face and upper limb, Broca’s and Wernicke’s areas (dominant side), auditory cortex, insula; basal ganglia and internal capsule (lenticulostriate).'
  },
  relations: [],
  clinical: [
    { title: 'MCA occlusion:', text: 'Contralateral hemiplegia and sensory loss (face and arm more than leg), homonymous hemianopia, aphasia (dominant) or neglect (non-dominant).' },
    { title: 'Lenticulostriate rupture:', text: 'Capsular haemorrhage — “Charcot’s artery of cerebral haemorrhage”.' }
  ],
  highYield: ['Most commonly occluded cerebral artery.'],
  mnemonics: []
},
{
  id: 'na-art-pca',
  name: 'Posterior cerebral artery',
  aka: ['PCA'],
  type: 'artery',
  system: ['cardiovascular', 'nervous'],
  region: 'neuroanatomy',
  zones: ['vessels', 'cerebrum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Artery of the occipital lobe and inferior temporal lobe.',
  location: 'Around the midbrain, above the tentorium, to the medial and inferior surfaces of the hemisphere.',
  parts: [],
  artery: {
    origin: 'Terminal branch of the [[na-art-basilar]] artery at the upper border of the pons.',
    course: 'Curves backward round the cerebral peduncle above the tentorium (the oculomotor nerve passes between it and the superior cerebellar artery), receives the posterior communicating artery, and reaches the medial and inferior surfaces of the occipital and temporal lobes.',
    branches: ['Central: posteromedial (thalamoperforating), posterolateral (thalamogeniculate), posterior choroidal', 'Cortical: temporal and occipital branches (incl. calcarine and parieto-occipital)'],
    territory: 'Occipital lobe (visual cortex), inferior temporal lobe, midbrain, thalamus, splenium of corpus callosum.'
  },
  relations: [
    { dir: 'below', text: 'Oculomotor nerve passes between PCA and superior cerebellar artery.', ref: 'hn-nerve-oculomotor' }
  ],
  clinical: [
    { title: 'PCA occlusion:', text: 'Contralateral homonymous hemianopia with macular sparing; thalamic syndrome; memory impairment if bilateral.' }
  ],
  highYield: ['Visual cortex = PCA territory.'],
  mnemonics: []
},
{
  id: 'na-art-basilar',
  name: 'Basilar artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular', 'nervous'],
  region: 'neuroanatomy',
  zones: ['vessels', 'brainstem'],
  verified: false, source: '', doubtful: ['branches'], reviewNote: 'Labyrinthine artery origin is variable.',
  description: 'Main artery of the posterior circulation.',
  location: 'Basilar groove on the ventral pons, in the pontine cistern.',
  parts: [],
  artery: {
    origin: 'Union of the two [[hn-art-vertebral]] arteries at the lower border of the pons.',
    course: 'Ascends on the ventral surface of the pons and ends at its upper border by dividing into the two posterior cerebral arteries.',
    branches: ['Pontine branches', 'Labyrinthine (internal auditory) artery (or from AICA)', 'Anterior inferior cerebellar artery (AICA)', 'Superior cerebellar artery (SCA)', 'Posterior cerebral arteries (terminal)'],
    territory: 'Pons, cerebellum, inner ear, midbrain and (via PCA) the posterior cerebrum.'
  },
  relations: [
    { dir: 'posterior', text: 'Pons.', ref: 'na-cns-pons' }
  ],
  clinical: [
    { title: 'Basilar occlusion:', text: 'Locked-in syndrome, coma or death.' },
    { title: 'Labyrinthine artery occlusion:', text: 'Sudden deafness and vertigo.' }
  ],
  highYield: ['Formed at the lower border and ends at the upper border of the pons.'],
  mnemonics: []
}
]);
