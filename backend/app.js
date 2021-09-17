var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password:'hoon3827',
  database: 'peterpet'
});

connection.connect(function (err){
  if(err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
  else console.log("success mysql connect");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var peterpetRouter = require('./routes/pet');

var app = express();

var expressVue = require("express-vue");
const vueOptions = {
        VUE_DEV: true,
    rootPath: path.join(__dirname, '/views')
};
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/pet',peterpetRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
