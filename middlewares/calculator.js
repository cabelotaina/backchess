const Square = require('../models/square');


function calculate(square, squaresMap){

    x = square.x - 2;
    y = square.y - 1;
    squareResult = new Square(String.fromCharCode(x), y);
    if (squareResult.isValid() && !squaresMap.has(squareResult.toString())){
      squaresMap.set(squareResult.toString(), squareResult);
    }
    x = square.x + 2;
    y = square.y - 1;
    squareResult = new Square(String.fromCharCode(x), y);
    if (squareResult.isValid() && !squaresMap.has(squareResult.toString())){
      squaresMap.set(squareResult.toString(), squareResult);
    }
    x = square.x - 2;
    y = square.y + 1;
    squareResult = new Square(String.fromCharCode(x), y);
    if (squareResult.isValid() && !squaresMap.has(squareResult.toString())){
      squaresMap.set(squareResult.toString(), squareResult);
    }
    x = square.x + 2;
    y = square.y + 1;
    squareResult = new Square(String.fromCharCode(x), y);
    if (squareResult.isValid() && !squaresMap.has(squareResult.toString())){
      squaresMap.set(squareResult.toString(), squareResult);
    }

    x = square.x - 1;
    y = square.y - 2;
    squareResult = new Square(String.fromCharCode(x), y);
    if (squareResult.isValid() && !squaresMap.has(squareResult.toString())){
      squaresMap.set(squareResult.toString(), squareResult);
    }
    x = square.x + 1;
    y = square.y - 2;
    squareResult = new Square(String.fromCharCode(x), y);
    if (squareResult.isValid() && !squaresMap.has(squareResult.toString())){
      squaresMap.set(squareResult.toString(), squareResult);
    }
    x = square.x - 1;
    y = square.y + 2;
    squareResult = new Square(String.fromCharCode(x), y);
    if (squareResult.isValid() && !squaresMap.has(squareResult.toString())){
      squaresMap.set(squareResult.toString(), squareResult);
    }
    x = square.x + 1;
    y = square.y + 2;
    squareResult = new Square(String.fromCharCode(x), y);
    if (squareResult.isValid() && !squaresMap.has(squareResult.toString())){
      squaresMap.set(squareResult.toString(), squareResult);
    }

    return squaresMap;
}

module.exports = {
  calculatePositions: function calculatePositions(req, res, next) {

    let squaresMap = new Map();
    let square = new Square(req.params.square[0], req.params.square[1]);
    let x, y, squareResult;

    squareMap = calculate(square, squaresMap);

    let keys = Array.from(squaresMap.keys());

    for (squareKey in keys) {
        let squareStep = new Square(keys[squareKey][0], keys[squareKey][1]);
        squaresMap = calculate(squareStep, squaresMap);
    }

    res.locals.squareMap = Array.from(squaresMap.keys());

    next();
  },
};