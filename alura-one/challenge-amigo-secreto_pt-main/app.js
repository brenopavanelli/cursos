//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('#amigo');
    amigos.push(input.value);

    let lista = document.querySelector('#listaAmigos');
    
    lista.innerHTML += `<li>${input.value}</li>`;
    input.value = '';
}

function sortearAmigo(array) {
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    let resultado = document.querySelector('#resultado');

    resultado.innerHTML = `<li>${array[indiceAleatorio]}</li>`;
}

