// atribuição via desestrutração

const numeros = [1,2,3,4,5,6,7,8,9];

//                   0       1       2
//                 0 1 2   0 1 2   0 1 2     indices
const numeros2 = [[1,2,3],[4,5,6],[7,8,9]];

// let [primeiroNumero, segundoNumero] = numeros;
let [primeiroNumero, segundoNumero, ...resto] = numeros; // rest ou spread operator

console.log(primeiroNumero, segundoNumero,resto);
console.log(numeros2[1][2]);