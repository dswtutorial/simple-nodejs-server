var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

runSomeOtherHelpfulServer();

function runSomeOtherHelpfulServer() {
  // content of index.js
  const http = require('http')
  const isUsingTheSamePortCheeper = 3000

  const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
  }

  const server = http.createServer(requestHandler)

  server.listen(isUsingTheSamePortCheeper, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${isUsingTheSamePortCheeper}`)
  })
}
