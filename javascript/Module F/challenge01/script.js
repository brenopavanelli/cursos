/* 
1- Adicionar números
2- Escrever no select
3- Regras de números
4- Fazer os cálculos
5- Exibir o resultado 
*/

var n = []

function adicionar() {
    let num = parseInt(document.getElementById('num').value)
    
    if (num < 1 || num > 100) {
        window.alert('[ERRO!] Insira um novo valor e tente novamente')
    } else if (num === '' || isNaN(num)){
        window.alert('[ERRO!] Insira um novo valor e tente novamente')
    } else if (n.indexOf(num) != -1) { // Verifica se o número já está registrado ou não pois o .indexOf() mostra a posição do mesmo caso já esteja registrado, caso não esteja mostrará o valor de -1.
        window.alert('Este número já está registrado')
    } else {
        n.push(num)
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado!`
        ex.appendChild(item)
    }
}

function finalizar() {
    let total = document.getElementById('total')
    let maior = document.getElementById('maior')
    let menor = document.getElementById('menor')
    let soma = document.getElementById('soma')
    let media = document.getElementById('media')

    n.sort((a, b) => a - b) // Colocar os números em ordem crescente
    
    let s = 0
    for (let pos in n) {
        s += n[pos];
    }

    total.innerHTML = `O comprimento do array é de ${n.length}`
    maior.innerHTML = `O maior valor do array é: ${n[n.length - 1]}`
    menor.innerHTML = `O menor valor do array é: ${n[0]}`
    soma.innerHTML = `A soma dos números do array é: ${s}`
    media.innerHTML = `A média dos números do array é: ${s / n.length}`
}