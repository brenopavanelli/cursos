# Script que lê o preço de um produto e calcula o novo preço com desconto. 

preço = int(input('Digite o preço do produto: '))
desconto = float(input('Digite o desconto do produto (valor decimal): '))
print(f'O valor final será de {preço * (1 - desconto)} reais')