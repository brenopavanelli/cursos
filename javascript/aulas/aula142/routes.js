const express = require('express');
const routes = express.Router();
const homeControler = require('./src/controllers/homeController.js');
const contatoController = require('./src/controllers/contatoController.js');
const globalMiddleware = require('./src/middlewares/globalMiddleware.js');

// Rotas da home 
routes.get('/', globalMiddleware, homeControler.paginaInicial);
routes.post('/', homeControler.envioDeFormulario);

// Outras rotas
routes.get('/contato', contatoController.paginaInicial)

module.exports = routes;