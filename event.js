const EventEmitter = require("events");
const http = require("http");
const HOST = "127.0.0.1";
const PORT = 8000;

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("there was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

const server = http.createServer((req, res) => {
  console.log("request received");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request received");
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`Port ${PORT} is already in use.`);
    return;
  }

  console.log("Server error:", err.message);
});

server.listen(PORT, HOST, () => {
  console.log("waiting for requests...");
});
