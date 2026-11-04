// HEAD & NECK — HEAD: ORBIT (extraocular muscles, III, IV, VI, ophthalmic artery, lacrimal gland)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/head-neck/head-orbit.js', [
{
  id: 'hn-musc-lps',
  name: 'Levator palpebrae superioris',
  aka: ['LPS'],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'head-neck',
  zones: ['orbit'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Elevator of the upper eyelid; contains a smooth-muscle part (superior tarsal / Müller’s muscle).',
  location: 'Roof of the orbit, above superior rectus.',
  parts: ['Superior lamella (striated)', 'Inferior lamella — superior tarsal (Müller’s) muscle (smooth)'],
  muscle: {
    origin: ['Inferior surface of the lesser wing of sphenoid, above the optic canal'],
    insertion: ['Superior lamella: anterior surface of the superior tarsus and skin of the upper eyelid', 'Inferior lamella: upper border of the superior tarsus'],
    nerveSupply: 'Striated part: superior division of [[hn-nerve-oculomotor]]. Smooth part: sympathetic fibres',
    bloodSupply: 'Muscular branches of the [[hn-art-ophthalmic]]',
    action: ['Elevates the upper eyelid']
  },
  relations: [
    { dir: 'below', text: 'Superior rectus.', ref: '' }
  ],
  clinical: [
    { title: 'Ptosis:', text: 'Complete in oculomotor palsy; partial in Horner’s syndrome (Müller’s muscle).' }
  ],
  highYield: ['Dual innervation: III (striated) and sympathetic (smooth).'],
  mnemonics: []
},
{
  id: 'hn-musc-superior-oblique',
  name: 'Superior oblique',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'head-neck',
  zones: ['orbit'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Extraocular muscle whose tendon passes through the trochlea.',
  location: 'Superomedial part of the orbit.',
  parts: [],
  muscle: {
    origin: ['Body of sphenoid, above and medial to the optic canal'],
    insertion: ['Sclera behind the equator, in the posterolateral part of the upper surface (after the tendon passes through the trochlea and turns backward and laterally)'],
    nerveSupply: '[[hn-nerve-trochlear]]',
    bloodSupply: 'Muscular branches of the [[hn-art-ophthalmic]]',
    action: ['Intorsion, depression and abduction of the eyeball', 'Main depressor of the adducted eye (looking down and in)']
  },
  relations: [],
  clinical: [
    { title: 'Trochlear palsy:', text: 'Vertical diplopia, worse on looking down (reading, going downstairs); head tilted away from the affected side.' }
  ],
  highYield: ['Tested by asking the patient to look down and in.'],
  mnemonics: [{ text: 'LR6 SO4 (rest 3)', meaning: 'Lateral rectus — VI; Superior oblique — IV; all others — III' }]
},
{
  id: 'hn-musc-lateral-rectus',
  name: 'Lateral rectus',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal'],
  region: 'head-neck',
  zones: ['orbit'],
  verified: false, source: '', doubtful: ['insertion'], reviewNote: '',
  description: 'Abductor of the eyeball.',
  location: 'Lateral part of the orbit.',
  parts: [],
  muscle: {
    origin: ['Lateral part of the common tendinous ring (by two heads, bridging the superior orbital fissure)'],
    insertion: ['Lateral surface of the sclera, a few millimetres behind the corneal margin'],
    nerveSupply: '[[hn-nerve-abducent]]',
    bloodSupply: 'Muscular branches of the [[hn-art-ophthalmic]] (and lacrimal artery)',
    action: ['Abduction of the eyeball']
  },
  relations: [
    { dir: 'between its heads', text: 'Oculomotor, nasociliary and abducent nerves enter the orbit within the common tendinous ring.', ref: 'hn-nerve-oculomotor' }
  ],
  clinical: [
    { title: 'Abducent palsy:', text: 'Convergent (medial) squint; horizontal diplopia on looking to the affected side.' }
  ],
  highYield: ['Only muscle supplied by VI.'],
  mnemonics: []
},
{
  id: 'hn-nerve-oculomotor',
  name: 'Oculomotor nerve',
  aka: ['Cranial nerve III'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['orbit', 'cranial'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Motor nerve to most extraocular muscles; carries parasympathetic fibres to the eye.',
  location: 'Midbrain → interpeduncular fossa → lateral wall of cavernous sinus → superior orbital fissure → orbit.',
  parts: ['Superior division', 'Inferior division'],
  nerve: {
    rootValue: 'Cranial nerve III (midbrain at the level of the superior colliculus: oculomotor nucleus and Edinger–Westphal nucleus)',
    course: 'Emerges from the medial side of the cerebral peduncle into the interpeduncular fossa, passes between the posterior cerebral and superior cerebellar arteries, lateral to the posterior communicating artery; runs in the lateral wall of the cavernous sinus (highest); divides into superior and inferior divisions, which enter the orbit through the superior orbital fissure within the common tendinous ring.',
    branches: ['Superior division: superior rectus, [[hn-musc-lps]]', 'Inferior division: medial rectus, inferior rectus, inferior oblique; parasympathetic root to the ciliary ganglion'],
    motor: ['Superior, medial and inferior recti; inferior oblique; levator palpebrae superioris', 'Parasympathetic (via ciliary ganglion → short ciliary nerves): sphincter pupillae, ciliary muscle'],
    sensory: ['None (proprioceptive fibres only)']
  },
  relations: [
    { dir: 'near origin', text: 'Lateral to the posterior communicating artery.', ref: '' },
    { dir: 'cavernous sinus', text: 'Uppermost nerve in the lateral wall.', ref: 'hn-space-cavernous-sinus' }
  ],
  clinical: [
    { title: 'Complete III palsy:', text: 'Complete ptosis; eye “down and out”; dilated pupil unreactive to light and accommodation.' },
    { title: 'Compressive vs ischaemic lesion:', text: 'Posterior communicating artery aneurysm or uncal herniation affects the pupil early (parasympathetic fibres are superficial); diabetic (ischaemic) palsy often spares the pupil.' }
  ],
  highYield: ['Pupil involvement suggests a compressive lesion.'],
  mnemonics: []
},
{
  id: 'hn-nerve-trochlear',
  name: 'Trochlear nerve',
  aka: ['Cranial nerve IV'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['orbit', 'cranial'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Thinnest cranial nerve; supplies only the superior oblique.',
  location: 'Dorsal midbrain → around the cerebral peduncle → lateral wall of cavernous sinus → superior orbital fissure.',
  parts: [],
  nerve: {
    rootValue: 'Cranial nerve IV (trochlear nucleus in the midbrain at the level of the inferior colliculus)',
    course: 'Its fibres decussate and emerge from the dorsal surface of the brainstem (the only cranial nerve to do so), wind round the cerebral peduncle between the posterior cerebral and superior cerebellar arteries, run in the lateral wall of the cavernous sinus (below III), and enter the orbit through the superior orbital fissure outside (above) the common tendinous ring.',
    branches: ['Muscular branch to superior oblique'],
    motor: ['[[hn-musc-superior-oblique]] (of the opposite side of the nucleus)'],
    sensory: ['None']
  },
  relations: [
    { dir: 'cavernous sinus', text: 'In the lateral wall below III.', ref: 'hn-space-cavernous-sinus' }
  ],
  clinical: [
    { title: 'Trochlear palsy:', text: 'Vertical diplopia on looking down and in; often after head injury (long, thin intracranial course).' }
  ],
  highYield: ['Only cranial nerve that emerges dorsally and is fully crossed.'],
  mnemonics: []
},
{
  id: 'hn-nerve-abducent',
  name: 'Abducent nerve',
  aka: ['Cranial nerve VI', 'Abducens nerve'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['orbit', 'cranial'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Motor nerve to the lateral rectus, with a long intracranial course.',
  location: 'Pontomedullary junction → clivus → over petrous apex → inside cavernous sinus → superior orbital fissure.',
  parts: [],
  nerve: {
    rootValue: 'Cranial nerve VI (abducent nucleus in the pons, under the facial colliculus)',
    course: 'Emerges at the pontomedullary junction, ascends on the clivus, bends sharply over the apex of the petrous temporal bone, passes through the cavernous sinus lateral to the internal carotid artery, and enters the orbit through the superior orbital fissure within the common tendinous ring.',
    branches: ['Muscular branch to lateral rectus'],
    motor: ['[[hn-musc-lateral-rectus]]'],
    sensory: ['None']
  },
  relations: [
    { dir: 'cavernous sinus', text: 'Lies within the sinus, lateral to the ICA.', ref: 'hn-space-cavernous-sinus' }
  ],
  clinical: [
    { title: 'False localising sign:', text: 'Raised intracranial pressure can stretch the nerve over the petrous apex → VI palsy without a local lesion.' },
    { title: 'Cavernous sinus thrombosis:', text: 'Often the first nerve affected.' },
    { title: 'Facial colliculus lesion:', text: 'Affects both VI and the facial nerve fibres looping round its nucleus.' }
  ],
  highYield: ['Long intracranial course — commonly affected in raised ICP.'],
  mnemonics: []
},
{
  id: 'hn-art-ophthalmic',
  name: 'Ophthalmic artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['orbit'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Artery of the orbit and eye; first branch of the intracranial internal carotid.',
  location: 'Optic canal → orbit.',
  parts: [],
  artery: {
    origin: '[[hn-art-internal-carotid]] as it emerges from the cavernous sinus, medial to the anterior clinoid process.',
    course: 'Enters the orbit through the optic canal, inferolateral to the optic nerve; crosses above the optic nerve from lateral to medial, runs forward along the medial wall, and ends by dividing into the supratrochlear and dorsal nasal arteries.',
    branches: ['Central artery of retina (an end artery; enters the optic nerve)', 'Lacrimal artery', 'Posterior ciliary arteries (long and short)', 'Muscular branches', 'Supraorbital artery', 'Anterior and posterior ethmoidal arteries', 'Medial palpebral arteries', 'Supratrochlear and dorsal nasal arteries (terminal)'],
    territory: 'Eyeball and retina, orbital contents, eyelids, forehead and front of scalp, part of the nasal cavity.'
  },
  relations: [
    { dir: 'optic canal', text: 'Inferolateral to the optic nerve.', ref: '' }
  ],
  clinical: [
    { title: 'Central retinal artery occlusion:', text: 'Sudden painless loss of vision; “cherry-red spot” at the macula.' },
    { title: 'Collateral circulation:', text: 'Anastomoses with external carotid branches (e.g. angular artery) can supply the brain in ICA occlusion.' }
  ],
  highYield: ['Central artery of retina is an end artery.'],
  mnemonics: []
},
{
  id: 'hn-organ-lacrimal-gland',
  name: 'Lacrimal gland',
  aka: [],
  type: 'organ',
  system: [],
  region: 'head-neck',
  zones: ['orbit'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check number of ducts quoted.',
  description: 'Serous gland that secretes tears.',
  location: 'Lacrimal fossa in the upper lateral part of the orbit (frontal bone).',
  parts: [
    'Orbital and palpebral parts, separated by the lateral horn of the levator aponeurosis',
    'About 8–12 ducts open into the superior conjunctival fornix',
    'Tear drainage: puncta → canaliculi → lacrimal sac → nasolacrimal duct → inferior meatus of the nose'
  ],
  organ: {
    bloodSupply: 'Lacrimal branch of the [[hn-art-ophthalmic]].',
    nerveSupply: 'Parasympathetic (secretomotor): superior salivatory (lacrimatory) nucleus → facial nerve → greater petrosal nerve → nerve of the pterygoid canal → pterygopalatine ganglion (relay) → zygomatic branch of V2 → communicating branch → lacrimal nerve (V1) → gland. Sympathetic: vasomotor. Sensory: lacrimal nerve.',
    lymphatics: 'Parotid (preauricular) nodes.'
  },
  relations: [],
  clinical: [
    { title: 'Dry eye in facial palsy:', text: 'Loss of lacrimation indicates a facial nerve lesion at or above the geniculate ganglion.' },
    { title: 'Schirmer’s test:', text: 'Measures tear production.' }
  ],
  highYield: ['Secretomotor fibres relay in the pterygopalatine ganglion.'],
  mnemonics: []
}
]);
