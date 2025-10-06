const fs = require('fs');

module.exports = async (caminho) => {
    try {
        const dados = await fs.promises.readFile(caminho);
        return JSON.parse(dados);
    } catch (e) {
        console.log(e);
    }
}