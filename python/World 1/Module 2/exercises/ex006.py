# Leitor de ajuste salarial (trabalho por hora)

horas = int(input('Digite quantas horas você trabalha por dia: '))
dias = int(input('Digite quantos dias você trabalha por semana: '))

question = input('Você deseja sabe seu salario por semana ou por mês?')

if question == "semana" or "Semana":
    salario = 87.50 * horas * dias 
    print(f'Seu salario semanal é de {salario}')
else:
    salariu = 87.50 * horas * dias * 4
    print(f'Seu salario mensal é de {salariu}')
