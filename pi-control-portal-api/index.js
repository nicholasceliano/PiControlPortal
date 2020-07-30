const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
    console.log('conn');
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});