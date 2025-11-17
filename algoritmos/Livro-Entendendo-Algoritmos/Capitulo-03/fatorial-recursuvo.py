def fat(x):
    if x == 1:
        print(1)
        return 1
    else:
        res = x * fat(x-1)
        print(res)
        return res

fat(3)

# Repare que cada chamada para a função fat tem seu próprio valor de x formando uma pilha
# primeira saida da pilha -> 1 (ultima função chamada)
# ultima saida da pilha -> 6 (da primeira execução)