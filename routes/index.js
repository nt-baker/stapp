var express = require('express');
var router = express.Router();
var team = require('../models/team.js');

/* GET home page. */
router.get('/', function(req, res) {

  team.getTeams(function(err, teams){
    console.log("team1: " + teams[0].location + teams[0].name);
    res.render('index', {
      title: 'Scott Stapp Memorial Survivor Pickem',
      teams: teams
    });

  });

});

module.exports = router;
