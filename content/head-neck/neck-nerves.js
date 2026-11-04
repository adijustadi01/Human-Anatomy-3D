// HEAD & NECK — NECK NERVES (IX–XII, recurrent laryngeal, cervical plexus, sympathetic)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/head-neck/neck-nerves.js', [
{
  id: 'hn-nerve-glossopharyngeal',
  name: 'Glossopharyngeal nerve',
  aka: ['Cranial nerve IX'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['anterior', 'nose-mouth'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Mixed cranial nerve of the 3rd pharyngeal arch.',
  location: 'Jugular foramen → between ICA and IJV → around stylopharyngeus → between ICA and ECA → tongue and pharynx.',
  parts: [],
  nerve: {
    rootValue: 'Cranial nerve IX (medulla: nucleus ambiguus, inferior salivatory nucleus, nucleus of tractus solitarius)',
    course: 'Leaves the skull through the jugular foramen (with X and XI), with superior and inferior ganglia; descends between the internal carotid artery and internal jugular vein, winds round stylopharyngeus, passes between the internal and external carotid arteries, and enters the tongue deep to hyoglossus.',
    branches: ['Tympanic nerve (→ tympanic plexus → lesser petrosal nerve → otic ganglion)', 'Carotid sinus nerve', 'Pharyngeal branches (to pharyngeal plexus)', 'Muscular branch to stylopharyngeus', 'Tonsillar branches', 'Lingual branches'],
    motor: ['Stylopharyngeus (its only muscle)', 'Parasympathetic: parotid gland (via otic ganglion and auriculotemporal nerve)'],
    sensory: ['Posterior third of tongue — general sensation and taste (including circumvallate papillae)', 'Oropharynx and palatine tonsil', 'Middle ear and auditory tube', 'Carotid sinus and carotid body']
  },
  relations: [
    { dir: 'between ICA and ECA', text: 'Passes between them with stylopharyngeus.', ref: 'hn-art-external-carotid' }
  ],
  clinical: [
    { title: 'Gag reflex:', text: 'IX is the afferent limb (vagus efferent).' },
    { title: 'Jugular foramen syndrome:', text: 'IX, X and XI involved together.' },
    { title: 'Tonsillectomy:', text: 'May injure IX in the tonsillar bed → loss of taste in posterior third of tongue.' }
  ],
  highYield: ['Supplies only one muscle: stylopharyngeus.'],
  mnemonics: []
},
{
  id: 'hn-nerve-vagus',
  name: 'Vagus nerve (head & neck)',
  aka: ['Cranial nerve X'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['anterior', 'larynx'],
  verified: false, source: '', doubtful: [], reviewNote: 'Thoracic part: see [[th-nerve-vagus]].',
  description: 'Longest cranial nerve; nerve of the 4th and 6th pharyngeal arches and main parasympathetic nerve.',
  location: 'Jugular foramen → carotid sheath → thorax.',
  parts: [],
  nerve: {
    rootValue: 'Cranial nerve X (medulla: nucleus ambiguus, dorsal motor nucleus, nucleus of tractus solitarius)',
    course: 'Leaves the skull through the jugular foramen with superior and inferior ganglia; descends in the carotid sheath, behind and between the internal jugular vein and the internal/common carotid artery; enters the thorax (continues as [[th-nerve-vagus]]).',
    branches: ['Meningeal branch', 'Auricular branch (Arnold’s nerve) — external acoustic meatus', 'Pharyngeal branch (main motor nerve of the pharyngeal plexus)', 'Superior laryngeal nerve → internal laryngeal (sensory) and external laryngeal (to cricothyroid)', 'Right [[hn-nerve-recurrent-laryngeal]] (hooks round the right subclavian artery)', 'Cardiac branches; branch to carotid body'],
    motor: ['Muscles of pharynx (except stylopharyngeus)', 'Muscles of soft palate (except tensor veli palatini)', 'Palatoglossus', 'All intrinsic muscles of larynx', 'Parasympathetic to thoracic and abdominal viscera'],
    sensory: ['Larynx and laryngopharynx', 'Part of external ear and external acoustic meatus', 'Dura of the posterior cranial fossa', 'Visceral afferents from thoracic and abdominal viscera']
  },
  relations: [
    { dir: 'carotid sheath', text: 'Posterior, between IJV and carotid artery.', ref: 'hn-space-carotid-sheath' }
  ],
  clinical: [
    { title: 'Unilateral vagal lesion:', text: 'Uvula deviates to the healthy side; palate droops on the affected side; hoarseness and dysphagia.' },
    { title: 'Ear syringing:', text: 'Stimulation of the auricular branch can cause coughing or reflex bradycardia.' }
  ],
  highYield: ['External laryngeal nerve supplies only cricothyroid.'],
  mnemonics: []
},
{
  id: 'hn-nerve-recurrent-laryngeal',
  name: 'Recurrent laryngeal nerve',
  aka: ['Inferior laryngeal nerve (terminal part)'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['thyroid', 'larynx', 'root'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Branch of the vagus supplying most of the larynx.',
  location: 'Right: root of neck. Left: superior mediastinum. Both ascend in the tracheo-oesophageal groove.',
  parts: [],
  nerve: {
    rootValue: 'Branch of the vagus (motor fibres from nucleus ambiguus)',
    course: 'Right: hooks round the right subclavian artery. Left: hooks round the arch of aorta behind the ligamentum arteriosum. Each ascends in the tracheo-oesophageal groove, closely related to the inferior thyroid artery behind the thyroid lobe, and enters the larynx under the lower border of the inferior constrictor, behind the cricothyroid joint.',
    branches: ['Cardiac branches', 'Tracheal and oesophageal branches', 'Branch to the inferior constrictor (cricopharyngeus)', 'Terminal laryngeal branches'],
    motor: ['All intrinsic muscles of the larynx except cricothyroid (incl. [[hn-musc-posterior-cricoarytenoid]])'],
    sensory: ['Laryngeal mucosa below the vocal folds', 'Trachea and oesophagus']
  },
  relations: [
    { dir: 'thyroid', text: 'Close to the inferior thyroid artery near the lower part of the lobe.', ref: 'hn-organ-thyroid' },
    { dir: 'left, in thorax', text: 'Hooks round the aortic arch.', ref: 'th-art-arch-aorta' }
  ],
  clinical: [
    { title: 'Thyroidectomy injury:', text: 'Unilateral → hoarseness; bilateral → stridor and airway obstruction.' },
    { title: 'Left nerve palsy:', text: 'More common — longer thoracic course (aortic aneurysm, bronchogenic carcinoma, mediastinal nodes).' }
  ],
  highYield: ['Left nerve has a longer course and is more often affected.'],
  mnemonics: []
},
{
  id: 'hn-nerve-accessory',
  name: 'Accessory nerve',
  aka: ['Cranial nerve XI', 'Spinal accessory nerve'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['posterior', 'anterior'],
  verified: false, source: '', doubtful: ['rootValue'], reviewNote: 'Texts differ on whether a separate cranial root is described.',
  description: 'Motor nerve to the sternocleidomastoid and trapezius.',
  location: 'Jugular foramen → deep to the posterior belly of digastric → through SCM → across the posterior triangle → trapezius.',
  parts: [],
  nerve: {
    rootValue: 'Spinal root: spinal accessory nucleus in the upper cervical cord (about C1–C5); classically a cranial root also joins the vagus',
    course: 'Spinal root ascends through the foramen magnum and leaves through the jugular foramen; descends deep to the styloid process and posterior belly of digastric, supplies and passes through/deep to the sternocleidomastoid, crosses the posterior triangle superficially on levator scapulae, and passes under the trapezius.',
    branches: ['Muscular branches to sternocleidomastoid and trapezius'],
    motor: ['[[hn-musc-sternocleidomastoid]]', 'Trapezius'],
    sensory: ['None (proprioception from these muscles via C2–C4)']
  },
  relations: [
    { dir: 'posterior triangle', text: 'Very superficial, within the roof — vulnerable.', ref: 'hn-space-posterior-triangle' }
  ],
  clinical: [
    { title: 'Injury in the posterior triangle:', text: 'Trapezius paralysis: drooping shoulder, weak shrugging, difficulty raising the arm above the head.' },
    { title: 'Testing:', text: 'Shrug shoulders against resistance (trapezius); turn the face against resistance (SCM).' }
  ],
  highYield: ['Most commonly injured during lymph-node biopsy in the posterior triangle.'],
  mnemonics: []
},
{
  id: 'hn-nerve-hypoglossal',
  name: 'Hypoglossal nerve',
  aka: ['Cranial nerve XII'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['anterior', 'nose-mouth'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Motor nerve of the tongue.',
  location: 'Hypoglossal canal → between ICA and IJV → loops forward across the carotids → on hyoglossus → tongue.',
  parts: [],
  nerve: {
    rootValue: 'Cranial nerve XII (hypoglossal nucleus in the medulla)',
    course: 'Leaves the skull through the hypoglossal canal; descends between the internal carotid artery and internal jugular vein; curves forward below the posterior belly of digastric, superficial to the internal and external carotids and the loop of the lingual artery; runs forward on hyoglossus (below the submandibular duct and lingual nerve) into the tongue.',
    branches: ['Own fibres: muscular branches to the tongue', 'C1 fibres carried by it: meningeal branch, superior root of ansa cervicalis, nerves to thyrohyoid and geniohyoid'],
    motor: ['All intrinsic and extrinsic muscles of the tongue except palatoglossus (vagus)'],
    sensory: ['None']
  },
  relations: [
    { dir: 'superficial to', text: 'Internal and external carotid arteries and the lingual artery.', ref: 'hn-art-external-carotid' }
  ],
  clinical: [
    { title: 'LMN lesion:', text: 'Protruded tongue deviates to the side of the lesion, with ipsilateral wasting and fasciculation.' },
    { title: 'UMN lesion:', text: 'Tongue deviates to the opposite side, without wasting.' },
    { title: 'Surgical injury:', text: 'At risk in carotid endarterectomy and submandibular surgery.' }
  ],
  highYield: ['Tongue points toward the side of an LMN lesion (unopposed opposite genioglossus).'],
  mnemonics: []
},
{
  id: 'hn-nerve-cervical-plexus',
  name: 'Cervical plexus',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['posterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Plexus of the upper four cervical ventral rami supplying the skin and muscles of the neck and the diaphragm.',
  location: 'Deep to the internal jugular vein and sternocleidomastoid, on scalenus medius and levator scapulae, under the prevertebral fascia.',
  parts: [],
  nerve: {
    rootValue: 'Ventral rami of C1, C2, C3, C4',
    course: 'Forms a series of loops; cutaneous branches emerge at about the midpoint of the posterior border of sternocleidomastoid (nerve point of the neck).',
    branches: [
      'Cutaneous: lesser occipital (C2), great auricular (C2, C3), transverse cervical (C2, C3), supraclavicular (C3, C4)',
      'Ansa cervicalis: superior root (C1, via hypoglossal) and inferior root (C2, C3) → sternohyoid, sternothyroid, omohyoid',
      '[[th-nerve-phrenic]] (C3, C4, C5)',
      'Muscular branches to prevertebral muscles and levator scapulae; contributions to SCM and trapezius'
    ],
    motor: ['Infrahyoid muscles (via ansa cervicalis; thyrohyoid via C1 with XII)', 'Diaphragm (phrenic)', 'Prevertebral muscles, levator scapulae'],
    sensory: ['Skin of the neck, back of the scalp, auricle and angle of jaw, upper chest and shoulder']
  },
  relations: [
    { dir: 'superficial', text: 'Sternocleidomastoid and internal jugular vein.', ref: 'hn-musc-sternocleidomastoid' }
  ],
  clinical: [
    { title: 'Superficial cervical plexus block:', text: 'At the nerve point (midpoint of posterior border of SCM) for neck surgery.' },
    { title: 'Supraclavicular referred pain:', text: 'Diaphragmatic irritation (C3–C5) can be felt at the shoulder.' }
  ],
  highYield: ['Nerve point of the neck: midpoint of the posterior border of SCM.'],
  mnemonics: []
},
{
  id: 'hn-nerve-cervical-sympathetic',
  name: 'Cervical sympathetic trunk',
  aka: ['Cervical sympathetic chain'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['root', 'anterior'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check ganglion vertebral levels.',
  description: 'Upward continuation of the thoracic sympathetic trunk; sympathetic supply to the head, neck, upper limb and heart.',
  location: 'Behind the carotid sheath, in front of the prevertebral muscles, embedded in the prevertebral fascia.',
  parts: ['Superior cervical ganglion (largest; about C2–C3)', 'Middle cervical ganglion (about C6)', 'Inferior cervical ganglion — often fused with the first thoracic as the cervicothoracic (stellate) ganglion, near the neck of the first rib'],
  nerve: {
    rootValue: 'Preganglionic fibres from the upper thoracic segments (mainly T1–T2), ascending from the [[th-nerve-sympathetic-trunk]]',
    course: 'Ascends behind the carotid sheath from the root of the neck to the base of the skull.',
    branches: ['Grey rami communicantes to all cervical spinal nerves', 'Superior ganglion: internal carotid nerve/plexus (to eye, incl. dilator pupillae and superior tarsal muscle), external carotid plexus, pharyngeal and cardiac branches', 'Middle ganglion: thyroid and cardiac branches', 'Inferior/stellate ganglion: vertebral plexus, cardiac branches'],
    motor: ['Dilator pupillae and superior tarsal (Müller’s) muscle', 'Sweat glands and blood vessels of the head and neck', 'Heart (cardiac nerves)'],
    sensory: ['Cardiac pain afferents travel with the cardiac branches']
  },
  relations: [
    { dir: 'anterior', text: 'Carotid sheath.', ref: 'hn-space-carotid-sheath' }
  ],
  clinical: [
    { title: 'Horner’s syndrome:', text: 'Interruption anywhere along the pathway (e.g. Pancoast tumour, neck surgery, carotid dissection) → partial ptosis, miosis, anhidrosis of the face.' },
    { title: 'Stellate ganglion block:', text: 'For sympathetically maintained pain or vascular disorders of the upper limb.' }
  ],
  highYield: ['Superior cervical ganglion is the largest.'],
  mnemonics: []
}
]);
