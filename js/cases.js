/* cases.js — "Where's the lesion?" clinical cases.
   Data in content/cases.js: { id, region, stem, options: [CORRECT FIRST, ...wrong], why, refs: [structure ids], verified }
   Options are shuffled when shown. Hash params: region, structure, missed=1, unv=1. */
(function (AN) {
  var esc = AN.esc;
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function qs(p) { return Object.keys(p).filter(function (k) { return p[k]; }).map(function (k) { return k + '=' + encodeURIComponent(p[k]); }).join('&'); }

  function pool(p) {
    var rec = AN.store.state().cases || {};
    return AN.CASES.filter(function (c) {
      if (p.region && c.region !== p.region) return false;
      if (p.structure && (c.refs || []).indexOf(p.structure) < 0) return false;
      if (p.missed && !(rec[c.id] && rec[c.id].lastOk === false)) return false;
      if (!c.verified && !p.unv) return false;
      return true;
    });
  }

  AN.casesFor = function (id) { return AN.CASES.filter(function (c) { return (c.refs || []).indexOf(id) >= 0; }); };

  function setup(v) {
    var regions = AN.REGIONS.filter(function (r) { return AN.CASES.some(function (c) { return c.region === r.id; }); });
    var rec = AN.store.state().cases || {}, ids = Object.keys(rec);
    var tries = 0, ok = 0, missed = 0;
    ids.forEach(function (k) { tries += rec[k].tries; ok += rec[k].correct; if (rec[k].lastOk === false) missed++; });
    v.innerHTML = '<h2>🩺 Where’s the lesion?</h2><p class="muted">Clinical cases: read the signs, pick the lesion site, then see why.</p>' +
      '<form class="qsetup"><label>Region <select name="region"><option value="">All</option>' +
      regions.map(function (r) { return '<option value="' + r.id + '">' + r.name + '</option>'; }).join('') + '</select></label>' +
      '<label class="chk"><input type="checkbox" name="unv"' + (AN.store.settings().unverified ? ' checked' : '') + '> Include unverified cases</label></form>' +
      '<div id="ccount" class="muted"></div><div class="qbtns"><a class="btn primary" id="goCases">Start (10 cases)</a>' +
      '<a class="btn" id="goMissed">Retry missed (' + missed + ')</a></div>' +
      '<div class="stats">' +
      '<div class="stat"><b>' + ids.length + ' / ' + AN.CASES.length + '</b><span>cases attempted</span></div>' +
      '<div class="stat"><b>' + (tries ? Math.round(100 * ok / tries) + '%' : '—') + '</b><span>accuracy (' + tries + ' answers)</span></div>' +
      '<div class="stat"><b>' + missed + '</b><span>last answered wrong</span></div></div>' +
      '<p class="muted small">Cases are written in <code>content/cases.js</code>; each links to the cards it is based on. Unverified cases are excluded unless ticked.</p>';
    var form = v.querySelector('form');
    function upd() {
      var p = { region: form.region.value, unv: form.unv.checked ? 1 : '' };
      AN.store.setSetting('unverified', form.unv.checked);
      var n = pool(p).length;
      v.querySelector('#ccount').innerHTML = n + ' cases in scope' + (!n && !p.unv ? ' — ⚠ none verified yet; tick “Include unverified cases”.' : '');
      v.querySelector('#goCases').href = '#/cases/run?' + qs(p);
      v.querySelector('#goMissed').href = '#/cases/run?' + qs({ region: p.region, unv: p.unv, missed: 1 });
    }
    form.addEventListener('change', upd); upd();
  }

  function run(v, p) {
    var round = shuffle(pool(p)).slice(0, 10), i = 0, score = 0;
    function draw() {
      AN.onKey = null;
      if (!round.length) {
        v.innerHTML = '<h2>🩺 Cases</h2><div class="qcard"><p>No cases in this scope' + (p.missed ? ' — nothing missed. 🎉' : '.') + '</p>' +
          (!p.unv ? '<p class="muted">Cases are unverified until you check them — tick “Include unverified cases”.</p>' : '') + '<a class="btn" href="#/cases">Back</a></div>';
        return;
      }
      if (i >= round.length) {
        v.innerHTML = '<h2>🩺 Result</h2><div class="qcard"><p class="big">' + score + ' / ' + round.length + '</p>' +
          '<a class="btn primary" href="#/cases/run?' + qs(p) + '&r=' + Date.now() + '">Another round</a> <a class="btn" href="#/cases">Back</a></div>';
        return;
      }
      var c = round[i], opts = shuffle(c.options.map(function (t, k) { return { t: t, ok: k === 0 }; })), done = false;
      v.innerHTML = '<h2>🩺 Case ' + (i + 1) + ' / ' + round.length + ' <small class="muted">score ' + score + '</small></h2><div class="qcard">' +
        (c.verified ? '' : '<div class="banner warn small">⚠ Unverified case — check against your textbook.</div>') +
        '<div class="stem">' + AN.rich(c.stem) + '</div><div class="q">' + esc(c.question || 'Where is the lesion?') + '</div>' +
        '<div class="opts">' + opts.map(function (o, k) { return '<button class="opt" data-k="' + k + '">' + (k + 1) + '. ' + esc(o.t) + '</button>'; }).join('') +
        '</div><div id="after"></div></div>';
      function answer(k) {
        if (done) return; done = true;
        var ok = opts[k].ok; if (ok) score++;
        AN.store.recordCase(c.id, ok);
        v.querySelectorAll('.opt').forEach(function (x) { if (opts[+x.dataset.k].ok) x.classList.add('right'); });
        if (!ok) v.querySelector('.opt[data-k="' + k + '"]').classList.add('wrong');
        var refs = (c.refs || []).filter(function (r) { return AN.byId[r]; });
        v.querySelector('#after').innerHTML = '<div class="why"><p><strong>' + (ok ? '✔ Correct' : '✘ Answer: ' + esc(c.options[0])) + '</strong></p>' +
          '<p>' + AN.rich(c.why) + '</p>' +
          (refs.length ? '<p class="small">Review: ' + refs.map(function (r) { return '<a href="#/s/' + r + '" target="_blank">' + esc(AN.byId[r].name) + '</a>'; }).join(' · ') + '</p>' : '') +
          '</div><button class="btn primary" id="next">Next <small>(enter)</small></button>';
        v.querySelector('#next').onclick = function () { i++; draw(); };
        AN.onKey = function (e) { if (e.key === 'Enter') { i++; draw(); } };
      }
      v.querySelectorAll('.opt').forEach(function (b) { b.onclick = function () { answer(+b.dataset.k); }; });
      AN.onKey = function (e) { var k = +e.key - 1; if (k >= 0 && k < opts.length) answer(k); };
    }
    draw();
  }

  AN.casePages = { route: function (v, mode, p) { if (mode === 'run') run(v, p); else setup(v); } };
})(window.AN);
