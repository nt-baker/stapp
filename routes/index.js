var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  req.app.locals.getTeams(function(){

    res.render('index', {
      title: 'Scott Stapp Memorial Survivor Pickem',
      teams: req.app.locals.teams
    });

  });

});

module.exports = router;
