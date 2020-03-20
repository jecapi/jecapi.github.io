self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open("pwa-test").then(function(cache) {
        return cache.addAll(
            [
            '/css/bootstrap.min.css',
            '/js/main.js',
            '/js/vue.min.js',
            '/index.html'
            ]
        );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );
});
  
  