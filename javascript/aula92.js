// Métodos Úteis para Objetos
// Copiar objetos

const produto = {
    nome: 'Caneta',
    preco: 1.8,
    desconto: 0.2
}

const outraCoisa = produto; // Atribuição por referência, aponta para o mesmo endereço de memória
const outraCoisa2 = { ...produto }; // Spread Operator, copia o objeto
const outraCoisa3 = { ...produto, material: 'Plástico' }; // Spread Operator, copia o objeto e também permite adicionar novas propriedades
console.log(produto);
console.log(outraCoisa);
console.log(outraCoisa2);
console.log(outraCoisa3);

// Mostrar as chaves do objeto em forma de array
console.log(Object.keys(produto));

// Mostrar as informações das propriedades de um objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Mostrar os valores do objeto em forma de array
console.log(Object.values(produto));
