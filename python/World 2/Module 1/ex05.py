idade = int(input('Digite a idade: '))

if idade < 9: 
    print('mirim')
elif idade <= 14: 
    print('infantil')
elif idade <= 19: 
    print('junior')
elif idade <= 20: 
    print('sênior')
else: 
    print('master')