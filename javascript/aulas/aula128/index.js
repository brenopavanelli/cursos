const fs = require('fs').promises;
const { readdir } = require('fs');
const path = require('path');

// escanear as pastas
async function scanDirectories(dir) {
    dir = dir || path.resolve(__dirname);
    const files = await fs.readdir(dir);
    exibeArquivos(files, dir);
} 

function exibeArquivos(files, dir) {
    for (let file of files) {
        const fileFullPath = path.resolve(dir, file);
        const stats = fs.stat(file);

        console.log(file);
    }
}

scanDirectories();