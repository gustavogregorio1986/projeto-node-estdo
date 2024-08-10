const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON no body das requisições
app.use(express.json());

// Importa as rotas do módulo aviaoRoutes
const aviaoRoutes = require('../routes/aviaoRoutes');
app.use('/', aviaoRoutes);

app.get('/avioes', (req, res) => {
  res.send('Página');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
