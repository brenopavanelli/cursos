const fs = require('fs').promises;

module.exports = async (caminhoArquivo, dados) => {
    try {
        await fs.writeFile(caminhoArquivo, dados, { flag: 'w' })
        console.log('Arquivo salvo com sucesso!');
    } catch (e) {
        console.log(e);
    }
}
