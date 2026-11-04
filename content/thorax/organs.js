// THORAX — ORGANS (heart, lungs, pleura, pericardium, trachea, oesophagus)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/thorax/organs.js', [
{
  id: 'th-organ-heart',
  name: 'Heart',
  aka: [],
  type: 'organ',
  system: ['cardiovascular'],
  region: 'thorax',
  zones: ['middle'],
  verified: false, source: '', doubtful: ['lymphatics'], reviewNote: '',
  description: 'Hollow muscular four-chambered organ that pumps blood through the systemic and pulmonary circulations.',
  location: 'Middle mediastinum, enclosed in the [[th-organ-pericardium]]; apex usually in the left 5th intercostal space, just medial to the midclavicular line.',
  parts: [
    'Chambers: right and left atria, right and left ventricles',
    'Surfaces: sternocostal (mainly right ventricle), diaphragmatic (mainly left ventricle), base/posterior surface (mainly left atrium), left surface (left ventricle)',
    'Borders: right border — right atrium; left border — mainly left ventricle (left auricle above); inferior border — mainly right ventricle'
  ],
  organ: {
    bloodSupply: 'Right and left coronary arteries ([[th-art-rca]], [[th-art-lca]]). Venous drainage mainly via the [[th-vein-coronary-sinus]] into the right atrium; also anterior cardiac veins and venae cordis minimae.',
    nerveSupply: 'Cardiac plexus: sympathetic from cervical and upper thoracic ganglia of the [[th-nerve-sympathetic-trunk]] (accelerator); parasympathetic from the [[th-nerve-vagus]] (slows the heart). Pain afferents travel with sympathetic fibres to upper thoracic segments.',
    lymphatics: 'Tracheobronchial and brachiocephalic lymph nodes.'
  },
  relations: [
    { dir: 'anterior', text: 'Sternum, costal cartilages, anterior parts of lungs and pleura, anterior mediastinum.', ref: 'th-space-anterior-mediastinum' },
    { dir: 'posterior', text: 'Oesophagus and descending thoracic aorta (posterior mediastinum), behind the left atrium.', ref: 'th-organ-oesophagus' },
    { dir: 'inferior', text: 'Central tendon of the diaphragm.', ref: 'th-musc-diaphragm' },
    { dir: 'lateral', text: 'Mediastinal pleura and lungs; phrenic nerves run on each side of the pericardium.', ref: 'th-nerve-phrenic' }
  ],
  clinical: [
    { title: 'Referred cardiac pain:', text: 'Angina and myocardial infarction pain is felt retrosternally and radiates to the left shoulder and medial side of the left arm — areas supplied by the same upper thoracic segments.' },
    { title: 'Left atrial enlargement:', text: 'Indents the oesophagus (seen on barium swallow), as the left atrium lies directly in front of it.' }
  ],
  highYield: [
    'Left atrium is the most posterior chamber — closest to the oesophagus.',
    'Right ventricle forms most of the sternocostal surface.'
  ],
  mnemonics: []
},
{
  id: 'th-organ-lung',
  name: 'Lungs',
  aka: ['Lung'],
  type: 'organ',
  system: ['respiratory'],
  region: 'thorax',
  zones: ['lungs'],
  verified: false, source: '', doubtful: [], reviewNote: 'Add bronchopulmonary segments after verification.',
  description: 'Paired organs of respiration, each in its own pleural cavity.',
  location: 'Thoracic cavity on either side of the mediastinum.',
  parts: [
    'Apex, base, costal and mediastinal surfaces; anterior, posterior and inferior borders',
    'Right lung: three lobes (superior, middle, inferior) separated by oblique and horizontal fissures',
    'Left lung: two lobes (superior, inferior) separated by the oblique fissure; cardiac notch and lingula',
    'Hilum / root: bronchus, pulmonary artery, pulmonary veins, bronchial vessels, nerves, lymphatics'
  ],
  organ: {
    bloodSupply: 'Bronchial arteries supply the lung tissue (left: usually two, from the descending thoracic aorta; right: usually one, from the 3rd right posterior intercostal artery). Pulmonary arteries bring deoxygenated blood for gas exchange; pulmonary veins return oxygenated blood to the left atrium. Bronchial veins drain to the azygos and hemiazygos veins.',
    nerveSupply: 'Pulmonary plexuses: parasympathetic ([[th-nerve-vagus]]) — bronchoconstriction and secretomotor; sympathetic (upper thoracic segments) — bronchodilatation.',
    lymphatics: 'Superficial (subpleural) and deep plexuses → bronchopulmonary (hilar) nodes → tracheobronchial nodes.'
  },
  relations: [
    { dir: 'root — front', text: 'Phrenic nerve passes in front of the lung root.', ref: 'th-nerve-phrenic' },
    { dir: 'root — behind', text: 'Vagus nerve passes behind the lung root.', ref: 'th-nerve-vagus' },
    { dir: 'apex', text: 'Rises into the neck above the medial third of the clavicle, covered by cervical pleura.', ref: 'th-organ-pleura' }
  ],
  clinical: [
    { title: 'Pancoast (apical) tumour:', text: 'Can involve the lower brachial plexus (C8, T1) and sympathetic chain → arm pain, wasting of hand muscles, Horner’s syndrome.' },
    { title: 'Aspiration:', text: 'Foreign bodies more often enter the right lung, because the right main bronchus is wider, shorter and more vertical.' }
  ],
  highYield: [
    'Right lung: 3 lobes, 2 fissures; left lung: 2 lobes, 1 fissure, lingula.',
    'Right main bronchus: wider, shorter, more vertical.'
  ],
  mnemonics: []
},
{
  id: 'th-organ-pleura',
  name: 'Pleura',
  aka: [],
  type: 'organ',
  system: ['respiratory'],
  region: 'thorax',
  zones: ['lungs'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: 'Check surface-marking rib levels against your textbook.',
  description: 'Serous membrane enclosing each lung; parietal and visceral layers enclose the pleural cavity.',
  location: 'Lines each half of the thoracic cavity and covers the lungs.',
  parts: [
    'Visceral pleura — covers the lung surface and dips into fissures',
    'Parietal pleura — costal, diaphragmatic, mediastinal and cervical parts',
    'Recesses: costodiaphragmatic and costomediastinal',
    'Lower limit of parietal pleura is about two ribs below the lower border of the lung (lung: 6th rib midclavicular, 8th midaxillary, 10th posteriorly; pleura: 8th, 10th, 12th)'
  ],
  organ: {
    bloodSupply: 'Parietal pleura: vessels of the thoracic wall (intercostal, internal thoracic, musculophrenic). Visceral pleura: bronchial vessels.',
    nerveSupply: 'Parietal pleura (pain-sensitive): costal and peripheral diaphragmatic parts by [[th-nerve-intercostal]]; mediastinal and central diaphragmatic parts by [[th-nerve-phrenic]]. Visceral pleura: autonomic only — insensitive to pain.',
    lymphatics: ''
  },
  relations: [],
  clinical: [
    { title: 'Pleural effusion:', text: 'Fluid first collects in the costodiaphragmatic recess (blunting of costophrenic angle on X-ray).' },
    { title: 'Pleural tap / chest drain:', text: 'Needle is passed just above the upper border of the rib below, to avoid the intercostal neurovascular bundle.' },
    { title: 'Pleuritic pain:', text: 'Central diaphragmatic pleura irritation is referred to the shoulder tip (C4 via phrenic nerve).' }
  ],
  highYield: ['Visceral pleura has no pain fibres; parietal pleura is very sensitive.'],
  mnemonics: []
},
{
  id: 'th-organ-pericardium',
  name: 'Pericardium',
  aka: [],
  type: 'organ',
  system: ['cardiovascular'],
  region: 'thorax',
  zones: ['middle'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Fibroserous sac enclosing the heart and roots of the great vessels.',
  location: 'Middle mediastinum.',
  parts: [
    'Fibrous pericardium — fused with central tendon of diaphragm below and adventitia of great vessels above',
    'Serous pericardium — parietal layer (lines fibrous pericardium) and visceral layer (epicardium); pericardial cavity between them',
    'Transverse sinus — behind ascending aorta and pulmonary trunk, in front of the superior vena cava and atria',
    'Oblique sinus — behind the left atrium, bounded by the pulmonary veins and inferior vena cava'
  ],
  organ: {
    bloodSupply: 'Mainly pericardiacophrenic branches of the internal thoracic arteries; also small pericardial branches of the descending thoracic aorta.',
    nerveSupply: 'Fibrous and parietal serous layers: [[th-nerve-phrenic]] (pain-sensitive). Visceral layer: autonomic (insensitive).',
    lymphatics: ''
  },
  relations: [
    { dir: 'laterally', text: 'Phrenic nerves and pericardiacophrenic vessels between pericardium and mediastinal pleura.', ref: 'th-nerve-phrenic' }
  ],
  clinical: [
    { title: 'Cardiac tamponade:', text: 'Fluid/blood in the pericardial cavity compresses the heart; the fibrous pericardium cannot stretch acutely.' },
    { title: 'Pericardiocentesis:', text: 'Commonly via the left xiphicostal (subxiphoid) approach.' },
    { title: 'Cardiac surgery:', text: 'A finger or ligature passed through the transverse sinus can isolate the aorta and pulmonary trunk.' }
  ],
  highYield: ['Transverse sinus separates arterial (aorta, pulmonary trunk) from venous ends of the heart.'],
  mnemonics: []
},
{
  id: 'th-organ-trachea',
  name: 'Trachea',
  aka: ['Windpipe'],
  type: 'organ',
  system: ['respiratory'],
  region: 'thorax',
  zones: ['superior', 'middle'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Cervical part to be detailed under Head & Neck.',
  description: 'Cartilaginous and membranous tube conducting air from the larynx to the main bronchi.',
  location: 'Neck (cervical part) and superior mediastinum (thoracic part).',
  parts: [
    'Begins at the lower border of the cricoid cartilage (C6); ends by bifurcating into right and left main bronchi at about the level of the sternal angle (T4/T5) — lower in the living, especially in inspiration',
    'About 10–11 cm long; 16–20 C-shaped cartilaginous rings, open posteriorly where the trachealis muscle lies',
    'Carina — ridge at the bifurcation'
  ],
  organ: {
    bloodSupply: 'Inferior thyroid arteries (upper part); bronchial arteries (lower part).',
    nerveSupply: 'Parasympathetic and sensory from the [[th-nerve-vagus]] and recurrent laryngeal nerves; sympathetic from the sympathetic trunks.',
    lymphatics: 'Pretracheal and paratracheal nodes.'
  },
  relations: [
    { dir: 'anterior (thorax)', text: 'Manubrium, left brachiocephalic vein, arch of aorta, brachiocephalic trunk and left common carotid artery.', ref: 'th-art-arch-aorta' },
    { dir: 'posterior', text: 'Oesophagus; left recurrent laryngeal nerve in the groove between them.', ref: 'th-organ-oesophagus' },
    { dir: 'right', text: 'Right vagus, arch of azygos vein, right pleura.', ref: 'th-vein-azygos' },
    { dir: 'left', text: 'Arch of aorta, left common carotid and left subclavian arteries, left recurrent laryngeal nerve.', ref: 'th-art-arch-aorta' }
  ],
  clinical: [
    { title: 'Widened / distorted carina:', text: 'On bronchoscopy, suggests enlarged tracheobronchial nodes (e.g. bronchogenic carcinoma).' },
    { title: 'Tracheal deviation:', text: 'Shifts away from a tension pneumothorax or large effusion; towards collapse.' }
  ],
  highYield: ['Bifurcation at the level of the sternal angle (T4/T5) in the cadaver.'],
  mnemonics: []
},
{
  id: 'th-organ-oesophagus',
  name: 'Oesophagus',
  aka: ['Esophagus'],
  type: 'organ',
  system: ['digestive'],
  region: 'thorax',
  zones: ['superior', 'posterior'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check constriction distances from incisor teeth.',
  description: 'Muscular tube conveying food from the pharynx to the stomach.',
  location: 'Neck, superior and posterior mediastinum, and abdomen.',
  parts: [
    'About 25 cm long; from C6 (lower border of cricoid) to the cardiac orifice of the stomach (about T11); pierces the diaphragm at T10',
    'Cervical, thoracic and abdominal parts',
    'Constrictions (approx. distance from incisor teeth): at its beginning (15 cm), where crossed by the arch of aorta (22.5 cm), where crossed by the left main bronchus (27.5 cm), at the diaphragm (37.5–40 cm)',
    'Muscle: upper third striated, middle third mixed, lower third smooth'
  ],
  organ: {
    bloodSupply: 'Cervical part: inferior thyroid arteries. Thoracic part: oesophageal branches of the [[th-art-descending-aorta]] (and bronchial arteries). Abdominal part: left gastric artery (and left inferior phrenic). Veins: thoracic part → azygos system; abdominal part → left gastric vein (portal) — a portosystemic anastomosis.',
    nerveSupply: 'Upper striated part: recurrent laryngeal nerves. Rest: oesophageal plexus formed by the vagi ([[th-nerve-vagus]]) and sympathetic trunks.',
    lymphatics: 'Deep cervical, posterior mediastinal and left gastric nodes (by level).'
  },
  relations: [
    { dir: 'anterior (thorax)', text: 'Trachea, left main bronchus, pericardium with left atrium.', ref: 'th-organ-heart' },
    { dir: 'posterior', text: 'Vertebral column, thoracic duct, azygos vein, right posterior intercostal arteries; descending aorta posterolateral (left) lower down.', ref: 'th-lymph-thoracic-duct' }
  ],
  clinical: [
    { title: 'Oesophageal varices:', text: 'Dilated veins at the lower end in portal hypertension (portosystemic anastomosis); may bleed severely.' },
    { title: 'Constrictions:', text: 'Sites where foreign bodies lodge and strictures/carcinoma are common.' }
  ],
  highYield: ['Pierces diaphragm at T10 with the vagal trunks.'],
  mnemonics: []
}
]);
