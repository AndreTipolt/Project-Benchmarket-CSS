self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('static-v1').then(function (cache) {
      return cache.addAll([
        '/',
        '/styles/style.css',
        '/js/js.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});