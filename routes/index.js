var express = require('express');
var router = express.Router();
var team = require('../models/team.js');

/* GET home page. */
router.get('/', function(req, res) {

  team.getTeams(function(err, teams){
    
    res.render('index', {
      title: 'Scott Stapp Memorial Survivor Pickem',
      teams: teams
    });

  });

});

module.exports = router;
