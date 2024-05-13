function verificar () {
    var num = document.getElementById('num')
    var data =  new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')

    if (num.value.length == 0 || num.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    }
    else {
        var img = document.getElementById('img')
        var sex = document.getElementsByName('check')
        var idade = ano - Number(num.value)
        var gen = ''
        if (sex[0].checked) {
            img.src = 'assets/imgs/man.png'
            var gen = 'homem'
        } 
        else if (sex[1].checked) {
            img.src = 'assets/imgs/women.png'
            var gen = 'mulher'
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
    }
}