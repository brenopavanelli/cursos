// getters e setters em classes 

const _velocidade = Symbol('velocidade')

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this[_velocidade] = 0;
  }
  set velocidade(valor) {
    if (typeof valor !== 'number') return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor; // altera o valor de velocidade de dentro da classe
  }
  get velocidade() {
    return this[_velocidade]; // busca o valor de velocidade de fora da classe
  }
  acelerar() {
    if (this[_velocidade] > 100) return;
    this[_velocidade] += 10;
  }
  frear() {
    if (this[_velocidade] < 0) return;
    this[_velocidade] -= 10;
  }
}

const c1 = new Carro('Ford', 'Ka', 2010);

// problema
c1.velocidade = 999; // precisa prevenir isso 
// privar esse atributo que ninguem possa acessar diretamente, apenas dentro da classe
