def collatz(number):
    if number % 2 == 0:
        numero = number // 2
        print(numero)
        return numero
    elif number % 2 == 1:
        numero = number * 3 + 1
        print(numero)
        return numero


try:
    n = input("Digite um número: ")
    num = collatz(int(n))

    while (num != 1):
        num = collatz(num)
except:
    print("Erro no sistema. Insira um número inteiro")