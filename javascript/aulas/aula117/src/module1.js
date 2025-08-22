const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';

export const peso = 80; // exportando diretamente

function falaNome() {
    console.log(`Meu nome é ${nome} ${sobrenome}`);
}  

export { nome, sobrenome as sobrenome2, falaNome };

export default function subtracao(a, b) {
  return a - b;
} // arquivo padrao exportado por esse módulo
// Cada módulo pode ter apenas um export default