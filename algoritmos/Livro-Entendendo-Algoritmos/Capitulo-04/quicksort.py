def quicksort(array):
    if len(array) < 2: # checa se o array é vazio ou de um elemento
        return array 
    else:
        pivo = array[0] 
        menores = [i for i in array[1:] if i <= pivo] # separa no subarray de menores e coloca para trás do pivo
        maiores = [i for i in array[1:] if i > pivo] # separa no subarray de maiores e coloca para frente do pivo
        return quicksort(menores) + [pivo] + quicksort(maiores) # realiza um quicksort em cada grupo de subarrays e une com o pivô (centro) retornando um array ordenado, além disso chama recursivamente a função para que ela fique progressiva
    
print (quicksort([10, 5, 2, 3]))