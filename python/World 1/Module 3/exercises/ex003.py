nome = input('Digite o nome de uma cidade: ')
cidade = nome.split()
buscador = cidade[0].find('Santo')

if buscador != -1:
    print('Sua cidade começa com "Santo"!')
else: 
    print('Sua cidade não começa com "Santo"!')