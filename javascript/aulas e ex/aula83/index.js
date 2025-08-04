import { pularLinha, definirTitulo, inserirLinha } from './assets.js';
definirTitulo('Filter - filtrando o array');
pularLinha();

const numeros = [1, 25, 3, 43, 5, 6, 7, 8, 9, 10];
console.log(numeros);

// Forma mais antiquadra, melhor criar um callback com função anonima
// function callbackFiltro(valor, indice, array) {
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFiltro);

// arrow function bem resumida
const numerosFiltrados = numeros.filter(valor => valor > 10); // sempre vai retornar um array menor ou do mesmo tamanho do original
console.log(numerosFiltrados);


// Exemplo 2

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

// Retorne as pessoas que tem o nome com 7 letras ou mais: 
const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 7);
console.log(pessoasComNomeGrande);

// Retorne as pessoas com mais de 50 anos
const pessoasComMaisDe50Anos = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(pessoasComMaisDe50Anos);

// Retorne as pessoas que o nome termina com a letra "a"
const pessoasQueTerminamComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith("a"));
console.log(pessoasQueTerminamComA);








