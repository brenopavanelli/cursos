const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;

module.exports.nome = nome; // exportando o nome de forma completa
module.exports.NomeCompleto = sobrenome; // a variavel nao precisa ter o mesmo nome da chave

exports.falaNome = falaNome; // exportando o falaNome de forma simplificada
