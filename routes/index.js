const express = require('express');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
function root(req, res, next) {
  res.status(200).send({
    success: 'true',
    message: 'squares retrieved successfully',
    initialSquare: req.params.square,
    squares: []
  });
}

router.get('/knight/:square', root);

module.exports = router;
