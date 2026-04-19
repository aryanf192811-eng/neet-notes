const CACHE_NAME = 'neet-mastery-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.js',
  '/manifest.json',
  '/icon.png',
  '/notes/neet-chem-organic-11.html',
  '/notes/neet-inorganic-v2.html',
  '/notes/neet-physics-11-fixed_copy.html',
  '/notes/neet-physics-12-electromagnetism.html',
  '/notes/neet-physics-12-electrostatics__2_.html',
  '/notes/neet-physics-12-modern-physics.html',
  '/notes/neet-physics-12-optics.html',
  '/notes/neet11_final.html',
  '/notes/neet12_final.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
