valor_casa = int(input('Digite o valor da casa: '))
salario = int(input('Digite o salário: '))
anos = int(input('Digite o tempo o empréstimo: '))

parcela = valor_casa / (12 * anos)

print(parcela)

if parcela >= salario * 0.3:
    print('Não pode fazer o financiamento.')
else: 
    print(f'O financiamento será feito em parcelas de {parcela}')