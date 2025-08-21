import {nome as nome2, sobrenome2, falaNome} from './module1.js';
import qualquerNome from './module1.js';
import * as MeuModulo from './module2.js';
import dadoPadrao from './module4.js';

console.log(dadoPadrao);

console.log(qualquerNome(5,3)); // aqui o default é o que está sendo importado, pois é a saída padrão do módulo

console.log(MeuModulo);

console.log(nome2, sobrenome2);
falaNome();

function soma(a, b) {
  return a + b;
}

console.log(soma(5, 5))

const objeto = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}

const objetoComIdade = {...objeto, idade: 30}