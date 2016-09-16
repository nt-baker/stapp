var db = require('../db.js');
var pick = require('pick.js');

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

exports.getTotalPoints = function(userId, callback){
  pick.getUserCorrectPicks(userId, calculateTotal);
}

function calculateTotal(err, results){
  if (err || results == null){
    console.log("Error: " + err);
    return 0;
  }

  var points = results.length;
  var bonusPoints = results[0].BonusPoints;
  return points + bonusPoints;
}
