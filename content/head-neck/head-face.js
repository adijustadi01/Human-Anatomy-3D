// HEAD & NECK — HEAD: FACE, PAROTID, MASTICATION, TMJ (V and VII)
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/head-neck/head-face.js', [
{
  id: 'hn-nerve-facial',
  name: 'Facial nerve',
  aka: ['Cranial nerve VII'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['face', 'ear'],
  verified: false, source: '', doubtful: ['sensory'], reviewNote: '',
  description: 'Nerve of the 2nd pharyngeal arch: muscles of facial expression, taste, and secretomotor supply to most head glands.',
  location: 'Cerebellopontine angle → internal acoustic meatus → facial canal → stylomastoid foramen → parotid gland → face.',
  parts: ['Motor root and nervus intermedius (sensory and parasympathetic)'],
  nerve: {
    rootValue: 'Cranial nerve VII (pons: facial motor nucleus, superior salivatory nucleus; taste to nucleus of tractus solitarius)',
    course: 'Emerges at the cerebellopontine angle with VIII, enters the internal acoustic meatus, then the facial canal: labyrinthine segment → geniculate ganglion (genu) → tympanic segment on the medial wall of the middle ear → mastoid segment descending in the posterior wall → leaves through the stylomastoid foramen. Enters the parotid gland and divides into terminal branches, superficial to the retromandibular vein and external carotid artery.',
    branches: [
      'In the facial canal: greater petrosal nerve (from the geniculate ganglion), nerve to stapedius, chorda tympani',
      'After the stylomastoid foramen: posterior auricular nerve; nerves to posterior belly of digastric and stylohyoid',
      'Terminal (in parotid): temporal, zygomatic, buccal, marginal mandibular, cervical'
    ],
    motor: ['Muscles of facial expression (incl. buccinator, platysma, occipitofrontalis)', 'Stapedius', 'Posterior belly of digastric, stylohyoid', 'Parasympathetic: lacrimal gland (greater petrosal → pterygopalatine ganglion); submandibular and sublingual glands (chorda tympani → submandibular ganglion); nasal and palatal glands'],
    sensory: ['Taste from the anterior two-thirds of the tongue (chorda tympani)', 'Small area of skin of the external ear']
  },
  relations: [
    { dir: 'middle ear', text: 'Facial canal on the medial wall above the oval window, then in the posterior wall.', ref: 'hn-space-middle-ear' },
    { dir: 'parotid', text: 'Divides the gland into superficial and deep parts.', ref: 'hn-organ-parotid' }
  ],
  clinical: [
    { title: 'Bell’s palsy (LMN):', text: 'Paralysis of the whole of one side of the face including the forehead; may include loss of taste and hyperacusis depending on the level.' },
    { title: 'UMN lesion (e.g. stroke):', text: 'Lower face paralysed on the opposite side; forehead spared (bilateral cortical supply to the upper face).' },
    { title: 'Localising the lesion:', text: 'Lacrimation (greater petrosal), hyperacusis (stapedius) and taste (chorda tympani) indicate how proximal the lesion is.' },
    { title: 'Parotid tumour / surgery:', text: 'Facial palsy with a parotid swelling suggests malignancy.' }
  ],
  highYield: ['Forehead sparing = UMN lesion.'],
  mnemonics: [{ text: 'To Zanzibar By Motor Car', meaning: 'Terminal branches: Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical' }]
},
{
  id: 'hn-nerve-trigeminal',
  name: 'Trigeminal nerve',
  aka: ['Cranial nerve V'],
  type: 'nerve',
  system: ['nervous'],
  region: 'head-neck',
  zones: ['face', 'orbit', 'nose-mouth'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest cranial nerve; main sensory nerve of the face and motor nerve of the 1st pharyngeal arch.',
  location: 'Lateral pons → trigeminal ganglion (Meckel’s cave, near the apex of the petrous temporal) → three divisions.',
  parts: [
    'Ophthalmic division (V1) — sensory; through the superior orbital fissure',
    'Maxillary division (V2) — sensory; through the foramen rotundum',
    'Mandibular division (V3) — mixed (motor root joins it); through the foramen ovale'
  ],
  nerve: {
    rootValue: 'Cranial nerve V (pons: main sensory, spinal and mesencephalic nuclei; motor nucleus)',
    course: 'Large sensory and small motor roots leave the lateral pons; the sensory root ends in the trigeminal ganglion, from which the three divisions arise. The motor root passes under the ganglion to join V3.',
    branches: [
      'V1: lacrimal, frontal (supraorbital, supratrochlear), nasociliary (long ciliary, infratrochlear, ethmoidal, external nasal)',
      'V2: infraorbital, zygomatic, superior alveolar nerves; palatine and nasal branches (through the pterygopalatine ganglion)',
      'V3 main trunk: nerve to medial pterygoid (also to tensor veli palatini, tensor tympani), meningeal branch',
      'V3 anterior division: masseteric, deep temporal, nerve to lateral pterygoid, buccal (sensory)',
      'V3 posterior division: auriculotemporal, lingual, inferior alveolar (→ nerve to mylohyoid, mental nerve)'
    ],
    motor: ['Muscles of mastication: [[hn-musc-masseter]], temporalis, medial and [[hn-musc-lateral-pterygoid]]', 'Mylohyoid, anterior belly of [[hn-musc-digastric]]', 'Tensor tympani, tensor veli palatini'],
    sensory: ['Skin of the face (except over the angle of the mandible — great auricular) and the scalp to the vertex', 'Cornea and conjunctiva', 'Nasal and oral cavities, paranasal sinuses, teeth and gums', 'General sensation from the anterior two-thirds of the tongue (lingual nerve)', 'Dura of anterior and middle cranial fossae']
  },
  relations: [
    { dir: 'cavernous sinus', text: 'V1 and V2 run in its lateral wall.', ref: 'hn-space-cavernous-sinus' }
  ],
  clinical: [
    { title: 'Trigeminal neuralgia:', text: 'Paroxysmal stabbing facial pain, most often in V2/V3.' },
    { title: 'Corneal reflex:', text: 'Afferent V1 (nasociliary), efferent VII.' },
    { title: 'Jaw jerk:', text: 'Both limbs via V3; brisk in bilateral UMN lesions.' },
    { title: 'V3 lesion:', text: 'Jaw deviates toward the paralysed side on opening (unopposed opposite lateral pterygoid).' },
    { title: 'Herpes zoster ophthalmicus:', text: 'V1 involvement; lesions on the tip of the nose (nasociliary) predict eye involvement.' }
  ],
  highYield: ['Divisions exit through: superior orbital fissure (V1), foramen rotundum (V2), foramen ovale (V3).'],
  mnemonics: [{ text: 'Standing Room Only', meaning: 'Superior orbital fissure (V1), foramen Rotundum (V2), foramen Ovale (V3)' }]
},
{
  id: 'hn-organ-parotid',
  name: 'Parotid gland',
  aka: [],
  type: 'organ',
  system: ['digestive'],
  region: 'head-neck',
  zones: ['face'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Largest salivary gland; purely serous.',
  location: 'Below the external acoustic meatus, between the ramus of the mandible and the sternocleidomastoid, overlapping the masseter.',
  parts: [
    'Superficial and deep parts, separated by the plane of the facial nerve',
    'Parotid duct (Stensen’s), about 5 cm: runs forward over masseter, turns medially at its anterior border, pierces buccinator, and opens opposite the crown of the upper second molar',
    'Structures within the gland (superficial to deep): facial nerve and branches, retromandibular vein, external carotid artery (with its terminal branches); auriculotemporal nerve in the upper part; parotid lymph nodes',
    'Capsule: from the investing layer of deep cervical fascia (thickened as the stylomandibular ligament)'
  ],
  organ: {
    bloodSupply: 'External carotid artery and its branches. Veins → retromandibular vein.',
    nerveSupply: 'Parasympathetic (secretomotor): inferior salivatory nucleus → glossopharyngeal nerve → tympanic nerve → lesser petrosal nerve → otic ganglion → auriculotemporal nerve → gland. Sympathetic: external carotid plexus. Sensory: auriculotemporal (gland), great auricular (capsule).',
    lymphatics: 'Parotid nodes → deep cervical nodes.'
  },
  relations: [
    { dir: 'within', text: 'Facial nerve, retromandibular vein, external carotid artery.', ref: 'hn-nerve-facial' }
  ],
  clinical: [
    { title: 'Mumps:', text: 'Painful swelling because of the tight fascial capsule; pain worse on chewing.' },
    { title: 'Parotid tumours:', text: 'Pleomorphic adenoma is commonest; facial palsy suggests malignancy.' },
    { title: 'Frey’s syndrome:', text: 'After parotidectomy, sweating of the cheek on eating — secretomotor fibres of the auriculotemporal nerve regenerate into sweat glands.' }
  ],
  highYield: ['Secretomotor pathway: IX → lesser petrosal → otic ganglion → auriculotemporal.'],
  mnemonics: []
},
{
  id: 'hn-art-facial',
  name: 'Facial artery',
  aka: [],
  type: 'artery',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['face', 'anterior'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Main artery of the face; also supplies the tonsil and submandibular gland.',
  location: 'Neck (carotid and submandibular triangles) and face.',
  parts: ['Cervical part', 'Facial part'],
  artery: {
    origin: 'Anterior surface of the [[hn-art-external-carotid]] in the carotid triangle, just above the greater horn of the hyoid.',
    course: 'Cervical part ascends deep to the posterior belly of digastric and stylohyoid, grooves the submandibular gland, and hooks round the lower border of the mandible at the anterior border of masseter. Facial part runs tortuously upward and forward past the angle of the mouth and the side of the nose to the medial angle of the eye, ending as the angular artery.',
    branches: ['Cervical: ascending palatine, tonsillar, submental, glandular', 'Facial: inferior labial, superior labial, lateral nasal, angular'],
    territory: 'Face, palatine tonsil, soft palate, submandibular gland.'
  },
  relations: [
    { dir: 'behind (face)', text: 'Facial vein runs behind it, less tortuous.', ref: 'hn-vein-facial' }
  ],
  clinical: [
    { title: 'Facial pulse:', text: 'Felt where it crosses the lower border of the mandible at the anterior border of masseter.' },
    { title: 'Facial wounds:', text: 'Bleed freely but heal well because of rich anastomoses, including across the midline.' }
  ],
  highYield: ['Tonsillar branch is the main artery of the palatine tonsil.'],
  mnemonics: []
},
{
  id: 'hn-vein-facial',
  name: 'Facial vein',
  aka: ['Anterior facial vein'],
  type: 'vein',
  system: ['cardiovascular'],
  region: 'head-neck',
  zones: ['face'],
  verified: false, source: '', doubtful: ['course'], reviewNote: 'Texts differ on whether the facial vein has valves — check your textbook.',
  description: 'Main superficial vein of the face.',
  location: 'Face, behind the facial artery, then submandibular region.',
  parts: [],
  vein: {
    origin: 'Angular vein at the medial angle of the eye (union of supratrochlear and supraorbital veins).',
    course: 'Runs downward and backward behind the facial artery, crosses the lower border of the mandible, and in the neck usually joins the anterior division of the retromandibular vein to form the common facial vein. Has few or no effective valves.',
    tributaries: ['Lateral nasal and labial veins', 'Deep facial vein (from the pterygoid venous plexus)', 'Submental and external palatine veins'],
    termination: 'Internal jugular vein (via the common facial vein).',
    territory: 'Superficial face.'
  },
  relations: [
    { dir: 'communications', text: 'With the cavernous sinus via the ophthalmic veins (angular vein) and via the deep facial vein → pterygoid plexus.', ref: 'hn-space-cavernous-sinus' }
  ],
  clinical: [
    { title: 'Danger area of the face:', text: 'Infection of the upper lip and lower nose can spread to the cavernous sinus → cavernous sinus thrombosis.' }
  ],
  highYield: ['Connects the face with the cavernous sinus.'],
  mnemonics: []
},
{
  id: 'hn-musc-masseter',
  name: 'Masseter',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal', 'digestive'],
  region: 'head-neck',
  zones: ['face'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Powerful quadrilateral muscle of mastication covering the ramus of the mandible.',
  location: 'Side of the face over the ramus of the mandible.',
  parts: ['Superficial, middle and deep layers'],
  muscle: {
    origin: ['Lower border and deep surface of the zygomatic arch', 'Zygomatic process of the maxilla'],
    insertion: ['Lateral surface of the ramus, angle and coronoid process of the mandible'],
    nerveSupply: 'Masseteric nerve (anterior division of mandibular nerve, V3)',
    bloodSupply: 'Masseteric branch of maxillary artery; facial and transverse facial arteries',
    action: ['Elevates the mandible (closes the mouth, clenches the teeth)']
  },
  relations: [
    { dir: 'superficial', text: 'Parotid duct, branches of the facial nerve, transverse facial artery; parotid gland overlaps its posterior part.', ref: 'hn-organ-parotid' }
  ],
  clinical: [
    { title: 'Testing V3:', text: 'Palpate masseter while the patient clenches the teeth.' },
    { title: 'Trismus:', text: 'Spasm (e.g. tetanus, infection) prevents mouth opening.' }
  ],
  highYield: ['Elevator of the mandible.'],
  mnemonics: []
},
{
  id: 'hn-musc-lateral-pterygoid',
  name: 'Lateral pterygoid',
  aka: [],
  type: 'muscle',
  system: ['musculoskeletal', 'digestive'],
  region: 'head-neck',
  zones: ['face'],
  verified: false, source: '', doubtful: ['relations'], reviewNote: '',
  description: 'Two-headed muscle of mastication in the infratemporal fossa; the main opener of the mouth.',
  location: 'Infratemporal fossa.',
  parts: ['Upper head', 'Lower head'],
  muscle: {
    origin: ['Upper head: infratemporal surface and crest of the greater wing of sphenoid', 'Lower head: lateral surface of the lateral pterygoid plate'],
    insertion: ['Pterygoid fovea on the front of the neck of the mandible', 'Articular disc and capsule of the TMJ (upper head)'],
    nerveSupply: 'Nerve to lateral pterygoid (anterior division of V3)',
    bloodSupply: 'Pterygoid branches of the maxillary artery',
    action: ['Depresses (opens) the mandible by pulling the condyle and disc forward', 'Protrusion (both sides)', 'Side-to-side (grinding) movements (one side moves the chin to the opposite side)']
  },
  relations: [
    { dir: 'around it', text: 'Maxillary artery passes superficial (or deep) to the lower head; buccal nerve emerges between the two heads.', ref: 'hn-nerve-trigeminal' }
  ],
  clinical: [
    { title: 'V3 lesion:', text: 'On opening, the jaw deviates toward the paralysed side.' }
  ],
  highYield: ['Only muscle of mastication that opens the mouth.'],
  mnemonics: []
},
{
  id: 'hn-joint-tmj',
  name: 'Temporomandibular joint',
  aka: ['TMJ'],
  type: 'joint',
  system: ['musculoskeletal'],
  region: 'head-neck',
  zones: ['face'],
  verified: false, source: '', doubtful: ['jointType'], reviewNote: 'Texts classify it differently (condylar / modified hinge / ginglymo-arthrodial).',
  description: 'Joint between the mandible and the skull; articular surfaces are covered by fibrocartilage.',
  location: 'In front of the external acoustic meatus.',
  parts: ['Articular disc divides the cavity into upper (gliding) and lower (hinge) compartments'],
  joint: {
    jointType: 'Synovial joint, condylar (modified hinge) variety with an articular disc',
    articulation: 'Head (condyle) of the mandible with the mandibular fossa and articular eminence of the temporal bone.',
    ligaments: ['Capsule', 'Lateral (temporomandibular) ligament', 'Sphenomandibular ligament (remnant of Meckel’s cartilage)', 'Stylomandibular ligament', 'Articular disc'],
    movements: ['Depression and elevation', 'Protrusion and retraction', 'Side-to-side (lateral) movements'],
    bloodSupply: 'Branches of superficial temporal and maxillary arteries',
    nerveSupply: 'Auriculotemporal and masseteric nerves (V3)'
  },
  relations: [
    { dir: 'lateral', text: 'Parotid gland, superficial temporal vessels, auriculotemporal nerve.', ref: 'hn-organ-parotid' }
  ],
  clinical: [
    { title: 'Anterior dislocation:', text: 'E.g. on yawning — the condyle slips in front of the articular eminence; reduced by pressing down and back on the molars.' },
    { title: 'TMJ dysfunction:', text: 'Pain may be referred to the ear (auriculotemporal nerve).' }
  ],
  highYield: ['Upper compartment: gliding (translation); lower compartment: hinge (rotation).'],
  mnemonics: []
}
]);
