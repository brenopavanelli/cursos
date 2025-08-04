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
    
} 

function Cpf(cpfCode) {
    this.cpfCode = cpfCode;
}

Cpf.prototype = {
    sliceCpfToNumbers: function() {
        return this.cpfCode.replace(/\D+/g, '');
    },

    sliceLastTwoDigits: function() {
        return this.sliceCpfToNumbers().slice(-2);
    },

    sliceCpfToOnlyNineNumbers: function() {
        return this.sliceCpfToNumbers().slice(0, 9);
    },

    SumTotal: function(array, startMultplyScale = 10) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i] * (startMultplyScale - i);
        }
        return total;
    },

    getDigits: function() {
        let cpfNumbers = this.sliceCpfToOnlyNineNumbers();

        let total = this.SumTotal(cpfNumbers, 10);
        let firstDigit = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11); 
        
        cpfNumbers += `${firstDigit}`;
        
        total = this.SumTotal(cpfNumbers, 11);
        let secondDigit = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11); 

        return `${firstDigit}${secondDigit}`;
        
    },

    isValid: function() {
    if (this.sliceCpfToNumbers().length !== 11 || /^(\d)\1{10}$/.test(this.sliceCpfToNumbers())) {
        return false;
    } 
    return this.getDigits() === this.sliceLastTwoDigits() 
    }
}

let pessoa1 = new Person('João', '705.484.450-52');
let pessoa2 = new Person('Pedro', '070.987.720-03');
let pessoa3 = new Person('Maria', '025.456.789-01');
let pessoa4 = new Person('Luiz', '123.456.789-0058');
let pessoa5 = new Person('Luiz', '111.111.111-11');

console.log(pessoa1.cpf.isValid()); // true
console.log(pessoa2.cpf.isValid()); // true
console.log(pessoa3.cpf.isValid()); // false
console.log(pessoa4.cpf.isValid()); // false
console.log(pessoa5.cpf.isValid()); // false







