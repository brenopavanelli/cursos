console.log('====================================');
console.log('CONCATENANDO ARRAYS');
console.log('====================================');

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(array1);
console.log(array2);

const array3 = array1.concat(array2)
console.log(array3);

// spread operator espalha os elementos do array em valores individuais
const array4 = [...array1, ...array2]
console.log(array4);
