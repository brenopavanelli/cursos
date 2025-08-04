// Getter e Setter
// Getter => PEGAR o valor (executado na leitura)
// Setter => SETAR (definir) o valor (executado na escrita/atribuição, menos na inicialização).

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    const validaEstoque = function(valor) {
        if (typeof valor !== 'number') throw new TypeError('Mensagem de erro');
    };
    validaEstoque(estoque);

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        
        get: function() {
            return estoque;
        },
        set: function(valor) {
            validaEstoque(valor);
        }
    });
}

const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1);
console.log(produto1.estoque);
