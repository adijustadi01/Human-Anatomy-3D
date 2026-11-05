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

  /* Recall mode: wrap non-empty content so it starts hidden until tapped */
  function rv(html, v) { return AN.isEmpty(v) ? html : '<div class="rv" title="Recall it, then tap to reveal">' + html + '</div>'; }
  AN.recallOn = function () { return AN.store.settings().recall !== false; };

  function field(s, f) {
    var v = AN.get(s, f.key);
    return '<div class="field' + (AN.isDoubtful(s, f.key) ? ' is-doubt' : '') + '"><div class="flabel">' + f.label + doubt(s, f.key) +
      '</div><div class="fval">' + rv(AN.valueHtml(v), v) + '</div></div>';
  }
  function section(s, key, title, inner) {
    return '<section class="csec' + (key && AN.isDoubtful(s, key) ? ' is-doubt' : '') + '"><h3>' + title + (key ? doubt(s, key) : '') + '</h3>' + inner + '</section>';
  }

  AN.renderCard = function (s) {
    var t = AN.SCHEMA.types[s.type] || { label: s.type, fields: [] };
    var bm = AN.store.isBookmarked(s.id);
    var rec = AN.recallOn();
    var h = '<article class="card' + (rec ? ' recall' : '') + '">';

    h += '<header class="chead"><div><h2>' + esc(s.name) + '</h2>' +
      (s.aka && s.aka.length ? '<div class="aka">Also: ' + s.aka.map(esc).join(', ') + '</div>' : '') +
      '<div class="chips"><span class="chip type">' + t.label + '</span>' +
      '<a class="chip" href="#/region/' + s.region + '">' + AN.nameOf(AN.REGIONS, s.region) + '</a>' +
      (s.system || []).map(function (y) { return '<a class="chip" href="#/system/' + y + '">' + AN.nameOf(AN.SYSTEMS, y) + '</a>'; }).join('') +
      '</div></div><div class="cact">' +
      '<button class="bm tbtn' + (rec ? ' on' : '') + '" data-recall>' + (rec ? '🧠 Recall: on' : '🧠 Recall: off') + '</button>' +
      '<button class="bm tbtn" data-revealall>Reveal all</button>' +
      '<button class="bm' + (bm ? ' on' : '') + '" data-bm="' + s.id + '">' + (bm ? '★ Bookmarked' : '☆ Bookmark') + '</button></div></header>' +
      '<p class="recall-hint muted small">Recall mode: answer each heading from memory, then tap it (or press Space) to reveal.</p>';

    if (s.verified) h += '<div class="banner ok">✔ Verified' + (s.source ? ' — ' + esc(s.source) : '') + '</div>';
    else h += '<div class="banner warn">⚠ Not yet verified — check against your textbook before relying on this card.' +
      (s.source ? '<br><small>Source noted: ' + esc(s.source) + '</small>' : '') + '</div>';
    if (s.verified && s.doubtful && s.doubtful.length) h += '<div class="banner warn">⚠ Some fields are still flagged: ' + s.doubtful.map(esc).join(', ') + '</div>';

    h += section(s, null, 'Gross anatomy', AN.SCHEMA.common.map(function (f) { return field(s, f); }).join(''));
    h += section(s, null, t.label + ' details', t.fields.map(function (f) { return field(s, f); }).join(''));

    var rel = (s.relations || []).filter(function (r) { return !AN.isEmpty(r); });
    h += section(s, 'relations', 'Relations', rel.length ? '<table class="rel">' + rel.map(function (r) {
      return '<tr><th>' + esc(r.dir || '') + '</th><td>' + rv(AN.rich(r.text || '') +
        (r.ref ? ' <a class="ref" href="#/s/' + r.ref + '">→ ' + esc(AN.byId[r.ref] ? AN.byId[r.ref].name : r.ref) + '</a>' : ''), r.text) + '</td></tr>';
    }).join('') + '</table>' : EMPTY);

    var cl = (s.clinical || []).filter(function (c) { return !AN.isEmpty(c); });
    h += section(s, 'clinical', 'Clinical correlation / applied anatomy', cl.length ? cl.map(function (c) {
      return '<div class="clin"><strong>' + esc(c.title || '') + '</strong> ' + rv(AN.rich(c.text || ''), c.text) + '</div>';
    }).join('') : EMPTY);

    h += section(s, 'highYield', 'High-yield points', '<div class="hy">' + rv(AN.valueHtml(s.highYield), s.highYield) + '</div>');

    var mn = (s.mnemonics || []).filter(function (m) { return !AN.isEmpty(m); });
    if (mn.length) h += section(s, 'mnemonics', 'Mnemonics', mn.map(function (m) {
      return '<div class="mn"><strong>' + esc(m.text || '') + '</strong> — ' + rv(AN.rich(m.meaning || ''), m.meaning) + '</div>';
    }).join(''));

    var figs = AN.figuresFor ? AN.figuresFor(s.id) : [];
    if (figs.length) h += '<section class="csec"><h3>Diagrams</h3>' + figs.map(function (f) { return AN.renderFigure(f, rec); }).join('') + '</section>';

    if (s.reviewNote) h += '<div class="note">📝 ' + AN.rich(s.reviewNote) + '</div>';

    h += '<footer class="cfoot"><a class="btn" href="#/quiz/flash?structure=' + s.id + '&unv=1">Flashcards for this structure</a>' +
      '<span class="edit">Edit in <code>' + esc(s._file) + '</code> → id <code>' + esc(s.id) + '</code></span></footer>';
    return h + '</article>';
  };
})(window.AN);
