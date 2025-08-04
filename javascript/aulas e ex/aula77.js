function Pessoa(nome, idade) {
  let cpf = '000.000.000-00'
  
  this.nome = nome;
  this.idade = idade;

  this.falaOi = function() {
      console.log(`Oi!`);
  }
  this.falaApresentacao = function() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa('João', 20);
const pessoa2 = new Pessoa('Maria', 25);

console.log(pessoa1);
console.log(pessoa2);
pessoa1.falaOi();
pessoa2.falaApresentacao();
pessoa1.falaApresentacao();
