// HEAD & NECK — SPECIAL SENSORY CRANIAL NERVES (I, II, VIII)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/head-neck/cranial-nerves-special.js', [
{
  id: 'hn-nerve-olfactory', name: 'Olfactory nerve', aka: ['Cranial nerve I'], type: 'nerve',
  system: ['nervous'], region: 'head-neck', zones: ['nose-mouth', 'cranial'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Nerve of smell.',
  location: 'Olfactory epithelium (roof of nasal cavity) → cribriform plate → olfactory bulb.', parts: [],
  nerve: {
    rootValue: 'Cranial nerve I — central processes of bipolar olfactory receptor neurons (special sensory)',
    course: 'About 20 bundles of fibres pass through the cribriform plate of the ethmoid to synapse in the olfactory bulb; the olfactory tract carries the impulses to the olfactory cortex (uncus / piriform cortex, amygdala) without a thalamic relay.',
    branches: [], motor: [], sensory: ['Smell']
  },
  relations: [{ dir: 'roof of nose', text: 'Cribriform plate.', ref: 'hn-organ-nasal-cavity' }],
  clinical: [
    { title: 'Anosmia:', text: 'After head injury (fracture of anterior cranial fossa / shearing of fibres at the cribriform plate), often with CSF rhinorrhoea.' },
    { title: 'Olfactory groove meningioma:', text: 'Causes anosmia and may compress the optic nerve.' }
  ],
  highYield: ['Only sensory pathway reaching the cortex without a thalamic relay.', 'Olfactory receptor neurons are replaced throughout life.'], mnemonics: []
},
{
  id: 'hn-nerve-optic', name: 'Optic nerve', aka: ['Cranial nerve II'], type: 'nerve',
  system: ['nervous'], region: 'head-neck', zones: ['orbit', 'cranial'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Nerve of sight; developmentally a tract of the CNS (myelinated by oligodendrocytes, wrapped in meninges).',
  location: 'Eyeball → orbit → optic canal → middle cranial fossa → optic chiasma.', parts: ['Intraocular, intraorbital, intracanalicular and intracranial parts'],
  nerve: {
    rootValue: 'Cranial nerve II — axons of retinal ganglion cells (special sensory)',
    course: 'Leaves the eyeball at the optic disc, runs backward within the cone of extraocular muscles, passes through the optic canal with the ophthalmic artery, and joins the opposite nerve at the optic chiasma. Continues as the [[na-tract-visual-pathway]].',
    branches: [], motor: [], sensory: ['Vision', 'Afferent limb of the pupillary light reflex']
  },
  relations: [{ dir: 'optic canal', text: 'Ophthalmic artery lies inferolateral; central artery of retina enters the nerve.', ref: 'hn-art-ophthalmic' }],
  clinical: [
    { title: 'Papilloedema:', text: 'Raised intracranial pressure is transmitted along the subarachnoid sheath around the nerve → swollen optic disc.' },
    { title: 'Relative afferent pupillary defect (Marcus Gunn pupil):', text: 'Optic nerve disease, e.g. optic neuritis in multiple sclerosis.' }
  ],
  highYield: ['Surrounded by all three meningeal layers — a CNS tract.'], mnemonics: []
},
{
  id: 'hn-nerve-vestibulocochlear', name: 'Vestibulocochlear nerve', aka: ['Cranial nerve VIII', 'Auditory nerve'], type: 'nerve',
  system: ['nervous'], region: 'head-neck', zones: ['ear', 'cranial'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Nerve of hearing and balance.',
  location: 'Inner ear → internal acoustic meatus → cerebellopontine angle → pontomedullary junction.', parts: ['Cochlear part (spiral ganglion)', 'Vestibular part (vestibular ganglion of Scarpa)'],
  nerve: {
    rootValue: 'Cranial nerve VIII (special sensory) — cochlear and vestibular nuclei at the pontomedullary junction',
    course: 'Fibres from the cochlea and vestibular apparatus join in the internal acoustic meatus, run with the facial nerve and labyrinthine artery to the cerebellopontine angle, and enter the brainstem at the pontomedullary junction.',
    branches: ['Cochlear nerve', 'Superior and inferior vestibular nerves'], motor: [],
    sensory: ['Hearing (cochlea)', 'Balance: utricle, saccule and semicircular canals']
  },
  relations: [{ dir: 'internal acoustic meatus', text: 'Accompanied by the facial nerve.', ref: 'hn-nerve-facial' }],
  clinical: [
    { title: 'Vestibular schwannoma (acoustic neuroma):', text: 'Cerebellopontine-angle tumour → unilateral sensorineural deafness and tinnitus; later loss of corneal reflex (V) and facial weakness (VII).' },
    { title: 'Bedside testing:', text: 'Rinne and Weber tuning-fork tests distinguish conductive from sensorineural deafness.' }
  ],
  highYield: ['VII and VIII share the internal acoustic meatus.'], mnemonics: []
}
]);
