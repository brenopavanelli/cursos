// Heranaça em classes JavaScript
// Herda tudo dos pais, mas pode adicionar novos métodos e propriedades que os pais não têm.
class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.nome} está ligado.`);
        } else {
            console.log(`${this.nome} já está ligado.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.nome} está desligado.`);
        } else {
            console.log(`${this.nome} já está desligado.`);
        }
    }
}
// Ao invés disso: 
// const d1 = new Dispositivo('Computador');  
// console.log(d1);
// d1.ligar();
// d1.desligar();
// Podemos criar uma classe específica para um tipo de dispositivo, como Computador, que herda de Dispositivo.
// Podemos extender a classe Dispositivo para criar uma classe específica, como Computador.

class Computador extends Dispositivo {} 

const c1 = new Computador('Computador');
console.log(c1);

// também podemos extender e adicionar novos métodos ou propriedades
class Celular extends Dispositivo {
    constructor(nome, modelo, cor) {
        super(nome); // Chama o construtor da classe pai
        this.modelo = modelo;
        this.cor = cor;
    }
    tocar() {
        if (this.ligado) {
            console.log(`Tocando...`);
        } else return;
    }
    mostrarModelo() {
        console.log(`Modelo do celular: ${this.modelo}`);
    }
}

// Recomendado não extender muitas classes, pois isso pode tornar o código mais complexo e difícil de manter.
// O ideal é usar herança quando realmente faz sentido, como no caso de dispositivos que compartilham comportamentos comuns.