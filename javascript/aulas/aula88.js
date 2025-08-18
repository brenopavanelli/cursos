const numeros = [1, 42, 30, 4, 5, 80, 100, 3, 23, 12, 90, 158, 10, 2, 50, 1000];
console.log(numeros);

for (let valor of numeros) {
    console.log(valor);
}

// Para arrays pode usar o forEach também, mas somente para arrays

numeros.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
})


