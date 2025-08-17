// Promises
// Função de callback que será executada quando a promessa for resolvida, em um momento que você não sabe exatamente em que momento (tempo) vai acontecer.

// Exemplo de onde promises vão resolver seu problema:
// quando precisar resolve algo em ordem independende do quanto um processo demorar
// resolver isso com promise é mais simples e mais legível

function numAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) { // função que demora um tempo para ser executada
  setTimeout(() => {
    console.log(msg);
  }, tempo);
}

function esperaAiComPromisse(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE'); // se der erro, rejeita a promessa
    setTimeout(() => {
    }, tempo);
    resolve(msg); // resolve a promessa
  })
}

// pode sair em qualquer ordem
// esperaAi('Frase 1', numAleatorio(1000, 3000));
// esperaAi('Frase 2', numAleatorio(1000, 3000));
// esperaAi('Frase 3', numAleatorio(1000, 3000));

// obrigatoriamente a resposta sai na ordem que foi chamada
esperaAiComPromisse('Frase 1', numAleatorio(1000, 3000)).then(resposta => {
  console.log(resposta);
  return esperaAiComPromisse(222, numAleatorio(1000, 3000)).then(resposta => { // aplica o erro por ser um calor numérico, se for string, não aplica o erro e segue a execução
    console.log(resposta);
    return esperaAiComPromisse('Frase 3', numAleatorio(1000, 3000)).then(resposta => {
      console.log(resposta);
    })
  });
}).catch(e => {
  console.log('ERRO:', e); // se der erro, cai no catch parando a execução
  // catch sempre é erro, lida com erros
});
