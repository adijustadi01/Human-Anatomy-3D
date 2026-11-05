/* app.js — hash router and global event wiring. Loaded last. */
(function (AN) {
  function parse() {
    var h = location.hash.replace(/^#\/?/, ''), i = h.indexOf('?');
    var path = i < 0 ? h : h.slice(0, i), q = i < 0 ? '' : h.slice(i + 1), params = {};
    new URLSearchParams(q).forEach(function (val, k) { params[k] = val; });
    return { parts: path.split('/').filter(Boolean), params: params };
  }

  function route() {
    AN.onKey = null;
    var r = parse(), a = r.parts[0], b = r.parts[1], v = document.getElementById('view');
    if (!a) AN.nav.home(v);
    else if (a === 'region') AN.nav.region(v, b, r.params);
    else if (a === 'system') AN.nav.system(v, b);
    else if (a === 's') {
      v.innerHTML = AN.byId[b] ? AN.renderCard(AN.byId[b]) : '<p>Structure “' + AN.esc(b) + '” not found.</p>';
      AN.onKey = function (e) { // Space reveals the next hidden item in recall mode
        if (e.key !== ' ') return;
        var n = v.querySelector('.card.recall .rv:not(.shown)');
        if (n) { e.preventDefault(); n.classList.add('shown'); n.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
        else if (AN.revealNextLabel(v)) e.preventDefault();
      };
    }
    else if (a === 'figs') AN.figPages.list(v);
    else if (a === 'fig') AN.figPages.one(v, b);
    else if (a === 'quiz') AN.quiz.route(v, b, r.params);
    else if (a === 'progress') AN.progressPage(v);
    else if (a === 'review') AN.reviewPage(v);
    else if (a === 'search') AN.nav.search(v, r.params.q || '');
    else v.innerHTML = '<p>Page not found.</p>';
    document.querySelectorAll('.topnav a').forEach(function (l) {
      l.classList.toggle('active', (l.getAttribute('href').split('/')[1] || '') === (a || ''));
    });
    window.scrollTo(0, 0);
  }

  document.addEventListener('click', function (e) {
    var r = e.target.closest('.card.recall .rv:not(.shown)');
    if (r) { e.preventDefault(); r.classList.add('shown'); return; }
    var t = e.target.closest('[data-recall]');
    if (t) {
      var on = !AN.recallOn(), card = t.closest('.card');
      AN.store.setSetting('recall', on);
      card.classList.toggle('recall', on);
      card.querySelectorAll('.rv').forEach(function (x) { x.classList.remove('shown'); });
      t.classList.toggle('on', on);
      t.textContent = on ? '🧠 Recall: on' : '🧠 Recall: off';
      return;
    }
    var fh = e.target.closest('[data-fighide]');
    if (fh) {
      var fg = fh.closest('.fig'), hide = !fg.classList.contains('hidden');
      fg.classList.toggle('hidden', hide);
      fg.querySelectorAll('.lbl').forEach(function (x) { x.classList.remove('shown'); });
      fh.textContent = hide ? '👁 Show labels' : '🙈 Hide labels'; fh.classList.toggle('on', hide);
      AN.figCount(fg); return;
    }
    var fr = e.target.closest('[data-figreveal]');
    if (fr) { var fg2 = fr.closest('.fig'); fg2.querySelectorAll('.lbl').forEach(function (x) { x.classList.add('shown'); }); AN.figCount(fg2); return; }
    var lb = e.target.closest('.lbl');
    if (lb) {
      var fg3 = lb.closest('.fig');
      if (fg3.classList.contains('hidden') && !lb.classList.contains('shown')) { lb.classList.add('shown'); AN.figCount(fg3); }
      else if (lb.getAttribute('data-ref')) location.hash = '#/s/' + lb.getAttribute('data-ref');
      return;
    }
    var ra = e.target.closest('[data-revealall]');
    if (ra) { ra.closest('.card').querySelectorAll('.rv').forEach(function (x) { x.classList.add('shown'); }); return; }
    var b = e.target.closest('[data-bm]');
    if (!b) return;
    var on = AN.store.toggleBookmark(b.dataset.bm);
    b.textContent = on ? '★ Bookmarked' : '☆ Bookmark';
    b.classList.toggle('on', on);
  });
  document.addEventListener('keydown', function (e) {
    if (AN.onKey && !/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) AN.onKey(e);
  });

  window.addEventListener('hashchange', route);
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchForm').addEventListener('submit', function (e) {
      e.preventDefault();
      location.hash = '#/search?q=' + encodeURIComponent(this.q.value);
    });
    if (AN.errors.length) document.getElementById('errors').innerHTML = AN.errors.map(AN.esc).join('<br>');
    route();
  });
})(window.AN);
