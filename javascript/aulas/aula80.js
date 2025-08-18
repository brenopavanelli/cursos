function* gerador1() {
  yield 1;
  yield 2;
  yield 3;
}

const g1 = gerador1();
console.log(g1.next()) // Sem o .value, retorna um objeto com o valor e o done, sendo que o done representa se o gerador terminou ou não. 
console.log(g1.next().value); // 2
console.log(g1.next().value); // 3
console.log(g1.next().done); // true, pois o gerador terminou

console.log('------------------------------------------');

function* gerador2() {
  let i = 0;

  while (true) {
    yield i++;
  }
}

const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
// pode ser infinito, mas não é recomendado, nesta situação a função não termina, então o done é sempre false e a função sempre retorna o próximo valor.

console.log('------------------------------------------');

function* gerador3() {
  yield* gerador1();
  yield 4;
  yield 5;
  yield 6;
}

const g3 = gerador3();
for (let value of g3) {
  console.log(value); // O for of é usado para iterar sobre o gerador, e o value é o valor retornado pelo gerador.
}

// o yield* é usado para delegar a execução para outro gerador, neste caso, o gerador1.

console.log('------------------------------------------');

function* gerador4() {
  yield function() {
    console.log('Vim do yield 1');
  }

  yield function() {
    console.log('Vim do yield 2');
  }

  yield function() {
    console.log('Vim do yield 3');
  }
  // o yield pode retornar uma função, e essa função pode ser chamada depois através do next().value()
}

const g4 = gerador4();
const f1 = g4.next().value;
const f2 = g4.next().value;
const f3 = g4.next().value; 
// o next() é usado para avançar para o próximo yield, e o value é o valor retornado pelo yield.

f1();
f2();
f3();

console.log('------------------------------------------');

function* gerador5() {
  yield 0;
  yield 1;
  return 2;
  // yield 3; (essa parte do código não é executada, pois o return encerra o gerador)
}

