function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome, 
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        fala: function(assunto) { // método = toda função dentro de um objeto
            return `${nome} está falando sobre ${assunto}.` // sem usar o "this." ele não pode acessar as propriedades do objeto que estão fora do escopo definido na função, por exemplo a altura. 
        },
        altura,
        peso,

        // Getter
        get imc() { // inserir o get na frente concede uma notação de atributo a função (Getter), dispensando o uso de um parâmetro ao ser chamado. 
           return (this.peso / this.altura ** 2).toFixed(2);
        },

        pesoIdeal() {
            const pesoIdeal = this.altura*100 - 100 - ((this.altura*100 - 150) / 4);
            return pesoIdeal.toFixed(2);
        }
    };
}

const pessoa = criaPessoa('Luiz', 'Souza Matias Cruz', 1.80, 80);

console.log(pessoa)
console.log(pessoa.nomeCompleto());
console.log(pessoa.fala(`Imc, pois o dele foi calculado no valor de: ${pessoa.imc}`)); // Getter foi usado por isso o chamamento não demanda o parenteses pois considera como atributo.
console.log(pessoa.fala(`peso ideal, dizendo que o dele é: ${pessoa.pesoIdeal()}`)); // Getter não foi usado por isso o chamamento demanda o parenteses pois considera como função e não um atributo.
console.log(pessoa.fala(`Seu ultimo nome que é: ${pessoa.defineUltimoNome()}`));

