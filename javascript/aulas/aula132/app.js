const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // Solicita para o Express interpretar os dados do formulário

app.get('/', (req, res) => {
    res.send('<form action="/" method="POST"><input type="text" name="nome" placeholder="Digite seu nome"><button>Enviar</button></form>');
});

app.get('/testes/:id/:nomeDeUsuario', (req, res) => { 
    console.log(req.params);
    res.send('Página de Testes');
});


app.post('/', (req, res) => {
    console.log(req.body); 
    res.send('REcebi a requisição do formulário');
});





app.listen(3000, () => {
    console.log('Acessar o servidor: http://localhost:3000');
    console.log('Servidor iniciado na porta: 3000')
});