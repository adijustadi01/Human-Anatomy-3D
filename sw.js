/* Service worker: makes the app work offline when served over https (e.g. GitHub Pages).
   Strategy: network first (so content edits show up when online), cache as fallback (offline).
   On install it caches every file listed in index.html, so new content files are picked up automatically. */
const CACHE = 'anatomy-revision';
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    const html = await (await fetch('./index.html', { cache: 'no-store' })).text();
    const files = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map(m => './' + m[1]);
    await c.addAll([...new Set(['./', './index.html', './manifest.webmanifest', ...files])]);
    self.skipWaiting();
  })());
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
