// Validação de CPF
// 705.484.450-52
// 070.987.720-03

// Pegar os 9 dígitos antes do "-" e fazer uma multiplicação regressiva
// 10 * 7 = 70 (10 com o primeiro dígito))
// 9 * 0 = 0 (9 com o segundo dígito)
// ...
// Total = soma das multiplicações

// Depois tentar pegar o resto da divisão 
// 11 - (total % 11) = (primeiro dígito) 
// Se o número for maior que 9, considerar 0

// Pegar os 9 dígitos antes do "-" e fazer uma multiplicação regressiva
// 11 * 7 = 70 (11 com o primeiro dígito))
// 10 * 0 = 0 (10 com o segundo dígito)
// ...
// Total = soma das multiplicações

// Depois tentar pegar o resto da divisão 
// 11 - (total % 11) = (segundo dígito) 
// Se o número for maior que 9, considerar 0

// Comparar os dígitos obtidos com os dígitos do CPF 
// Se for igual, CPF válido, caso contrário, CPF inválido


function Person(name, cpfCode) {
    this.name  = name;
    this.cpf = new Cpf(cpfCode);
    
} // Construtor function

function Cpf(cpfCode) {
    this.cpfCode = cpfCode;
    this.cpfNumbers = this.cpfCode.replace(/\D+/g, '');
    this.cpfDigits = this.cpfCode.slice(-2)  // Get the last two digits
}

Cpf.prototype = {
    cpfIsValid: function() {
      let cpfOnlyNumbers = this.cpfNumbers.slice(0, -2);
      console.log(cpfOnlyNumbers);
      for (let digit of cpfOnlyNumbers) {
        console.log(digit);
      }
    }
}

const cpf = new Cpf('705.484.450-52');
console.log(cpf);
console.log(cpf.cpfIsValid())


