// THORAX — SPACES (mediastinum, intercostal space)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/thorax/spaces.js', [
{
  id: 'th-space-superior-mediastinum',
  name: 'Superior mediastinum',
  aka: [],
  type: 'space',
  system: [],
  region: 'thorax',
  zones: ['superior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Part of the mediastinum above the plane of the sternal angle.',
  location: 'Between the thoracic inlet and the plane through the sternal angle and the T4/T5 intervertebral disc.',
  parts: [],
  space: {
    boundaries: [
      'Anterior: manubrium sterni',
      'Posterior: upper four thoracic vertebrae',
      'Superior: plane of the thoracic inlet',
      'Inferior: plane passing through the sternal angle and the lower border of T4',
      'Lateral: mediastinal pleura'
    ],
    contents: [
      '[[th-organ-trachea]] and [[th-organ-oesophagus]]',
      '[[th-art-arch-aorta]] and its three branches',
      'Brachiocephalic veins and upper half of the [[th-vein-svc]]',
      'Thymus (or its remnants)',
      '[[th-nerve-vagus]], [[th-nerve-phrenic]], left recurrent laryngeal nerve',
      '[[th-lymph-thoracic-duct]] and lymph nodes'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Mediastinal masses:', text: 'Thymoma, retrosternal goitre, lymphoma and aortic aneurysm can compress trachea, SVC or nerves here.' }
  ],
  highYield: ['Boundary with the inferior mediastinum is the plane of the sternal angle (T4/T5).'],
  mnemonics: []
},
{
  id: 'th-space-anterior-mediastinum',
  name: 'Anterior mediastinum',
  aka: [],
  type: 'space',
  system: [],
  region: 'thorax',
  zones: ['anterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Narrow part of the inferior mediastinum in front of the pericardium.',
  location: 'Between the body of the sternum and the pericardium.',
  parts: [],
  space: {
    boundaries: [
      'Anterior: body of sternum',
      'Posterior: pericardium',
      'Superior: plane of the sternal angle',
      'Inferior: diaphragm',
      'Lateral: mediastinal pleura'
    ],
    contents: [
      'Sternopericardial ligaments',
      'Lymph nodes',
      'Mediastinal branches of the [[th-art-internal-thoracic]]',
      'Loose areolar tissue; thymus (in children)'
    ]
  },
  relations: [],
  clinical: [],
  highYield: ['Smallest division of the mediastinum.'],
  mnemonics: []
},
{
  id: 'th-space-middle-mediastinum',
  name: 'Middle mediastinum',
  aka: [],
  type: 'space',
  system: [],
  region: 'thorax',
  zones: ['middle'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Part of the inferior mediastinum occupied by the pericardium and heart.',
  location: 'Between anterior and posterior mediastinum, below the plane of the sternal angle.',
  parts: [],
  space: {
    boundaries: [
      'Anterior: anterior mediastinum',
      'Posterior: posterior mediastinum',
      'Superior: plane of the sternal angle',
      'Inferior: diaphragm',
      'Lateral: mediastinal pleura'
    ],
    contents: [
      '[[th-organ-heart]] within the [[th-organ-pericardium]]',
      'Ascending aorta',
      '[[th-art-pulmonary-trunk]] and its division into pulmonary arteries',
      'Lower half of [[th-vein-svc]]; terminal part of [[th-vein-azygos]]',
      '[[th-nerve-phrenic]] nerves with pericardiacophrenic vessels',
      'Bifurcation of trachea and main bronchi; deep cardiac plexus; tracheobronchial lymph nodes'
    ]
  },
  relations: [],
  clinical: [],
  highYield: ['Largest division; essentially the pericardium and its contents.'],
  mnemonics: []
},
{
  id: 'th-space-posterior-mediastinum',
  name: 'Posterior mediastinum',
  aka: [],
  type: 'space',
  system: [],
  region: 'thorax',
  zones: ['posterior'],
  verified: false, source: '', doubtful: ['contents'], reviewNote: 'Texts differ on whether the sympathetic trunks are counted as contents.',
  description: 'Part of the inferior mediastinum behind the pericardium.',
  location: 'Between the pericardium and the lower eight thoracic vertebrae.',
  parts: [],
  space: {
    boundaries: [
      'Anterior: pericardium, bifurcation of trachea, pulmonary vessels, posterior part of diaphragm',
      'Posterior: bodies of T5–T12 vertebrae',
      'Superior: plane of the sternal angle',
      'Inferior: diaphragm',
      'Lateral: mediastinal pleura'
    ],
    contents: [
      '[[th-art-descending-aorta]]',
      '[[th-organ-oesophagus]] with vagal oesophageal plexus',
      '[[th-lymph-thoracic-duct]]',
      '[[th-vein-azygos]], hemiazygos and accessory hemiazygos veins',
      'Thoracic splanchnic nerves',
      'Posterior mediastinal lymph nodes'
    ]
  },
  relations: [],
  clinical: [],
  highYield: ['Four longitudinal structures: aorta, oesophagus, thoracic duct, azygos vein.'],
  mnemonics: []
},
{
  id: 'th-space-intercostal-space',
  name: 'Intercostal space',
  aka: [],
  type: 'space',
  system: [],
  region: 'thorax',
  zones: ['wall'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Space between two adjacent ribs; there are 11 on each side.',
  location: 'Thoracic wall.',
  parts: ['External, internal and innermost intercostal muscle layers ([[th-musc-intercostals]])'],
  space: {
    boundaries: [
      'Above: lower border of the rib above (with its costal groove)',
      'Below: upper border of the rib below'
    ],
    contents: [
      'Intercostal muscles',
      '[[th-nerve-intercostal]]',
      'Posterior and anterior intercostal arteries and veins',
      'Lymphatics',
      'Neurovascular bundle in the costal groove, between internal and innermost intercostals: vein, artery, nerve from above downward'
    ]
  },
  relations: [],
  clinical: [
    { title: 'Needle insertion:', text: 'Pass just above the upper border of the lower rib to avoid the neurovascular bundle.' },
    { title: 'Herpes zoster:', text: 'Painful vesicular rash along the dermatome of an intercostal nerve.' }
  ],
  highYield: ['Order in the costal groove from above down: Vein, Artery, Nerve.'],
  mnemonics: [{ text: 'VAN', meaning: 'Vein, Artery, Nerve — from above downward in the costal groove' }]
}
]);
