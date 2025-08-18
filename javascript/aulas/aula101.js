// Estrutura de dados map

// exemplo de dados brutos vindo de uma API

const pessoas = [
  {id: 3, nome: 'Maria'},
  {id: 2, nome: 'João'},
  {id: 1, nome: 'Ana'}
];

// fazendo dessa forma os dados fogem da ordem original, pois são ordenados pelo id
const novasPessoas = {} // objeto vazio criado para receber os dados
for (const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas[id] = {...pessoa};
}

console.log(novasPessoas);

// Para corrigir, deve-se usar o .map() que mantém a ordem original dos dados
const novasPessoas2 = new Map();
for (const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas2.set(id, {...pessoa});
}

console.log(novasPessoas2);

// Posso iterar sobre o Map 
for (const pessoa of novasPessoas2) {
  console.log(pessoa);
}
for (const [identificador, {id, nome}] of novasPessoas2) {
  console.log(identificador, id, nome);
}
