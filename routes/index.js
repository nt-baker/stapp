var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Scott Stapp Memorial Survivor Pickem',
  });
});

module.exports = router;
