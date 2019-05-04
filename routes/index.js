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
  console.log(req.params.square);
  next();
}

router.get('/knight/:square', isValidSquare, root);


module.exports = router;
