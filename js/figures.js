/* figures.js — labelled teaching diagrams with a "hide labels" self-test.
   Figure data lives in diagrams/figures/*.js:
   { id, title, region, verified, source, viewBox, shapes (SVG string without labels),
     labels: [{ x, y, t (text), a ('start'|'middle'|'end'), r (optional structure id) }],
     structures: [ids the figure belongs to], note } */
(function (AN) {
  var esc = AN.esc;
  function labelW(t) { return Math.round(t.length * 6.4 + 12); }

  AN.renderFigure = function (f, hidden) {
    var lbl = f.labels.map(function (l, i) {
      var a = l.a || 'start', w = labelW(l.t);
      var x0 = a === 'end' ? l.x - w + 6 : a === 'middle' ? l.x - w / 2 : l.x - 6;
      return '<g class="lbl' + (l.r ? ' has-ref' : '') + '"' + (l.r ? ' data-ref="' + l.r + '"' : '') + '>' +
        '<rect class="lbox" x="' + x0 + '" y="' + (l.y - 12) + '" width="' + w + '" height="17" rx="4"/>' +
        '<text class="lt" x="' + l.x + '" y="' + l.y + '" text-anchor="' + a + '">' + esc(l.t) + '</text>' +
        '<text class="lnum" x="' + (x0 + w / 2) + '" y="' + l.y + '" text-anchor="middle">' + (i + 1) + '</text></g>';
    }).join('');
    return '<div class="fig' + (hidden ? ' hidden' : '') + '" data-fig="' + f.id + '">' +
      '<div class="figbar"><a href="#/fig/' + f.id + '"><strong>' + esc(f.title) + '</strong></a><span class="figbtns">' +
      '<span class="figcount muted small">' + (hidden ? '0 / ' + f.labels.length + ' revealed' : '') + '</span>' +
      '<button class="bm tbtn' + (hidden ? ' on' : '') + '" data-fighide>' + (hidden ? '👁 Show labels' : '🙈 Hide labels') + '</button>' +
      '<button class="bm tbtn" data-figreveal>Reveal all</button></span></div>' +
      (f.verified ? '' : '<div class="banner warn small">⚠ Diagram not yet verified — schematic only; check against your textbook.</div>') +
      '<svg class="figsvg" viewBox="' + f.viewBox + '" role="img" aria-label="' + esc(f.title) + '">' + f.shapes + lbl + '</svg>' +
      (f.note ? '<p class="muted small">' + AN.rich(f.note) + '</p>' : '') + '</div>';
  };

  AN.figuresFor = function (id) {
    return AN.FIGURES.filter(function (f) {
      return (f.structures || []).indexOf(id) >= 0 || f.labels.some(function (l) { return l.r === id; });
    });
  };

  AN.figCount = function (fg) {
    var n = fg.querySelectorAll('.lbl').length, s = fg.querySelectorAll('.lbl.shown').length;
    fg.querySelector('.figcount').textContent = fg.classList.contains('hidden') ? s + ' / ' + n + ' revealed' : '';
  };

  /* Space reveals the next hidden label (used on card and figure pages) */
  AN.revealNextLabel = function (root) {
    var n = root.querySelector('.fig.hidden .lbl:not(.shown)');
    if (!n) return false;
    n.classList.add('shown'); AN.figCount(n.closest('.fig')); return true;
  };

  AN.figPages = {
    list: function (v) {
      var h = '<h2>Diagrams</h2><p class="muted">Tap a diagram, then “Hide labels” to test yourself.</p>';
      AN.REGIONS.forEach(function (r) {
        var g = AN.FIGURES.filter(function (f) { return f.region === r.id; });
        if (g.length) h += '<h3 class="rhead">' + r.name + '</h3><ul class="slist">' + g.map(function (f) {
          return '<li><a href="#/fig/' + f.id + '">' + esc(f.title) + '</a>' + (f.verified ? '' : ' <span class="uv">⚠</span>') + '</li>';
        }).join('') + '</ul>';
      });
      v.innerHTML = h;
    },
    one: function (v, id) {
      var f = AN.figById[id];
      if (!f) { v.innerHTML = '<p>Diagram not found.</p>'; return; }
      var rel = (f.structures || []).filter(function (x) { return AN.byId[x]; });
      v.innerHTML = '<h2><a href="#/figs">Diagrams</a> › ' + esc(f.title) + '</h2>' + AN.renderFigure(f, false) +
        (rel.length ? '<h3>Related cards</h3><ul class="slist">' + rel.map(function (x) { return '<li><a href="#/s/' + x + '">' + esc(AN.byId[x].name) + '</a></li>'; }).join('') + '</ul>' : '') +
        '<p class="muted small">Edit in <code>diagrams/figures/</code> → id <code>' + esc(f.id) + '</code></p>';
      AN.onKey = function (e) { if (e.key === ' ' && AN.revealNextLabel(v)) e.preventDefault(); };
    }
  };
})(window.AN);
