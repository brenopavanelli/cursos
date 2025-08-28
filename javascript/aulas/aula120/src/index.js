import GeraCpf from "./modules/GeraCpf.js";
import ValidaCpf from "./modules/ValidaCpf.js";
// import './assets/css/style.css';

function encontrarCpfValido() {
  let cpfGerado;
  let tentativas = 0;
  const limiteDeTentativas = 100000000; 

  console.log('Iniciando busca por um CPF válido...');

 
  while (!ValidaCpf.isValid(cpfGerado)) {
    let cpf = new GeraCpf();
    cpfGerado = cpf.num;
    tentativas++;

    if (tentativas > limiteDeTentativas) {
      console.log('Limite de tentativas atingido. Algo pode estar errado.');
      return null;
    }
  }

  console.log(`CPF válido encontrado após ${tentativas} tentativas!`);

  return ValidaCpf.formated(cpfGerado);
}

const cpfValido = encontrarCpfValido();
if (cpfValido) {
  console.log('CPF Válido Gerado:', cpfValido);
}