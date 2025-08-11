// recriando o ex de validar CPF usando classes

class Cpf {
  constructor(code) {
      this.code = code;
  }
  get digits() {
    function sliceToOnlyNumbers(array) {
      return array.replace(/\D+/g, '');
    }
    let cpf = sliceToOnlyNumbers(this.code).slice(0, -2);

    function sumTotal(array, startMultiplyScale = 10) {
      let total = 0;
      for (let i = 0; i < array.length; i++) {
        total += array[i] * (startMultiplyScale - i);
      }
      return total;
    }

    function computeDigit(total) {
      let digit = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11);
      cpf += digit;
      return digit
    }

    let total = sumTotal(cpf);
    let firstDigit = computeDigit(total)
    total = sumTotal(cpf, 11);
    let secondDigit = computeDigit(total);

    return `${firstDigit}${secondDigit}`;
  }
  isValid() {
    if (this.code.length !== 14) return false;
    return this.digits === this.code.slice(-2);
  }
  
}

const cpf1 = new Cpf('123.456.789-05');
const cpf2 = new Cpf('705.484.450-52');
const cpf3 = new Cpf('070.987.720-03');
const cpf4 = new Cpf('025.456.789-01');
const cpf5 = new Cpf('123.456.789-0058');
const cpf6 = new Cpf('111.111.111-11');

console.log(cpf1.isValid())
console.log(cpf2.isValid())
console.log(cpf3.isValid())
console.log(cpf4.isValid())
console.log(cpf5.isValid())
console.log(cpf6.isValid())

