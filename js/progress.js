/* progress.js — progress dashboard and the verification review queue. */
(function (AN) {
  var esc = AN.esc;
  function pct(c, t) { return t ? Math.round(100 * c / t) + '%' : '—'; }
  function stat(n, label) { return '<div class="stat"><b>' + n + '</b><span>' + label + '</span></div>'; }

  AN.progressPage = function (v) {
    var st = AN.store.state(), items = AN.buildItems({ unv: 1 }), t = AN.store.today();
    var seen = items.filter(function (it) { return st.srs[it.id]; });
    var due = seen.filter(function (it) { return st.srs[it.id].due <= t; }).length;
    var hard = seen.filter(function (it) { return st.srs[it.id].grade === 'hard'; });
    var bms = Object.keys(st.bookmarks).map(function (id) { return AN.byId[id]; }).filter(Boolean);
    var m = st.mcq;
    v.innerHTML = '<h2>Progress</h2><div class="stats">' +
      stat(due, 'due today') + stat(seen.length + ' / ' + items.length, 'questions reviewed') +
      stat((st.days[t] || { reviews: 0 }).reviews, 'reviews today') + stat(pct(m.correct, m.total), 'MCQ accuracy (' + m.total + ')') + '</div>' +
      '<h3>MCQ accuracy by type</h3>' + (Object.keys(m.byType).length ? '<table class="rel">' + Object.keys(m.byType).map(function (k) {
        var b = m.byType[k]; return '<tr><th>' + (AN.SCHEMA.types[k] ? AN.SCHEMA.types[k].plural : k) + '</th><td>' + pct(b.correct, b.total) + ' (' + b.correct + '/' + b.total + ')</td></tr>';
      }).join('') + '</table>' : '<p class="empty">No MCQs answered yet.</p>') +
      '<h3>★ Bookmarked (weak) structures</h3>' + (bms.length ? AN.listByType(bms) : '<p class="empty">None yet — use ☆ Bookmark on any card.</p>') +
      (bms.length ? '<a class="btn" href="#/quiz/flash?bm=1&unv=1">Flashcards: bookmarked only</a>' : '') +
      '<h3>Last rated “hard”</h3>' + (hard.length ? '<ul class="slist">' + hard.map(function (it) { return '<li><a href="#/s/' + it.s.id + '">' + esc(it.q) + '</a></li>'; }).join('') + '</ul>' : '<p class="empty">None.</p>') +
      '<h3>Settings & backup</h3><div class="qsetup"><label>New flashcards per day <input type="number" min="1" max="500" id="npd" value="' + (st.settings.newPerDay || 20) + '"></label></div>' +
      '<div class="qbtns"><button class="btn" id="exp">Export progress</button><label class="btn">Import progress<input type="file" id="imp" accept=".json" hidden></label><button class="btn danger" id="rst">Reset progress</button></div>' +
      '<p class="muted small">Progress is stored in this browser only. Export regularly to back it up or move devices.</p>';
    v.querySelector('#npd').onchange = function () { AN.store.setSetting('newPerDay', Math.max(1, +this.value || 20)); };
    v.querySelector('#exp').onclick = AN.store.exportJson;
    v.querySelector('#imp').onchange = function () { if (this.files[0]) AN.store.importJson(this.files[0], function (e) { alert(e ? 'Import failed: ' + e.message : 'Progress imported.'); AN.progressPage(v); }); };
    v.querySelector('#rst').onclick = function () { if (confirm('Erase all progress, bookmarks and stats?')) { AN.store.reset(); AN.progressPage(v); } };
  };

  AN.reviewPage = function (v) {
    var all = AN.structures, ok = all.filter(function (s) { return s.verified; }).length;
    var todo = all.filter(function (s) { return !s.verified || (s.doubtful && s.doubtful.length); });
    var files = {};
    todo.forEach(function (s) { (files[s._file] = files[s._file] || []).push(s); });
    v.innerHTML = '<h2>Verification queue</h2><p>' + ok + ' / ' + all.length + ' structures verified (' + pct(ok, all.length) + ').</p>' +
      '<div class="bar"><i style="width:' + pct(ok, all.length).replace('—', '0%') + '"></i></div>' +
      '<p class="muted small">To verify: open the file, check each field against your textbook, fix it, clear the <code>doubtful</code> list, fill <code>source</code>, set <code>verified: true</code>.</p>' +
      (todo.length ? Object.keys(files).map(function (f) {
        return '<h3><code>' + esc(f) + '</code></h3><table class="rel">' + files[f].map(function (s) {
          return '<tr><th><a href="#/s/' + s.id + '">' + esc(s.name) + '</a></th><td>' + (s.verified ? '✔ verified' : '⚠ unverified') +
            (s.doubtful && s.doubtful.length ? ' · flagged: <em>' + s.doubtful.map(esc).join(', ') + '</em>' : '') + '</td></tr>';
        }).join('') + '</table>';
      }).join('') : '<p>✔ Everything is verified.</p>');
  };
})(window.AN);
