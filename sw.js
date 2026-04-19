const CACHE_NAME = 'neet-mastery-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.js',
  './manifest.json',
  './icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache v3');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);

  // Network First for HTML and navigations to prevent ERR_FAILED
  if (event.request.mode === 'navigate' || event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request).then(networkResponse => {
        const copy = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return networkResponse;
      }).catch(() => caches.match(event.request) || caches.match('./index.html'))
    );
  } else {
    // Cache First for other assets
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request).then(networkResponse => {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return networkResponse;
        });
      })
    );
  }
});
