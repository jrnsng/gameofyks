const CACHE_NAME = 'game-of-yks-v1';
const assetsToCache = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
  'https://cdn-icons-png.flaticon.com/512/3426/3426231.png'
];

// Uygulama yüklendiğinde dosyaları hafızaya al
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// İnternet yoksa hafızadaki dosyaları kullan
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});