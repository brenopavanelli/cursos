e = 1.0  
fatorial = 1.0 
n_termos=[3, 4, 5]

for i in range(1, n_termos[0]): 
    fatorial *= i  
    e += 1 / fatorial

print(e)