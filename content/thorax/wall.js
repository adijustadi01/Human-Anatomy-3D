// THORAX — WALL & DIAPHRAGM (muscles, bones)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/thorax/wall.js', [
{
  id: 'th-musc-diaphragm',
  name: 'Diaphragm',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal', 'respiratory'],
  region: 'thorax',
  zones: ['diaphragm'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Musculotendinous dome separating the thoracic and abdominal cavities; principal muscle of inspiration.',
  location: 'Floor of thorax / roof of abdomen.',
  parts: [
    'Sternal, costal and lumbar (vertebral) parts converging on a central tendon',
    'Openings: caval at T8 (IVC, branches of right phrenic nerve); oesophageal at T10 (oesophagus, vagal trunks, oesophageal branches of left gastric vessels); aortic at T12 (aorta, thoracic duct, azygos vein)'
  ],
  muscle: {
    origin: ['Sternal part: back of xiphoid process', 'Costal part: inner surfaces of lower six costal cartilages and adjoining ribs', 'Lumbar part: right crus (L1–L3), left crus (L1–L2), medial and lateral arcuate ligaments'],
    insertion: ['Central tendon'],
    nerveSupply: 'Motor: [[th-nerve-phrenic]] (C3–C5). Sensory: central part by phrenic nerves; peripheral part by lower intercostal nerves.',
    bloodSupply: 'Superior and inferior phrenic arteries, musculophrenic and pericardiacophrenic arteries, lower intercostal arteries.',
    action: ['Principal muscle of inspiration — contraction lowers the domes and increases the vertical diameter of the thorax', 'Raises intra-abdominal pressure in straining, micturition, defecation and parturition']
  },
  relations: [
    { dir: 'superior', text: 'Pleura and lungs; pericardium on the central tendon.', ref: 'th-organ-heart' },
    { dir: 'inferior', text: 'Liver, stomach, spleen, kidneys and suprarenals (detail under Abdomen).', ref: '' }
  ],
  clinical: [
    { title: 'Hiatus hernia:', text: 'Stomach herniates through the oesophageal opening.' },
    { title: 'Congenital diaphragmatic hernia:', text: 'Most commonly posterolateral (Bochdalek); anterior (Morgagni) less common.' },
    { title: 'Hiccups:', text: 'Involuntary spasmodic contraction of the diaphragm.' }
  ],
  highYield: ['Openings: IVC T8, oesophagus T10, aorta T12.', 'Right dome higher than left (liver).'],
  mnemonics: [{ text: 'I 8 10 Eggs At 12', meaning: 'IVC at T8, oEsophagus at T10, Aorta at T12' }]
},
{
  id: 'th-musc-intercostals',
  name: 'Intercostal muscles',
  aka: ['External, internal and innermost intercostals'],
  type: 'muscle',
  system: ['musculoskeletal', 'respiratory'],
  region: 'thorax',
  zones: ['wall'],
  verified: false, source: '', doubtful: ['action'], reviewNote: 'Respiratory roles are classically taught but debated — confirm your textbook’s wording.',
  description: 'Three layers of muscle filling each intercostal space.',
  location: 'Intercostal spaces.',
  parts: [
    'External intercostal — fibres run downward and forward; from the tubercle of the rib to the costochondral junction, replaced anteriorly by the external intercostal membrane',
    'Internal intercostal — fibres run downward and backward; from the sternum to the angle of the rib, replaced posteriorly by the internal intercostal membrane',
    'Innermost intercostal — deepest layer, mainly in the middle part of the space (with subcostalis and transversus thoracis in the same plane)'
  ],
  muscle: {
    origin: ['Lower border of the rib above'],
    insertion: ['Upper border of the rib below'],
    nerveSupply: '[[th-nerve-intercostal]] of the corresponding space',
    bloodSupply: 'Posterior and anterior intercostal arteries',
    action: ['External intercostals: elevate ribs (inspiration)', 'Internal intercostals: interosseous part depresses ribs (forced expiration); interchondral part elevates ribs', 'All: keep the intercostal spaces rigid']
  },
  relations: [
    { dir: 'between internal and innermost', text: 'Intercostal neurovascular bundle.', ref: 'th-space-intercostal-space' }
  ],
  clinical: [],
  highYield: ['Neurovascular bundle lies between internal and innermost layers.'],
  mnemonics: []
},
{
  id: 'th-bone-sternum',
  name: 'Sternum',
  aka: ['Breastbone'],
  type: 'bone',
  system: ['musculoskeletal'],
  region: 'thorax',
  zones: ['wall'],
  verified: false, source: '', doubtful: ['attachments'], reviewNote: 'Ossification left blank — fill from your textbook.',
  description: 'Flat bone in the midline of the anterior thoracic wall.',
  location: 'Anterior thoracic wall.',
  parts: ['Manubrium', 'Body', 'Xiphoid process'],
  bone: {
    features: [
      'Manubrium: jugular (suprasternal) notch, clavicular notches, notch for 1st costal cartilage',
      'Sternal angle (of Louis): manubriosternal joint, where the 2nd costal cartilage articulates',
      'Body: notches for 2nd–7th costal cartilages',
      'Xiphoid process: cartilaginous in youth, ossifies later'
    ],
    attachments: [
      'Plane of the sternal angle (T4/T5 disc) marks: junction of superior and inferior mediastinum; beginning and end of the [[th-art-arch-aorta]]; bifurcation of the [[th-organ-trachea]]; [[th-vein-azygos]] joining the SVC; approximately the division of the [[th-art-pulmonary-trunk]]',
      'Sternal angle is the landmark for counting ribs (2nd costal cartilage)'
    ],
    ossification: ''
  },
  relations: [],
  clinical: [
    { title: 'Sternal marrow puncture:', text: 'Red marrow persists in adults; the manubrium or upper body is used for aspiration.' },
    { title: 'Median sternotomy:', text: 'Standard access for open-heart surgery.' }
  ],
  highYield: ['Sternal angle = T4/T5 = 2nd costal cartilage — many structures change at this level.'],
  mnemonics: []
}
]);
