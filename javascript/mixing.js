// Factory functions + Prototype
// Demonstrando conceito de composição por mixings
// Isso permite que você adicione comportamentos específicos a um objeto sem a necessidade de herança tradicional, promovendo a reutilização de código e a flexibilidade.
// Consiste em criar funções que retornam objetos com métodos específicos e, em seguida, combinar esses objetos em um novo objeto conforme necessário.

const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
};

const criarPessoa = (nome, sobrenome) {
    const pessoaPrototype = (...falar, ...comer, ...beber),
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
};

const criarPessoaMuda = (nome, sobrenome) {
    const pessoaPrototype = {...comer, ...beber },
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}
