const validate = require('../utils/validations');

module.exports = {
  isValidSquare: function isValidSquare(req, res, next) {

    req.params.square = req.params.square.toLowerCase();
    if (validate.isValidSquare(req.params.square)) {
      console.log('LOG: Valid Square');
      next();
    } else {
      const error = new Error('This is not a acceptable Knight square position.');
      next(error);
    }
  },
};
