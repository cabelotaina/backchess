const express = require('express');
const validator = require('../middlewares/validator');
const calculator = require('../middlewares/calculator');
const moviments = require('../controllers/movements');

const router = express.Router();

router.get('/knight/:square',
  validator.isValidSquare,
  calculator.calculatePositions,
  moviments);
module.exports = router;
