let num = [2, 3, 7, 9, 0]

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
} 

versão simplificada: */

for (let pos in num) {
    console.log(num[pos])
}


