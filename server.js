const http = require("http");
const { PORT, app } = require("./app");

const server = http.createServer(app);

server.listen(PORT, () => console.log(`server is running on ${PORT}`));
