'''
Crie um programa que:
-leia o valor de X
-faça o laço de repetição e leia X notas de provas, faça a somatória e calcule a média das provas
-leia o valor de Y
-faça o laço de repetição e leia Y notas de trabalho, faça a somatória e calcule a média dos trabalhos
-calcula a média bimestral= 0.3*MEDIATRABALHO + 0.7*MEDIAPROVA
-mostre a média bimestral
'''

x = int(input('Digite a quantidade de provas: '))
y = int(input('Digite a quantidade de trabalhos: '))
notas_provas = []
notas_trabalhos = []

for x in range(x):
    notas_provas.append(int(input(f'Digite a nota da {x+1}º prova: ')))
for y in range(y):
    notas_trabalhos.append(int(input(f'Digite a nota do {y+1}º trabalho: ')))

media_bimestral = 0.3 * (sum(notas_provas) / len(notas_provas)) + 0.7 * (sum(notas_trabalhos) / len(notas_trabalhos))

print(f'A média bimestral é de: {media_bimestral}')