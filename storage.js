// const subscriptionMap = {};
const subscriptionMap = {
  "SERVER1": [
    {
      subscriber: {
        endpoint: 'https://fcm.googleapis.com/fcm/send/eDJnuF0QF8Q:APA91bFa0LLfcxOnPoBY53sT0o8TptSDaRizB3jUp7DOFzwG685oa07PvQ5a6wxXweXC1r_yBDRRss3W3LOf4YtW_cJndOAmxW8vFPjZU2P7lJV-l7vU36srGE9ajkVck-Qz-hI-a0If',
        expirationTime: null,
        keys: {
          p256dh: 'BOoxJuv_u6OxQWBQmbd5mdY4qLa7iBl6_zjW6tlf-VgRpImAtR2t3BmM2cFBvBlq8A28AJADHFByiENfBhYDvwA',
          auth: 'mbZaJJ1OYe7Oppfi7paA9Q'
        }
      },
      payload: '{"title":"web push test from SERVER1"}'
    }
  ],
  "SERVER2": [

  ]
};
const getSubscribers = (publisher) =>{
    return subscriptionMap[publisher] || [];
};

const setSubscribers = (publisher, subscriber) => {
    if(!subscriptionMap[publisher]) subscriptionMap[publisher] = [];
    subscriptionMap[publisher].push(subscriber)
    console.log('subscriptionMap', JSON.stringify(subscriptionMap, null, 2))
};

module.exports = {
    getSubscribers,
    setSubscribers
};
