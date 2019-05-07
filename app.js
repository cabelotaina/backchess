const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const indexRouter = require('./routes/index');
var cors = require('cors');

const app = express();

app.use(cors());

app.use(logger('dev'));

app.use('/api/v1', indexRouter);

function catch404Error(req, res, next) {
  next(createError(404));
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ success: false, message: err.message });
}

// catch 404 and forward to error handler
app.use(catch404Error);

// error handler
app.use(errorHandler);

module.exports = app;
