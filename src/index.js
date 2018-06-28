const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/datos').then(()=>{
    console.log('Conexión a la db ok');
});

//config el server
app.set('port', process.env.PORT || 7000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//midlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//rutas del servidor
app.use(require('./routes/index'));

//arrancar el web server...
app.listen(app.get('port'), (req, res)=>{
    console.log('Servidor escuchando en el puerto', app.get('port'));
});
