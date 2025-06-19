let app = require('./app/config/server'); //carregando o módulo do servidor

let rotaHome = require('./app/config/server') //só está definindo as rotas
rotaHome(app) //está executando

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);

let rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);

let rotaCursos = require('./app/routes/cursos');
rotaCursos(app); //executando

let rotaProfessores = require('./app/routes/professores') //só está definido
rotaProfessores(app); //está executando





/* app.get('/historia', (req, res) => {
  //res.send('<html><body>historia da fatec sorocaba</body></html>');
  //res.render('secao/historia');
}); */
app.get('/informacao/historia', (req, res) => {
  res.render('informacao/historia');
});

/* app.get('/cursos', (req, res) => {
  //res.send('<html><body>cursos da fatec sorocaba</body></html>');
  //res.render('secao/cursos');
}); */
app.get('/informacao/cursos', (req, res) => {
  res.render('informacao/cursos');
});

/* app.get('/professores', (req, res) => {
  //res.send('<html><body>professores da fatec sorocaba</body></html>');
  //res.render('secao/professores');
}); */
app.get('/informacao/professores', (req, res) => {
  res.render('informacao/professores');
});

app.listen(3000, function () {
  console.log('servidor com express carregado');
  console.log(testeModu);
});



