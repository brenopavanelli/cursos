const express = require('express');
const routes = express.Router();
const homeControler = require('./controllers/homeController.js');
const contatoController = require('./controllers/contatoController.js')

// Rotas da home 
routes.get('/', homeControler.paginaInicial);
routes.post('/', homeControler.envioDeFormulario);

// Outras rotas
routes.get('/contato', contatoController.paginaInicial)

module.exports = routes;