// HEAD & NECK — NECK: TRIANGLES & CAROTID SHEATH
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/head-neck/neck-spaces.js', [
{
  id: 'hn-space-posterior-triangle',
  name: 'Posterior triangle of neck',
  aka: ['Lateral cervical region'],
  type: 'space',
  system: [],
  region: 'head-neck',
  zones: ['posterior'],
  verified: false, source: '', doubtful: ['contents'], reviewNote: 'Check the surface-marking description of the accessory nerve your textbook uses.',
  description: 'Triangular region on the side of the neck behind the sternocleidomastoid.',
  location: 'Side of the neck, above the middle third of the clavicle.',
  parts: ['Divided by the inferior belly of omohyoid into the occipital (upper) and supraclavicular / subclavian (lower) triangles'],
  space: {
    boundaries: [
      'Anterior: posterior border of [[hn-musc-sternocleidomastoid]]',
      'Posterior: anterior border of trapezius',
      'Base (inferior): middle third of the clavicle',
      'Apex: where SCM and trapezius meet on the superior nuchal line',
      'Roof: investing layer of deep cervical fascia (platysma, external jugular vein and cutaneous nerves in the superficial fascia)',
      'Floor (above down): splenius capitis, levator scapulae, scalenus medius (± scalenus anterior), covered by prevertebral fascia'
    ],
    contents: [
      '[[hn-nerve-accessory]] — crosses the triangle superficially on levator scapulae',
      'Cutaneous branches of the [[hn-nerve-cervical-plexus]]: lesser occipital, great auricular, transverse cervical, supraclavicular',
      'Trunks of the [[ul-nerve-brachial-plexus]] (lower part)',
      'Third part of the [[hn-art-subclavian]]; transverse cervical and suprascapular arteries',
      'Terminal part of the [[hn-vein-external-jugular]]',
      'Occipital artery (near the apex); occipital and supraclavicular lymph nodes'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Accessory nerve injury:', text: 'During lymph-node biopsy in the triangle → trapezius paralysis (drooping shoulder, difficulty abducting above 90°).' },
    { title: 'Supraclavicular brachial plexus block:', text: 'Performed in the lower part of the triangle.' }
  ],
  highYield: ['Accessory nerve is the most superficial important structure — the “danger” in this triangle.'],
  mnemonics: []
},
{
  id: 'hn-space-anterior-triangle',
  name: 'Anterior triangle of neck',
  aka: ['Anterior cervical region'],
  type: 'space',
  system: [],
  region: 'head-neck',
  zones: ['anterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Triangular region in front of the sternocleidomastoid.',
  location: 'Front of the neck, on each side of the midline.',
  parts: ['Subdivisions: submental (unpaired, shared), [[hn-space-submandibular-triangle]], [[hn-space-carotid-triangle]], muscular triangle'],
  space: {
    boundaries: [
      'Anterior: median line of the neck',
      'Posterior: anterior border of [[hn-musc-sternocleidomastoid]]',
      'Base (superior): lower border of the mandible and a line from the angle of mandible to the mastoid process',
      'Apex: jugular (suprasternal) notch',
      'Roof: investing layer of deep cervical fascia, platysma'
    ],
    contents: ['Carotid arteries and internal jugular vein', 'Cranial nerves IX–XII (parts)', 'Thyroid, larynx, trachea, pharynx', 'Submandibular gland and lymph nodes', 'Infrahyoid (strap) muscles']
  },
  relations: [],
  clinical: [],
  highYield: ['Four subdivisions: submental, submandibular (digastric), carotid, muscular.'],
  mnemonics: []
},
{
  id: 'hn-space-carotid-triangle',
  name: 'Carotid triangle',
  aka: [],
  type: 'space',
  system: [],
  region: 'head-neck',
  zones: ['anterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Subdivision of the anterior triangle containing the carotid bifurcation.',
  location: 'Upper part of the anterior triangle.',
  parts: [],
  space: {
    boundaries: [
      'Anterosuperior: posterior belly of [[hn-musc-digastric]] (and stylohyoid)',
      'Anteroinferior: superior belly of omohyoid',
      'Posterior: anterior border of [[hn-musc-sternocleidomastoid]]',
      'Roof: investing layer of deep cervical fascia',
      'Floor: thyrohyoid, hyoglossus, middle and inferior pharyngeal constrictors'
    ],
    contents: [
      'Bifurcation of the [[hn-art-common-carotid]] (upper border of thyroid cartilage), with carotid sinus and carotid body',
      '[[hn-art-internal-carotid]] and [[hn-art-external-carotid]] with branches (superior thyroid, lingual, facial, occipital, ascending pharyngeal)',
      '[[hn-vein-internal-jugular]] and tributaries',
      '[[hn-nerve-vagus]] with superior laryngeal branches; [[hn-nerve-hypoglossal]]; superior root of ansa cervicalis; [[hn-nerve-accessory]] (upper part)',
      'Sympathetic trunk (behind the carotid sheath); deep cervical lymph nodes'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Carotid pulse:', text: 'Felt here at the level of the upper border of the thyroid cartilage.' },
    { title: 'Carotid endarterectomy:', text: 'Hypoglossal and vagus nerves are at risk.' }
  ],
  highYield: ['Common carotid bifurcates at the upper border of the thyroid cartilage (C3/C4).'],
  mnemonics: []
},
{
  id: 'hn-space-submandibular-triangle',
  name: 'Submandibular triangle',
  aka: ['Digastric triangle'],
  type: 'space',
  system: [],
  region: 'head-neck',
  zones: ['anterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Subdivision of the anterior triangle below the mandible.',
  location: 'Below the body of the mandible.',
  parts: [],
  space: {
    boundaries: [
      'Anteroinferior: anterior belly of [[hn-musc-digastric]]',
      'Posteroinferior: posterior belly of digastric and stylohyoid',
      'Base (superior): lower border of mandible and line to the mastoid',
      'Roof: skin, platysma, investing fascia',
      'Floor: mylohyoid, hyoglossus, part of middle constrictor'
    ],
    contents: [
      'Superficial part of the [[hn-organ-submandibular-gland]]; submandibular lymph nodes',
      'Facial artery and vein; submental artery',
      '[[hn-nerve-hypoglossal]]; nerve to mylohyoid',
      'Posterior part: lower part of parotid gland, external carotid artery'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Submandibular gland excision:', text: 'Marginal mandibular branch of facial nerve, lingual and hypoglossal nerves are at risk.' }
  ],
  highYield: ['Main content is the submandibular gland.'],
  mnemonics: []
},
{
  id: 'hn-space-carotid-sheath',
  name: 'Carotid sheath',
  aka: [],
  type: 'space',
  system: [],
  region: 'head-neck',
  zones: ['anterior', 'root'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Tubular condensation of deep cervical fascia around the main vessels of the neck.',
  location: 'Side of the neck, from the base of the skull to the root of the neck.',
  parts: [],
  space: {
    boundaries: [
      'Anterior: sternocleidomastoid, infrahyoid muscles; ansa cervicalis embedded in its anterior wall',
      'Posterior: prevertebral fascia with the cervical sympathetic trunk (outside the sheath)',
      'Medial: larynx, pharynx, trachea, oesophagus, thyroid gland'
    ],
    contents: [
      'Common and internal carotid arteries (medially)',
      '[[hn-vein-internal-jugular]] (laterally)',
      '[[hn-nerve-vagus]] (posteriorly, between artery and vein)',
      '[[hn-lymph-deep-cervical-nodes]] along the vein'
    ]
  },
  relations: [
    { dir: 'behind', text: 'Cervical sympathetic trunk.', ref: 'hn-nerve-cervical-sympathetic' }
  ],
  clinical: [
    { title: 'Spread of infection:', text: 'Can track along the sheath between the neck and the mediastinum.' }
  ],
  highYield: ['Sympathetic trunk lies behind the sheath, not in it.'],
  mnemonics: []
}
]);
