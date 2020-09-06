const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

//Pra pegar o conteúdo HTML
//Pra não chamar ele em cada requisição e virar uma lesma:
let leArquivo; 

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(leArquivo);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/arquivo.html")
    .then(contents => {
        leArquivo = contents;
        server.listen(port, host, () => {
            console.log(`Servidor rodando em http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Arquivo html ausente. Erro: ${err}`);
        process.exit(1);
    });