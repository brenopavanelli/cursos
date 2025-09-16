// modulos do node
// importando modulos
const mod1 = require('./mod1');
const mod2 = require('./mod1').falaNome;

console.log(mod1);
console.log(mod1.falaNome());
console.log(mod2());

const somar = require('./modulo-soma');
console.log(somar(2, 2));

const Cachorro = require('./modulo-classe');
const cachorro1 = new Cachorro('Dog');
console.log(cachorro1);
cachorro1.latir();
