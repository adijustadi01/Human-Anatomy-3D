// HEAD & NECK — HEAD: MOUTH, NOSE, EAR
// Draft content: every entry starts verified:false. See README for how to verify.
AN.registerStructures('content/head-neck/head-mouth-nose-ear.js', [
{
  id: 'hn-organ-tongue',
  name: 'Tongue',
  aka: [],
  type: 'organ',
  system: ['digestive'],
  region: 'head-neck',
  zones: ['nose-mouth'],
  verified: false, source: '', doubtful: ['lymphatics'], reviewNote: '',
  description: 'Muscular organ of taste, speech, mastication and swallowing.',
  location: 'Floor of the mouth and anterior wall of the oropharynx.',
  parts: [
    'Oral (anterior two-thirds) and pharyngeal (posterior one-third) parts, separated by the V-shaped sulcus terminalis with the foramen caecum at its apex',
    'Papillae: vallate (in front of the sulcus terminalis), fungiform, filiform (no taste buds), foliate',
    'Intrinsic muscles: longitudinal, transverse, vertical',
    'Extrinsic muscles: genioglossus, hyoglossus, styloglossus, palatoglossus'
  ],
  organ: {
    bloodSupply: 'Lingual artery (from external carotid) — deep lingual, dorsal lingual and sublingual branches. Veins → internal jugular.',
    nerveSupply: 'Motor: [[hn-nerve-hypoglossal]] to all muscles except palatoglossus (vagus). Anterior two-thirds: general sensation — lingual nerve (V3); taste — chorda tympani (VII). Posterior one-third (and vallate papillae): general sensation and taste — [[hn-nerve-glossopharyngeal]]. Posteriormost part near the vallecula: internal laryngeal nerve (X).',
    lymphatics: 'Tip → submental nodes; lateral parts of anterior two-thirds → submandibular nodes; central part → deep cervical nodes of both sides; posterior third → jugulodigastric and jugulo-omohyoid nodes of both sides.'
  },
  relations: [],
  clinical: [
    { title: 'Genioglossus — “safety muscle”:', text: 'In the unconscious patient the tongue falls back and obstructs the airway; pulling the jaw forward helps.' },
    { title: 'Hypoglossal lesion:', text: 'Protruded tongue deviates to the side of an LMN lesion.' },
    { title: 'Carcinoma tongue:', text: 'Posterior and central lesions spread to nodes on both sides.' }
  ],
  highYield: ['Jugulo-omohyoid node is the “lymph node of the tongue”.'],
  mnemonics: []
},
{
  id: 'hn-organ-palatine-tonsil',
  name: 'Palatine tonsil',
  aka: ['Tonsil'],
  type: 'organ',
  system: ['lymphatic'],
  region: 'head-neck',
  zones: ['nose-mouth'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Almond-shaped mass of lymphoid tissue in the lateral wall of the oropharynx.',
  location: 'Tonsillar fossa between the palatoglossal (anterior) and palatopharyngeal (posterior) arches.',
  parts: [
    'Medial surface: free, with crypts and the intratonsillar cleft',
    'Lateral surface: covered by a capsule, rests on the tonsillar bed',
    'Tonsillar bed (lateral): loose tissue with the paratonsillar (external palatine) vein, superior constrictor, styloglossus, glossopharyngeal nerve; facial artery loop and internal carotid artery further lateral'
  ],
  organ: {
    bloodSupply: 'Tonsillar branch of the [[hn-art-facial]] (main); ascending palatine, dorsal lingual, ascending pharyngeal and greater palatine arteries. Veins: paratonsillar vein → pharyngeal plexus.',
    nerveSupply: '[[hn-nerve-glossopharyngeal]] (main) and lesser palatine nerves (V2).',
    lymphatics: 'Jugulodigastric (“tonsillar”) node of the deep cervical group.'
  },
  relations: [
    { dir: 'lateral', text: 'Tonsillar bed with superior constrictor and glossopharyngeal nerve.', ref: 'hn-organ-pharynx' }
  ],
  clinical: [
    { title: 'Quinsy (peritonsillar abscess):', text: 'Pus between the capsule and the bed.' },
    { title: 'Referred otalgia:', text: 'Tonsillitis or tonsillectomy pain felt in the ear (IX supplies both).' },
    { title: 'Post-tonsillectomy bleeding:', text: 'Usually venous, from the paratonsillar vein.' }
  ],
  highYield: ['Part of Waldeyer’s ring.'],
  mnemonics: []
},
{
  id: 'hn-organ-soft-palate',
  name: 'Soft palate',
  aka: ['Velum'],
  type: 'organ',
  system: ['digestive', 'respiratory'],
  region: 'head-neck',
  zones: ['nose-mouth'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Mobile fibromuscular fold hanging from the back of the hard palate; separates nasopharynx from oropharynx during swallowing and speech.',
  location: 'Between the nasopharynx and oropharynx.',
  parts: [
    'Uvula; palatine aponeurosis (expanded tendon of tensor veli palatini)',
    'Muscles: tensor veli palatini, levator veli palatini, palatoglossus, palatopharyngeus, musculus uvulae'
  ],
  organ: {
    bloodSupply: 'Greater and lesser palatine arteries (maxillary), ascending palatine (facial), palatine branch of ascending pharyngeal.',
    nerveSupply: 'Motor: pharyngeal plexus ([[hn-nerve-vagus]]) to all muscles except tensor veli palatini (V3). Sensory: lesser palatine nerves (V2) and glossopharyngeal nerve. Secretomotor: via the pterygopalatine ganglion.',
    lymphatics: 'Retropharyngeal and deep cervical nodes.'
  },
  relations: [],
  clinical: [
    { title: 'Vagal lesion:', text: 'Uvula deviates to the healthy side; nasal regurgitation and nasal speech.' },
    { title: 'Cleft palate:', text: 'Failure of fusion of palatal processes.' }
  ],
  highYield: ['Tensor veli palatini is the only palatal muscle supplied by V3.'],
  mnemonics: []
},
{
  id: 'hn-organ-nasal-cavity',
  name: 'Nasal cavity',
  aka: [],
  type: 'organ',
  system: ['respiratory'],
  region: 'head-neck',
  zones: ['nose-mouth'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Air passage from the nostrils to the nasopharynx; also the organ of smell.',
  location: 'Between the anterior nares and the posterior nasal apertures (choanae).',
  parts: [
    'Septum: perpendicular plate of ethmoid, vomer, septal cartilage',
    'Lateral wall: superior, middle and inferior conchae with their meatuses',
    'Sphenoethmoidal recess — sphenoidal sinus',
    'Superior meatus — posterior ethmoidal air cells',
    'Middle meatus — frontal sinus, maxillary sinus and anterior ethmoidal cells (hiatus semilunaris); middle ethmoidal cells (bulla ethmoidalis)',
    'Inferior meatus — nasolacrimal duct',
    'Roof: cribriform plate of ethmoid (olfactory nerves)'
  ],
  organ: {
    bloodSupply: 'Sphenopalatine artery (maxillary) — main; anterior and posterior ethmoidal (ophthalmic); greater palatine; septal branch of superior labial (facial). These anastomose on the anteroinferior septum — Little’s area (Kiesselbach’s plexus).',
    nerveSupply: 'Smell: olfactory nerves (roof and upper septum). General sensation: anterior part — anterior ethmoidal nerve (V1); posterior part — branches of V2 through the pterygopalatine ganglion. Secretomotor: via the pterygopalatine ganglion.',
    lymphatics: 'Anterior part → submandibular nodes; posterior part → retropharyngeal and upper deep cervical nodes.'
  },
  relations: [],
  clinical: [
    { title: 'Epistaxis:', text: 'Most commonly from Little’s area.' },
    { title: 'Fracture of cribriform plate:', text: 'CSF rhinorrhoea and anosmia.' }
  ],
  highYield: ['Nasolacrimal duct opens into the inferior meatus.'],
  mnemonics: []
},
{
  id: 'hn-organ-maxillary-sinus',
  name: 'Maxillary sinus',
  aka: ['Maxillary antrum', 'Antrum of Highmore'],
  type: 'organ',
  system: ['respiratory'],
  region: 'head-neck',
  zones: ['nose-mouth'],
  verified: false, source: '', doubtful: ['parts'], reviewNote: 'Check which tooth roots are most closely related.',
  description: 'Largest paranasal sinus, pyramidal in shape, in the body of the maxilla.',
  location: 'Body of the maxilla.',
  parts: [
    'Base: lateral wall of the nasal cavity; apex: zygomatic process of maxilla',
    'Roof: floor of the orbit (infraorbital nerve and vessels)',
    'Floor: alveolar process — related to the roots of the upper molar (and premolar) teeth',
    'Ostium opens high on the medial wall into the middle meatus (hiatus semilunaris) — poor gravitational drainage',
    'Present (small) at birth'
  ],
  organ: {
    bloodSupply: 'Facial, infraorbital and greater palatine arteries.',
    nerveSupply: 'Infraorbital and superior alveolar nerves (V2).',
    lymphatics: 'Submandibular nodes.'
  },
  relations: [
    { dir: 'medial', text: 'Lateral wall of the nasal cavity.', ref: 'hn-organ-nasal-cavity' }
  ],
  clinical: [
    { title: 'Maxillary sinusitis:', text: 'Common because of poor drainage; pain may be referred to the upper teeth.' },
    { title: 'Oroantral fistula:', text: 'May follow extraction of an upper molar.' },
    { title: 'Carcinoma:', text: 'May invade the orbit (proptosis), nasal cavity, palate or cheek.' }
  ],
  highYield: ['Ostium is high on the medial wall — drains poorly when upright.'],
  mnemonics: []
},
{
  id: 'hn-space-middle-ear',
  name: 'Middle ear (tympanic cavity)',
  aka: ['Tympanic cavity'],
  type: 'space',
  system: [],
  region: 'head-neck',
  zones: ['ear'],
  verified: false, source: '', doubtful: [], reviewNote: '',
  description: 'Narrow air-filled space in the petrous temporal bone, between the tympanic membrane and the inner ear.',
  location: 'Petrous part of the temporal bone.',
  parts: [
    'Tympanic cavity proper and epitympanic recess (attic)',
    'Communicates in front with the nasopharynx (auditory tube) and behind with the mastoid antrum (aditus)'
  ],
  space: {
    boundaries: [
      'Roof (tegmental): tegmen tympani — separates it from the middle cranial fossa (temporal lobe)',
      'Floor (jugular): thin plate over the superior bulb of the internal jugular vein',
      'Anterior (carotid): canal for tensor tympani and opening of the auditory tube above; thin plate over the internal carotid artery below',
      'Posterior (mastoid): aditus to mastoid antrum, pyramid (stapedius), vertical part of the facial canal',
      'Lateral (membranous): [[hn-organ-tympanic-membrane]]',
      'Medial (labyrinthine): promontory (basal turn of cochlea, tympanic plexus), oval window (footplate of stapes), round window, prominence of the facial canal (above the oval window), prominence of the lateral semicircular canal'
    ],
    contents: ['Ossicles: malleus, incus, stapes', 'Muscles: tensor tympani (V3) and stapedius (VII)', 'Chorda tympani nerve', 'Tympanic plexus', 'Air']
  },
  relations: [
    { dir: 'medial / posterior walls', text: 'Facial nerve in its canal.', ref: 'hn-nerve-facial' }
  ],
  clinical: [
    { title: 'Spread of otitis media:', text: 'Through the roof → meningitis / temporal lobe abscess; posteriorly → mastoiditis; floor → jugular thrombosis; medial wall → facial palsy, labyrinthitis.' },
    { title: 'Stapedius paralysis:', text: 'Hyperacusis (sounds abnormally loud).' }
  ],
  highYield: ['Six walls — a favourite viva question.'],
  mnemonics: []
},
{
  id: 'hn-organ-tympanic-membrane',
  name: 'Tympanic membrane',
  aka: ['Eardrum'],
  type: 'organ',
  system: [],
  region: 'head-neck',
  zones: ['ear'],
  verified: false, source: '', doubtful: ['bloodSupply'], reviewNote: '',
  description: 'Thin oval membrane separating the external acoustic meatus from the middle ear.',
  location: 'Medial end of the external acoustic meatus, set obliquely.',
  parts: [
    'Pars tensa (most of the membrane) and pars flaccida (Shrapnell’s membrane, above the lateral process of the malleus)',
    'Umbo: point of maximum concavity, at the tip of the handle of malleus',
    'Cone of light: in the anteroinferior quadrant',
    'Layers: outer cuticular (skin), middle fibrous, inner mucous'
  ],
  organ: {
    bloodSupply: 'Outer surface: deep auricular artery (maxillary). Inner surface: anterior tympanic and stylomastoid branches.',
    nerveSupply: 'Outer surface: auriculotemporal nerve (V3) and auricular branch of the vagus. Inner surface: tympanic branch of the glossopharyngeal nerve.',
    lymphatics: ''
  },
  relations: [
    { dir: 'medial', text: 'Middle ear; handle of malleus attached; chorda tympani crosses its inner surface.', ref: 'hn-space-middle-ear' }
  ],
  clinical: [
    { title: 'Myringotomy:', text: 'Incision in the posteroinferior quadrant avoids the ossicles and chorda tympani.' },
    { title: 'Perforation:', text: 'After infection or trauma; conductive hearing loss.' }
  ],
  highYield: ['Cone of light is anteroinferior.'],
  mnemonics: []
}
]);
