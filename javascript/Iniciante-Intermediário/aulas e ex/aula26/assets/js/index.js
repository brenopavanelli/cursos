function main() {
    const formulario = document.querySelector("#formulario");
    const resultado = document.querySelector("#resultado");

    formulario.addEventListener('submit', function submitFormulario(evento) { 
        evento.preventDefault(); // previne o envio do formulario

        // coleta os dados
        const inputPeso = formulario.querySelector("#peso");
        const inputAltura = formulario.querySelector("#altura"); 

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);


        if (!peso && !altura) {
            apresentarResultados('Dados Inválidos', false);
            return;
        }
        if (!peso) {
            apresentarResultados('Peso inválido.', false);
            return;
        }
        if (!altura) {
            apresentarResultados('Altura inválida.', false);
            return;
        }
        
        window.alert(peso);
        window.alert(altura);
        
        let imc = calcularImc(peso, altura);
        window.alert(imc);
        
        const nivel = identificarNivel(imc);
        
        const msg = escreverMensagem(imc, nivel);

        apresentarResultados(msg, true);

    });

    const calcularImc = (peso, altura) => peso / (altura * altura); 

    function identificarNivel(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[4];
        if (imc >= 29.9) return nivel[5];
        if (imc >= 34.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];

    }

    function criarParagrafo(validadeDosDados) {
        const paragrafo = document.createElement('p'); //inicia um elemento p
        if (validadeDosDados) {
            paragrafo.classList.add('paragrafo-resultado');
        } else {
            paragrafo.classList.add('bad');
        }
        resultado.appendChild(paragrafo); // insere o <p> dentro da div com id #resultado
        return paragrafo;
    }

    const escreverMensagem = (imc, nivel) => msg = `O seu IMC é: ${imc.toFixed(2)} (${nivel})`;

    function apresentarResultados(msg, validadeDosDados) { 
        const paragrafo = criarParagrafo(validadeDosDados);
        paragrafo.innerHTML = msg; 
    }

    
    
}

main();