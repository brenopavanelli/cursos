const escrever = require('./modulos/escrever');
const ler = require('./modulos/ler');
const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'..', 'arquivo.json');

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const json = JSON.stringify(pessoas, '', 2); // 2 é o espaço

async function iniciar() {
    await escrever(caminhoArquivo, json);
    const dados = await ler(caminhoArquivo);
    console.log(dados);
}

iniciar();