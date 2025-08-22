const path = require('path'); // CommonJS

// Se não exportar nada desse módulo(arquivo), não precisa o projeto não vai saber o que tem dentro

module.exports = { // Configuração do webpack p/ exportar
  mode: 'development', // Modo de desenvolvimento
  entry: './src/index.js', // Arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },// Usar resolve permite que o caminho seja criado de forma correta independente do sistema operacional usando qualquer barra
  module: {
    rules: [{
      exclude: /node_modules/, // Exclui a pasta node_modules
      test: /\.js$/, // Expressão regular para pegar todos os arquivos que terminam com ".js"
      use: {
        loader: 'babel-loader', // Loader que vai ser usado, já instalado com npm 
        options: {
          presets: ['@babel/env'] // Preset que vai ser usado
        }
      }
    }]
  },
  devtool: 'source-map' // Mapeamento de código para debugar no navegador mostrando o erro no arquivo original e não no bundle
  
};