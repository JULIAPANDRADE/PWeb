const { options, get } = require('../config/server');

module.exports = function(app) {
    app.get('/informacao/professores', function(req,res){
        res.render('informacao/professores');
    });
  }

  module.exports = function(app) {
    app.get('/informacao/professores', function(req,res){
        const sql = require ('mssql');

        const sqlConfig= {
            user: 'BD2121001',
            password: 'Julia09123',
            database: 'BD',
            server: 'APOLO',
            options: {
                encrypt: false,
                trueServerCertificate: true,
            }
        }

        //
        async function getProfessores() {
            try{
                const pool = await sql.connect(sqlConfig);

                const results = await pool.request().query('SELECT * from PROFESSORES')

                res.json(results.recordset);

                // res.render('informacao/professores',{profs: results.recordset})

            } catch (err) {
                console.log(err)
            }
        }
        getProfessores();
    });
}

