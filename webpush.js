const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BNgIM2bPgDqArtLaOlhmYZtDYmD3TTMzudNwc6tD6Yz9H6PoOcu2Xm8-MHlHcgzMB8D2yNUYcx_c-Hpcq0QKTI8',
  privateKey: 'PAuMmgLsj5ZXC2A4aJR7xW8xW2GJ12Yrs79RDWEvTM4'
};

webpush.setVapidDetails(
  'mailto:abdul.rahman@ytalentica.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');