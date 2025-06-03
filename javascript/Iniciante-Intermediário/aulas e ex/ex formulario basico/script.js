function geral() {
    const form = document.querySelector('.form')
    const registro = document.querySelector('.registro')

    const pessoas = []

    function recebeEventoForm(evento) {
        evento.preventDefault()
        // Coleta de dados
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const idade = form.querySelector('.idade')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        const Pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value,
        }

        pessoas.push(Pessoa)
        console.log(pessoas)

        registro.innerHTML += `<hr>`
        registro.innerHTML += `<p>Nome: ${nome.value}</p>`
        registro.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`
        registro.innerHTML += `<p>Idade: ${idade.value}</p>`
        registro.innerHTML += `<p>Peso: ${peso.value}</p>`
        registro.innerHTML += `<p>Altura: ${altura.value}</p>`
        registro.innerHTML += `<br>`

    }

    form.addEventListener('submit', recebeEventoForm)
}

geral()