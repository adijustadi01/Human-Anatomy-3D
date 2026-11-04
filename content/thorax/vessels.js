// THORAX — VESSELS (arteries, veins, lymphatics)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/thorax/vessels.js', [
{
  id: 'th-art-arch-aorta',
  name: 'Arch of aorta',
  aka: ['Aortic arch'],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'thorax',
  zones: ['superior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Curved continuation of the ascending aorta, lying entirely in the superior mediastinum.',
  location: 'Superior mediastinum, behind the lower half of the manubrium.',
  parts: [],
  artery: {
    origin: 'Continuation of the ascending aorta behind the right half of the sternal angle (level of the 2nd right sternocostal joint).',
    course: 'Runs upward, backward and to the left, first in front of the trachea and then on its left side; ends at the lower border of T4 on the left side, continuing as the [[th-art-descending-aorta]].',
    branches: ['Brachiocephalic trunk', 'Left common carotid artery', 'Left subclavian artery'],
    territory: 'Head, neck and upper limbs (through its three branches).'
  },
  relations: [
    { dir: 'concavity', text: 'Ligamentum arteriosum connects it to the left pulmonary artery; left recurrent laryngeal nerve hooks around the arch behind the ligamentum.', ref: 'th-nerve-vagus' },
    { dir: 'right / posterior', text: 'Trachea and oesophagus.', ref: 'th-organ-trachea' },
    { dir: 'left / anterior', text: 'Left phrenic and left vagus nerves cross its left surface.', ref: 'th-nerve-phrenic' }
  ],
  clinical: [
    { title: 'Aortic aneurysm:', text: 'Can compress the left recurrent laryngeal nerve (hoarseness), trachea (tracheal tug) or oesophagus (dysphagia).' },
    { title: 'Coarctation of aorta:', text: 'Narrowing near the ligamentum arteriosum; collateral flow through internal thoracic and intercostal arteries causes rib notching.' }
  ],
  highYield: ['Begins and ends at the level of the sternal angle.', 'Three branches: brachiocephalic, left common carotid, left subclavian.'],
  mnemonics: []
},
{
  id: 'th-art-descending-aorta',
  name: 'Descending thoracic aorta',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'thorax',
  zones: ['posterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Thoracic part of the descending aorta.',
  location: 'Posterior mediastinum.',
  parts: [],
  artery: {
    origin: 'Continuation of the [[th-art-arch-aorta]] at the lower border of T4 (left side).',
    course: 'Descends in the posterior mediastinum, at first to the left of the vertebral column and then approaching the midline; passes through the aortic opening of the diaphragm at T12 to become the abdominal aorta.',
    branches: ['Posterior intercostal arteries (3rd–11th spaces)', 'Subcostal arteries', 'Left bronchial arteries (usually two)', 'Oesophageal branches', 'Pericardial and mediastinal branches', 'Superior phrenic arteries'],
    territory: 'Thoracic wall, oesophagus, left lung tissue, pericardium and upper diaphragm.'
  },
  relations: [
    { dir: 'right', text: 'Thoracic duct and azygos vein; oesophagus (lower down the oesophagus crosses in front of it to the left).', ref: 'th-lymph-thoracic-duct' }
  ],
  clinical: [
    { title: 'Aortic dissection:', text: 'Tear in the intima; tearing chest pain radiating to the back.' }
  ],
  highYield: ['Leaves the thorax through the aortic opening at T12 with the thoracic duct and azygos vein.'],
  mnemonics: []
},
{
  id: 'th-art-rca',
  name: 'Right coronary artery',
  aka: ['RCA'],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'thorax',
  zones: ['middle'],
  verified: false, source: '', doubtful: ['branches', 'territory'], reviewNote: 'Dominance and nodal-branch origin are variable — confirm the percentages your textbook quotes.',
  description: 'Coronary artery supplying mainly the right side of the heart.',
  location: 'Right atrioventricular (coronary) groove.',
  parts: [],
  artery: {
    origin: 'Anterior (right) aortic sinus of the ascending aorta.',
    course: 'Passes forward between the pulmonary trunk and right auricle, descends in the right atrioventricular groove, winds round the inferior border to the diaphragmatic surface, and ends near the crux by anastomosing with the circumflex branch of the [[th-art-lca]].',
    branches: ['Conus artery', 'Sinuatrial nodal artery (in most people)', 'Atrial branches', 'Right marginal artery', 'Atrioventricular nodal artery (in most people)', 'Posterior interventricular artery (in right-dominant hearts)'],
    territory: 'Right atrium, most of the right ventricle, part of the diaphragmatic surface of the left ventricle, posterior part of the interventricular septum; usually the SA and AV nodes.'
  },
  relations: [],
  clinical: [
    { title: 'Inferior wall MI:', text: 'RCA occlusion; may cause bradycardia or heart block because of nodal supply.' }
  ],
  highYield: ['Dominance is defined by which artery gives the posterior interventricular artery.'],
  mnemonics: []
},
{
  id: 'th-art-lca',
  name: 'Left coronary artery',
  aka: ['LCA', 'Left main coronary artery'],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'thorax',
  zones: ['middle'],
  verified: false, source: '', doubtful: ['territory'], reviewNote: '',
  description: 'Coronary artery supplying mainly the left side of the heart.',
  location: 'Between the pulmonary trunk and left auricle, then in the left atrioventricular and anterior interventricular grooves.',
  parts: [],
  artery: {
    origin: 'Left posterior aortic sinus of the ascending aorta.',
    course: 'Passes forward between the pulmonary trunk and left auricle, and soon divides into the anterior interventricular (LAD) and circumflex arteries.',
    branches: ['Anterior interventricular artery (LAD) — with diagonal and septal branches', 'Circumflex artery — with left marginal branch', 'Sinuatrial nodal artery (in a minority)'],
    territory: 'Left atrium, most of the left ventricle, a small part of the right ventricle near the anterior interventricular groove, anterior two-thirds of the interventricular septum.'
  },
  relations: [],
  clinical: [
    { title: 'LAD occlusion:', text: 'Anterior wall MI; the commonest site of coronary occlusion (“widow-maker” when proximal).' },
    { title: 'CABG:', text: 'Left internal thoracic artery is commonly grafted to the LAD.' }
  ],
  highYield: ['LAD supplies the anterior two-thirds of the septum, including most of the bundle branches.'],
  mnemonics: []
},
{
  id: 'th-art-internal-thoracic',
  name: 'Internal thoracic artery',
  aka: ['Internal mammary artery'],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'thorax',
  zones: ['wall', 'anterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Artery of the anterior thoracic wall.',
  location: 'Behind the upper six costal cartilages, a little lateral to the sternal margin.',
  parts: [],
  artery: {
    origin: 'Inferior surface of the first part of the subclavian artery.',
    course: 'Descends behind the upper six costal cartilages about 1.25 cm from the sternal margin; ends in the 6th intercostal space by dividing into the superior epigastric and musculophrenic arteries.',
    branches: ['Pericardiacophrenic artery', 'Anterior intercostal arteries (upper six spaces)', 'Perforating branches (large ones in 2nd–4th spaces supply the breast)', 'Mediastinal and thymic branches', 'Superior epigastric artery', 'Musculophrenic artery'],
    territory: 'Anterior thoracic wall, breast, pericardium, diaphragm and (via superior epigastric) the upper rectus abdominis.'
  },
  relations: [],
  clinical: [
    { title: 'Coronary bypass:', text: 'Used as a graft, most often left internal thoracic to LAD.' },
    { title: 'Coarctation of aorta:', text: 'Becomes an important collateral channel.' }
  ],
  highYield: ['Terminates in the 6th intercostal space.'],
  mnemonics: []
},
{
  id: 'th-art-pulmonary-trunk',
  name: 'Pulmonary trunk',
  aka: [],
  type: 'artery',
  system: ['cardiovascular', 'respiratory'],
  region: 'thorax',
  zones: ['middle'],
  verified: false, source: '', doubtful: ['course'], reviewNote: 'Check vertebral level of bifurcation quoted in your textbook.',
  description: 'Carries deoxygenated blood from the right ventricle to the lungs.',
  location: 'Middle mediastinum, within the pericardium.',
  parts: [],
  artery: {
    origin: 'Infundibulum (conus arteriosus) of the right ventricle.',
    course: 'Runs upward and backward, at first in front of and then to the left of the ascending aorta; divides in the concavity of the aortic arch (about the level of the sternal angle) into the right and left pulmonary arteries.',
    branches: ['Right pulmonary artery', 'Left pulmonary artery'],
    territory: 'Lungs (for gas exchange).'
  },
  relations: [
    { dir: 'ligamentum arteriosum', text: 'Connects the left pulmonary artery (near the bifurcation) to the arch of aorta — remnant of the ductus arteriosus.', ref: 'th-art-arch-aorta' }
  ],
  clinical: [
    { title: 'Patent ductus arteriosus:', text: 'Persistent connection between pulmonary artery and aorta; continuous (machinery) murmur.' },
    { title: 'Pulmonary embolism:', text: 'A large embolus can lodge at the bifurcation (saddle embolus).' }
  ],
  highYield: ['Only artery carrying deoxygenated blood (with its branches) in postnatal life.'],
  mnemonics: []
},
{
  id: 'th-vein-svc',
  name: 'Superior vena cava',
  aka: ['SVC'],
  type: 'vein',
  system: ['cardiovascular'],
  region: 'thorax',
  zones: ['superior', 'middle'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Large valveless vein returning blood from the upper half of the body to the right atrium.',
  location: 'Upper half in the superior mediastinum; lower half in the middle mediastinum (within the pericardium).',
  parts: [],
  vein: {
    origin: 'Union of the right and left brachiocephalic veins behind the lower border of the first right costal cartilage.',
    course: 'Descends vertically along the right side of the ascending aorta; receives the azygos vein just before piercing the pericardium.',
    tributaries: ['Right and left brachiocephalic veins', '[[th-vein-azygos]]', 'Small mediastinal and pericardial veins'],
    termination: 'Opens into the upper part of the right atrium at the level of the 3rd right costal cartilage.',
    territory: 'Head, neck, upper limbs, and (via the azygos system) the thoracic wall.'
  },
  relations: [
    { dir: 'right', text: 'Right phrenic nerve and right mediastinal pleura.', ref: 'th-nerve-phrenic' },
    { dir: 'left', text: 'Ascending aorta.', ref: '' }
  ],
  clinical: [
    { title: 'SVC obstruction:', text: 'Commonly by bronchogenic carcinoma or lymphoma; facial and upper-limb oedema, dilated veins over the chest wall.' },
    { title: 'Central venous catheters:', text: 'Tip is usually placed in the lower SVC.' }
  ],
  highYield: ['No valves.', 'About 7 cm long.'],
  mnemonics: []
},
{
  id: 'th-vein-azygos',
  name: 'Azygos vein',
  aka: [],
  type: 'vein',
  system: ['cardiovascular'],
  region: 'thorax',
  zones: ['posterior', 'middle'],
  verified: false, source: '', doubtful: ['origin'], reviewNote: 'Mode of origin is variable — confirm the description your textbook gives.',
  description: 'Unpaired vein draining the posterior thoracic wall, linking the IVC and SVC systems.',
  location: 'Posterior mediastinum, right side of vertebral bodies.',
  parts: [],
  vein: {
    origin: 'Usually from the back of the IVC at about L1/L2, or by union of the right subcostal and right ascending lumbar veins.',
    course: 'Enters the thorax through the aortic opening of the diaphragm, ascends on the right of the thoracic vertebral bodies, and at T4 arches forward above the root of the right lung.',
    tributaries: ['Right posterior intercostal veins (lower ones) and right superior intercostal vein', 'Hemiazygos and accessory hemiazygos veins', 'Right bronchial veins', 'Oesophageal, pericardial and mediastinal veins'],
    termination: 'Opens into the posterior aspect of the [[th-vein-svc]] just before it enters the pericardium.',
    territory: 'Posterior thoracic and upper abdominal wall, oesophagus, right bronchi.'
  },
  relations: [
    { dir: 'left', text: 'Thoracic duct and descending aorta.', ref: 'th-lymph-thoracic-duct' },
    { dir: 'arch', text: 'Arches over the root of the right lung.', ref: 'th-organ-lung' }
  ],
  clinical: [
    { title: 'Collateral pathway:', text: 'Provides a route between IVC and SVC territories in caval obstruction.' }
  ],
  highYield: ['Arches over the right lung root at T4 to join the SVC.'],
  mnemonics: []
},
{
  id: 'th-vein-coronary-sinus',
  name: 'Coronary sinus',
  aka: [],
  type: 'vein',
  system: ['cardiovascular'],
  region: 'thorax',
  zones: ['middle'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest vein of the heart, collecting most cardiac venous blood.',
  location: 'Posterior part of the atrioventricular (coronary) groove.',
  parts: [],
  vein: {
    origin: 'Continuation of the great cardiac vein.',
    course: 'Runs from left to right in the posterior atrioventricular groove.',
    tributaries: ['Great cardiac vein (with LAD, then circumflex)', 'Middle cardiac vein (with posterior interventricular artery)', 'Small cardiac vein (with right marginal artery)', 'Posterior vein of the left ventricle', 'Oblique vein of the left atrium'],
    termination: 'Right atrium, between the opening of the IVC and the right atrioventricular orifice; opening guarded by a valve.',
    territory: 'Most of the heart wall.'
  },
  relations: [],
  clinical: [
    { title: 'Cardiac procedures:', text: 'Used for placing left-ventricular pacing leads and for retrograde cardioplegia.' }
  ],
  highYield: ['Anterior cardiac veins and venae cordis minimae do NOT drain into the coronary sinus.'],
  mnemonics: []
},
{
  id: 'th-lymph-thoracic-duct',
  name: 'Thoracic duct',
  aka: [],
  type: 'lymphatic',
  system: ['lymphatic'],
  region: 'thorax',
  zones: ['posterior', 'superior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest lymphatic vessel of the body (about 45 cm).',
  location: 'Abdomen (origin), posterior and superior mediastinum, root of neck.',
  parts: [
    'Begins as the upward continuation of the cisterna chyli at the lower border of T12',
    'Enters the thorax through the aortic opening of the diaphragm',
    'Ascends in the posterior mediastinum between aorta (left) and azygos vein (right), behind the oesophagus',
    'Crosses to the left at about T5 and ascends along the left edge of the oesophagus',
    'Arches in the neck at about C7'
  ],
  lymphatic: {
    groups: [],
    drainageArea: ['Whole body below the diaphragm', 'Left half of thorax, left upper limb, left half of head and neck'],
    efferents: 'Opens into the junction of the left subclavian and left internal jugular veins (left venous angle).'
  },
  relations: [
    { dir: 'right (lower thorax)', text: 'Azygos vein.', ref: 'th-vein-azygos' },
    { dir: 'left (lower thorax)', text: 'Descending thoracic aorta.', ref: 'th-art-descending-aorta' },
    { dir: 'anterior', text: 'Oesophagus.', ref: 'th-organ-oesophagus' }
  ],
  clinical: [
    { title: 'Chylothorax:', text: 'Injury to the duct (trauma, surgery, malignancy) leaks chyle into the pleural cavity.' },
    { title: 'Virchow’s node:', text: 'Enlarged left supraclavicular node in abdominal malignancy (e.g. stomach), near the termination of the duct.' }
  ],
  highYield: ['Right lymphatic duct drains the right half of head, neck and thorax and right upper limb.'],
  mnemonics: []
}
]);
