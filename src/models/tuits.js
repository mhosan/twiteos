const mongoose = require('mongoose');
//const Schema = mongoose.Schema();

const tuiteosPcia = mongoose.Schema({
    usuario : String,
    fecha : String,
    texto : String,
    urlTweet : String,
    urlGoogleMaps: String
});
//modelo:
 
module.exports =  mongoose.model('pciatuiteos', tuiteosPcia);