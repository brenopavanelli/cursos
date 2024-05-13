print('Vamos fazer uma análise de variável')
a = input('Digite algo: ')
print(f'O tipo primitivo desse valor é: {type(a)}')
print(f'Só tem espaços: {a.isspace()}')
print(f'É um número: {a.isnumeric()}')
print(f'É alfabético: {a.isalpha()}')
print(f'É alfanumérico: {a.isalnum()}')
print(f'Está em maiúsculo: {a.isupper()}')
print(f'Está em minúscula: {a.islower()}')
print('Fim da análise')

# .is....() deve conter estes parênteses
