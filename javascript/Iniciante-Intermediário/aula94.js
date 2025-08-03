// Manipulando prototypes
// Não é muito recomendado fazer alterações nas prototypes direto pela propriedade __proto__, pois isso pode dar problemas em outras situações, mas é possível alterar o prototype de um objeto com o méatodo Object.setPrototypeOf(objeto, novoPrototype)

const prototypePersonalizado = function() {
    this.propriedadePadrao = 'Valor da propriedade padrão';
    this.funcao = function() {
        return 'Valor da funcao';
    };
};

const novaPropriedadePadrao = new prototypePersonalizado();

const objeto1 = {
    propriedade1: 'Valor da propriedade 1',
    // __proto__: Object.Prototype por padrão
};

console.log(objeto1.__proto__); // Objeto.prototype
Object.setPrototypeOf(objeto1, novaPropriedadePadrao); // Alterando o prototype para o prototypePersonalizado armazenado em novaPropriedadePadraom (variável criada acima)

console.log(objeto1.__proto__);
console.log(objeto1.propriedadePadrao);
console.log(objeto1.funcao());

// __________________________________________________________________________________________________

// Inserindo prototypes em objetos literais

const Produto = function(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
};

Produto.prototype.desconto = function(percentual) {
    this.preco *= (1 - percentual);
};
Produto.prototype.aumento = function(percentual) {
    this.preco *= (1 + percentual);
};
Produto.prototype.repor = function(quantidade) {
    this.estoque += quantidade;
};

const produto1 = new Produto('Camiseta', 20, 3);
const produto2 = new Produto('Caneta', 1.8, 10);
const produto3 = {
    // __proto__: Produto.prototype,  Aponta para o prototype da função construtora, mas não é recomendado usar essa notação para alteração
    nome: 'Lápis',
    preco: 4.5,
    estoque: 41 
}

console.log(produto1.__proto__);
console.log(produto2.__proto__);
console.log(produto3.__proto__);

Object.setPrototypeOf(produto3, Produto.prototype); // Alterando o prototype para o prototype da função construtora, mas é recomendado usar essa notação para alteração

console.log(produto1.__proto__);
console.log(produto2.__proto__);
console.log(produto3.__proto__);