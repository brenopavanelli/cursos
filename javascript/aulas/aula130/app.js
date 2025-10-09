const express = require('express');
const app = express();



// CRUD -> Create(POST), Read(GET), Update(PUT), Delete(DELETE)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/contato', (req, res) => {
    res.send('Página de Contato');
});


app.listen(3000, () => {
    console.log('Acessar o servidor: http://localhost:3000');
    console.log('Servidor iniciado na porta: 3000')
});