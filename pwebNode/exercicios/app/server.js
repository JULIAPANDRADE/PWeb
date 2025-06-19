let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.set('views', './app/views');

module.exports = app;


// Carregando Servidor
let rotaHome = require('./app/routes/nome');
rotaHome(app);

let rotaAdicionarUsuario = require('./app')
