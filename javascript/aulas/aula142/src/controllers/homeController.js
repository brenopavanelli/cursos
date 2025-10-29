exports.paginaInicial = (req, res) => {
    
    res.render('index');
}

exports.envioDeFormulario = (req, res) => {
    res.send('Formulario Recebido!')
}