const port = 3000;
const Primus = require("primus");

const primus = Primus.createServer({ port, transformer: "websockets" });

primus.on("connection", (ws) => {
  console.log("Connect", port);

  ws.on("data", (msg) => {
    primus.write(msg);
  });
});
