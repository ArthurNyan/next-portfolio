self.addEventListener('push', function (e) {
  const options = {
    body: 'This notification was generated from a push!',
    icon: '/windows11/LargeTile.scale-100.png',
    data: {
      dateOfArrival: Date.now(),
      primarykey: '2',
    },
    ...e.data.json()
  }
  
  e.waitUntil(
    self.registration.showNotification('Aryan notify:', options)
  );
});

self.skipWaiting();

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  event.waitUntil(clients.openWindow('/'))
})