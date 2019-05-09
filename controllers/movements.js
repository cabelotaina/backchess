// eslint-disable-next-line no-unused-vars
module.exports = function moviments(req, res, next) {
  res.status(200).json({
    success: 'true',
    message: 'squares retrieved successfully',
    initialSquare: req.params.square,
    squares: res.locals.squareMap,
  });
}