const http = require('http'); // Importa o módulo HTTP nativo do Node.js

// Cria o servidor
const server = http.createServer((req, res) => {
  // Define o cabeçalho padrão da resposta
  res.setHeader('Content-Type', 'text/plain');

  // Verifica a URL da requisição
  if (req.url === '/') {
    res.statusCode = 200; // Sucesso
    res.end('Voce esta na pagina inicial');
  } else if (req.url === '/sobre') {
    res.statusCode = 200; // Sucesso
    res.end('Pagina Sobre');
  } else if (req.url === '/contato') {
    res.statusCode = 200; // Sucesso
    res.end('Pagina de Contato');
  } else {
    res.statusCode = 404; // Página não encontrada
    res.end('Pagina nao encontrada');
  }
});

// Define a porta do servidor como 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

