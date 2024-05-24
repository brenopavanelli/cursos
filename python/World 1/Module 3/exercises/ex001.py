nome = str(input('Digite seu nome: ')).strip()

print(nome.upper())
print(nome.lower())


print(len(nome) - nome.count(' '))

frase = nome.split()
print(len(frase[0]))
