const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');

const app = express();

//set static path
app.use(express.static(path.join(__dirname, "client"), {index: 'index2.html'}));
// app.use(express.static(path.join(__dirname, "client")));


app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
    const { subscription, category } = req.body;
    console.log('subscription.endpoint', subscription.endpoint)
    // const result = await models.subscriptions.findOne({
    //     where: {
    //         endpoint: subscription.endpoint
    //     }
    // })

    res.status(201).json({});
    const result = await models.subscriptions.findOrCreate({
        where: {
            endpoint: subscription.endpoint
        },
        defaults: {
            subscription: JSON.stringify(subscription),
            category: category,
            endpoint: subscription.endpoint
        }
    })
    const pushid = subscription.endpoint.substr((subscription.endpoint.length - 8), subscription.endpoint.length);
    const payload = JSON.stringify({ title: 'web push test from SERVER1'});
    console.log('SERVER1', JSON.stringify({
result
    }, null, 2));
    console.log(result[0].subscription)
})

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
