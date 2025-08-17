// Polimorfismo

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if (valor > this.saldo) {
    console.log(`Falha ao sacar o valor de R$ ${valor.toFixed(2)}. Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    return; 
  }
  this.saldo -= valor;
  this.verSaldo();
}
Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
}
Conta.prototype.verSaldo = function() {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo); // Aponta para a função construtora Conta que será executada no contexto de ContaCorrente, servindo como estrutura base (herança), ou seja, ContaCorrente herda de Conta.
  this.limite = limite;
}
// NESTE MOMENTO -----
// console.log(contaCorrente.__proto__) // ainda não herdou o prototype de Conta, apenas o construtor

ContaCorrente.prototype = Object.create(Conta.prototype); // Herdando o prototype de Conta para ContaCorrente
ContaCorrente.prototype.constructor = ContaCorrente; // Aponta o construtor de ContaCorrente para apontar para ContaCorrente, que antes apontava para Conta

ContaCorrente.prototype.sacar = function(valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Falha ao sacar o valor de R$ ${valor.toFixed(2)}. Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    return;
  }
  this.saldo -= valor
  this.verSaldo();
}

const contaCorrente = new ContaCorrente(25, 7, 0, 100);
console.log(contaCorrente.__proto__); // agora herdou o prototype de Conta

contaCorrente.sacar(100000);
contaCorrente.depositar(10);
contaCorrente.sacar(25);
contaCorrente.depositar(100);

function ContaPoupanca(agencia, conta, saldo, reserva) {
  Conta.call(this, agencia, conta, saldo);
  this.reserva = reserva;
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.verReserva = function() {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | Reserva: R$${this.reserva.toFixed(2)}`);
}

ContaPoupanca.prototype.transferirParaReserva = function(valor) {
  if (valor > this.saldo) {
    console.log(`Falha ao transferir o valor de R$ ${valor.toFixed(2)}. Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    return;
  }
  this.saldo -= valor;
  this.reserva += valor;
  this.verSaldo();
  this.verReserva();
}

console.log(ContaPoupanca.prototype);

const contaPoupanca = new ContaPoupanca(25, 7, 0, 100);
contaPoupanca.depositar(100);
contaPoupanca.sacar(20);
contaPoupanca.transferirParaReserva(50);
contaPoupanca.sacar(50);


