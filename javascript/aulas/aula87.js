// Como unir 
// Filter + map + reduce

const numeros = [1, 42, 30, 4, 5, 80, 100, 3, 23, 12, 90, 158, 10, 2, 50, 1000];
console.log(numeros);

const numerosPares = numeros.filter(valor => valor % 2 === 0);
console.log(numerosPares);

const numerosParesDobrados = numerosPares.map(valor => valor * 2);
console.log(numerosParesDobrados);

const somaDosParesDobrados = numerosParesDobrados.reduce(function(soma, valor) {
    return soma + valor;
})
console.log(somaDosParesDobrados);