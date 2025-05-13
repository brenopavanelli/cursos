const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

// coletar o estilo da paleta para depois coletar o estilo do bg da paleta
const paleta = document.querySelector('.paleta');
const estilosDaPaleta = getComputedStyle(paleta);
const bg = estilosDaPaleta.backgroundColor;


// para cada paragrafo coletado na NodeList o algoritmo passa o parâmetro de estilo do Background para o pre setado em bg
for (let paragrafo of ps) {
    paragrafo.style.backgroundColor = bg;
}