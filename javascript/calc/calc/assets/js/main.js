function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            alert('Iniciou!');
            this.clickBotoes();
            this.pressionaEnterTeclado();
        },
        
        clickBotoes() {
            document.addEventListener('click', function(e) {
                const eventListener = e.target;  // define qual botão vai ser clicado
                if (eventListener.classList.contains('btn-num')) {
                    this.displayBotao(eventListener.innerText);
                } else if (eventListener.classList.contains('btn-clear')) {
                    this.clearDisplay();
                } else if (eventListener.classList.contains('btn-del')) {
                    this.apagaUm();
                } else if (eventListener.classList.contains('btn-eq')) {
                    this.calculaResultado();
                }

            }.bind(this));
        },

        pressionaEnterTeclado() {
            this.display.addEventListener("keyup", e => {
                if (e.keyCode === 13) this.calculaResultado();
            });
        },

        calculaResultado() {
            let conta = this.display.value;
            if(conta) {
                this.display.value = eval(conta); // função eval() é uma função perigosa, pois ela pode acarretar em falhas de segurança por executar códigos JS dentro de uma string parâetro. 
            }
        },

        displayBotao(valor) {
            this.display.value += valor; 
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();   