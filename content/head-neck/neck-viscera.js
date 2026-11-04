// HEAD & NECK — NECK VISCERA (thyroid, parathyroids, larynx, pharynx, submandibular gland)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/head-neck/neck-viscera.js', [
{
  id: 'hn-organ-thyroid',
  name: 'Thyroid gland',
  aka: [],
  type: 'organ',
  system: ['endocrine'],
  region: 'head-neck',
  zones: ['thyroid'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check vertebral levels and extent of lobes.',
  description: 'Largest endocrine gland; secretes thyroid hormones and calcitonin.',
  location: 'Front and sides of the lower neck, about C5–T1.',
  parts: [
    'Two lobes joined by the isthmus, which lies in front of the 2nd–4th tracheal rings; pyramidal lobe in some',
    'Lobes extend from the oblique line of the thyroid cartilage down to about the 5th–6th tracheal ring',
    'True capsule (fibrous) and false capsule (pretracheal fascia); suspensory ligament (of Berry) binds it to the cricoid — so it moves with swallowing'
  ],
  organ: {
    bloodSupply: 'Superior thyroid artery (1st branch of [[hn-art-external-carotid]]); inferior thyroid artery (from thyrocervical trunk of [[hn-art-subclavian]]); thyroidea ima (inconstant). Veins: superior and middle thyroid → internal jugular; inferior thyroid → brachiocephalic veins.',
    nerveSupply: 'Sympathetic fibres from the cervical ganglia (vasomotor); secretion is hormonally controlled (TSH).',
    lymphatics: 'Prelaryngeal, pretracheal, paratracheal and deep cervical nodes.'
  },
  relations: [
    { dir: 'superficial', text: 'Strap muscles (sternohyoid, sternothyroid, superior belly of omohyoid), sternocleidomastoid.', ref: 'hn-musc-sternocleidomastoid' },
    { dir: 'medial', text: 'Larynx, trachea, pharynx, oesophagus; external laryngeal nerve near the upper pole; recurrent laryngeal nerve in the tracheo-oesophageal groove.', ref: 'hn-nerve-recurrent-laryngeal' },
    { dir: 'posterolateral', text: 'Carotid sheath.', ref: 'hn-space-carotid-sheath' },
    { dir: 'posterior', text: 'Parathyroid glands.', ref: 'hn-organ-parathyroid' }
  ],
  clinical: [
    { title: 'Thyroidectomy:', text: 'Superior thyroid artery is ligated close to the gland (to protect the external laryngeal nerve — loss of high-pitched voice); inferior thyroid artery away from the gland (to protect the recurrent laryngeal nerve — hoarseness; bilateral injury → stridor). Parathyroids must be preserved.' },
    { title: 'Goitre:', text: 'Moves with swallowing; retrosternal extension can compress trachea.' },
    { title: 'Thyroglossal cyst:', text: 'Midline swelling that moves upward on protrusion of the tongue.' }
  ],
  highYield: ['Moves with deglutition because of the pretracheal fascia / ligament of Berry.'],
  mnemonics: []
},
{
  id: 'hn-organ-parathyroid',
  name: 'Parathyroid glands',
  aka: [],
  type: 'organ',
  system: ['endocrine'],
  region: 'head-neck',
  zones: ['thyroid'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Small endocrine glands (usually four) secreting parathyroid hormone.',
  location: 'Posterior border of the thyroid lobes, usually within the false capsule.',
  parts: [
    'Superior pair: more constant, about the middle of the posterior border of the lobe; develop from the 4th pharyngeal pouch',
    'Inferior pair: near the lower pole, more variable (may be in the mediastinum with the thymus); develop from the 3rd pharyngeal pouch'
  ],
  organ: {
    bloodSupply: 'Mainly the inferior thyroid artery.',
    nerveSupply: 'Sympathetic (vasomotor); secretion controlled by serum calcium.',
    lymphatics: 'With the thyroid lymphatics.'
  },
  relations: [
    { dir: 'anterior', text: 'Thyroid lobe.', ref: 'hn-organ-thyroid' }
  ],
  clinical: [
    { title: 'Accidental removal:', text: 'During thyroidectomy → hypocalcaemic tetany.' },
    { title: 'Ectopic adenoma:', text: 'Inferior glands may be found low in the neck or in the superior mediastinum.' }
  ],
  highYield: ['Inferior parathyroid — 3rd pouch (with thymus); superior — 4th pouch.'],
  mnemonics: []
},
{
  id: 'hn-organ-larynx',
  name: 'Larynx',
  aka: ['Voice box'],
  type: 'organ',
  system: ['respiratory'],
  region: 'head-neck',
  zones: ['larynx'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Organ of phonation and protective sphincter of the lower airway.',
  location: 'Front of the neck, about C3–C6 in the adult male.',
  parts: [
    'Cartilages: unpaired — thyroid, cricoid, epiglottis; paired — arytenoid, corniculate, cuneiform',
    'Cavity: vestibule (inlet to vestibular folds), ventricle (between vestibular and vocal folds), infraglottic cavity',
    'Rima glottidis: gap between the vocal folds — narrowest part of the adult larynx',
    'Intrinsic muscles: [[hn-musc-posterior-cricoarytenoid]] (only abductor), lateral cricoarytenoid and arytenoids (adductors), thyroarytenoid (relaxor), cricothyroid (tensor)'
  ],
  organ: {
    bloodSupply: 'Superior laryngeal artery (from superior thyroid) and inferior laryngeal artery (from inferior thyroid).',
    nerveSupply: 'Sensory: above the vocal folds — internal laryngeal nerve; below — [[hn-nerve-recurrent-laryngeal]]. Motor: all intrinsic muscles by the recurrent laryngeal nerve except cricothyroid (external laryngeal nerve).',
    lymphatics: 'Above the vocal folds → upper deep cervical nodes; below → prelaryngeal / pretracheal → lower deep cervical nodes. Vocal folds themselves have very few lymphatics.'
  },
  relations: [
    { dir: 'posterior', text: 'Laryngopharynx.', ref: 'hn-organ-pharynx' },
    { dir: 'lateral', text: 'Thyroid lobes, carotid sheath.', ref: 'hn-organ-thyroid' }
  ],
  clinical: [
    { title: 'Cricothyrotomy:', text: 'Emergency airway through the cricothyroid membrane.' },
    { title: 'Carcinoma of vocal cord:', text: 'Presents early with hoarseness and spreads late (scanty lymphatics).' },
    { title: 'Recurrent laryngeal palsy:', text: 'Hoarseness (unilateral) or stridor (bilateral).' }
  ],
  highYield: ['Cricothyroid is the only intrinsic muscle supplied by the external laryngeal nerve.', 'Cricoid is the only complete cartilaginous ring of the airway.'],
  mnemonics: []
},
{
  id: 'hn-organ-pharynx',
  name: 'Pharynx',
  aka: [],
  type: 'organ',
  system: ['digestive', 'respiratory'],
  region: 'head-neck',
  zones: ['larynx', 'nose-mouth'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Fibromuscular tube (about 12 cm) common to the food and air passages.',
  location: 'Behind the nose, mouth and larynx, from the base of the skull to the lower border of the cricoid cartilage (C6), where it becomes the oesophagus.',
  parts: [
    'Nasopharynx: pharyngeal tonsil (adenoids), opening of the auditory tube with tubal elevation, pharyngeal recess (fossa of Rosenmüller)',
    'Oropharynx: palatine tonsil in the tonsillar fossa between palatoglossal and palatopharyngeal arches',
    'Laryngopharynx: piriform fossae on each side of the laryngeal inlet',
    'Muscles: superior, middle and inferior constrictors (inferior = thyropharyngeus + cricopharyngeus); stylopharyngeus, palatopharyngeus, salpingopharyngeus',
    'Killian’s dehiscence: weak area between thyropharyngeus and cricopharyngeus'
  ],
  organ: {
    bloodSupply: 'Ascending pharyngeal artery; tonsillar and ascending palatine branches of facial artery; branches of maxillary and lingual arteries; superior and inferior thyroid arteries.',
    nerveSupply: 'Pharyngeal plexus. Motor: [[hn-nerve-vagus]] to all muscles except stylopharyngeus ([[hn-nerve-glossopharyngeal]]). Sensory: nasopharynx — maxillary nerve; oropharynx — glossopharyngeal; laryngopharynx — internal laryngeal nerve.',
    lymphatics: 'Retropharyngeal and deep cervical nodes; lymphoid tissue forms Waldeyer’s ring.'
  },
  relations: [
    { dir: 'posterior', text: 'Retropharyngeal space, prevertebral fascia and muscles, cervical vertebrae.', ref: '' },
    { dir: 'lateral', text: 'Carotid sheath, styloid process and its muscles.', ref: 'hn-space-carotid-sheath' }
  ],
  clinical: [
    { title: 'Pharyngeal (Zenker’s) diverticulum:', text: 'Protrudes through Killian’s dehiscence.' },
    { title: 'Foreign bodies:', text: 'Lodge in the piriform fossa; removal may injure the internal laryngeal nerve.' },
    { title: 'Gag reflex:', text: 'Afferent glossopharyngeal, efferent vagus.' }
  ],
  highYield: ['Stylopharyngeus is the only pharyngeal muscle supplied by IX.'],
  mnemonics: []
},
{
  id: 'hn-organ-submandibular-gland',
  name: 'Submandibular gland',
  aka: [],
  type: 'organ',
  system: ['digestive'],
  region: 'head-neck',
  zones: ['anterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Mixed (mainly serous) salivary gland, about the size of a walnut.',
  location: 'Submandibular (digastric) triangle, partly under cover of the mandible.',
  parts: [
    'Large superficial part and small deep part, continuous around the posterior border of mylohyoid',
    'Submandibular duct (Wharton’s), about 5 cm: from the deep part forward on hyoglossus, crossed by the lingual nerve, opens on the sublingual papilla beside the frenulum'
  ],
  organ: {
    bloodSupply: 'Facial artery (closely related to the gland) and submental artery.',
    nerveSupply: 'Parasympathetic (secretomotor): superior salivatory nucleus → facial nerve → chorda tympani → lingual nerve → submandibular ganglion → gland. Sympathetic: plexus around the facial artery.',
    lymphatics: 'Submandibular nodes.'
  },
  relations: [
    { dir: 'superficial', text: 'Skin, platysma, investing fascia, marginal mandibular branch of facial nerve, facial vein, submandibular nodes.', ref: '' },
    { dir: 'medial (deep)', text: 'Mylohyoid, hyoglossus, lingual nerve, submandibular ganglion, hypoglossal nerve.', ref: 'hn-nerve-hypoglossal' }
  ],
  clinical: [
    { title: 'Sialolithiasis:', text: 'Stones are commonest in this gland (viscid secretion, upward-running duct).' },
    { title: 'Excision:', text: 'Risk to marginal mandibular, lingual and hypoglossal nerves.' }
  ],
  highYield: ['Lingual nerve “double-hooks” the submandibular duct.'],
  mnemonics: []
}
]);
