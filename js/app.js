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
    else if (a === 's') v.innerHTML = AN.byId[b] ? AN.renderCard(AN.byId[b]) : '<p>Structure “' + AN.esc(b) + '” not found.</p>';
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
