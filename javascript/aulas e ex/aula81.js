const nomes = ['João', 'Maria', 'Pedro', 'Ana'];
const nomes2 = new Array('João', 'Maria', 'Pedro', 'Ana') // Outra forma de criar um array --> menos usada
console.log(nomes);

nomes[2] = 'Carlos';
delete nomes[3]; // Remove o elemento no índice 3 e deixa um espaço vazio

console.log(nomes);

console.log('---------------------------------------------------')
console.log('Copiar um array'); // Copiar um array

const nomesCopiados = [...nomes]; // Spread operator (...) --> Copia o array nomes para o array nomesCopiados pois se simplesmente fizermos nomesCopiados = nomes, ambos apontariam para o mesmo endereço de memória ou seja seriam o mesmo array

console.log(nomesCopiados);

console.log('---------------------------------------------------')
console.log('Adicionar um elemento no final do array');

 // Adicionar um elemento no final do array
nomes.push('Bia');
console.log(nomes);

console.log('Remove o último elemento do array');
// remove o último elemento do array
nomes.pop();
console.log(nomes);

console.log('Remove uma fatia do array')
// coleta fatias de um array
const nomesFatiados = nomes.slice(0, 1); // remove os elementos do índice 0 até o índice 1 (o -2 é o penúltimo elemento e o -1 é o último elemento)
console.log(nomesFatiados);
