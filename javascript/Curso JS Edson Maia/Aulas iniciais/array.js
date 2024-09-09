// Arrays (recomendado para armazenar dados do mesmo tipo)

let array = ['indice0', 'indice1', 'indice2']

// ADICIONAR (no final)
array.push('indice3')

// REMOVER (do final)
array.pop()

// ADICIONAR (no início)
array.unshift('indice', 'teste')

// REMOVER (do início)
array.shift()

// REMOVER valores específicos 
// splice(numero do indice que quer remover, numero de elementos que serao removidos)
array.splice(1,2)

// COPIAR arrays (fatiar)
// slice(posição inicial, quantos serão pegos)
let copia_do_array = array.slice(1,2)

// VER tamanho do array (quantidade de elementos)
array.length

// OPERADOR ESPECIAL 
// ----- SPREAD OPERATOR ... ----- (copiar o conteúdo todo de um array)
let numeros = [1,2,3,4,5]
let mais_numeros = [...numeros, 6, 7, 8]

// ACESSAR posições específicas 
// array[indice]
array[0]
array[10] = 'indice10'