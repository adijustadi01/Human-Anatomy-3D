/* schema.js — the card template. One place defines every field, its label,
   and (optionally) the quiz question generated from it ("q").
   kind: 'text' = string, 'list' = array of strings. */
(function (AN) {
  function F(key, label, kind, q) { return { key: key, label: label, kind: kind, q: q }; }

  AN.SCHEMA = {
    common: [
      F('description', 'Description', 'text'),
      F('location', 'Location', 'text'),
      F('parts', 'Parts / subdivisions', 'list')
    ],
    types: {
      muscle: { label: 'Muscle', plural: 'Muscles', fields: [
        F('origin', 'Origin', 'list', 'Origin of {name}?'),
        F('insertion', 'Insertion', 'list', 'Insertion of {name}?'),
        F('nerveSupply', 'Nerve supply', 'text', 'Nerve supply of {name}?'),
        F('bloodSupply', 'Blood supply', 'text'),
        F('action', 'Action', 'list', 'Action(s) of {name}?')
      ] },
      nerve: { label: 'Nerve', plural: 'Nerves', fields: [
        F('rootValue', 'Root value', 'text', 'Root value of the {name}?'),
        F('course', 'Course', 'text'),
        F('branches', 'Branches', 'list', 'Branches of the {name}?'),
        F('motor', 'Motor supply', 'list', 'Motor supply of the {name}?'),
        F('sensory', 'Sensory supply', 'list', 'Sensory supply of the {name}?')
      ] },
      artery: { label: 'Artery', plural: 'Arteries', fields: [
        F('origin', 'Origin', 'text', 'Origin (beginning) of the {name}?'),
        F('course', 'Course & termination', 'text'),
        F('branches', 'Branches', 'list', 'Branches of the {name}?'),
        F('territory', 'Area supplied', 'text')
      ] },
      vein: { label: 'Vein', plural: 'Veins', fields: [
        F('origin', 'Origin', 'text'),
        F('course', 'Course', 'text'),
        F('tributaries', 'Tributaries', 'list'),
        F('termination', 'Termination', 'text', 'Termination of the {name}?'),
        F('territory', 'Area drained', 'text')
      ] },
      lymphatic: { label: 'Lymphatic', plural: 'Lymphatics', fields: [
        F('groups', 'Groups', 'list', 'Groups of {name}?'),
        F('drainageArea', 'Area drained', 'list', 'Area drained by {name}?'),
        F('efferents', 'Efferents / drain into', 'text')
      ] },
      bone: { label: 'Bone', plural: 'Bones', fields: [
        F('features', 'Features', 'list'),
        F('attachments', 'Important attachments & relations', 'list'),
        F('ossification', 'Ossification', 'text')
      ] },
      joint: { label: 'Joint', plural: 'Joints', fields: [
        F('jointType', 'Type', 'text', 'Type of joint: {name}?'),
        F('articulation', 'Articular surfaces', 'text'),
        F('ligaments', 'Ligaments', 'list', 'Ligaments of the {name}?'),
        F('movements', 'Movements', 'list'),
        F('bloodSupply', 'Blood supply', 'text'),
        F('nerveSupply', 'Nerve supply', 'text', 'Nerve supply of the {name}?')
      ] },
      space: { label: 'Space / region', plural: 'Spaces & regions', fields: [
        F('boundaries', 'Boundaries', 'list', 'Boundaries of the {name}?'),
        F('contents', 'Contents', 'list', 'Contents of the {name}?')
      ] },
      organ: { label: 'Organ', plural: 'Organs', fields: [
        F('bloodSupply', 'Blood supply', 'text', 'Blood supply of the {name}?'),
        F('nerveSupply', 'Nerve supply', 'text', 'Nerve supply of the {name}?'),
        F('lymphatics', 'Lymphatic drainage', 'text', 'Lymphatic drainage of the {name}?')
      ] },
      cns: { label: 'CNS structure', plural: 'Brain & spinal cord', fields: [
        F('connections', 'Connections', 'list', 'Main connections of the {name}?'),
        F('functions', 'Functions', 'list', 'Functions of the {name}?'),
        F('bloodSupply', 'Blood supply', 'text', 'Blood supply of the {name}?'),
        F('lesion', 'Effects of lesion', 'list', 'Effects of a lesion of the {name}?')
      ] },
      tract: { label: 'Tract / pathway', plural: 'Tracts & pathways', fields: [
        F('origin', 'Origin (cell bodies)', 'text', 'Origin of the {name}?'),
        F('course', 'Course', 'text'),
        F('decussation', 'Decussation', 'text', 'Where does the {name} decussate?'),
        F('termination', 'Termination', 'text', 'Termination of the {name}?'),
        F('function', 'Function', 'text', 'Function of the {name}?'),
        F('lesion', 'Effects of lesion', 'list', 'Effects of a lesion of the {name}?')
      ] }
    },
    /* rendered as their own sections; listed here so validator knows the keys */
    tail: ['relations', 'clinical', 'highYield', 'mnemonics']
  };

  AN.TYPE_ORDER = Object.keys(AN.SCHEMA.types);
})(window.AN);
