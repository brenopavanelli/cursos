// Factory functions + Prototype

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  const prototypePessoa = {
    ligar() {
        console.log('Fazendo ligação...');
    },
    desligar() {
        console.log('Desligando...');
    },
    enviarMensagem() {
        console.log('Enviando mensagem...');
    }
  }
  
  return Object.create(prototypePessoa, {
    marcaCelular: { value: marcaCelular }, 
    tamanhoTela: { value: tamanhoTela, writable: false },
    capacidadeBateria: { value: capacidadeBateria }
  })
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);

console.log(celular1.__proto__)
