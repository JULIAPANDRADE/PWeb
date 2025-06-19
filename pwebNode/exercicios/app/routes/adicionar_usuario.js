app.get('/formulario_adicionar_usuario', (req, res) => {
    res.render('admin/adicionar_usuario');
  });

  module.exports = function(app) {
    app.get('/admin/adicionar_usuario', function(req,res){
        res.render('admin/adicionar_usuario');
    });
  }