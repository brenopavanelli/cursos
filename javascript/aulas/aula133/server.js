const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extends: true }));
app.use(routes);

app.listen(3030, () => {
    console.log('Acessar o servidor: http://localhost:3030');
    console.log('Servidor iniciado na porta: 3030')
});

// arquivo routes controla as rotas, sem exceder sua função, apenas chamando a rota que designa a eecução para seu respectivo controlador