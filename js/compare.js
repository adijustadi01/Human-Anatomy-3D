/* compare.js — comparison tables.
   Auto tables: { items: [structure ids], fields: [field keys] } — cells come from the cards.
   Written tables: { columns: [...], rows: [{ label, cells: [...], d: true if doubtful }] }. */
(function (AN) {
  var esc = AN.esc;
  var TAIL = { clinical: 'Clinical correlation', highYield: 'High-yield points', relations: 'Relations' };

  AN.fieldLabel = function (key) {
    if (TAIL[key]) return TAIL[key];
    var all = AN.SCHEMA.common.slice();
    Object.keys(AN.SCHEMA.types).forEach(function (t) { all = all.concat(AN.SCHEMA.types[t].fields); });
    var f = all.find(function (x) { return x.key === key; });
    return f ? f.label : key;
  };

  function rv(html) { return '<div class="rv">' + html + '</div>'; }
  var DASH = '<span class="empty">—</span>';

  function autoCell(s, key) {
    var v = key === 'clinical' ? s.clinical : AN.get(s, key);
    if (AN.isEmpty(v)) return '<td>' + DASH + '</td>';
    var flag = (!s.verified || AN.isDoubtful(s, key)) ? '<span class="cflag" title="Unverified">⚠</span>' : '';
    var html = key === 'clinical'
      ? v.filter(function (c) { return !AN.isEmpty(c); }).map(function (c) { return '<p><strong>' + esc(c.title || '') + '</strong> ' + AN.rich(c.text || '') + '</p>'; }).join('')
      : AN.valueHtml(v);
    return '<td>' + flag + rv(html) + '</td>';
  }

  AN.renderComparison = function (c, rec) {
    var head, body, info;
    if (c.items) {
      var cols = c.items.map(function (id) { return AN.byId[id]; }).filter(Boolean);
      head = cols.map(function (s) { return '<th><a href="#/s/' + s.id + '">' + esc(s.name) + '</a>' + (s.verified ? '' : ' <span class="uv">⚠</span>') + '</th>'; }).join('');
      body = c.fields.map(function (k) {
        return '<tr><th>' + esc(AN.fieldLabel(k)) + '</th>' + cols.map(function (s) { return autoCell(s, k); }).join('') + '</tr>';
      }).join('');
      info = '<p class="muted small">Built automatically from the structure cards — correct a fact on its card and it updates here. ⚠ = unverified cell.</p>';
    } else {
      head = c.columns.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('');
      body = c.rows.map(function (r) {
        return '<tr><th>' + esc(r.label) + (r.d ? ' <span class="doubt">⚠ check</span>' : '') + '</th>' +
          r.cells.map(function (x) { return '<td>' + (AN.isEmpty(x) ? DASH : rv(AN.rich(x))) + '</td>'; }).join('') + '</tr>';
      }).join('');
      info = c.verified ? '<div class="banner ok small">✔ Verified' + (c.source ? ' — ' + esc(c.source) : '') + '</div>'
        : '<div class="banner warn small">⚠ Table not yet verified — check against your textbook.</div>';
    }
    return '<div class="card cmp' + (rec ? ' recall' : '') + '"><div class="figbar"><strong>' + esc(c.title) + '</strong><span class="figbtns">' +
      '<button class="bm tbtn' + (rec ? ' on' : '') + '" data-recall>' + (rec ? '🧠 Recall: on' : '🧠 Recall: off') + '</button>' +
      '<button class="bm tbtn" data-revealall>Reveal all</button></span></div>' + info +
      '<p class="recall-hint muted small">Recall mode: answer each cell from memory, then tap it (or press Space).</p>' +
      '<div class="tscroll"><table class="cmpt"><thead><tr><th></th>' + head + '</tr></thead><tbody>' + body + '</tbody></table></div>' +
      (c.note ? '<p class="muted small">' + AN.rich(c.note) + '</p>' : '') + '</div>';
  };

  AN.comparisonsFor = function (id) {
    return AN.COMPARISONS.filter(function (c) { return (c.items || []).indexOf(id) >= 0 || (c.structures || []).indexOf(id) >= 0; });
  };

  AN.comparePages = {
    list: function (v) {
      var h = '<h2>Compare</h2><p class="muted">Side-by-side tables of commonly confused structures. Recall mode works here too.</p>';
      AN.REGIONS.forEach(function (r) {
        var g = AN.COMPARISONS.filter(function (c) { return c.region === r.id; });
        if (g.length) h += '<h3 class="rhead">' + r.name + '</h3><ul class="slist">' + g.map(function (c) {
          var warn = c.items ? c.items.some(function (id) { return AN.byId[id] && !AN.byId[id].verified; }) : !c.verified;
          return '<li><a href="#/compare/' + c.id + '">' + esc(c.title) + '</a>' + (warn ? ' <span class="uv">⚠</span>' : '') + '</li>';
        }).join('') + '</ul>';
      });
      v.innerHTML = h;
    },
    one: function (v, id) {
      var c = AN.COMPARISONS.find(function (x) { return x.id === id; });
      if (!c) { v.innerHTML = '<p>Comparison not found.</p>'; return; }
      v.innerHTML = '<h2><a href="#/compare">Compare</a> › ' + esc(c.title) + '</h2>' + AN.renderComparison(c, AN.recallOn()) +
        '<p class="muted small">Edit in <code>content/comparisons.js</code> → id <code>' + esc(c.id) + '</code></p>';
      AN.onKey = function (e) {
        if (e.key !== ' ') return;
        var n = v.querySelector('.card.recall .rv:not(.shown)');
        if (n) { e.preventDefault(); n.classList.add('shown'); n.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      };
    }
  };
})(window.AN);
