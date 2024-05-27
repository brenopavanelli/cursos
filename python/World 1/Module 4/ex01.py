import random 

nums = [0,1,2,3,4,5]
escolhido = random.choice(nums)
tentativa = ''

while tentativa != escolhido: 
    tentativa = int(input('Digite um número: '))
    if tentativa == escolhido: 
        print('Acertou!')
    else: 
        print('Errou!')
