const mongoose = require('mongoose');
//const Schema = mongoose.Schema();

const tuiteosArba = mongoose.Schema({
    usuario : String,
    fecha : String,
    texto : String,
    urlTweet : String
});
//modelo:
 
module.exports =  mongoose.model('arbatuiteos', tuiteosArba);