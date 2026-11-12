
const { PeerServer } = require("peer");

const port = process.env.PORT || 10000;

const server = PeerServer({
  port,
  path: "/",
  proxied: true,
  allow_discovery: true
});

server.on("connection", (client) => {
  console.log("Jogador conectado:", client.getId());
});

server.on("disconnect", (client) => {
  console.log("Jogador desconectado:", client.getId());
});

console.log("Servidor PeerJS iniciado na porta", port);
