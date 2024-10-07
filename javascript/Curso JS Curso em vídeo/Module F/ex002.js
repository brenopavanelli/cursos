let conjunto = [1, 7, 3, 4, 6, 9,]
let pos = conjunto.indexOf(6)

if (pos == -1) {
    console.log('Não encontramos o valor desejado')
} else {
    console.log(`O valor ${conjunto[pos]} está na posição ${pos}`)
}