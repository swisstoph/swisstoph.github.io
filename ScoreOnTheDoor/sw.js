// The app moved from /ScoreOnTheDoor/ to /BeforeYouEat/.
// Phones that installed the old version check this file for updates; this version
// removes the old offline copy and sends any open window to the new address.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) await caches.delete(key);
    await self.registration.unregister();
    for (const client of await self.clients.matchAll({ type: 'window' })) {
      const url = new URL(client.url);
      client.navigate('/BeforeYouEat/' + url.search + url.hash);
    }
  })());
});
