app.get('/', function (req, res) {
    //res.send('<html><body>fatec sorocaba</body></html>');
    res.render('home/index');
  });
  
  module.exports = function(app) {
    app.get('/', function(req,res){
        res.render("home/index");
    });
  }

  