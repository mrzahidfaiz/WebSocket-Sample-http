import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const PORT: number = 8080;

const server = http.createServer(function (request: any , response: any) {
    console.log(`Received Request From ${request.url} at ${new Date()}`);
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hi there');
});

const wss = new WebSocketServer({ server });

let currentUsers: number;
wss.on('connection', function connection(ws) {
    ws.on('error', (error) => console.log('Error in WebSocket Connection' + error));

    // ws.on('message', function message(data, isBinary){});

    console.log(`current connections ${++currentUsers}`)
    ws.send('Hello, from Server');
});


server.listen(PORT, `Server is listening on ${PORT} at ${new Date()}`);