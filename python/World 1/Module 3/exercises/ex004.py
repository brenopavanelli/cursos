nome = input('Digite um nome: ')
buscador = nome.find('Silva')

if buscador != -1:
    print(True)
else: 
    print(False)