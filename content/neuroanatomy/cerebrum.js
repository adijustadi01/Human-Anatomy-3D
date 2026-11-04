// NEUROANATOMY — DIENCEPHALON, BASAL GANGLIA, INTERNAL CAPSULE, CORTEX
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/neuroanatomy/cerebrum.js', [
{
  id: 'na-cns-thalamus',
  name: 'Thalamus',
  aka: [],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['deep'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest part of the diencephalon; the great sensory relay station to the cortex.',
  location: 'Paired egg-shaped masses forming the lateral walls of the 3rd ventricle, joined by the interthalamic adhesion.',
  parts: [
    'Internal medullary lamina divides it into anterior, medial and lateral nuclear groups',
    'Key nuclei: VPL (body sensation), VPM (face and taste), lateral geniculate body (vision), medial geniculate body (hearing), VA and VL (motor — from basal ganglia and cerebellum), anterior (limbic), mediodorsal (prefrontal), pulvinar'
  ],
  cns: {
    connections: ['Afferent: medial lemniscus and spinothalamic tracts → VPL; trigeminothalamic → VPM; optic tract → LGB; cerebellum and basal ganglia → VA/VL', 'Efferent: thalamocortical radiations through the [[na-cns-internal-capsule]]'],
    functions: ['Relay and integration of all sensory pathways except smell', 'Motor relay loops (basal ganglia, cerebellum → cortex)', 'Arousal and consciousness (intralaminar and reticular nuclei)', 'Memory and emotion (anterior nucleus, limbic circuit)'],
    bloodSupply: 'Mainly branches of the [[na-art-pca]] (thalamoperforating, thalamogeniculate); also posterior communicating and anterior choroidal arteries.',
    lesion: ['Thalamic (Dejerine–Roussy) syndrome: contralateral sensory loss, later followed by severe spontaneous pain', 'Thalamic haemorrhage: contralateral sensory loss ± hemiparesis (adjacent internal capsule)']
  },
  relations: [
    { dir: 'lateral', text: 'Posterior limb of the internal capsule.', ref: 'na-cns-internal-capsule' }
  ],
  clinical: [],
  highYield: ['VPL = body; VPM = face; LGB = vision; MGB = hearing (“Lateral = Light, Medial = Music”).'],
  mnemonics: [{ text: 'Lateral = Light, Medial = Music', meaning: 'Lateral geniculate body — vision; medial geniculate body — hearing' }]
},
{
  id: 'na-cns-hypothalamus',
  name: 'Hypothalamus',
  aka: [],
  type: 'cns',
  system: ['nervous', 'endocrine'],
  region: 'neuroanatomy',
  zones: ['deep'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check the nucleus–function list against your textbook.',
  description: 'Part of the diencephalon controlling homeostasis, autonomic and endocrine function.',
  location: 'Below the hypothalamic sulcus, forming the floor and lower lateral walls of the 3rd ventricle.',
  parts: [
    'External features: optic chiasma, tuber cinereum with infundibulum (stalk of [[hn-organ-pituitary]]), mammillary bodies',
    'Nuclei: supraoptic and paraventricular (ADH, oxytocin), arcuate (releasing hormones), suprachiasmatic (circadian rhythm), ventromedial (satiety), lateral (hunger), anterior (heat loss), posterior (heat conservation), mammillary bodies (memory)'
  ],
  cns: {
    connections: ['Hypothalamo-hypophyseal tract to the posterior pituitary', 'Hypophyseal portal system to the anterior pituitary', 'Fornix (from hippocampus) to mammillary bodies; mammillothalamic tract', 'Descending fibres to brainstem and spinal autonomic centres'],
    functions: ['Temperature regulation', 'Hunger and satiety; thirst and water balance', 'Circadian rhythm and sleep', 'Endocrine control via the pituitary', 'Autonomic control; emotional behaviour'],
    bloodSupply: 'Small branches from the circle of Willis (anterior and posterior communicating, posterior cerebral arteries).',
    lesion: ['Diabetes insipidus (supraoptic–hypophyseal damage)', 'Hyperphagia and obesity (ventromedial)', 'Disturbed temperature regulation', 'Wernicke–Korsakoff syndrome (mammillary bodies; thiamine deficiency)']
  },
  relations: [
    { dir: 'inferior', text: 'Pituitary gland via the infundibulum.', ref: 'hn-organ-pituitary' }
  ],
  clinical: [],
  highYield: ['Supraoptic nucleus → ADH; paraventricular → oxytocin (both make some of each).'],
  mnemonics: []
},
{
  id: 'na-cns-basal-ganglia',
  name: 'Basal ganglia',
  aka: ['Basal nuclei', 'Corpus striatum (part)'],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['deep'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Deep grey-matter nuclei regulating movement.',
  location: 'Deep within each cerebral hemisphere, around the internal capsule.',
  parts: [
    'Caudate nucleus and lentiform nucleus (putamen + globus pallidus) = corpus striatum',
    'Striatum = caudate + putamen',
    'Functionally associated: subthalamic nucleus, substantia nigra',
    'Caudate and thalamus lie medial to the internal capsule; lentiform nucleus lateral'
  ],
  cns: {
    connections: ['Motor loop: cortex → striatum → globus pallidus (internal) → thalamus (VA/VL) → cortex', 'Direct and indirect pathways (indirect via subthalamic nucleus)', 'Nigrostriatal dopaminergic pathway'],
    functions: ['Initiation and smooth regulation of voluntary movement', 'Control of muscle tone', 'Also cognitive and emotional loops'],
    bloodSupply: 'Lenticulostriate (lateral striate) branches of the [[na-art-mca]]; recurrent artery of Heubner (medial striate, from [[na-art-aca]]); anterior choroidal artery.',
    lesion: ['Parkinson’s disease (loss of nigral dopamine): rigidity, bradykinesia, resting tremor', 'Huntington’s chorea (caudate degeneration)', 'Hemiballismus (contralateral subthalamic nucleus)', 'Wilson’s disease (lentiform nucleus)']
  },
  relations: [
    { dir: 'between parts', text: 'Internal capsule.', ref: 'na-cns-internal-capsule' }
  ],
  clinical: [],
  highYield: ['Basal ganglia disorders cause involuntary movements and tone changes, not paralysis.'],
  mnemonics: []
},
{
  id: 'na-cns-internal-capsule',
  name: 'Internal capsule',
  aka: [],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['deep'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Compact band of projection fibres between the cortex and lower centres.',
  location: 'Between the thalamus and caudate nucleus (medially) and the lentiform nucleus (laterally).',
  parts: [
    'Anterior limb (between head of caudate and lentiform): frontopontine fibres, anterior thalamic radiation',
    'Genu: corticobulbar (corticonuclear) fibres',
    'Posterior limb (between thalamus and lentiform): corticospinal fibres, sensory thalamocortical radiation',
    'Retrolentiform part: optic radiation',
    'Sublentiform part: auditory radiation'
  ],
  cns: {
    connections: ['[[na-tract-corticospinal]] in the posterior limb', 'Thalamocortical sensory radiation from [[na-cns-thalamus]]'],
    functions: ['Carries motor and sensory projection fibres between the cerebral cortex and the brainstem/spinal cord/thalamus'],
    bloodSupply: 'Lenticulostriate branches of the [[na-art-mca]]; recurrent artery of Heubner ([[na-art-aca]]); anterior choroidal (ICA); posterior communicating artery.',
    lesion: ['A small lesion produces dense contralateral hemiplegia (face, arm and leg) with hemianaesthesia; ± homonymous hemianopia if the retrolentiform part is involved', 'Classic site of hypertensive haemorrhage and lacunar infarcts']
  },
  relations: [],
  clinical: [
    { title: 'Capsular stroke:', text: 'Lenticulostriate artery rupture (“Charcot’s artery of cerebral haemorrhage”).' }
  ],
  highYield: ['Corticobulbar fibres — genu; corticospinal — posterior limb.'],
  mnemonics: []
},
{
  id: 'na-cns-motor-cortex',
  name: 'Primary motor cortex',
  aka: ['Precentral gyrus', 'Area 4'],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['cerebrum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Cortical area initiating voluntary movement of the opposite side.',
  location: 'Precentral gyrus of the frontal lobe and the anterior part of the paracentral lobule.',
  parts: ['Motor homunculus (upside down): leg and foot on the medial surface (paracentral lobule); trunk, arm and hand on the upper lateral surface; face lowest; large areas for hand, lips and tongue'],
  cns: {
    connections: ['Efferent: [[na-tract-corticospinal]] and corticobulbar tracts (pyramidal cells of layer V, incl. Betz cells)', 'Afferent: premotor and supplementary motor areas, VL thalamus, somatosensory cortex'],
    functions: ['Voluntary movement of the opposite side of the body'],
    bloodSupply: '[[na-art-mca]] (lateral surface: face and arm areas); [[na-art-aca]] (medial surface: leg area).',
    lesion: ['Contralateral UMN paralysis: spasticity, hyperreflexia, extensor plantar', 'MCA stroke: face and arm affected more than leg; ACA stroke: leg more than arm', 'Irritative lesion: Jacksonian (focal motor) seizures']
  },
  relations: [
    { dir: 'posterior', text: 'Central sulcus, then postcentral gyrus.', ref: 'na-cns-sensory-cortex' }
  ],
  clinical: [],
  highYield: ['Leg area on the medial surface — ACA territory.'],
  mnemonics: []
},
{
  id: 'na-cns-sensory-cortex',
  name: 'Primary somatosensory cortex',
  aka: ['Postcentral gyrus', 'Areas 3, 1, 2'],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['cerebrum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Cortical area for conscious, discriminative body sensation of the opposite side.',
  location: 'Postcentral gyrus of the parietal lobe and the posterior part of the paracentral lobule.',
  parts: ['Sensory homunculus with the same arrangement as the motor homunculus'],
  cns: {
    connections: ['Afferent: VPL and VPM of the thalamus through the posterior limb of the internal capsule', 'Efferent: to somatosensory association cortex and motor areas'],
    functions: ['Discriminative touch, proprioception, vibration, localisation of stimuli', 'Perception of pain and temperature (partly)'],
    bloodSupply: '[[na-art-mca]] (lateral surface); [[na-art-aca]] (medial surface).',
    lesion: ['Contralateral loss of fine sensation: astereognosis, loss of two-point discrimination and position sense; crude pain often preserved (thalamus)']
  },
  relations: [],
  clinical: [],
  highYield: ['Receives the third-order neurons of the DCML and spinothalamic pathways.'],
  mnemonics: []
},
{
  id: 'na-cns-speech-areas',
  name: 'Speech areas (Broca’s & Wernicke’s)',
  aka: ['Broca’s area', 'Wernicke’s area'],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['cerebrum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Language areas of the dominant (usually left) hemisphere.',
  location: 'Broca’s: inferior frontal gyrus (areas 44, 45). Wernicke’s: posterior part of the superior temporal gyrus (area 22).',
  parts: ['Broca’s area — motor (expressive) speech', 'Wernicke’s area — sensory (receptive) speech', 'Arcuate fasciculus — connects them'],
  cns: {
    connections: ['Arcuate fasciculus between Wernicke’s and Broca’s areas', 'Broca’s area → motor cortex for face, tongue and larynx'],
    functions: ['Broca’s: production of fluent, grammatical speech', 'Wernicke’s: comprehension of spoken and written language'],
    bloodSupply: 'Superior (Broca’s) and inferior (Wernicke’s) divisions of the [[na-art-mca]].',
    lesion: ['Broca’s aphasia: non-fluent, effortful speech with preserved comprehension; often with right hemiparesis', 'Wernicke’s aphasia: fluent but meaningless speech with poor comprehension', 'Conduction aphasia (arcuate fasciculus): poor repetition', 'Global aphasia: both areas']
  },
  relations: [],
  clinical: [],
  highYield: ['Broca = Broken (non-fluent) speech; Wernicke = Wordy (fluent) but nonsensical.'],
  mnemonics: []
},
{
  id: 'na-cns-visual-cortex',
  name: 'Primary visual cortex',
  aka: ['Striate cortex', 'Area 17'],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['cerebrum'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Cortical area for conscious vision of the opposite visual field.',
  location: 'Walls of the calcarine sulcus on the medial surface of the occipital lobe, extending to the occipital pole.',
  parts: ['Upper bank (cuneus): lower visual field', 'Lower bank (lingual gyrus): upper visual field', 'Macula represented at the occipital pole (large area)', 'Stria of Gennari visible to the naked eye'],
  cns: {
    connections: ['Afferent: lateral geniculate body via the optic radiation ([[na-tract-visual-pathway]])', 'Efferent: visual association areas 18 and 19'],
    functions: ['Conscious perception of the contralateral visual field'],
    bloodSupply: 'Calcarine branch of the [[na-art-pca]]; the occipital pole also receives branches of the [[na-art-mca]].',
    lesion: ['PCA occlusion: contralateral homonymous hemianopia with macular sparing', 'Bilateral lesions: cortical blindness']
  },
  relations: [],
  clinical: [],
  highYield: ['Macular sparing because of dual (PCA + MCA) supply of the occipital pole.'],
  mnemonics: []
},
{
  id: 'na-cns-corpus-callosum',
  name: 'Corpus callosum',
  aka: [],
  type: 'cns',
  system: ['nervous'],
  region: 'neuroanatomy',
  zones: ['cerebrum', 'ventricles'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest commissure, connecting the two cerebral hemispheres.',
  location: 'Floor of the longitudinal fissure, roof of the lateral ventricles.',
  parts: ['Rostrum, genu, body (trunk), splenium', 'Forceps minor (from the genu to the frontal lobes); forceps major (from the splenium to the occipital lobes); tapetum'],
  cns: {
    connections: ['Commissural fibres linking corresponding areas of the two hemispheres'],
    functions: ['Transfer of information between the hemispheres'],
    bloodSupply: 'Mainly the [[na-art-aca]] (pericallosal branch); splenium by the [[na-art-pca]].',
    lesion: ['Disconnection (“split-brain”) syndrome, e.g. after callosotomy for epilepsy: cannot name objects felt in the left hand', 'Alexia without agraphia (splenium + left occipital lesion)']
  },
  relations: [
    { dir: 'below', text: 'Lateral ventricles (roof), septum pellucidum and fornix.', ref: 'na-space-lateral-ventricle' }
  ],
  clinical: [],
  highYield: ['Forms the roof of the lateral ventricles.'],
  mnemonics: []
}
]);
