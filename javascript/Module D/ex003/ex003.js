// faça um programa que leia o período do dia
// 1h - 5h madrugada, 6h - 12h manhã, 13h-18h tarde, 19h-24h noite

var hora = 13

if (hora >= 1 && hora <= 5){
    console.log('Está de madrugada')
}
if (hora >= 5 && hora <= 12){
    console.log('Está de manhã')
}
if (hora >= 12 && hora <= 18){
    console.log('Está de tarde')
}
if (hora >= 18 && hora <= 24){
    console.log('Está de noite')
}
if (hora > 24){
    console.log('Este horário não existe.')
}
