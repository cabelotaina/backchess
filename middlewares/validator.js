const Square = require('../models/square');

module.exports = {
  isValidSquare: function isValidSquare(req, res, next) {

    req.params.square = req.params.square.toLowerCase();
    let square = new Square(req.params.square[0], req.params.square[1]);
    if (square.isValid()) {
      console.log('LOG: Valid Square');
      next();
    } else {
      next(new Error('This is not a acceptable Knight square position.'));
    }
  },
};
