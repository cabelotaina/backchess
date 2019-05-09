const express = require('express');
const validator = require('../middlewares/validator');
const calculator = require('../middlewares/calculator');
const router = express.Router();

// eslint-disable-next-line no-unused-vars
function response(req, res, next) {
  res.status(200).json({
    success: 'true',
    message: 'squares retrieved successfully',
    initialSquare: req.params.square,
    squares: res.locals.squareMap,
  });
}

router.get('/knight/:square', validator.isValidSquare, calculator.calculatePositions, response);

module.exports = router;
