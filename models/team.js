var db = require('../db.js');

function Team(teamId, location, name) {
  this.teamId = teamId;
  this.location = location;
  this.name = name;
}

exports.getTeams = function(callback){
  db.getConn().query('SELECT teamId, location, name FROM team', function(err, rows){
    if(err)
      return callback(err);
    else {
      var teams = [];
      for(var i = 0; i < rows.length; i++){
        teams.push(new Team(rows[i].teamId, rows[i].location, rows[i].name));
      }
      callback(null, teams);
    }
  });
}

// For some local testing
// exports.getTeams = function(callback){
//   var teams = [];
//   teams.push(new Team("Green Bay", "Packers"));
//   teams.push(new Team("Denver", "Broncos"));
//   callback(null, teams);
// }
