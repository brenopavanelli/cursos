// For tradicional, For in e for of 
// Diferenças e caso de uso

const nome = 'Luiz';
const nomes = ['Carlos', 'Andre', 'Lucas', 'Hamilton']

// retorna índices - for padrão - só funciona em dados iteráveis
for (let indice = 0; indice<nome.length; indice++) {
    console.log(nome[indice]);
}

// retorna índices 
for (let indice in nome) {
    console.log(nome[indice]);
}

// retorna valores - só funciona em dados iteráveis
for (let valor of nome) {
    console.log(valor);
}

//  for diferenciado exclusivo de arrays
nomes.forEach(function(elemento){ console.log(elemento) })