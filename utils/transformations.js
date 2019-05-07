const Square = require('models/square.js')

module.exports = class Transform {
  doTransformFor(squareString) {
    let square = new Square(squareString[0], squareString[1]);
    return square;
  };
};