// NEUROANATOMY — TRACTS & PATHWAYS
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/neuroanatomy/tracts.js', [
{
  id: 'na-tract-corticospinal',
  name: 'Corticospinal tract',
  aka: ['Pyramidal tract'],
  type: 'tract',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['cerebrum', 'brainstem', 'spinal'],
  verified: false, source: '', doubtful: ['decussation'], reviewNote: 'Check the percentage of crossing fibres your textbook quotes.',
  description: 'Main descending pathway for voluntary movement.',
  location: 'Cortex → internal capsule → brainstem → spinal cord.',
  parts: ['Lateral corticospinal tract (crossed; most fibres)', 'Anterior corticospinal tract (uncrossed in medulla; crosses at segmental levels)'],
  tract: {
    origin: 'Pyramidal cells (layer V, including Betz cells) of the primary motor cortex (area 4), premotor/supplementary motor areas (area 6) and parietal cortex.',
    course: 'Corona radiata → posterior limb of the [[na-cns-internal-capsule]] → middle part of the crus cerebri → basilar pons → pyramid of the medulla → spinal cord (lateral and anterior funiculi).',
    decussation: 'Most fibres (about 75–90%) cross at the pyramidal decussation in the lower medulla; the rest cross at segmental levels in the cord.',
    termination: 'Anterior horn cells (mostly via interneurons; directly for distal limb muscles).',
    function: 'Voluntary, skilled movements, especially fine movements of the distal limbs.',
    lesion: ['UMN signs: spastic paralysis, clasp-knife hypertonia, hyperreflexia, clonus, extensor plantar (Babinski) response, little wasting', 'Lesion above the decussation → contralateral signs; below it (spinal cord) → ipsilateral signs']
  },
  relations: [],
  clinical: [],
  highYield: ['Decussates in the lower medulla.'],
  mnemonics: []
},
{
  id: 'na-tract-dcml',
  name: 'Dorsal column–medial lemniscus pathway',
  aka: ['Posterior column pathway', 'Fasciculus gracilis & cuneatus'],
  type: 'tract',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['spinal', 'brainstem'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Ascending pathway for fine touch, vibration and conscious proprioception.',
  location: 'Posterior funiculus of the cord → medulla → medial lemniscus → thalamus → cortex.',
  parts: ['Fasciculus gracilis (medial; lower limb and lower trunk)', 'Fasciculus cuneatus (lateral; upper limb and upper trunk, above about T6)'],
  tract: {
    origin: 'First-order neurons in the dorsal root ganglia.',
    course: 'Ascend ipsilaterally in the posterior column to the nuclei gracilis and cuneatus (medulla). Second-order fibres (internal arcuate fibres) cross and ascend as the medial lemniscus to the VPL nucleus of the thalamus; third-order fibres pass through the posterior limb of the internal capsule.',
    decussation: 'Lower medulla (sensory decussation of the internal arcuate fibres).',
    termination: 'Primary somatosensory cortex ([[na-cns-sensory-cortex]]).',
    function: 'Fine (discriminative) touch, two-point discrimination, vibration, conscious proprioception, stereognosis.',
    lesion: ['Spinal lesion: loss on the same side below the level', 'Sensory ataxia with positive Romberg’s sign (e.g. tabes dorsalis, subacute combined degeneration from B12 deficiency)']
  },
  relations: [],
  clinical: [],
  highYield: ['Uncrossed in the cord; crosses in the medulla.'],
  mnemonics: []
},
{
  id: 'na-tract-spinothalamic',
  name: 'Lateral spinothalamic tract',
  aka: ['Anterolateral pathway (part)'],
  type: 'tract',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['spinal', 'brainstem'],
  verified: false, source: '', doubtful: [], reviewNote: 'Anterior spinothalamic tract (crude touch, pressure) can be added separately.',
  description: 'Ascending pathway for pain and temperature.',
  location: 'Posterior horn → anterior white commissure → lateral funiculus → brainstem → thalamus → cortex.',
  parts: ['Somatotopic lamination: sacral fibres most lateral, cervical most medial'],
  tract: {
    origin: 'First-order neurons in the dorsal root ganglia; synapse in the posterior horn (substantia gelatinosa and deeper laminae) after ascending or descending 1–2 segments in Lissauer’s tract.',
    course: 'Second-order fibres cross in the anterior white commissure, ascend in the lateral funiculus and through the brainstem (spinal lemniscus) to the VPL nucleus of the thalamus; third-order fibres project to the cortex.',
    decussation: 'In the spinal cord (anterior white commissure), within 1–2 segments of entry.',
    termination: 'Primary somatosensory cortex (and other cortical areas).',
    function: 'Pain and temperature.',
    lesion: ['Contralateral loss of pain and temperature beginning 1–2 segments below a cord lesion', 'Syringomyelia: damage to crossing fibres → bilateral segmental (cape-like) loss', 'Anterolateral cordotomy relieves intractable pain']
  },
  relations: [],
  clinical: [],
  highYield: ['Crosses within 1–2 segments — hence contralateral loss in Brown-Séquard syndrome.'],
  mnemonics: []
},
{
  id: 'na-tract-posterior-spinocerebellar',
  name: 'Posterior spinocerebellar tract',
  aka: ['Dorsal spinocerebellar tract'],
  type: 'tract',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['spinal', 'cerebellum'],
  verified: false, source: '', doubtful: ['origin'], reviewNote: 'Check segmental extent of Clarke’s column.',
  description: 'Uncrossed pathway for unconscious proprioception from the lower limb and trunk.',
  location: 'Lateral funiculus → inferior cerebellar peduncle → cerebellum.',
  parts: ['Upper-limb equivalent: cuneocerebellar tract (accessory cuneate nucleus)', 'Anterior spinocerebellar tract crosses twice (ends on the same side)'],
  tract: {
    origin: 'Nucleus dorsalis (Clarke’s column, about C8–L3), receiving input from muscle spindles and Golgi tendon organs.',
    course: 'Ascends ipsilaterally in the dorsolateral part of the lateral funiculus and enters the cerebellum through the inferior cerebellar peduncle.',
    decussation: 'None — uncrossed.',
    termination: 'Cerebellar cortex of the same side (spinocerebellum).',
    function: 'Unconscious proprioception for coordination of posture and lower-limb movement.',
    lesion: ['Ipsilateral incoordination (ataxia), e.g. Friedreich’s ataxia']
  },
  relations: [
    { dir: 'ends in', text: 'Cerebellum.', ref: 'na-cns-cerebellum' }
  ],
  clinical: [],
  highYield: ['Uncrossed — cerebellar pathways produce ipsilateral signs.'],
  mnemonics: []
},
{
  id: 'na-tract-visual-pathway',
  name: 'Visual pathway',
  aka: ['Optic pathway'],
  type: 'tract',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['cerebrum', 'deep'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Pathway from the retina to the visual cortex.',
  location: 'Retina → optic nerve → optic chiasma → optic tract → lateral geniculate body → optic radiation → visual cortex.',
  parts: [
    'Optic nerve (II): ganglion cell axons from one eye',
    'Optic chiasma: nasal fibres cross, temporal fibres stay uncrossed',
    'Optic tract: fibres from ipsilateral temporal and contralateral nasal retina (= contralateral visual field)',
    'Optic radiation: upper fibres through the parietal lobe (lower field); lower fibres loop into the temporal lobe — Meyer’s loop (upper field)',
    'Some optic tract fibres go to the pretectal nucleus (pupillary light reflex) and superior colliculus'
  ],
  tract: {
    origin: 'Retinal ganglion cells (photoreceptors → bipolar cells → ganglion cells).',
    course: 'Optic nerve → optic chiasma → optic tract → lateral geniculate body of the thalamus → optic radiation (geniculocalcarine tract) through the retrolentiform internal capsule.',
    decussation: 'Partial, at the optic chiasma (nasal retinal fibres only).',
    termination: 'Primary visual cortex ([[na-cns-visual-cortex]]).',
    function: 'Vision; afferent limb of the pupillary light reflex.',
    lesion: [
      'Optic nerve: blindness of that eye',
      'Optic chiasma (e.g. pituitary tumour): bitemporal hemianopia',
      'Optic tract: contralateral homonymous hemianopia',
      'Meyer’s loop (temporal lobe): contralateral superior quadrantanopia (“pie in the sky”)',
      'Parietal optic radiation: contralateral inferior quadrantanopia',
      'Visual cortex: contralateral homonymous hemianopia with macular sparing'
    ]
  },
  relations: [
    { dir: 'chiasma', text: 'Lies above the pituitary gland.', ref: 'hn-organ-pituitary' }
  ],
  clinical: [],
  highYield: ['Lesion behind the chiasma → homonymous defect.'],
  mnemonics: []
}
]);
