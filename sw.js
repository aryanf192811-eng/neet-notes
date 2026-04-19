const CACHE_NAME = 'neet-mastery-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.js',
  './manifest.json',
  './icon.png',
  './notes/neet-chem-organic-11.html',
  './notes/neet-inorganic-v2.html',
  './notes/neet-physics-11-fixed_copy.html',
  './notes/neet-physics-12-electromagnetism.html',
  './notes/neet-physics-12-electrostatics__2_.html',
  './notes/neet-physics-12-modern-physics.html',
  './notes/neet-physics-12-optics.html',
  './notes/neet11_final.html',
  './notes/neet12_final.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(ASSETS).catch(error => {
        console.error('Failed to cache assets during install:', error);
        // Continue anyway if some fail, or use a more granular approach
      });
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;
      
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Return a basic fallback if both fail
        return new Response('Note not available offline', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({ 'Content-Type': 'text/plain' })
        });
      });
    })
  );
});
