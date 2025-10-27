require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.emit('pronto'); // Emitindo o evento pronto
    })
    .catch((err) => {
        console.log('Erro ao conectar ao MongoDB:', err);
    });

const routes = require('./routes');
const path = require('path');
const globalMiddleware = require('./src/middlewares/globalMiddleware');

app.use(express.urlencoded({ extends: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); // Existem vários motores de template, o EJS é um deles que mais se aproxima do HTML puro

// Meus middlewares
app.use(globalMiddleware);
app.use(routes);

app.listen(3030, () => {
    console.log('Acessar o servidor: http://localhost:3030');
    console.log('Servidor iniciado na porta: 3030')
});

// arquivo routes controla as rotas, sem exceder sua função, apenas chamando a rota que designa a eecução para seu respectivo controlador