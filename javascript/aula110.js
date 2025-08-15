function numAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// Exestem outras funções que são promises em JS, mas vou criar uma função que retorna uma promessa para testar o conceito de promises
// A função esperaAi recebe uma mensagem e um tempo, e retorna uma promessa que resolve após o tempo especificado
// Se a mensagem não for uma string, a promessa é rejeitada com um erro
function esperaAi(msg, tempo) { // promise basica
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE'); 
    setTimeout(() => {
    }, tempo);
    resolve(msg); 
  })
}

// Para evitar aninhamentsos na hora de chamar as promises, podemos usar o async/await
async function executaPromise() { // função async que permite usar await dentro dela
  try {
    const fase1 = await esperaAi('Fase 1', numAleatorio(1000, 3000)); // await serve para esperar a promessa ser resolvida
    console.log(fase1);
    const fase2 = await esperaAi('Fase 2', numAleatorio(1000, 3000));
    console.log(fase2);
    const fase3 = await esperaAi('Fase 3', numAleatorio(1000, 3000));
    console.log(fase3);
    console.log('Terminamos a promise');
  } catch (e) {
    console.log(e);
  }
}

executaPromise();