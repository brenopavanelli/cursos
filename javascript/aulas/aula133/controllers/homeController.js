exports.paginaInicial = (req, res) => {
    res.send('<form action="/" method="POST"> Nome do Cliente: <input type="text" name="qualquerCoisa" > <br> <button>Enviar</button>');                                                                                                                                                                                                 
}

exports.envioDeFormulario = (req, res) => {
    res.send('Formulario Recebido!')
}