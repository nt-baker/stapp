var db = require('../db.js');

function Game(gameId, homeTeamId, awayTeamId, winTeamId, week, kickoff) {
  this.gameId = gameId;
  this.homeTeamId = homeTeamId;
  this.awayTeamId = awayTeamId;
  this.winTeamId = winTeamId;
  this.week = week;
  this.kickoff = kickoff;
}

exports.getAllGames = function(callback){
  db.getConn().query('SELECT gameId, homeTeamId, awayTeamId, winTeamId, week, kickoff FROM user', function(err, rows){
    if(err)
      return callback(err);
    else {
      var games = [];
      for(var i = 0; i < rows.length; i++){
        games.push(new Game(rows[i].gameId, rows[i].homeTeamId, rows[i].awayTeamId, rows[i].winTeamId, rows[i].week, rows[i].kickoff,));
      }
      callback(null, teams);
    }
  });
}

exports.getGamesByWeek = function(weekNum, callback){
  db.getConn().query('SELECT gameId, homeTeamId, awayTeamId, winTeamId, week, kickoff FROM user WHERE week=' + weekNum, function(err, rows){
    if(err)
      return callback(err);
    else {
      var games = [];
      for(var i = 0; i < rows.length; i++){
        games.push(new Game(rows[i].gameId, rows[i].homeTeamId, rows[i].awayTeamId, rows[i].winTeamId, rows[i].week, rows[i].kickoff,));
      }
      callback(null, teams);
    }
  });
}
