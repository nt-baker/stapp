var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res) {
  res.render('login', {
    sub-title: 'Scott Stapp Memorial Survivor Pickem',
    title: 'Login'
  });
});

module.exports = router;
