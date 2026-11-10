/* Which study card(s) each BodyParts3D mesh belongs to. First column is tested against the mesh name
   (BodyParts3D English names, e.g. "long head of left biceps brachii"); second is the card id(s) in content/.
   Hand-written on purpose: a wrong link is worse than a missing one. Cards with no mesh in the dataset
   (most nerves, the limb vessels, spaces, female pelvic organs) simply have no 3D link. */
const MAP = [
  // upper limb
  [/clavicle$/, 'ul-bone-clavicle'], [/humerus$/, 'ul-bone-humerus'], [/scapula$/, 'ul-bone-scapula'],
  [/abductor pollicis brevis/, 'ul-musc-apb'], [/biceps brachii/, 'ul-musc-biceps-brachii'], [/brachialis/, 'ul-musc-brachialis'],
  [/brachioradialis/, 'ul-musc-brachioradialis'], [/deltoid/, 'ul-musc-deltoid'], [/dorsal interossei of (left|right) hand/, 'ul-musc-dorsal-interossei'],
  [/flexor carpi ulnaris/, 'ul-musc-fcu'], [/flexor digitorum profundus/, 'ul-musc-fdp'], [/flexor digitorum superficialis/, 'ul-musc-fds'],
  [/infraspinatus/, 'ul-musc-infraspinatus'], [/lumbricals of (left|right) hand/, 'ul-musc-lumbricals'], [/palmar interossei/, 'ul-musc-palmar-interossei'],
  [/pronator teres/, 'ul-musc-pronator-teres'], [/serratus anterior/, 'ul-musc-serratus-anterior'], [/subscapularis/, 'ul-musc-subscapularis'],
  [/supinator/, 'ul-musc-supinator'], [/supraspinatus/, 'ul-musc-supraspinatus'], [/teres minor/, 'ul-musc-teres-minor'], [/triceps brachii/, 'ul-musc-triceps-brachii'],
  // thorax
  [/arch of aorta/, 'th-art-arch-aorta'], [/descending aorta/, ['th-art-descending-aorta', 'ab-art-aorta']],
  [/left coronary artery/, 'th-art-lca'], [/right coronary artery/, 'th-art-rca'], [/pulmonary artery/, 'th-art-pulmonary-trunk'],
  [/sternum|manubrium|xiphoid/, 'th-bone-sternum'], [/diaphragm/, 'th-musc-diaphragm'], [/intercostal muscle/, 'th-musc-intercostals'],
  [/wall of heart|valve$|papillary muscle/, 'th-organ-heart'], [/lobe of .*lung/, 'th-organ-lung'], [/bronchus/, 'th-organ-main-bronchi'],
  [/esophagus/, 'th-organ-oesophagus'], [/thymus/, 'th-organ-thymus'], [/trachea/, 'th-organ-trachea'],
  [/coronary sinus/, 'th-vein-coronary-sinus'], [/superior vena cava/, 'th-vein-svc'],
  // abdomen
  [/celiac artery/, 'ab-art-coeliac'], [/inferior mesenteric artery/, 'ab-art-ima'], [/superior mesenteric artery/, 'ab-art-sma'],
  [/external oblique/, 'ab-musc-external-oblique'], [/internal oblique/, 'ab-musc-internal-oblique'], [/psoas major/, 'ab-musc-psoas-major'],
  [/rectus abdominis/, 'ab-musc-rectus-abdominis'], [/transversus abdominis/, 'ab-musc-transversus-abdominis'],
  [/appendix/, 'ab-organ-appendix'], [/colon|taenia/, 'ab-organ-colon'], [/duodenum/, 'ab-organ-duodenum'], [/gallbladder/, 'ab-organ-gallbladder'],
  [/kidney/, 'ab-organ-kidney'], [/liver/, 'ab-organ-liver'], [/pancreas/, 'ab-organ-pancreas'], [/jejunum|ileum/, 'ab-organ-small-intestine'],
  [/spleen/, 'ab-organ-spleen'], [/stomach/, 'ab-organ-stomach'], [/adrenal gland/, 'ab-organ-suprarenal'], [/ureter/, 'ab-organ-ureter'],
  [/inferior vena cava/, 'ab-vein-ivc'],
  // pelvis & perineum
  [/internal iliac artery/, 'pp-art-internal-iliac'], [/hip bone|sacrum/, 'pp-bone-pelvis'], [/external anal sphincter/, 'pp-musc-external-anal-sphincter'],
  [/pubococcygeus|puborectalis|iliococcygeus|levator ani/, 'pp-musc-levator-ani'], [/urinary bladder/, 'pp-organ-bladder'],
  [/deferent duct/, 'pp-organ-ductus-deferens'], [/urethra/, 'pp-organ-male-urethra'], [/prostate/, 'pp-organ-prostate'],
  [/rectum/, 'pp-organ-rectum'], [/testis/, 'pp-organ-testis'],
  // lower limb
  [/femur$/, 'll-bone-femur'], [/tibia$/, 'll-bone-tibia'], [/adductor magnus/, 'll-musc-adductor-magnus'],
  [/fibularis brevis/, 'll-musc-fibularis-brevis'], [/fibularis longus/, 'll-musc-fibularis-longus'], [/gastrocnemius/, 'll-musc-gastrocnemius'],
  [/gluteus maximus/, 'll-musc-gluteus-maximus'], [/gluteus medius/, 'll-musc-gluteus-medius'],
  [/biceps femoris|semitendinosus|semimembranosus/, 'll-musc-hamstrings'], [/popliteus/, 'll-musc-popliteus'],
  [/rectus femoris|vastus (lateralis|medialis|intermedius)/, 'll-musc-quadriceps'], [/sartorius/, 'll-musc-sartorius'], [/soleus/, 'll-musc-soleus'],
  [/tibialis anterior/, 'll-musc-tibialis-anterior'], [/tibialis posterior/, 'll-musc-tibialis-posterior'],
  // head & neck
  [/common carotid artery/, 'hn-art-common-carotid'], [/subclavian artery/, 'hn-art-subclavian'],
  [/digastric|intermediate tendon/, 'hn-musc-digastric'], [/lateral pterygoid/, 'hn-musc-lateral-pterygoid'], [/masseter/, 'hn-musc-masseter'],
  [/scalenus anterior/, 'hn-musc-scalenus-anterior'], [/sternocleidomastoid/, 'hn-musc-sternocleidomastoid'],
  [/optic nerve/, ['hn-nerve-optic', 'na-tract-visual-pathway']], [/thyroid cartilage/, 'hn-organ-larynx'], [/pituitary gland/, 'hn-organ-pituitary'],
  [/internal jugular vein/, 'hn-vein-internal-jugular'], [/aponeurosis of epicranius|frontalis|occipitalis/, 'hn-space-scalp'],
  // neuroanatomy
  [/caudate nucleus|putamen|globus pallidus/, 'na-cns-basal-ganglia'], [/cerebellum/, 'na-cns-cerebellum'], [/corpus callosum/, 'na-cns-corpus-callosum'],
  [/hypothalamus|mammillary body/, 'na-cns-hypothalamus'], [/internal capsule/, 'na-cns-internal-capsule'], [/medulla oblongata/, 'na-cns-medulla'],
  [/^midbrain|peduncle of midbrain|(superior|inferior) colliculus$/, 'na-cns-midbrain'], [/precentral gyrus/, 'na-cns-motor-cortex'], [/^pons$/, 'na-cns-pons'],
  [/postcentral gyrus/, 'na-cns-sensory-cortex'], [/^(left |right )?thalamus$/, 'na-cns-thalamus'], [/occipital lobe/, 'na-cns-visual-cortex'],
  [/fourth ventricle/, 'na-space-fourth-ventricle'], [/lateral ventricle/, 'na-space-lateral-ventricle'],
  [/optic chiasm|optic tract|lateral geniculate body/, 'na-tract-visual-pathway']
];
exports.MAP = MAP;
exports.match = function (name, regions, cardById) {
  const out = [];
  for (const [re, ids] of MAP) if (re.test(name)) [].concat(ids).forEach(id => {
    if (!cardById[id]) throw new Error('card-map.js: unknown card id ' + id);
    if (out.indexOf(id) < 0) out.push(id);
  });
  return out.length ? out : null;
};
