var db = require('../db.js');
var team = require('team.js');

function Pick(userId, gameId, teamId, location, name) {
  this.userId = userId;
  this.gameId = gameId;
  this.team = new Team(teamId, location, name);
}

exports.getAllPicks = function(callback){

  var query = 'SELECT p.PickId, p.GameId t.TeamId, t.Location, t.Name, u.UserId '
            + 'FROM pick p '
            + 'INNER JOIN team t ON p.TeamId = t.TeamId '
            + 'INNER JOIN userpick u ON p.PickId = u.PickId';

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

  var query = 'SELECT p.PickId, p.GameId t.TeamId, t.Location, t.Name, u.UserId '
            + 'FROM pick p '
            + 'INNER JOIN team t ON p.TeamId = t.TeamId '
            + 'INNER JOIN userpick u ON p.PickId = u.PickId'
            + 'WHERE u.UserId =' + userId;

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
