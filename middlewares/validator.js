module.exports = {
  isValidSquare: function isValidSquare(req, res, next) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

    req.params.square = req.params.square.toLowerCase();

    if (req.params.square.length === 2
     && letters.includes(req.params.square[0])
     && numbers.includes(req.params.square[1])) {
      // console.log('LOG: Valid Square');
      next();
    } else {
      const error = new Error('This is not a acceptable Knight square position.');
      next(error);
    }
  },
};
