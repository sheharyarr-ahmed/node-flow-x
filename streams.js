const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  const readable = fs.createReadStream("test-file.txt");

  readable.on("error", (err) => {
    console.log(err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("File not found");
  });

  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening...");
});
