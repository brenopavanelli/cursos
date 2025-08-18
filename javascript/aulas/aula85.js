const numeros = [1, 42, 30, 4, 5, 80, 100, 3, 23, 12, 90, 158, 10, 2, 50, 1000];

// dobre os números com índice par
const numerosDobrados = numeros.map(function(valor, indice) {
    indice % 2 == 0 ? valor = valor * 2 : valor;
    return valor;
})  
console.log(numerosDobrados);

// Lidando com objetos
const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 20 },
    { nome: 'Ana', idade: 28 },
    { nome: 'Carlos', idade: 35 },
    { nome: 'Paula', idade: 22 },
    { nome: 'Lucas', idade: 27 },
    { nome: 'Julia', idade: 29 },
    { nome: 'Fernando', idade: 31 },
    { nome: 'Camila', idade: 26 },
    { nome: 'Rafael', idade: 33 },
    { nome: 'Gabriela', idade: 24 },
    { nome: 'Gustavo', idade: 32 },
    { nome: 'Larissa', idade: 23 },
    { nome: 'Marcelo', idade: 34 },
    { nome: 'Patricia', idade: 21 },
    { nome: 'Ricardo', idade: 36 },
    { nome: 'Sofia', idade: 28 },
    { nome: 'Thiago', idade: 30 },
    { nome: 'Viviane', idade: 25 }
]

// para cada elemento retorne apenas um string com o nome da pessoa
// const nomes = pessoas.map(function(pessoa) {
//     return pessoa.nome;
// })
// com arrow function

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);

// retorne apenas as idades das pessoas
const idades = pessoas.map(pessoa => pessoa.idade);
console.log(idades);

// retorne apenas os nomes das pessoas que terminam com a letra 'a'


const nomesTermidadosEmA = pessoas.map(function(pessoa) {
    if (pessoa.nome.endsWith('a')) return pessoa.nome;
})
// resutado obtido:
// [
//   undefined,  'Maria',   undefined,
//   'Ana',      undefined, 'Paula',
//   undefined,  'Julia',   undefined,
//   'Camila',   undefined, 'Gabriela',
//   undefined,  'Larissa', undefined,
//   'Patricia', undefined, 'Sofia',
//   undefined,  undefined
// ]

// O método .map() sempre cria um novo array com o mesmo número de elementos que o array original.

// solução: Método .filter()
const nomesLimposTerminadosEmA = pessoas.filter(pessoa => pessoa.nome.endsWith('a'))

const arrayFinal = nomesLimposTerminadosEmA.map(pessoa => pessoa.nome);

console.log(arrayFinal);

// inserir o campo de id em cada objeto
const arrayComId = pessoas.map(function(objeto, indice) {
  objeto.id = indice + 1;
  return objeto;
})

console.log(arrayComId);
console.log(pessoas);

// Nesse caso estamos alterando o array original, pois estamos adicionando um novo campo em cada objeto do array. Para evitar isso, podemos criar um novo array com o método .map() e retornar um novo objeto com o campo id adicionado.

const arrayComIdNovo = pessoas.map(function(objeto, indice) {
  const novoObjeto = { ...objeto};
  novoObjeto.id = indice + 5;
  return novoObjeto;
})
// aqui não alteramos o array original, pois estamos criando um novo array com o método .map() e retornando um novo objeto com o campo id adicionado.

console.log(arrayComIdNovo)

                                  




