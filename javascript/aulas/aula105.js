// Métodos de instâncias e estáticos em JS

class ControleRemoto {
    constructor(nome) {
        this.nome = nome;
        this.volume = 0;
    }

    // metodos estáticos são chamados diretamente na classe, sem precisar instanciar um objeto
    static ligar() {
        console.log('Ligando...');
    }

    // métodos de instância são chamados em objetos criados a partir da classe
    mostrarVolume() {
        console.log(`Volume do ${this.nome}: ${this.volume}`);
    }
    aumentarVolume() {
        this.volume += 2;
        console.log(`Volume aumentado de ${this.volume-2} para ${this.volume}`);
    }

    diminuirVolume() {
        this.volume -= 2;
        console.log(`Volume diminuído de ${this.volume+2} para ${this.volume}`);
    }
}

const controle = new ControleRemoto('Controle Remoto');
controle.mostrarVolume();

// Chamando o método estático diretamente na classe
ControleRemoto.ligar();

// Chamando métodos de instância
controle.aumentarVolume();
