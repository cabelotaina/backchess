const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');


const app = express();

app.use(cors());

app.use(logger('dev'));

app.use('/api/v1', indexRouter);

function catch404Error(req, res, next) {
  next(createError(404));
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ success: false, message: err.message });
}

app.use(catch404Error);

app.use(errorHandler);

module.exports = app;
