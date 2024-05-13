function calcular() {
    let num = parseInt(document.getElementById('num').value); // importa o número inteiro no campo imput
    let res = document.getElementById('res') // importa na variável res a tag select

    res.innerHTML = '' // limpa os dados html para recomeçar a contagem

    if (num === '' || isNaN(num)) { // verifica se o campo esta vazio ou se não é um número
        window.alert('[ERRO!] Insira os dados e tente novamente.');
    } else {
        for (let c = 1; c <= 10; c++)  { // cria um contador que começa em 1 até 10 e sempre adiciona +1
            let item = document.createElement('option') // cria options dentro do select
            item.text = `${num} x ${c} = ${num * c}` // altera o texto de cada option
            res.appendChild(item) // declara que as options são filhas do select com id "res"
        }
    }
}