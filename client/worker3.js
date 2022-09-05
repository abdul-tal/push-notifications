console.log('Service Worker loaded-3');

// self.addEventListener('push', async (e) => {
//     const data = e.data.json();
//     console.log('Push Received in worker');
//     console.log('push title', data.title)
//     // const promiseChain = self.registration.showNotification(data.title, {
//     //     body: 'Notified by Abdul'
//     // })
//     // console.log('self.registration',self.registration)
//     // console.log('self.registration',self.registration.showNotification)
//     e.waitUntil(self.registration.showNotification('data.title', {
//         body: 'Notified by Abdul'
//     }));
// });

self.addEventListener('push', (e) => {
    const data = e.data.json();
    console.log('Push Received');
    self.registration.showNotification(data.title, {
        body: 'Notified by Abdul',
        icon: 'http://image.ibb.co/frYOFd/tmlogo.png'
    })
});
self.addEventListener("install", (evt) => {
    self.skipWaiting();
  });


// self.addEventListener('push', async (e) => {
//     const data = e.data.json();
//     e.waitUntil(self.registration.showNotification(data.title, {
//         body: 'Notified by Abdul'
//     }));
// });
