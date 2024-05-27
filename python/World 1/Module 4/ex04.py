dis = int(input('Digite a distância da viagem: '))

if dis < 200:
    preco = dis * 0.5 
else:
    preco = dis * 0.45 

print(preco)