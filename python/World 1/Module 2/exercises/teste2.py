h_inicio = int(input('Digite a hora de início: '))
h_termino = int(input('Digite a hora de término: '))

if h_inicio > 24 or h_termino > 24 or h_inicio == h_termino:
    print('Insira horas válidas')
elif h_inicio > h_termino:
    tempo_h = (24 - h_inicio) + h_termino
    tempo_min = (24*60 - h_inicio*60) + h_termino*60
    print(f'O evento durou {tempo_h} horas ou {tempo_min} minutos, terminando no dia seguinte!')
else: 
    tempo_h = h_termino - h_inicio
    tempo_min = h_termino*60 - h_inicio*60
    print(f'O evento durou {tempo_h} horas ou {tempo_min} minutos!')