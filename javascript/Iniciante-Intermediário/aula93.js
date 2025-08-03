// O javascript usa do modelo de protótipos para passar propriedades e métodos de um objeto para outro
// Protótipos: é o termo usado para definir o que foi criado pela primeira vez e que será herdado por todos os outros objetos criados a partir dele, servindo de molde ou modelo

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falar = function() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    } // aqui o this faz referencia ao objeto pessoa e todo objeto novo resultará na criação de uma nova insatância desse método (gastando memória)
    // Para evitar deve-se prototipar os métodoso comuns a todos os objetos
}

Pessoa.prototype = {
    comer: function() {
        console.log(`Estou comendo`);
    },
    andar: function() {
        console.log(`Estou andando`);
    }
};

const p1 = new Pessoa('João', 'Silva');

console.log(p1);
p1.falar();
p1.comer();
p1.andar();

// Primeiro o motor vai checar dentro do objeto, a seguir ele analisa no _proto_