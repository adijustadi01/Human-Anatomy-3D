/* card.js — renders a structure's detail card from the schema. */
(function (AN) {
  var esc = AN.esc;
  var EMPTY = '<span class="empty">— not yet entered</span>';
  function doubt(s, key) { return AN.isDoubtful(s, key) ? ' <span class="doubt" title="Flagged doubtful — verify this field">⚠ check</span>' : ''; }

  AN.valueHtml = function (v) {
    if (AN.isEmpty(v)) return EMPTY;
    if (Array.isArray(v)) return '<ul>' + v.filter(function (x) { return !AN.isEmpty(x); })
      .map(function (x) { return '<li>' + AN.rich(x) + '</li>'; }).join('') + '</ul>';
    return '<p>' + AN.rich(v) + '</p>';
  };

  function field(s, f) {
    return '<div class="field' + (AN.isDoubtful(s, f.key) ? ' is-doubt' : '') + '"><div class="flabel">' + f.label + doubt(s, f.key) +
      '</div><div class="fval">' + AN.valueHtml(AN.get(s, f.key)) + '</div></div>';
  }
  function section(s, key, title, inner) {
    return '<section class="csec' + (key && AN.isDoubtful(s, key) ? ' is-doubt' : '') + '"><h3>' + title + (key ? doubt(s, key) : '') + '</h3>' + inner + '</section>';
  }

  AN.renderCard = function (s) {
    var t = AN.SCHEMA.types[s.type] || { label: s.type, fields: [] };
    var bm = AN.store.isBookmarked(s.id);
    var h = '<article class="card">';

    h += '<header class="chead"><div><h2>' + esc(s.name) + '</h2>' +
      (s.aka && s.aka.length ? '<div class="aka">Also: ' + s.aka.map(esc).join(', ') + '</div>' : '') +
      '<div class="chips"><span class="chip type">' + t.label + '</span>' +
      '<a class="chip" href="#/region/' + s.region + '">' + AN.nameOf(AN.REGIONS, s.region) + '</a>' +
      (s.system || []).map(function (y) { return '<a class="chip" href="#/system/' + y + '">' + AN.nameOf(AN.SYSTEMS, y) + '</a>'; }).join('') +
      '</div></div><button class="bm' + (bm ? ' on' : '') + '" data-bm="' + s.id + '">' + (bm ? '★ Bookmarked' : '☆ Bookmark') + '</button></header>';

    if (s.verified) h += '<div class="banner ok">✔ Verified' + (s.source ? ' — ' + esc(s.source) : '') + '</div>';
    else h += '<div class="banner warn">⚠ Not yet verified — check against your textbook before relying on this card.' +
      (s.source ? '<br><small>Source noted: ' + esc(s.source) + '</small>' : '') + '</div>';
    if (s.verified && s.doubtful && s.doubtful.length) h += '<div class="banner warn">⚠ Some fields are still flagged: ' + s.doubtful.map(esc).join(', ') + '</div>';

    h += section(s, null, 'Gross anatomy', AN.SCHEMA.common.map(function (f) { return field(s, f); }).join(''));
    h += section(s, null, t.label + ' details', t.fields.map(function (f) { return field(s, f); }).join(''));

    var rel = (s.relations || []).filter(function (r) { return !AN.isEmpty(r); });
    h += section(s, 'relations', 'Relations', rel.length ? '<table class="rel">' + rel.map(function (r) {
      return '<tr><th>' + esc(r.dir || '') + '</th><td>' + AN.rich(r.text || '') +
        (r.ref ? ' <a class="ref" href="#/s/' + r.ref + '">→ ' + esc(AN.byId[r.ref] ? AN.byId[r.ref].name : r.ref) + '</a>' : '') + '</td></tr>';
    }).join('') + '</table>' : EMPTY);

    var cl = (s.clinical || []).filter(function (c) { return !AN.isEmpty(c); });
    h += section(s, 'clinical', 'Clinical correlation / applied anatomy', cl.length ? cl.map(function (c) {
      return '<div class="clin"><strong>' + esc(c.title || '') + '</strong> ' + AN.rich(c.text || '') + '</div>';
    }).join('') : EMPTY);

    h += section(s, 'highYield', 'High-yield points', '<div class="hy">' + AN.valueHtml(s.highYield) + '</div>');

    var mn = (s.mnemonics || []).filter(function (m) { return !AN.isEmpty(m); });
    if (mn.length) h += section(s, 'mnemonics', 'Mnemonics', mn.map(function (m) {
      return '<div class="mn"><strong>' + esc(m.text || '') + '</strong> — ' + AN.rich(m.meaning || '') + '</div>';
    }).join(''));

    if (s.reviewNote) h += '<div class="note">📝 ' + AN.rich(s.reviewNote) + '</div>';

    h += '<footer class="cfoot"><a class="btn" href="#/quiz/flash?structure=' + s.id + '&unv=1">Flashcards for this structure</a>' +
      '<span class="edit">Edit in <code>' + esc(s._file) + '</code> → id <code>' + esc(s.id) + '</code></span></footer>';
    return h + '</article>';
  };
})(window.AN);
