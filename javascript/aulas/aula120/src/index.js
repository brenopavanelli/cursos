import GeraCpf from "./modules/GeraCpf.js";
import './assets/css/style.css';


const cpf = new GeraCpf;
console.log('teste')
console.log(cpf.num)
console.log(cpf.isValid(cpf.num));