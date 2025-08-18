fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json) )
  .catch(erro => console.log(erro));

function carregaElementosNaPagina(json) {
  const tabela = document.createElement('table');

  const th1 = document.createElement('th');
  th1.innerHTML = 'Nome';
  tabela.appendChild(th1);

  const th2 = document.createElement('th');
  th2.innerHTML = 'Email';
  tabela.appendChild(th2);
  
  for (let pessoa of json) {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerHTML = pessoa.email;
    tr.appendChild(td2);

    tabela.appendChild(tr);
  }
  const resultado = document.querySelector('.resultado');
  resultado.appendChild(tabela);
}


