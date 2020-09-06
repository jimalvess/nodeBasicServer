const http = require("http");

const host = 'localhost';
const port = 8000;

//Usa o curl http://localhost:8000 senão este jaguara vai dar download:
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    //Content Disposition manda que exiba como um arquivo separado:
    res.setHeader("Content-Disposition", "attachment; filename=testejim.csv");
    res.writeHead(200);
    res.end(`id,nome,email\n1,Jim Alves,jimalvess@gmail.com`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});