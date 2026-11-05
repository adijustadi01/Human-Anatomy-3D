/* registry.js — global namespace, content registration, shared helpers.
   Loaded first. Content files call AN.registerStructures(file, [...]). */
window.AN = window.AN || {};
(function (AN) {
  AN.structures = [];
  AN.byId = {};
  AN.errors = [];
  AN.DIAGRAMS = {};
  AN.FIGURES = [];   // teaching diagrams (diagrams/figures/*.js)
  AN.figById = {};
  AN.registerFigure = function (f) { AN.FIGURES.push(f); AN.figById[f.id] = f; };

  AN.registerStructures = function (file, list) {
    list.forEach(function (s) {
      s._file = file;
      if (AN.byId[s.id]) AN.errors.push('Duplicate id "' + s.id + '" in ' + file);
      AN.byId[s.id] = s;
      AN.structures.push(s);
    });
  };

  AN.REGIONS = [
    { id: 'upper-limb', name: 'Upper limb' },
    { id: 'thorax', name: 'Thorax' },
    { id: 'abdomen', name: 'Abdomen' },
    { id: 'pelvis-perineum', name: 'Pelvis & perineum' },
    { id: 'lower-limb', name: 'Lower limb' },
    { id: 'head-neck', name: 'Head & neck' },
    { id: 'neuroanatomy', name: 'Neuroanatomy' }
  ];

  AN.SYSTEMS = [
    { id: 'musculoskeletal', name: 'Musculoskeletal' },
    { id: 'cardiovascular', name: 'Cardiovascular' },
    { id: 'respiratory', name: 'Respiratory' },
    { id: 'digestive', name: 'Digestive' },
    { id: 'nervous', name: 'Nervous' },
    { id: 'urogenital', name: 'Urogenital' },
    { id: 'endocrine', name: 'Endocrine' },
    { id: 'lymphatic', name: 'Lymphatic' }
  ];

  AN.nameOf = function (list, id) {
    var x = list.find(function (r) { return r.id === id; });
    return x ? x.name : id;
  };

  /* Type-specific fields live in a block named after the type, e.g. s.muscle.origin */
  AN.get = function (s, key) {
    var blk = s[s.type];
    if (blk && blk[key] !== undefined) return blk[key];
    return s[key];
  };

  AN.isEmpty = function (v) {
    if (v == null) return true;
    if (Array.isArray(v)) return v.every(AN.isEmpty);
    if (typeof v === 'object') return Object.keys(v).every(function (k) { return AN.isEmpty(v[k]); });
    return String(v).trim() === '';
  };

  AN.isDoubtful = function (s, key) { return (s.doubtful || []).indexOf(key) >= 0; };

  AN.esc = function (t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* [[structure-id]] or [[structure-id|label]] in text becomes a cross-link */
  var LINK = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;
  function linkName(id, label) { return label || (AN.byId[id] ? AN.byId[id].name : id); }
  AN.rich = function (t) {
    return AN.esc(t).replace(LINK, function (m, id, label) {
      return '<a href="#/s/' + id + '">' + linkName(id, label) + '</a>';
    });
  };
  AN.plain = function (t) {
    return String(t).replace(LINK, function (m, id, label) { return linkName(id, label); });
  };
  AN.LINK_RE = LINK;
})(window.AN);
