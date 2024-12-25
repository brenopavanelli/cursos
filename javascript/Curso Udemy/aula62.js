// Escreva uma função que recebe um número e retorne o seguinte: 
// Número divisível por 3 = Fizz
// Número divisível por 5 = Buzz
// Número divisível por 3 e por 5 = FizzBuzz
// Número não divisível por 3 e por 5 = Retorna o próprio número
// Checar se o número é numero

// Usar a função com números do 0 a 100

const eDivisivelPorTres = (num) => num % 3 == 0;
const eDivisivelPorCinco = (num) => num % 5 == 0;

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return NaN;
    if (eDivisivelPorTres(numero) && eDivisivelPorCinco(numero)) return 'FizzBuzz';
    if (eDivisivelPorTres(numero)) return 'Fizz';
    if (eDivisivelPorCinco(numero)) return 'Buzz';
    return numero;
}

for (let n=0;n<100;n++) {
    console.log(n, fizzBuzz(n));
}

// código que eu tinha feito: 
/*
for (let n=0;n<100;n++) {
    let validacao = eNumero(n);
    if (validacao==true) {
        if(eDivisivelPorTres(n) && eDivisivelPorCinco(n)) {
            console.log('FizzBuzz');
        } else if (eDivisivelPorCinco(n)) {
            console.log('Buzz');
        } else if (eDivisivelPorTres(n)) {
            console.log('Fizz');
        } else {
            console.log(n);
        }
    } else {
        console.log('Não é um número.');
    }
}
*/