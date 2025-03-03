self.addEventListener('install', e => {
  e.waitUntil(caches.open('chat').then(cache => cache.addAll(['./', './laptop.html', './phone.html', './manifest.json'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});