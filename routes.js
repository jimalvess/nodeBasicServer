const http = require("http");

const host = 'localhost';
const port = 8000;

const livros = JSON.stringify([
    { titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988 },
    { titulo: "O Profeta", autor: "Kahlil Gibran", ano: 1923 }
]);

const autores = JSON.stringify([
    { nome: "Paulo Coelho", pais: "Brasil", nascimento: 1947 },
    { nome: "Kahlil Gibran", pais: "Libano", nascimento: 1883 }
]);

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/livros":
            res.writeHead(200);
            res.end(livros);
            break
        case "/autores":
            res.writeHead(200);
            res.end(autores);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Adicione o caminho /livros ou /autores"}));
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});