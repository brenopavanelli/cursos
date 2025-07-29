import { pularLinha, definirTitulo, inserirLinha } from './assets.js';
definirTitulo('Método Splice');
pularLinha();

const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos'];
console.log(nomes);
// nome.splice(onde começa, quantos elementos, o que adicionar))
// Diferença entre positivos e negativos: Positivos começam do 0 e vão pra frente, já os negativos começam do -1 e vão de trás para frente.

inserirLinha();
console.log('Remover o último nome do array (simulando um pop): ');
const removidos = nomes.splice(4, 1); // retorna ['Carlos']

console.log(nomes);
console.log(`Removidos: ${removidos}`);

inserirLinha();
// Adicionar um nome a partir do índice 2
console.log('Adicionar um nome a partir do índice 2: ');
console.log(nomes);
nomes.splice(2, 0, 'Lucas');
console.log(nomes);

inserirLinha();
// Adicionar um nome a partir do índice 2, substituindo o nome que está no índice 2
console.log('Adicionar um nome a partir do índice 2, substituindo o nome que está no índice 2: ');
console.log(nomes);
nomes.splice(2, 1, 'Ronaldo');
console.log(nomes);

inserirLinha();
// Simulando métdos de array
console.log('Simulando métodos de array: ')
pularLinha();

// Pop
console.log('Pop: ');
console.log(nomes);
nomes.pop();
console.log(nomes);
// somente com o splice
nomes.splice(-1, 1);
console.log(nomes);
pularLinha();

// Push
console.log('Push: ');
console.log(nomes);
nomes.push('Roberto');
console.log(nomes);
// somente com o splice
nomes.splice(nomes.length, 0, 'Arnaldo'); // nomes.length é o tamanho do array, colocar o -1 nesse caso empurra o nome anterior para o final, ou seja, não adiciona o nome no final como o push faz.
console.log(nomes);
pularLinha();

// Shift
console.log('Shift: ');
console.log(nomes);
nomes.shift();
console.log(nomes);
// somente com o splice
nomes.splice(0, 1);
console.log(nomes);
pularLinha();

// Unshift
console.log('Unshift: ');
console.log(nomes);
nomes.unshift('Bernardo');
console.log(nomes);
// somente com o splice
nomes.splice(0,0, 'Bianca');
console.log(nomes);
pularLinha();
inserirLinha();



