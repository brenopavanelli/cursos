const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({ // modelagem dos dados
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    
});

const HomeModel = mongoose.model('Home', HomeSchema); // criando o model

class Home {
}

module.exports = Home;