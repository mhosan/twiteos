const router = require('express').Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const pciatuiteos = require('../models/tuits');
const arbatuiteos = require('../models/tuitsarba');
const archivertuiteos = require('../models/tuitsarchiver'); 

router.get('/', (req, res) =>{
    res.render('index');
});

router.get('/add-tweet', (req, res)=>{
    res.render('add-tweet');
});

router.post('/add-tweet', (req, res)=>{
    const nuevoTweet = new pciatuiteos();
    nuevoTweet.usuario = req.body.usuario;
    nuevoTweet.texto = req.body.texto;
    nuevoTweet.fecha = req.body.fecha;
    nuevoTweet.save(err =>{
        if (err) return next(err);
        res.redirect('/add-tweet');
    });
});

router.get('/tweetsarchiver/:page',(req, res, next)=>{
    let perPage = 20;
    let page = parseInt(req.params.page);
    archivertuiteos.find({}).skip((perPage * page) - perPage).limit(perPage).exec((err, tuiteos)=>{
        if(err){
            console.log(err);
        } else {
            archivertuiteos.count((err, count)=>{
                if(err){
                    console.log(err);
                } else {
                    let totalDePaginas = Math.ceil(count / perPage);
                    let i = 0;
                    var vector = []; 
                    if(page > 5){
                        i = page - 4;
                    } else {
                        i = 1;
                    }
                    let k = 0
                    if (i == (totalDePaginas - 4)){
                        for (j = (i - 4); j <= (parseInt(page) + 4) && j <= totalDePaginas; j++){
                            vector[k] = j;
                            k++;
                        }
                    } else {
                        for (j = i; j <= (parseInt(page) + 4) && j <= totalDePaginas; j++){
                            vector[k] = j;
                            k++;
                            if (i == 1){
                                for (m = 6; m < 10; m++){
                                    vector[m] = m;
                                }
                            }
                        }
                    }
                    if (page==1) {
                        //estoy en la primer pagina
                        console.log('estoy en la primer pagina');
                        res.render('tuiteosarchiver', {
                            'paginaUno' : true,
                            'paginaUltima' : false,
                            'tuiteos' : tuiteos,
                            'current' : page,
                            'pages' : totalDePaginas,
                            'porPagina' : perPage,
                            'vector' : vector
                        });
                        } else if (page == totalDePaginas) {
                        //estoy en la ultima pagina
                        console.log('estoy en la ultima pagina');                        
                        res.render('tuiteosarchiver', {
                            'paginaUno' : false,
                            'paginaUltima' : true,
                            'tuiteos' : tuiteos,
                            'current' : page,
                            'pages' : totalDePaginas,
                            'porPagina' : perPage,
                            'vector' : vector
                        });
                        } else {
                        //estoy en una pagina intermedia
                        console.log('estoy en una pagina intermedia');
                        res.render('tuiteosarchiver', {
                            'paginaUno' : false,
                            'paginaUltima' : false,
                            'tuiteos' : tuiteos,
                            'current' : page,
                            'pages' : totalDePaginas,
                            'porPagina' : perPage,
                            'vector' : vector
                        });
                        }
                }
            });
        }
    });
});

