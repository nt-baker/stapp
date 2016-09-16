var db = require('../db.js');
var team = require('team.js');

function Pick(userId, gameId, teamId, location, name) {
  this.userId = userId;
  this.gameId = gameId;
  this.team = new Team(teamId, location, name);
}

exports.getAllPicks = function(callback){

  var query = 'SELECT p.PickId, p.GameId t.TeamId, t.Location, t.Name, p.UserId '
            + 'FROM pick p '
            + 'INNER JOIN team t ON p.TeamId = t.TeamId '

  db.getConn().query(query, function(err, rows){
    if(err)
      return callback(err);
    else {
      var picks = [];
      for(var i = 0; i < rows.length; i++){
        var pick = new Pick(rows[i].UserId, rows[i].GameId, rows[i].TeamId, rows[i].Location, rows[i].Name);
        picks.push(pick);
      }
      callback(null, picks);
    }
  });
}

exports.getUserPicks = function(userId, callback){

  var query = 'SELECT p.PickId, p.UserId, p.GameId t.TeamId, t.Location, t.Name '
            + 'FROM pick p '
            + 'INNER JOIN team t ON p.TeamId = t.TeamId '
            + 'WHERE p.UserId =' + userId;

  db.getConn().query(query, function(err, rows){
    if(err)
      return callback(err);
    else {
      var picks = [];
      for(var i = 0; i < rows.length; i++){
        var pick = new Pick(rows[i].UserId, rows[i].GameId, rows[i].TeamId, rows[i].Location, rows[i].Name);
        picks.push(pick);
      }
      callback(null, picks);
    }
  });
}

exports.getUserCorrectPicks = function(userId, callback){

  var query = 'SELECT p.PickId, p.UserId, p.GameId t.TeamId, t.Location, t.Name '
            + 'FROM user u '
            + 'INNER JOIN pick p ON u.UserId = p.UserId '
            + 'INNER JOIN game g ON g.GameId = p.GameId '
            + 'INNER JOIN team t ON p.TeamId = t.TeamId '
            + 'WHERE p.TeamId = g.WinTeamId '
            + 'AND p.UserId =' + userId;

  db.getConn().query(query, function(err, rows){
    if(err)
      return callback(err);
    else {
      var picks = [];
      for(var i = 0; i < rows.length; i++){
        var pick = new Pick(rows[i].UserId, rows[i].GameId, rows[i].TeamId, rows[i].Location, rows[i].Name);
        picks.push(pick);
      }
      callback(null, picks);
    }
  });
}
