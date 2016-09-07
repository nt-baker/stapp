var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  sqlConn.connect();
    sqlConn.query('SELECT * FROM team', function(err, rows, fields) {
      if (err) throw err;
      var results = rows;
    });
  sqlConn.end();
  res.render('index', {
    title: 'Scott Stapp Memorial Survivor Pickem',
    teams: results
  });
});

module.exports = router;
