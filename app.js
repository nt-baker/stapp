

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./db.js');

var routes = require('./routes/index');
var users = require('./routes/user');

var app = express();

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

db.connect(function(err){
  if(err){
    console.log("Error connecting to db.");
  }
  else {
    console.log("Connected to db.");
  }
});

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

app.locals.currentWeek = getCurrentWeek();

function getCurrentWeek(){

  var today = Date.now();
  if (today <= new Date('2016-09-12')){
    return 1;
  }
  else if (today <= new Date('2016-09-19')){
    return 2;
  }
  else if (today <= new Date('2016-09-26')){
    return 3;
  }
  else if (today <= new Date('2016-10-03')){
    return 4;
  }
  else if (today <= new Date('2016-10-10')){
    return 5;
  }
  else if (today <= new Date('2016-10-17')){
    return 6;
  }
  else if (today <= new Date('2016-10-24')){
    return 7;
  }
  else if (today <= new Date('2016-10-31')){
    return 8;
  }
  else if (today <= new Date('2016-11-07')){
    return 9;
  }
  else if (today <= new Date('2016-11-14')){
    return 10;
  }
  else if (today <= new Date('2016-11-21')){
    return 11;
  }
  else if (today <= new Date('2016-11-28')){
    return 12;
  }
  else if (today <= new Date('2016-12-05')){
    return 13;
  }
  else if (today <= new Date('2016-12-12')){
    return 14;
  }
  else if (today <= new Date('2016-12-19')){
    return 15;
  }
  else if (today <= new Date('2016-12-26')){
    return 16;
  }
  else if (today <= new Date('2017-01-01')){
    return 17;
  }
  else {
    return 0;
  }
}

module.exports = app;
