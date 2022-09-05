self.addEventListener('push', () => {
    const options = {
        body: 'Simple piece of body text.\nSecond line of body text :)',
      };
    self.registration.showNotification('Hello world!', options);
  });