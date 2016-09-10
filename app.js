

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('mysql');

var routes = require('./routes/index');
var users = require('./routes/user');

var app = express();

// Get DB Connection Info
var dbConnString = process.env.MYSQLCONNSTR_localdb;
//var connectstr_dbhost = dbConnString.replace(/^.*Data Source=(.+?);.*$/i, '\$1');
var connectstr_dbname = dbConnString.replace(/^.*Database=(.+?);.*$/i, '\$1');
var connectstr_dbusername = dbConnString.replace(/^.*User Id=(.+?);.*$/i, '\$1');
var connectstr_dbpassword = dbConnString.replace(/^.*Password=(.+?)$/i, '\$1');

var sqlConn = db.createConnection({
    host     : '127.0.0.1',
    port     : '50760',
    user     : connectstr_dbusername,
    password : connectstr_dbpassword,
    database : connectstr_dbname
});

//app.locals.teams = getTeams(sqlConn);
//console.log("teams: " + app.locals.teams);

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});

function setTeams(teams){
  console.log("set teams: " + teams);
  app.locals.teams = teams;
}

function getTeams(conn, callback) {
    console.log("provided conn: " + conn.config.host);
    var teams = [];
    conn.connect();
      conn.query('SELECT name FROM team', function(err, rows, fields) {
        if (err) throw err;

        for (var i = 0, len = rows.length; i < len; i++) {
          teams.push(rows[i].name);
        }
        callback(teams);
        console.log("returning teams inside: " + teams);
      });
    //conn.end();
}

module.exports = app;
