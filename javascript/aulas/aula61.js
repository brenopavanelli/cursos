// Escreva uma função que receba 2 números (dimensões de uma foto) e diga se é paisagem ou retrato
// Paisagem: largura > altura != Retrato: largura < altura

function ePaisagem(l,a) {
    if (l>a) {
        return 'Paisagem';
    }
    return 'Retrato';
}

function ePaisagem2(l,a) {
    return l > a ? 'Paisagem' : 'Retrato';
}

const ePaisagem3 = (l,a) => l > a;
// retorna true ou false para a pergunta é Paisagem?

console.log(ePaisagem3(5,3));