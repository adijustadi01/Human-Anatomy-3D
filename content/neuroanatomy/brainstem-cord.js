// NEUROANATOMY — SPINAL CORD, BRAINSTEM, CEREBELLUM
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/neuroanatomy/brainstem-cord.js', [
{
  id: 'na-cns-spinal-cord',
  name: 'Spinal cord',
  aka: [],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['spinal'],
  verified: false, source: '', doubtful: ['parts', 'bloodSupply'], reviewNote: 'Check enlargement levels and the usual level of the artery of Adamkiewicz.',
  description: 'Part of the CNS in the vertebral canal, continuous with the medulla.',
  location: 'Vertebral canal, from the foramen magnum to about the lower border of L1 in adults (about L3 at birth).',
  parts: [
    'Ends as the conus medullaris; filum terminale continues to the coccyx; nerve roots below form the cauda equina',
    'Cervical and lumbosacral enlargements (limb supply)',
    '31 pairs of spinal nerves',
    'Grey matter (H-shaped): anterior horn (motor), posterior horn (sensory), lateral horn (T1–L2 sympathetic; S2–S4 parasympathetic)',
    'White matter: posterior, lateral and anterior funiculi carrying ascending and descending tracts'
  ],
  cns: {
    connections: ['Ascending: [[na-tract-dcml]], [[na-tract-spinothalamic]], [[na-tract-posterior-spinocerebellar]]', 'Descending: [[na-tract-corticospinal]] and other motor tracts'],
    functions: ['Conduction between brain and body', 'Spinal reflexes', 'Autonomic outflow'],
    bloodSupply: 'One anterior spinal artery (from the vertebral arteries; anterior two-thirds of the cord) and two posterior spinal arteries (posterior one-third), reinforced by segmental (radicular) arteries including the great anterior radiculomedullary artery (of Adamkiewicz) in the lower thoracic/upper lumbar region.',
    lesion: [
      'Complete transection: loss of all motor and sensory function below the level; spinal shock initially',
      'Hemisection (Brown-Séquard): ipsilateral UMN paralysis and loss of proprioception/vibration; contralateral loss of pain and temperature from 1–2 segments below',
      'Anterior spinal artery syndrome: loss of motor function and pain/temperature below the level; dorsal column sensation preserved',
      'Syringomyelia: bilateral “cape-like” loss of pain and temperature with preserved touch (dissociated sensory loss)'
    ]
  },
  relations: [
    { dir: 'continuous above with', text: 'Medulla oblongata.', ref: 'na-cns-medulla' }
  ],
  clinical: [
    { title: 'Lumbar puncture:', text: 'Done below the end of the cord, usually at L3/L4 or L4/L5 (line joining the iliac crests ≈ L4).' }
  ],
  highYield: ['Adult cord ends at L1/L2; subarachnoid space ends at S2.'],
  mnemonics: []
},
{
  id: 'na-cns-medulla',
  name: 'Medulla oblongata',
  aka: ['Medulla'],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['brainstem'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Lowest part of the brainstem.',
  location: 'From the foramen magnum (upper rootlets of C1) to the lower border of the pons.',
  parts: [
    'Ventral: pyramids (corticospinal fibres), pyramidal decussation, olive (inferior olivary nucleus)',
    'Dorsal: gracile and cuneate tubercles; lower part of the floor of the 4th ventricle (hypoglossal and vagal trigones)',
    'Cranial nerves: IX, X, (cranial) XI, XII'
  ],
  cns: {
    connections: ['Inferior cerebellar peduncle → cerebellum', 'Ascending and descending tracts pass through', 'Nuclei gracilis and cuneatus → medial lemniscus'],
    functions: ['Vital centres: cardiovascular and respiratory', 'Reflexes: coughing, swallowing, vomiting, sneezing', 'Relay of sensory and motor pathways'],
    bloodSupply: 'Vertebral arteries and their branches: anterior spinal, posterior inferior cerebellar (PICA); lower branches of the basilar artery.',
    lesion: [
      'Medial medullary syndrome (anterior spinal / vertebral): contralateral hemiplegia, contralateral loss of proprioception (medial lemniscus), ipsilateral tongue paralysis (XII)',
      'Lateral medullary (Wallenberg) syndrome (PICA / vertebral): ipsilateral loss of pain and temperature of the face, contralateral loss over the body, ipsilateral Horner’s, dysphagia and hoarseness (nucleus ambiguus), ataxia, vertigo, nystagmus'
    ]
  },
  relations: [
    { dir: 'posterior', text: 'Fourth ventricle and cerebellum.', ref: 'na-space-fourth-ventricle' }
  ],
  clinical: [
    { title: 'Tonsillar herniation (coning):', text: 'Cerebellar tonsils compress the medulla through the foramen magnum → respiratory arrest.' }
  ],
  highYield: ['Wallenberg = PICA = lateral medulla.'],
  mnemonics: []
},
{
  id: 'na-cns-pons',
  name: 'Pons',
  aka: [],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['brainstem'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Middle part of the brainstem, a “bridge” to the cerebellum.',
  location: 'Between the medulla below and the midbrain above, in front of the cerebellum.',
  parts: [
    'Ventral (basilar) part: pontine nuclei, transverse pontocerebellar fibres, descending corticospinal fibres',
    'Dorsal part (tegmentum): upper floor of the 4th ventricle including the facial colliculus',
    'Cranial nerves: V (lateral pons); VI, VII and VIII at the pontomedullary junction / cerebellopontine angle'
  ],
  cns: {
    connections: ['Cortex → pontine nuclei → middle cerebellar peduncle → cerebellum', 'Corticospinal and corticobulbar fibres pass through'],
    functions: ['Relay between cerebral cortex and cerebellum', 'Respiratory control (pontine centres)', 'Nuclei of V, VI, VII, VIII'],
    bloodSupply: 'Pontine branches of the basilar artery; anterior inferior cerebellar (AICA) and superior cerebellar (SCA) arteries.',
    lesion: [
      'Locked-in syndrome (bilateral ventral pons, e.g. basilar occlusion): quadriplegia and loss of speech with preserved consciousness and vertical eye movements',
      'Ventral pontine (Millard–Gubler) syndrome: ipsilateral VI and VII palsy with contralateral hemiplegia',
      'Pontine haemorrhage: coma, pinpoint pupils'
    ]
  },
  relations: [
    { dir: 'ventral', text: 'Basilar artery in the basilar groove.', ref: 'na-art-basilar' }
  ],
  clinical: [],
  highYield: ['Facial colliculus = VI nucleus with VII fibres looping round it.'],
  mnemonics: []
},
{
  id: 'na-cns-midbrain',
  name: 'Midbrain',
  aka: ['Mesencephalon'],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['brainstem'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Uppermost part of the brainstem, traversed by the cerebral aqueduct.',
  location: 'Between the pons and the diencephalon, passing through the tentorial notch.',
  parts: [
    'Tectum: superior colliculi (visual reflexes) and inferior colliculi (auditory)',
    'Tegmentum: red nucleus, substantia nigra, nuclei of III and IV, medial lemniscus',
    'Crus cerebri (basis pedunculi): corticospinal, corticobulbar and corticopontine fibres',
    'Cranial nerves: III (interpeduncular fossa), IV (dorsal, below the inferior colliculus)'
  ],
  cns: {
    connections: ['Superior cerebellar peduncle (cerebellum → red nucleus and thalamus)', 'Substantia nigra ↔ corpus striatum (nigrostriatal pathway)'],
    functions: ['Eye movements and pupillary light / accommodation reflexes', 'Visual and auditory reflexes', 'Motor control (substantia nigra, red nucleus)'],
    bloodSupply: 'Posterior cerebral and superior cerebellar arteries; paramedian branches of the basilar; posterior choroidal arteries.',
    lesion: [
      'Weber’s syndrome (crus cerebri): ipsilateral oculomotor palsy with contralateral hemiplegia',
      'Parinaud’s syndrome (dorsal midbrain, e.g. pineal tumour): paralysis of upward gaze',
      'Parkinson’s disease: degeneration of dopaminergic neurons of the substantia nigra',
      'Aqueductal stenosis: obstructive hydrocephalus'
    ]
  },
  relations: [
    { dir: 'interpeduncular fossa', text: 'Oculomotor nerve emerges; circle of Willis lies in front.', ref: 'hn-nerve-oculomotor' }
  ],
  clinical: [],
  highYield: ['Weber = III palsy + contralateral hemiplegia.'],
  mnemonics: []
},
{
  id: 'na-cns-cerebellum',
  name: 'Cerebellum',
  aka: [],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['cerebellum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Hindbrain structure coordinating movement, posture and balance.',
  location: 'Posterior cranial fossa behind the pons and medulla, below the tentorium cerebelli.',
  parts: [
    'Vermis and two hemispheres',
    'Anatomical lobes: anterior, posterior (middle), flocculonodular (separated by primary and posterolateral fissures)',
    'Functional divisions: vestibulocerebellum (flocculonodular — balance, eye movements), spinocerebellum (vermis and paravermis — tone, posture, gait), cerebrocerebellum (lateral hemispheres — planning and coordination of skilled movements)',
    'Deep nuclei (lateral to medial): dentate, emboliform, globose, fastigial',
    'Peduncles: superior (mainly efferent), middle (afferent from pontine nuclei), inferior (afferent from spinal cord, olive, vestibular nuclei)'
  ],
  cns: {
    connections: ['Afferent: spinocerebellar tracts, olivocerebellar, pontocerebellar, vestibulocerebellar fibres', 'Efferent: dentate → superior peduncle → red nucleus and thalamus (VL) → motor cortex; fastigial → vestibular nuclei'],
    functions: ['Coordination of voluntary movement', 'Maintenance of balance and posture', 'Muscle tone', 'Motor learning', 'Acts on the same side of the body'],
    bloodSupply: 'Superior cerebellar (SCA), anterior inferior cerebellar (AICA) and posterior inferior cerebellar (PICA) arteries.',
    lesion: [
      'Ipsilateral signs: ataxia, dysmetria (past-pointing), intention tremor, dysdiadochokinesia, nystagmus, scanning (slurred) speech, hypotonia, broad-based gait',
      'Midline (vermis) lesion, e.g. alcohol: truncal and gait ataxia'
    ]
  },
  relations: [
    { dir: 'anterior', text: 'Fourth ventricle, pons and medulla.', ref: 'na-space-fourth-ventricle' }
  ],
  clinical: [
    { title: 'Tonsillar herniation:', text: 'Raised intracranial pressure pushes the tonsils through the foramen magnum, compressing the medulla.' }
  ],
  highYield: ['Cerebellar lesions cause signs on the SAME side.'],
  mnemonics: [{ text: 'DANISH', meaning: 'Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Scanning speech, Hypotonia' }]
}
]);
