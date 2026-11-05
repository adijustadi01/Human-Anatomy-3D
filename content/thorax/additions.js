// THORAX — ADDITIONS (bronchopulmonary segments, main bronchi, thymus)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/thorax/additions.js', [
{
  id: 'th-organ-bp-segments', name: 'Bronchopulmonary segments', aka: [], type: 'organ',
  system: ['respiratory'], region: 'thorax', zones: ['lungs'],
  verified: false, source: '', doubtful: ['parts', 'clinical'], reviewNote: 'Left-lung segment count and naming vary between texts.',
  description: 'Wedge-shaped, functionally independent sectors of lung, each aerated by a segmental (tertiary) bronchus; surgically resectable units.',
  location: 'Within each lobe of the [[th-organ-lung]], apex toward the hilum.',
  parts: [
    'Right lung (10): upper lobe — apical, posterior, anterior; middle lobe — lateral, medial; lower lobe — superior, medial basal, anterior basal, lateral basal, posterior basal',
    'Left lung (8–10): upper lobe — apicoposterior, anterior, superior lingular, inferior lingular; lower lobe — superior, anteromedial basal, lateral basal, posterior basal'
  ],
  organ: {
    bloodSupply: 'Segmental bronchus and segmental branch of the pulmonary artery run centrally; pulmonary veins run in the intersegmental planes (a guide during resection).',
    nerveSupply: 'Pulmonary plexuses.',
    lymphatics: 'Bronchopulmonary (hilar) nodes.'
  },
  relations: [],
  clinical: [
    { title: 'Segmentectomy:', text: 'A diseased segment can be removed along the intersegmental planes.' },
    { title: 'Aspiration in the supine position:', text: 'Commonly affects the superior segment of the right lower lobe and the posterior segment of the right upper lobe.' },
    { title: 'Postural drainage:', text: 'Positions are based on segmental anatomy.' }
  ],
  highYield: ['Artery central, veins intersegmental.'], mnemonics: []
},
{
  id: 'th-organ-main-bronchi', name: 'Main bronchi', aka: ['Principal bronchi'], type: 'organ',
  system: ['respiratory'], region: 'thorax', zones: ['middle', 'lungs'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check lengths and angles quoted.',
  description: 'Right and left primary bronchi from the tracheal bifurcation to the lung hila.',
  location: 'From the carina (about T4/T5) to the hilum of each lung.',
  parts: [
    'Right: about 2.5 cm, wider, shorter, more vertical; gives the upper lobe bronchus (eparterial) before entering the hilum; azygos vein arches over it',
    'Left: about 5 cm, narrower, more oblique; passes below the arch of aorta and in front of the oesophagus and descending aorta'
  ],
  organ: {
    bloodSupply: 'Bronchial arteries.',
    nerveSupply: 'Pulmonary plexuses (vagal and sympathetic).',
    lymphatics: 'Tracheobronchial nodes.'
  },
  relations: [
    { dir: 'right — above', text: 'Arch of azygos vein.', ref: 'th-vein-azygos' },
    { dir: 'left — above', text: 'Arch of aorta.', ref: 'th-art-arch-aorta' }
  ],
  clinical: [{ title: 'Foreign bodies:', text: 'Enter the right main bronchus more often.' }],
  highYield: ['Right upper lobe bronchus is the only eparterial bronchus.'], mnemonics: []
},
{
  id: 'th-organ-thymus', name: 'Thymus', aka: [], type: 'organ',
  system: ['lymphatic', 'endocrine'], region: 'thorax', zones: ['superior', 'anterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Primary lymphoid organ where T lymphocytes mature; large in children, involutes after puberty.',
  location: 'Superior and anterior mediastinum, behind the manubrium; may extend into the neck.',
  parts: ['Two lobes; cortex and medulla (Hassall’s corpuscles in the medulla)', 'Develops from the 3rd pharyngeal pouch (endoderm)'],
  organ: {
    bloodSupply: 'Internal thoracic and inferior thyroid arteries. Veins mainly to the left brachiocephalic vein.',
    nerveSupply: 'Vagus and sympathetic fibres (vasomotor).',
    lymphatics: 'No afferent lymphatics; efferents to mediastinal nodes.'
  },
  relations: [
    { dir: 'anterior', text: 'Manubrium.', ref: 'th-bone-sternum' },
    { dir: 'posterior', text: 'Pericardium, arch of aorta and its branches, left brachiocephalic vein, trachea.', ref: 'th-space-superior-mediastinum' }
  ],
  clinical: [
    { title: 'Thymoma:', text: 'Associated with myasthenia gravis.' },
    { title: 'DiGeorge syndrome:', text: 'Absent thymus (3rd/4th pouch defect) → T-cell deficiency.' }
  ],
  highYield: ['Shares origin with the inferior parathyroids (3rd pouch).'], mnemonics: []
}
]);
