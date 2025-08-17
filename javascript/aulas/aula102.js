// Classes 

class Pessoa {
  constructor(nome, idade) { // Aqui deve receber os parâmetros
    this.nome = nome;
    this.idade = idade;
  }
  // Aqui deve ser criado os métodos
  // Class já define esses métodos como públicos(prototype) automaticamente
  apresentar() {
    console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa('João', 25);

console.log(pessoa1);
pessoa1.apresentar();
