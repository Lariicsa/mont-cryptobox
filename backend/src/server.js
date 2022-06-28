const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
require('dotenv').config();

const { ACTIONS } = require('./helpers/constants');
const { getRates } = require('./helpers/rates');
const utils = require('./helpers/utils');

const allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Requested-With, Accept, x-jwt-token"
    );
    
    // intercept options method
    if ("OPTIONS" === req.method) {
        res.send(200);
    } else {
        next();
    }
};

//CORS config
app.use(express.json());
app.options("*", cors());
app.use(allowCrossDomain);

// Static Files
const path = __dirname + '/views/';
app.use(express.static(path));

app.get('/', (req, res, next) => {
    res.sendFile(path + "index.html");
});

// Getting rates for first time
let rates = {};
(async () => {
    rates = await getRates();
})();

// WebSocket Configuration 
const wss = new WebSocket.Server({ server: server, path: "/ws" });
const incomingMessage = (ws, message) => {
    const json = utils.stringToJson(message);
    if (json === null) {
        handleErrorMessage(ws, 'Error parsing message to Json.');
        return
    }
    switch (json.action) {
        case ACTIONS.SUBSCRIBE: {
            const topic = `${json.market}`;
            handleTopicMessage(ws, topic);
            break;
        }
        default:
            handleErrorMessage(ws, `Unknown message action ${json.action}`)
    }
}

const handleTopicMessage = (ws, topic) => {
    const payload = {}
    payload[topic] = rates[topic];
    ws.send(JSON.stringify(payload))
}
const handleErrorMessage = (ws, description) => {
    const data = { error: description }
    ws.send(JSON.stringify(data))
}
wss.on('connection', (ws) =>{
    ws.on('message', (message) => incomingMessage(ws, message));
});

const publishTopics = async () => {
    rates = await getRates();
    for (const [key, value] of Object.entries(rates)) {
        const payload = {}
        payload[key] = value
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(payload));
            }
        });
    }
}
setInterval(() => { publishTopics(); }, 30000);

// entry point
console.log(`Enviroment ${process.env.ENV}`);
const PORT = process.env.PORT || 9001;
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;
