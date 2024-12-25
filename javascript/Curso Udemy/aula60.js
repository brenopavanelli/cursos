// Escreva uma função que recebe 2 números e retorne o maior deles

function maior(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}

// resumindo em uma linha com arrow function
const maior2 = (num1,num2) => num1 >= num2 ? num1 : num2;

console.log(maior2(5,3));

