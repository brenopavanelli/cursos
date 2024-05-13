valor = int(input('Digite o valor em reais: '))
notas = [100, 50, 10, 5, 1]
n_notas = {}

for nota in notas:
    quantidade = valor // nota
    n_notas[nota] = quantidade

print(n_notas)
