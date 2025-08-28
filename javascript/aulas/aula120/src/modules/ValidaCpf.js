class ValidaCpf {
  static CPF_LENGTH = 11;
  static FACTOR_FIRST_DIGIT = 10;
  static FACTOR_SECOND_DIGIT = 11;

  #cpfOnlyNumbers(array) {
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

  static get formated() {
    return this.code.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }
  
  get digits() {
    let cpf = ValidaCpfCpf.#cpfOnlyNumbers(this.code).slice(0, -2);
    let firstDigit = ValidaCpf.#computeDigit(cpf, Cpf.FACTOR_FIRST_DIGIT);
    let secondDigit = ValidaCpf.#computeDigit(cpf + firstDigit, Cpf.FACTOR_SECOND_DIGIT);

    return `${firstDigit}${secondDigit}`;
  }
  
  isValid(cpf) {
    cpf = ValidaCpf.formated
    if (this.code.length !== 14) return false;
    cpf = ValidaCpf.cpfOnlyNumbers(cpf);
    return this.digits === cpf.slice(-2);
  }
  
}

export default ValidaCpf;