router.get('/tweetsarba/:page',(req, res, next)=>{
    let perPage = 5;
    let page = parseInt(req.params.page);
    arbatuiteos.find({}).skip((perPage * page) - perPage).limit(perPage).exec((err, tuiteos)=>{
        if(err){
            console.log(err);
        } else {
            arbatuiteos.count((err, count)=>{
                if(err){
                    console.log(err);
                } else {
                    let totalDePaginas = Math.ceil(count / perPage);
                    let i = 0;
                    var vector = []; 
                    if(page > 5){
                        i = page - 4;
                    } else {
                        i = 1;
                    }
                    let k = 0
                    if (i == (totalDePaginas - 4)){
                        for (j = (i - 4); j <= (parseInt(page) + 4) && j <= totalDePaginas; j++){
                            vector[k] = j;
                            k++;
                        }
                    } else {
                        for (j = i; j <= (parseInt(page) + 4) && j <= totalDePaginas; j++){
                            vector[k] = j;
                            k++;
                            if (i == 1){
                                for (m = 6; m < 10; m++){
                                    vector[m] = m;
                                }
                            }
                        }
                    }
                    if (page==1) {
                        //estoy en la primer pagina
                        console.log('estoy en la primer pagina');
                        res.render('tuiteosarba', {
                            'paginaUno' : true,
                            'paginaUltima' : false,
                            'tuiteos' : tuiteos,
                            'current' : page,
                            'pages' : totalDePaginas,
                            'porPagina' : perPage,
                            'vector' : vector
                        });
                        } else if (page == totalDePaginas) {
                        //estoy en la ultima pagina
                        console.log('estoy en la ultima pagina');                        
                        res.render('tuiteosarba', {
                            'paginaUno' : false,
                            'paginaUltima' : true,
                            'tuiteos' : tuiteos,
                            'current' : page,
                            'pages' : totalDePaginas,
                            'porPagina' : perPage,
                            'vector' : vector
                        });
                        } else {
                        //estoy en una pagina intermedia
                        console.log('estoy en una pagina intermedia');
                        res.render('tuiteosarba', {
                            'paginaUno' : false,
                            'paginaUltima' : false,
                            'tuiteos' : tuiteos,
                            'current' : page,
                            'pages' : totalDePaginas,
                            'porPagina' : perPage,
                            'vector' : vector
                        });
                        }
                }
            });
        }
    });
});

router.get('/tweetsgeoref/:page', (req, res, next)=>{
    let perPage = 5;
    let page = parseInt(req.params.page);
    pciatuiteos.find({}).skip((perPage * page) - perPage).limit(perPage).exec((err, tuiteos)=>{
        if(err){
            console.log(err);
        } else {
            pciatuiteos.count((err, count)=>{
                if(err){
                    console.log(err);
                } else {
                    let totalDePaginas = Math.ceil(count / perPage);
                    let i = 0;
                    var vector = []; 
                    if(page > 5){
                        i = page - 4;
                    } else {
                        i = 1;
                    }
                    let k = 0
                    if (i == (totalDePaginas - 4)){
                        for (j = (i - 4); j <= (parseInt(page) + 4) && j <= totalDePaginas; j++){
                            vector[k] = j;
                            k++;
                        }
                    } else {
                        for (j = i; j <= (parseInt(page) + 4) && j <= totalDePaginas; j++){
                            vector[k] = j;
                            k++;
                            if (i == 1){
                                for (m = 6; m < 10; m++){
                                    vector[m] = m;
                                }
                            }
                        }
                    }
                    if (page==1) {
                        //estoy en la primer pagina
                        console.log('estoy en la primer pagina');
                        res.render('tuiteos', {
                            'paginaUno' : true,
                            'paginaUltima' : false,
                            'tuiteos' : tuiteos,
                            'current' : page,
                            'pages' : totalDePaginas,
                            'porPagina' : perPage,
                            'vector' : vector
                        });
                        } else if (page == totalDePaginas) {
                        //estoy en la ultima pagina
                        console.log('estoy en la ultima pagina');                        
                        res.render('tuiteos', {
                            'paginaUno' : false,
                            'paginaUltima' : true,
                            'tuiteos' : tuiteos,
                            'current' : page,
                            'pages' : totalDePaginas,
                            'porPagina' : perPage,
                            'vector' : vector
                        });
                        } else {
                        //estoy en una pagina intermedia
                        console.log('estoy en una pagina intermedia');
                        res.render('tuiteos', {
                            'paginaUno' : false,
                            'paginaUltima' : false,
                            'tuiteos' : tuiteos,
                            'current' : page,
                            'pages' : totalDePaginas,
                            'porPagina' : perPage,
                            'vector' : vector
                        });
                        }
                }
            });
        }
    });
});

module.exports = router;