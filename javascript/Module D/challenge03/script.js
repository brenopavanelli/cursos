function calcular() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var delta = (b * b) - (4 * a * c); 
    var res = document.getElementById('res');
    var res2 = document.getElementById('res2');
    
    if (a == 0) {
        window.alert('[ERRO!] O valor de "a" não pode ser igual a 0.')
        res.innerHTML = `[ERRO!] Insira novos valores e tente novamente.`;
    }
    else if (delta < 0) {
        res.innerHTML = `O valor de delta é: <strong>${delta}</strong>.`;
        res2.innerHTML = `Não há soluções reais na equação pois: <strong>delta < 0</strong>.`;
        
    }
    else if (delta == 0) {
        var x1 = (-b + delta**0.5) / (2 * a);
        res.innerHTML = `O valor de delta é: <strong>${delta}</strong>.`;
        res2.innerHTML = `O resultado é: <strong>${x1}</strong>.`;
        
    }
    else if (delta > 0) {
        var x1 = (-b + delta**0.5) / (2 * a);
        var x2 = (-b - delta**0.5) / (2 * a);
        res.innerHTML = `O valor de delta é: <strong>${delta}</strong>.`;
        res2.innerHTML = `Os resultados são: <strong>${x1}</strong> e <strong>${x2}</strong>.`;
    }
}


