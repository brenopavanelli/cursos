require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.emit('pronto'); // Emitindo o evento pronto
    })
    .catch((err) => {
        console.log('Erro ao conectar ao MongoDB:', err);
    });

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const globalMiddleware = require('./src/middlewares/globalMiddleware');

app.use(express.urlencoded({ extends: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'kasjnjsfasdfe545',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }
});

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