// criando objetos de forma literal, inserindo dados diretamente
const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2010,
    cor: 'Branco',
    preco: 15000,
    combustivel: 'Gasolina',
    cambio: 'Manual',
    portas: 4,
    airbag: true,
    aircondition: true,
    direcao: 'Hidráulica',
    motor: '1.0',
    potencia: '70cv',
    acelerar() {
        console.log(`O carro ${this.marca} ${this.modelo} acelerou! Demonstrando sua potência de ${this.potencia}`);
    } // functions dentro de objetos são chamadas de métodos
} 
console.log(carro);
console.log(carro['marca']);
console.log(carro.modelo);

const chave = 'cor';
console.log(carro[chave]);

carro.acelerar();

// iniciando com um construtor de objeto
const pessoa1 = new Object();
pessoa1.nome = 'João';
pessoa1.sobrenome = 'Maria';
pessoa1.falar = function() {
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
}
pessoa1.falar();

console.log(pessoa1);

// Muito importante criar moldes para criar objetos
// Factory function
// Construtor function
// Padrões de projeto que são utilizados para criar objetos, você deve escolher para aplicar em seu projeto
                                  
// factory function
function criarCarro(marca, modelo, ano, cor, preco, combustivel, cambio, portas, airbag, aircondition, direcao, motor, potencia) {
    return {
        marca,
        modelo,
        ano,
        cor,
        preco,
        combustivel,
        cambio,
        portas,
        airbag,
        aircondition,
        direcao,
        motor,
        potencia,
        acelerar() {
            console.log(`O carro ${this.marca} ${this.modelo} acelerou! Demonstrando sua potência de ${this.potencia}`);
        },
        get descricao() { // get é uma propriedade que retorna um valor "Getter", na hora de chamar o método não precisa colocar os parênteses (exemplo: carro.descricao)
            return `${this.marca} ${this.modelo} ${this.ano}`;
        }
    }
}

// construtor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falar = function() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    }
}

// criam um objeto a partir de uma função construtora, esse objeto vazio usa do termo "this" para referenciar os atributos e métodos do objeto, que é apontado pelo uso do "new"
const pessoa2 = new Pessoa('João', 'Almeida');
console.log(pessoa2);
