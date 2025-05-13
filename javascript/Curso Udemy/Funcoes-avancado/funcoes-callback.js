function GerarSegundos(min=1000, max=3000){
    const seg = Math.random() * (max - min) + min; // gera um número aleatório entre 1 segundo e 3 segundos
    return Math.floor(seg);
}

function f1() {
    setTimeout(function() {
        console.log('f1'); 
    }, GerarSegundos())  
}

function f2() {
    setTimeout(function() {
        console.log('f2');
    })
}

function f3() {
    setTimeout(function() {
        console.log('f3');
    })
}

f1();
f2();
f3();
console.log("olá");