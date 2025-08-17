let nome = 'Breno';
let linguagemProg = 'JavaScript';
let horas = 10;

function encontrarPeriodo(horaDoDia) {
    let periodo;

    if (horaDoDia >= 0 && horaDoDia <= 6) {
        periodo = 'Madrugada';
    } else if (horaDoDia >= 7 && horaDoDia <= 12) {
        periodo = 'Manhã';
    } else if (horaDoDia >= 13 && horaDoDia <= 18) {
        periodo = 'Tarde';
    } else if (horaDoDia >= 19 && horaDoDia <= 24) {
        periodo = 'Noite';
    } else {
        periodo = 'periodo inválido';
    };

    return periodo;
};

let periodo = encontrarPeriodo(horas);

console.log(`Meu nome é ${nome}. Estou aprendendo ${linguagemProg} às ${horas} da ${periodo}`);