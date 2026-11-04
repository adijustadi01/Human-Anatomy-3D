// THORAX — NERVES
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/thorax/nerves.js', [
{
  id: 'th-nerve-phrenic',
  name: 'Phrenic nerve',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'thorax',
  zones: ['superior', 'middle', 'diaphragm'],
  verified: false, source: '', doubtful: [], reviewNote: 'Cervical course to be detailed under Head & Neck.',
  description: 'Motor nerve of the diaphragm; also sensory to mediastinal pleura, pericardium and central diaphragm.',
  location: 'Neck (on scalenus anterior), superior and middle mediastinum, diaphragm.',
  parts: [],
  nerve: {
    rootValue: 'C3, C4, C5 (mainly C4)',
    course: 'Descends on scalenus anterior in the neck and enters the thorax behind the subclavian vein. In the thorax it passes in front of the lung root, between the fibrous pericardium and mediastinal pleura, with the pericardiacophrenic vessels. The right nerve runs along the SVC, right atrium and IVC; the left nerve crosses the arch of aorta and runs over the left ventricle. Both reach the diaphragm.',
    branches: ['Motor branches to the diaphragm', 'Sensory branches to mediastinal pleura, fibrous and parietal pericardium, and central diaphragmatic pleura and peritoneum'],
    motor: ['[[th-musc-diaphragm]] (its only motor supply)'],
    sensory: ['Mediastinal pleura', 'Fibrous and parietal serous pericardium', 'Central parts of diaphragmatic pleura and peritoneum']
  },
  relations: [
    { dir: 'lung root', text: 'Passes in front of the lung root (vagus passes behind).', ref: 'th-organ-lung' },
    { dir: 'laterally', text: 'Mediastinal pleura; medially fibrous pericardium.', ref: 'th-organ-pericardium' }
  ],
  clinical: [
    { title: 'Referred pain to shoulder tip:', text: 'Irritation of the central diaphragm, pericardium or mediastinal pleura (e.g. subphrenic abscess, cholecystitis on the right) is felt over the shoulder (C4 dermatome).' },
    { title: 'Phrenic nerve palsy:', text: 'Paralysed hemidiaphragm rises and moves paradoxically on sniffing.' }
  ],
  highYield: ['Accessory phrenic nerve (when present) usually from C5 via the nerve to subclavius.'],
  mnemonics: [{ text: 'C3, 4, 5 keeps the diaphragm alive', meaning: 'Root value of the phrenic nerve' }]
},
{
  id: 'th-nerve-vagus',
  name: 'Vagus nerve (thoracic part)',
  aka: ['Cranial nerve X'],
  type: 'nerve',
  system: ['nervous'],
  region: 'thorax',
  zones: ['superior', 'posterior'],
  verified: false, source: '', doubtful: [], reviewNote: 'Cranial and cervical parts to be detailed under Head & Neck.',
  description: 'Parasympathetic and visceral sensory nerve to thoracic (and abdominal) viscera.',
  location: 'Superior and posterior mediastinum.',
  parts: ['Right and left vagus differ in their course in the thorax'],
  nerve: {
    rootValue: 'Cranial nerve X (medulla oblongata)',
    course: 'Right vagus: crosses in front of the right subclavian artery (giving the right recurrent laryngeal nerve, which hooks around it), descends on the right side of the trachea, passes behind the root of the right lung, and helps form the oesophageal plexus (continuing as the posterior vagal trunk). Left vagus: descends between left common carotid and left subclavian arteries, crosses the left side of the aortic arch (giving the left recurrent laryngeal nerve, which hooks around the arch behind the ligamentum arteriosum), passes behind the root of the left lung, and helps form the oesophageal plexus (continuing as the anterior vagal trunk).',
    branches: ['Left recurrent laryngeal nerve (in thorax)', 'Cardiac branches (to cardiac plexus)', 'Pulmonary branches (to pulmonary plexuses)', 'Oesophageal branches (oesophageal plexus)'],
    motor: ['Parasympathetic: slows the heart, bronchoconstriction and bronchial secretion, oesophageal peristalsis', 'Recurrent laryngeal nerves: intrinsic muscles of larynx except cricothyroid'],
    sensory: ['Visceral afferents from heart, lungs and airways (stretch, cough reflex), oesophagus']
  },
  relations: [
    { dir: 'lung root', text: 'Passes behind the lung root (phrenic in front).', ref: 'th-organ-lung' },
    { dir: 'aortic arch', text: 'Left recurrent laryngeal nerve hooks below the arch, lateral to the ligamentum arteriosum.', ref: 'th-art-arch-aorta' }
  ],
  clinical: [
    { title: 'Left recurrent laryngeal nerve palsy:', text: 'Hoarseness from compression by aortic arch aneurysm, bronchogenic carcinoma or mediastinal nodes; rarely a greatly enlarged left atrium (Ortner’s syndrome).' }
  ],
  highYield: ['Left recurrent laryngeal nerve has a longer, thoracic course — more often injured in chest disease.'],
  mnemonics: []
},
{
  id: 'th-nerve-sympathetic-trunk',
  name: 'Thoracic sympathetic trunk',
  aka: ['Sympathetic chain (thoracic part)'],
  type: 'nerve',
  system: ['nervous'],
  region: 'thorax',
  zones: ['posterior'],
  verified: false, source: '', doubtful: ['branches'], reviewNote: 'Check splanchnic nerve segment values against your textbook.',
  description: 'Ganglionated chain carrying sympathetic outflow to thoracic viscera and body wall.',
  location: 'On the heads of the ribs, behind the costal pleura, on each side of the vertebral column.',
  parts: ['Usually 11–12 ganglia; the first often fuses with the inferior cervical ganglion to form the cervicothoracic (stellate) ganglion'],
  nerve: {
    rootValue: 'Preganglionic fibres from lateral horn cells of T1–L2 (thoracolumbar outflow)',
    course: 'Descends over the heads of the ribs behind the costal pleura; passes into the abdomen behind the medial arcuate ligament of the diaphragm.',
    branches: ['White and grey rami communicantes with each thoracic spinal nerve', 'Cardiac, pulmonary and oesophageal branches from upper thoracic ganglia', 'Greater splanchnic nerve (T5–T9)', 'Lesser splanchnic nerve (T10–T11)', 'Least splanchnic nerve (T12)'],
    motor: ['Sympathetic supply: increases heart rate and contractility, bronchodilatation, vasomotor and sudomotor supply to body wall'],
    sensory: ['Visceral pain afferents (e.g. from the heart) travel with sympathetic fibres']
  },
  relations: [],
  clinical: [
    { title: 'Thoracic sympathectomy:', text: 'Used for severe palmar hyperhidrosis.' },
    { title: 'Horner’s syndrome:', text: 'Involvement of the stellate ganglion / T1 outflow (e.g. Pancoast tumour) → ptosis, miosis, anhidrosis.' }
  ],
  highYield: ['Splanchnic nerves are preganglionic and relay in abdominal (prevertebral) ganglia.'],
  mnemonics: []
},
{
  id: 'th-nerve-intercostal',
  name: 'Intercostal nerve (typical)',
  aka: [],
  type: 'nerve',
  system: ['nervous'],
  region: 'thorax',
  zones: ['wall'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Ventral ramus of a thoracic spinal nerve running in an intercostal space. Typical ones are the 3rd to 6th.',
  location: 'Intercostal space, in the costal groove.',
  parts: [],
  nerve: {
    rootValue: 'Ventral ramus of the corresponding thoracic spinal nerve (T1–T11; T12 is the subcostal nerve)',
    course: 'Runs forward in the costal groove below the intercostal vessels, between the internal and innermost intercostal muscles; ends near the sternum as the anterior cutaneous nerve.',
    branches: ['Rami communicantes', 'Collateral branch', 'Muscular branches', 'Lateral cutaneous branch (about the midaxillary line)', 'Anterior cutaneous branch', 'Sensory branches to costal parietal pleura'],
    motor: ['Intercostal muscles, subcostalis, transversus thoracis, serratus posterior'],
    sensory: ['Skin of the thoracic wall (dermatome)', 'Costal parietal pleura']
  },
  relations: [
    { dir: 'costal groove', text: 'Lowest of the neurovascular bundle (vein, artery, nerve from above down).', ref: 'th-space-intercostal-space' }
  ],
  clinical: [
    { title: 'Intercostal nerve block:', text: 'For rib fracture pain; needle near the lower border of the rib.' },
    { title: 'Herpes zoster:', text: 'Dermatomal pain and rash.' }
  ],
  highYield: ['Atypical: 1st, 2nd (and 7th–11th, which also supply the abdominal wall).'],
  mnemonics: []
}
]);
