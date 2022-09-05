const publicVapidKey = 'BNgIM2bPgDqArtLaOlhmYZtDYmD3TTMzudNwc6tD6Yz9H6PoOcu2Xm8-MHlHcgzMB8D2yNUYcx_c-Hpcq0QKTI8';

if('serviceWorker' in navigator) {
    send().catch(err => console.error(err))
}

async function send() {
    console.log('Registering service worker');
    const register = await navigator.serviceWorker.register('./worker2.js', {
        scope: '/'
    });
    console.log('Service worker registered');
    //await registration.pushManager.getSubscription();
    console.log('Registering Push');
    let subscription;
    try {
        subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: publicVapidKey
        })
    } catch (error) {
        console.log('error in client', error)
    }
    console.log('Push Registered', subscription);

    console.log('Sending Push');
    await fetch('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    })
    console.log('Push Sent');
}
