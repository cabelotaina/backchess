const express = require('express');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
function root(req, res, next) {
  res.status(200).send({
    success: 'true',
    message: 'squares retrieved successfully',
    squares: []
  });
}

router.get('/', root);

module.exports = router;
