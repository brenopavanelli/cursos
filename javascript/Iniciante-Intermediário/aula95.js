// Abstrações
// Caneca, Camiseta, Lápis -> Produto (aumento e desconto)

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
};
Produto.prototype.aumento = function(percentual) {
    this.preco *= (1 + percentual);
};
Produto.prototype.desconto = function(percentual) {
    this.preco *= (1 - percentual);
};

function Camiseta (nome, preco, estoque, cor, tamanho) {
    Produto.call(this, nome, preco, estoque);
    this.cor = cor;
    this.tamanho = tamanho;
};
Camiseta.prototype = Object.create(Produto.prototype); // Herança, herda os métodos e propriedades do prototype da função construtora Produto
Camiseta.prototype.constructor = Camiseta; // Define o construtor correto para Camiseta pois antes apontava para Produto
Camiseta.prototype.lavagem = function() {
    console.log(`Lavando a ${this.nome}, a cor ${this.cor} desbota um pouco.`);
};
Camiseta.prototype.AjustarTamanho = function(novoTamanho) {
    this.tamanho = novoTamanho;
};

const produto1 = new Produto('Lápis', 20, 3);
console.log(produto1);
const camiseta1 = new Camiseta('Camiseta', 30, 12, 'Preta', 'M');
console.log(camiseta1);
camiseta1.aumento(0.2); // Aumenta o preço da camiseta em 20%
console.log(camiseta1.preco); // Exibe o novo preço da camiseta após o aumento
camiseta1.lavagem(); // Chama o método de lavagem da camiseta
camiseta1.AjustarTamanho('G'); // Ajusta o tamanho da camiseta para 'G'
console.log(camiseta1.tamanho); // Exibe o novo tamanho da camiseta após o ajuste

// Neste cenário, a função Camiseta herda os métodos e propriedades da função Produto, permitindo que objetos do tipo Camiseta tenham acesso aos métodos de aumento e desconto definidos no prototype de Produto. Isso demonstra o conceito de herança em JavaScript, onde uma função construtora pode herdar comportamentos de outra, mas a camiseta tem propriedades e métodos exclusivos que o produto genérico não possui.
