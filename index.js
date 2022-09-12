const http = require("http");

// 3rd party modeule ws
const webSocket = require("ws");

const server = http.createServer((res, req) => {
  res.end("I am connected");
});

const wss = new webSocket.Server({ server });

wss.on("headers", (headers, req) => {
  console.log(headers);
});

wss.on("connection", (ws, req) => {
  ws.send("hello World");
  ws.on("message", (msg) => {
    console.log(msg);
  });
});

server.listen(8000);
