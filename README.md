# Server Side Event

## How To Run

1. Run server app (it defaults to port 3000).
```
cd server
npm start
```

2. Open `client` directory and open `index.html` (it defaults to localhost:3000).

## Use Case
SSE Use Case is when your client need to receive automatic updates from the server. 

For example, if you build Stocks App that need price update every second, you can use SSE.

On HTTPv1, it limited to max 6 simulateneous-connections per domain per browser.
## SSE vs Websocket
SSE does not replace websocket.

Both Websocket and Server Side Event have different use case, which are:

- SSE is 1-way communication, client can't send any info to the server, while in Websocket it is possible to do 2-way communication from client to server and vice versa,
- SSE is sent periodically on a set interval, while in Websocket data can be sent only when an event occcured,
- SSE run on `http://`, while Websocket run on `ws://` ,
- SSE on client has auto-retry, so the code will be cleaner and focus on data handling, while in Websocket you need to implement your own retry,