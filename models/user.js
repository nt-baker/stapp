var db = require('../db.js');

function User(userId, email, name, currentStreak) {
  this.teamId = userId;
  this.email = email;
  this.name = name;
  this.currentStreak = currentStreak;
}

exports.getUsers = function(callback){
  db.getConn().query('SELECT userId, email, name, currentStreak FROM user', function(err, rows){
    if(err)
      return callback(err);
    else {
      var users = [];
      for(var i = 0; i < rows.length; i++){
        users.push(new User(rows[i].userId, rows[i].email, rows[i].name, rows[i].currentStreak));
      }
      callback(null, teams);
    }
  });
}
