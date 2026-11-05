/* quiz.js — builds questions from schema fields that have a "q" template,
   and runs flashcard (spaced repetition) and MCQ sessions.
   Hash params: region, type, structure, bm=1 (bookmarked only), unv=1 (include unverified). */
(function (AN) {
  var esc = AN.esc;

  AN.buildItems = function (p) {
    var out = [];
    AN.structures.forEach(function (s) {
      if (p.region && s.region !== p.region) return;
      if (p.type && s.type !== p.type) return;
      if (p.structure && s.id !== p.structure) return;
      if (p.bm && !AN.store.isBookmarked(s.id)) return;
      var t = AN.SCHEMA.types[s.type]; if (!t) return;
      var K = p.kinds || AN.cardKinds();
      function add(key, id, q, v, label, kind) {
        if (AN.isEmpty(v)) return;
        var ok = !!s.verified && !AN.isDoubtful(s, key);
        if (!ok && !p.unv) return;
        out.push({ id: id, s: s, f: { key: key, label: label }, v: v, verified: ok, q: q, kind: kind });
      }
      // 1. whole-field questions (ids unchanged, so earlier progress is kept)
      if (K.field) t.fields.forEach(function (f) {
        if (f.q) add(f.key, s.id + ':' + f.key, f.q.replace('{name}', s.name), AN.get(s, f.key), f.label, 'field');
      });
      // 2. single-fact parts: list entries written as "Label: fact"
      if (K.part) AN.SCHEMA.common.concat(t.fields).forEach(function (f) {
        var v = AN.get(s, f.key);
        if (Array.isArray(v)) v.forEach(function (item, n) {
          var m = String(item).match(/^([^:]{2,50}):\s+(.+)$/);
          if (m) add(f.key, s.id + ':' + f.key + ':' + n, s.name + ' · ' + f.label + ' — ' + AN.plain(m[1]) + '?', m[2], f.label, 'part');
        });
      });
      // 3. clinical notes and high-yield list
      if (K.clinical) {
        (s.clinical || []).forEach(function (c, n) {
          var title = AN.plain(c.title || '').replace(/[:\s]+$/, '');
          if (title) add('clinical', s.id + ':clin:' + n, s.name + ' · Clinical — ' + title + '?', c.text, 'Clinical', 'clinical');
        });
        add('highYield', s.id + ':hy', 'High-yield points: ' + s.name + '?', s.highYield, 'High-yield points', 'clinical');
      }
      // 4. relations (viva style)
      if (K.relation) (s.relations || []).forEach(function (r, n) {
        if (r.dir) add('relations', s.id + ':rel:' + n, s.name + ' · Relation — ' + AN.plain(r.dir) + '?', r.text, 'Relations', 'relation');
      });
      // 5. mnemonics
      if (K.mnemonic) (s.mnemonics || []).forEach(function (m, n) {
        if (m.text) add('mnemonics', s.id + ':mn:' + n, s.name + ' · Mnemonic “' + AN.plain(m.text).replace(/^[“"]+|[”"]+$/g, '') + '” — what does it stand for?', m.meaning, 'Mnemonics', 'mnemonic');
      });
    });
    return out;
  };

  AN.KIND_LABELS = { field: 'Whole-field questions', part: 'Single-fact cards', clinical: 'Clinical & high-yield', relation: 'Relations (viva)', mnemonic: 'Mnemonics' };
  AN.cardKinds = function () {
    return AN.store.settings().kinds || { field: 1, part: 1, clinical: 1, relation: 1, mnemonic: 1 };
  };
  function isField(it) { return it.kind === 'field'; }
  function answerText(v) { return AN.plain(Array.isArray(v) ? v.filter(function (x) { return !AN.isEmpty(x); }).join('; ') : v); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function qs(p) { return Object.keys(p).filter(function (k) { return p[k]; }).map(function (k) { return k + '=' + encodeURIComponent(p[k]); }).join('&'); }
  function uvTag(it) { return it.verified ? '' : '<div class="banner warn small">⚠ From unverified content — check against your textbook.</div>'; }
  function scopeLabel(p) {
    var bits = [];
    if (p.structure) bits.push(AN.byId[p.structure] ? AN.byId[p.structure].name : p.structure);
    if (p.region) bits.push(AN.nameOf(AN.REGIONS, p.region));
    if (p.type) bits.push(AN.SCHEMA.types[p.type].plural);
    if (p.bm) bits.push('bookmarked');
    return (bits.join(' · ') || 'All content') + (p.unv ? ' (incl. unverified)' : ' (verified only)');
  }

  /* ---------- setup page ---------- */
  function setup(v) {
    var regions = AN.REGIONS.filter(function (r) { return AN.structures.some(function (s) { return s.region === r.id; }); });
    var types = AN.TYPE_ORDER.filter(function (t) { return AN.structures.some(function (s) { return s.type === t; }); });
    var unv = AN.store.settings().unverified;
    v.innerHTML = '<h2>Quiz & spaced repetition</h2><form class="qsetup">' +
      '<label>Region <select name="region"><option value="">All</option>' + regions.map(function (r) { return '<option value="' + r.id + '">' + r.name + '</option>'; }).join('') + '</select></label>' +
      '<label>Type <select name="type"><option value="">All</option>' + types.map(function (t) { return '<option value="' + t + '">' + AN.SCHEMA.types[t].plural + '</option>'; }).join('') + '</select></label>' +
      '<label class="chk"><input type="checkbox" name="bm"> Bookmarked only</label>' +
      '<label class="chk"><input type="checkbox" name="unv"' + (unv ? ' checked' : '') + '> Include unverified content</label>' +
      '<fieldset class="kinds"><legend>Flashcard types</legend>' + Object.keys(AN.KIND_LABELS).map(function (k) {
        return '<label class="chk"><input type="checkbox" name="k_' + k + '"' + (AN.cardKinds()[k] ? ' checked' : '') + '> ' + AN.KIND_LABELS[k] + '</label>';
      }).join('') + '</fieldset>' +
      '</form><div id="qcount" class="muted"></div><div class="qbtns"><a class="btn primary" id="goFlash">Flashcards (due today)</a><a class="btn" id="goMcq">MCQ round (10)</a></div>' +
      '<p class="muted small">Questions come only from fields marked with a question template in <code>js/schema.js</code>. By default only verified, non-flagged fields are used.</p>';
    var form = v.querySelector('form');
    function upd() {
      var p = { region: form.region.value, type: form.type.value, bm: form.bm.checked ? 1 : '', unv: form.unv.checked ? 1 : '' };
      AN.store.setSetting('unverified', form.unv.checked);
      var kinds = {};
      Object.keys(AN.KIND_LABELS).forEach(function (k) { if (form['k_' + k].checked) kinds[k] = 1; });
      AN.store.setSetting('kinds', kinds);
      var items = AN.buildItems(p), due = AN.store.dueItems(items).length;
      v.querySelector('#qcount').innerHTML = items.length + ' questions in scope · <strong>' + due + ' due today</strong>' +
        (!items.length && !p.unv ? '<br>⚠ No verified content in this scope yet. Verify entries, or tick “Include unverified”.' : '');
      v.querySelector('#goFlash').href = '#/quiz/flash?' + qs(p);
      v.querySelector('#goMcq').href = '#/quiz/mcq?' + qs(p);
    }
    form.addEventListener('change', upd); upd();
  }

  /* ---------- flashcards ---------- */
  function flash(v, p) {
    var queue = AN.store.dueItems(shuffle(AN.buildItems(p))), i = 0, shown = false, again = {}, done = 0;
    function draw() {
      if (i >= queue.length) {
        v.innerHTML = '<h2>Flashcards</h2><div class="qcard"><p>✔ Nothing more due' + (done ? ' — ' + done + ' reviewed this session.' : '.') + '</p>' +
          '<p class="muted">' + esc(scopeLabel(p)) + '</p><a class="btn" href="#/quiz">Back to quiz</a></div>';
        AN.onKey = null; return;
      }
      var it = queue[i], c = AN.store.card(it.id);
      v.innerHTML = '<h2>Flashcards <small class="muted">' + (i + 1) + ' / ' + queue.length + '</small></h2>' +
        '<div class="qcard">' + uvTag(it) + '<div class="qmeta">' + esc(AN.KIND_LABELS[it.kind] || '') + ' · ' + (c ? 'last: ' + c.grade + ', interval ' + c.interval + 'd' : 'new') + '</div>' +
        '<div class="q">' + esc(it.q) + '</div>' +
        (shown ? '<div class="ans">' + AN.valueHtml(it.v) + '<a class="small" href="#/s/' + it.s.id + '">Open card →</a></div>' +
          '<div class="rate"><button data-g="hard" class="hard">1 · Hard</button><button data-g="medium" class="med">2 · Medium</button><button data-g="easy" class="easy">3 · Easy</button></div>'
          : '<button class="btn primary" id="show">Show answer <small>(space)</small></button>') + '</div>';
      if (!shown) v.querySelector('#show').onclick = reveal;
      else v.querySelectorAll('[data-g]').forEach(function (b) { b.onclick = function () { rate(b.dataset.g); }; });
    }
    function reveal() { shown = true; draw(); }
    function rate(g) {
      var it = queue[i]; AN.store.rate(it.id, g); done++;
      if (g === 'hard' && !again[it.id]) { again[it.id] = 1; queue.push(it); }
      i++; shown = false; draw();
    }
    AN.onKey = function (e) {
      if (i >= queue.length) return;
      if (!shown && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); reveal(); }
      else if (shown && { '1': 'hard', '2': 'medium', '3': 'easy' }[e.key]) rate({ '1': 'hard', '2': 'medium', '3': 'easy' }[e.key]);
    };
    draw();
  }

  /* ---------- MCQ ---------- */
  function mcq(v, p) {
    var all = AN.buildItems({ unv: 1, kinds: { field: 1 } }); // distractor pool: same type + field
    function distractors(it) {
      var right = answerText(it.v), seen = {}; seen[right] = 1;
      return shuffle(all.filter(function (o) { return o.s.type === it.s.type && o.f.key === it.f.key && o.s.id !== it.s.id; })
        .map(function (o) { return answerText(o.v); }).filter(function (a) { if (seen[a]) return false; seen[a] = 1; return true; })).slice(0, 3);
    }
    var round = shuffle(AN.buildItems(Object.assign({}, p, { kinds: { field: 1 } })).filter(isField).filter(function (it) { return distractors(it).length >= 3; })).slice(0, 10);
    var i = 0, score = 0, answered = false;
    function draw() {
      AN.onKey = null;
      if (!round.length) { v.innerHTML = '<h2>MCQ</h2><div class="qcard"><p>Not enough content in this scope to build MCQs (each needs 3 other structures of the same type with that field filled).</p><p class="muted">' + esc(scopeLabel(p)) + '</p><a class="btn" href="#/quiz">Back</a></div>'; return; }
      if (i >= round.length) { v.innerHTML = '<h2>MCQ result</h2><div class="qcard"><p class="big">' + score + ' / ' + round.length + '</p><a class="btn primary" href="#/quiz/mcq?' + qs(p) + '&r=' + Date.now() + '">Another round</a> <a class="btn" href="#/quiz">Back</a></div>'; return; }
      var it = round[i], right = answerText(it.v), opts = shuffle([right].concat(distractors(it)));
      answered = false;
      v.innerHTML = '<h2>MCQ <small class="muted">' + (i + 1) + ' / ' + round.length + ' · score ' + score + '</small></h2><div class="qcard">' + uvTag(it) +
        '<div class="q">' + esc(it.q) + '</div><div class="opts">' + opts.map(function (o, k) { return '<button class="opt" data-k="' + k + '">' + (k + 1) + '. ' + esc(o) + '</button>'; }).join('') +
        '</div><div id="after"></div></div>';
      v.querySelectorAll('.opt').forEach(function (b) {
        b.onclick = function () {
          if (answered) return; answered = true;
          var ok = opts[+b.dataset.k] === right; if (ok) score++;
          AN.store.recordMcq(it.s.type, ok);
          v.querySelectorAll('.opt').forEach(function (x) { if (opts[+x.dataset.k] === right) x.classList.add('right'); });
          if (!ok) b.classList.add('wrong');
          v.querySelector('#after').innerHTML = '<p>' + (ok ? '✔ Correct' : '✘ Incorrect') + ' · <a href="#/s/' + it.s.id + '" target="_blank">Open card</a></p><button class="btn primary" id="next">Next <small>(enter)</small></button>';
          v.querySelector('#next').onclick = function () { i++; draw(); };
          AN.onKey = function (e) { if (e.key === 'Enter') { i++; draw(); } };
        };
      });
      AN.onKey = function (e) { var b = v.querySelector('.opt[data-k="' + (+e.key - 1) + '"]'); if (b) b.click(); };
    }
    draw();
  }

  AN.quiz = { route: function (v, mode, p) { if (mode === 'flash') flash(v, p); else if (mode === 'mcq') mcq(v, p); else setup(v); } };
})(window.AN);
