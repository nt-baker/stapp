var db = require('../db.js');

function Team(location, name) {
  this.location = location;
  this.name = name;
}

exports.getTeams = function(callback){
  db.getConn().query('SELECT location, name FROM team', function(err, rows){
    if(err)
      return callback(err);
    else {
      var teams = [];
      for(var i = 0; i < rows.length; i++){
        teams.push(new Team(rows[i].location, rows[i].name));
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
