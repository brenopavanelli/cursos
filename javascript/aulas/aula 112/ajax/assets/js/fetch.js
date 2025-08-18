// Recriando o exercício de AJAX com XMLHttpRequest e promises com Fetch API

document.addEventListener('click', e => {
    const elemento = e.target;
    if(elemento.tagName === 'A') { // Verifica se o elemento clicado é um link pela tag <a>
        e.preventDefault(); // Previne o comportamento padrão do link
        carregaPagina(elemento); // Chama a função para carregar a página
    };
});

async function carregaPagina(elemento) {
    
    // Usando async/await com Fetch API
    const href = elemento.getAttribute('href'); // Pega o atributo href do link clicado
    const response = await fetch(href); // Usa a Fetch API para fazer a requisição
    if (response.status !== 200) throw new Error('Erro ao carregar a página'); // Verifica se o status da resposta é 200 (OK)
    const responseText = await response.text(); // Converte a resposta para texto
    exibeResultado(responseText); // Exibe o resultado na div com a classe

    /* Usando Then
    fetch(href) // Usa a Fetch API para fazer a requisição
        .then(response => { return response.text() })
        .then(html => { exibeResultado(html); }) // Exibe o resultado na div com a classe 'resultado'
        .catch(e => { console.error('Erro ao carregar a página: ', e); }); // Se ocorrer um erro, exibe no console e exibe uma mensagem de erro na div
    */
        
}

function exibeResultado(responseText) {
    document.querySelector('.resultado').innerHTML = responseText; // Exibe o resultado na div com a classe 'resultado'
}
