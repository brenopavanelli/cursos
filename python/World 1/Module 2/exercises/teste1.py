ipi = int(input('Digite a porcentam (ex: 15 para 15%): ')) 
peça1 = [int(input('Digite o código da peça 1: ')), int(input('Digite o valor da peça 1: ')), int(input('Digite a quantidade da peça 1: '))]
peça2 = [int(input('Digite o código da peça 2: ')), int(input('Digite o valor da peça 2: ')), int(input('Digite a quantidade da peça 2: '))]

total = (peça1[1]*peça1[2] + peça2[1]*peça2[2])*(ipi/100 + 1)

print(f'O valor toral a ser pago será: {total}')