var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var blogRouter = require('./routes/blog');
var fortuneRouter = require('./routes/fortunes');



const app = express();

const AdminJS = require('adminjs');
const AdminJSExpress = require('@amdinjs/express');
const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin'
});
const router = AdminJSExpress.buildRouter(adminJS);
app.use(adminJS.options.rootPath, router)
app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'))



var env = require('dotenv').config();

// mongoose setup
const mongoose = require('mongoose');
const mongoDB = process.env.mongoDB;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind('console', 'MongoDB connection error: '));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/fortune', fortuneRouter);

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
