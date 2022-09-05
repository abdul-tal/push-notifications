const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const storage = require('./storage');

const app = express();

//set static path
app.use(express.static(path.join(__dirname, "client")));


app.use(bodyParser.json());

const publicVapidKey = 'BNgIM2bPgDqArtLaOlhmYZtDYmD3TTMzudNwc6tD6Yz9H6PoOcu2Xm8-MHlHcgzMB8D2yNUYcx_c-Hpcq0QKTI8';
const privateVapidKey = 'PAuMmgLsj5ZXC2A4aJR7xW8xW2GJ12Yrs79RDWEvTM4';

webpush.setVapidDetails('mailto:abdul.rahman@talentica.com', publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    const subscriber = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ title: 'web push test from MAIN'});
    storage.setSubscribers('MAIN', {
        subscriber,
        payload
    })
    // console.log('Sending Notification')
    // webpush.sendNotification(subscribe, payload).then(result => {
    //     console.log("notificantion sent")
    //   });

})

app.post('/sendNotifications', (req, res) => {
    const { subscribedTo = [] } = req.body;
    subscribedTo.forEach(publisher => {
        const subscribers = storage.getSubscribers(publisher);
        console.log(publisher, subscribers)
        subscribers.forEach(subscriberObj => {
            console.log('subscriberObj.payload', subscriberObj.payload)
            const payload = JSON.parse(subscriberObj.payload);
            const finalPayload = {...payload, url: 'localhost:5000'}
            console.log('parsed.payload', payload)
            webpush.sendNotification(subscriberObj.subscriber, JSON.stringify(finalPayload)).then(result => {
                console.log("notificantion sent for", finalPayload)
              });
              setTimeout(function(){ console.log("After 5 seconds!"); }, 10000);
        })
        setTimeout(function(){ console.log("After 5 seconds!"); }, 10000);
    });
    res.send({})
})

const port = 5000;

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
