// recriando o ex de validar CPF usando classes

/* 
  Métodos públicos: podem ser acessados de qualquer lugar
  Métodos privados: só podem ser acessados dentro da própria classe
  Métodos estáticos: não podem ser acessados por instâncias da classe, mas sim pela classe em si, servem como métodos auxiliares (se não usar this dentro do método ou se for uma regra de negócio que não depende de uma instância)
  Métodos estáticos privados: só podem ser acessados dentro da própria classe como pertence a classe em si. São regras de negócio exclusivas da classe
*/

class Cpf {
  static CPF_LENGTH = 11;
  static FACTOR_FIRST_DIGIT = 10;
  static FACTOR_SECOND_DIGIT = 11;

  static #cpfOnlyNumbers(array) {
    return array.replace(/\D+/g, '');
  }

  static #computeDigit(array, factor) {
    let cpfNumbers = Array.from(array, Number);
    let total = cpfNumbers.reduce((acc, value) => {
      if (factor > 1) {
        acc += value * factor;
        factor--;
      }
      return acc;
    }, 0)

    const rest = total % 11;
    return rest < 2 ? 0 : 11 - rest;
  }

  constructor(code) {
      this.code = code;
  }

  get formated() {
    return this.code.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }
  
  get digits() {
    let cpf = Cpf.#cpfOnlyNumbers(this.code).slice(0, -2);
    let firstDigit = Cpf.#computeDigit(cpf, Cpf.FACTOR_FIRST_DIGIT);
    let secondDigit = Cpf.#computeDigit(cpf + firstDigit, Cpf.FACTOR_SECOND_DIGIT);

    return `${firstDigit}${secondDigit}`;
  }
  
  isValid() {
    if (this.code.length !== 14) return false;
    return this.digits === this.code.slice(-2);
  }
  
}

const cpf1 = new Cpf('638.842.612-31');
const cpf2 = new Cpf('705.484.450-52');
const cpf3 = new Cpf('070.987.720-03');
const cpf4 = new Cpf('025.456.789-01');
const cpf5 = new Cpf('123.456.789-0058');
const cpf6 = new Cpf('111.111.111-11');
const cpf7 = new Cpf('11111111111');

console.log(cpf1.isValid()); // false
console.log(cpf2.isValid()); // true
console.log(cpf3.isValid()); // true
console.log(cpf4.isValid()); // false
console.log(cpf5.isValid()); // false
console.log(cpf6.isValid()); // true

console.log(cpf7.digits);
console.log(cpf7.formated);



