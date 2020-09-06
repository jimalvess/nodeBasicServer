const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200); 
    res.end("Servidor belezura!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Servidor tá em http://${host}:${port}`);
});