import {nome, sobrenome, falaNome} from './module1.js';

console.log(nome, sobrenome);
falaNome();

function soma(a, b) {
  return a + b;
}

const objeto = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}

const objetoComIdade = {...objeto, idade: 30}