a = int(input('Digite um lado do triângulo: '))
b = int(input('Digite um lado do triângulo: '))
c = int(input('Digite um lado do triângulo: '))

if a + b < c and c + b < a and a + c < b:
    print('forma')
else:
    print('não')