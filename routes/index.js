const express = require('express');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
function root(req, res, next) {
  res.status(200).send({
    success: 'true',
    message: 'squares retrieved successfully',
    initialSquare: req.params.square,
    squares: [],
  });
}

function isValidSquare(req, res, next) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

  req.params.square = req.params.square.toLowerCase();

  if (req.params.square.length === 2
   && letters.includes(req.params.square[0])
   && numbers.includes(req.params.square[1])) {
    console.log('LOG: Valid Square');
    next();
  } else {
    const error = new Error('Invalid Square');
    next(error);
  }
}

router.get('/knight/:square', isValidSquare, root);


module.exports = router;
