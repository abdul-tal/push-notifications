const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const storage = require('./storage');

const app = express();

//set static path
app.use(express.static(path.join(__dirname, "client"), {index: 'index3.html'}));


app.use(bodyParser.json());

app.post('/subscribe', (req, res) => {
    const { subscription, url } = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ title: 'web push test from SERVER2'});
    console.log('SERVER2', {
        subscription,
        payload,
        url
    });
})

const port = 5002;

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
