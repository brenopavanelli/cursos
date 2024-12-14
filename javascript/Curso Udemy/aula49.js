let nome = 'Luiz'; // Hierarquia global 
var nome2 = 'Carlos';

// Let tem escopo de bloco
// Var tem escopo de função

if (true) {
    let nome = 'Cabba'; // Hierarquia secundária
    var nome2 = 'Luiz' 

    if (true) {
        var nome2 = 'Ronaldo'
        let nome = 'Otavio'; // Hierarquia principal (console busca aqui primeiro)
        console.log(nome,nome2);
    }
}
console.log(nome,nome2); // Luiz, Ronaldo
// diferença de escopo