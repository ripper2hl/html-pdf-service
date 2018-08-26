var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/html');

var app = express();

app.use(logger('dev'));
app.use(express.json( {limit: '50mb'} ));
app.use(express.urlencoded({ limit: '50mb',extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/html', usersRouter);

module.exports = app;
