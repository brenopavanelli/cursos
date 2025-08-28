class ValidaCpf {
  static #FACTOR_FIRST_DIGIT = 10;
  static #FACTOR_SECOND_DIGIT = 11;
  
  static #cpfOnlyNumbers(cpf) { 
    return String(cpf).replace(/\D+/g, '');
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

  static formated(cpf) {
    let code = String(cpf).replace(/\D+/g, '');
    return code.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  
  static digits(cpf) {
    let code = ValidaCpf.#cpfOnlyNumbers(cpf).slice(0, -2);
    let firstDigit = ValidaCpf.#computeDigit(code, ValidaCpf.#FACTOR_FIRST_DIGIT);
    let secondDigit = ValidaCpf.#computeDigit(code + firstDigit, ValidaCpf.#FACTOR_SECOND_DIGIT);
    return `${firstDigit}${secondDigit}`;
  }
  
  static isValid(cpf) {
    let code = ValidaCpf.formated(cpf)
    if (code.length !== 14) return false;
    cpf = ValidaCpf.#cpfOnlyNumbers(cpf);
    return ValidaCpf.digits(cpf) === cpf.slice(-2);
  }
  
}

export default ValidaCpf;


