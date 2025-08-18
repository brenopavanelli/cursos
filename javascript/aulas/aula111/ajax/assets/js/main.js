// Pegar conteúdo de outra página HTML com request, usando XMLHttpRequest e promises
// Criamos uma função request que recebe um objeto, com o construtor xhr que contém o método, a URL e as funções de sucesso e erro
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); // true para requisição assíncrona e false para síncrona
        xhr.send();

        xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) { // Verifica se o status da resposta é 2xx (código HTTP de sucesso)
            resolve(xhr.responseText);
        } else {
            reject(xhr.statusText); // Se não for, chama a função de erro com o status de texto da resposta
        }
        });
    })
}

// Adiciona um evento de clique no documento para capturar cliques 
// Nesse if ele verifica se o elemento clicado é um link (tag <a>), e se for, previne o comportamento padrão do link e executa a função assíncrona carregaPagina passando o elemento clicado como argumento
document.addEventListener('click', e => {
    const elemento = e.target;
    if(elemento.tagName === 'A') { // Verifica se o elemento clicado é um link pela tag <a>
        e.preventDefault(); // Previne o comportamento padrão do link
        carregaPagina(elemento); // Chama a função para carregar a página
    };
});

async function carregaPagina(elemento) {
    const href = elemento.getAttribute('href'); // Pega o atributo href do link clicado
    const objectConfig = {
        method: 'GET', // Define o método HTTP como GET
        url: href // Define a URL da página a ser carregada
    };
    try {
        const responseText = await request(objectConfig); // Faz a requisição e espera a resposta
        exibeResultado(responseText); // Exibe o resultado na div com a classe 'resultado'
    } catch(e) {
        console.error('Erro ao carregar a página:', e); // Se ocorrer um erro, exibe no console
        exibeResultado('<h1>Erro ao carregar a página</h1>'); // Exibe uma mensagem de erro na div
    } 
}

function exibeResultado(responseText) {
    document.querySelector('.resultado').innerHTML = responseText; // Exibe o resultado na div com a classe 'resultado'
}