var mysql = require('mysql');

var state = {
  pool: null
}

// Get DB Connection Info
var dbConnString = process.env.MYSQLCONNSTR_localdb;
// var dbConnString = "Data Source=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword";
//var connectstr_dbhost = dbConnString.replace(/^.*Data Source=(.+?);.*$/i, '\$1');
var connectstr_dbname = dbConnString.replace(/^.*Database=(.+?);.*$/i, '\$1');
var connectstr_dbusername = dbConnString.replace(/^.*User Id=(.+?);.*$/i, '\$1');
var connectstr_dbpassword = dbConnString.replace(/^.*Password=(.+?)$/i, '\$1');

exports.connect = function(callback) {

  state.pool = mysql.createPool({
    host     : '127.0.0.1',
    port     : '50760',
    user     : connectstr_dbusername,
    password : connectstr_dbpassword,
    database : connectstr_dbname
  });

  callback();
}

exports.getConn = function() {
  return state.pool;
}
