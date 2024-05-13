# Faça um programa que leia a largura e altura de uma parede e calcule a quantidade de tinta necessária para pintá-la. 
largura = int(input('Digite a largura da parede: '))
altura = int(input('Digite a altura da parede: '))
area = largura * altura
tinta = int(area / 2) #2m² por litro
print(f'Para cobrir uma área de {area} metros, será necessário {tinta} litros de tinta.')
