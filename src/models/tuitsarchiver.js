const mongoose = require('mongoose');
//const Schema = mongoose.Schema();

const tuiteosArchiver = mongoose.Schema({
    usuario : String,
    usuariocompleto : String,
    fecha : String,
    texto : String,
    idtweet : String,
    apporigen : String,
    seguidores : Number,
    siguiendo : Number,
    retweets : Number,
    favoritos : Number,
    usuariodesde : String,
    ubicaciones : String,
    usuariodescripcion : String
});
//modelo:
 
module.exports =  mongoose.model('archivertuiteos', tuiteosArchiver);