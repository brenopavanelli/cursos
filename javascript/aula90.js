// Object.freeze trava o objeto completo
// Mas e se quiser travar apenas uma propriedade?
// defineProperty para travar uma propriedade
// defineProperties para travar mais de uma propriedade

function Produto(nome, preco, estoque) {
    Object.defineProperties(this,{
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor da chave
            writable: true, // pode alterar o valor?
            configurable: true // configuravel? pode deletar, reconfigurar, redefinir configurações?
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor da chave
            writable: true, // pode alterar o valor?
        }
    })


    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode alterar o valor?
        configurable: true // configuravel? pode deletar, reconfigurar, redefinir configurações?
    })
}

const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1);
console.log(Object.keys(produto1)); // mostra as chaves do objeto
