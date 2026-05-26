const CACHE = 'hw-blitz-v1';
const ASSETS = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});

self.addEventListener('message', e => {
  if (!e.data) return;

  if (e.data.type === 'NOTIFY') {
    self.registration.showNotification(e.data.title, {
      body: e.data.body,
      icon: './icon.svg',
      badge: './icon.svg',
      tag: 'hw-blitz',
      renotify: true,
      vibrate: [200, 100, 200],
    });
  }

  if (e.data.type === 'SCHEDULE') {
    const { delay, title, body } = e.data;
    setTimeout(() => {
      self.registration.showNotification(title, {
        body,
        icon: './icon.svg',
        badge: './icon.svg',
        tag: 'hw-blitz-reminder',
        vibrate: [200, 100, 200],
        actions: [{ action: 'open', title: 'Open app' }],
      });
    }, delay);
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const client of list) {
        if (client.url.includes('hw-blitz') && 'focus' in client) return client.focus();
      }
      return clients.openWindow('./');
    })
  );
});
