const Square = require('../models/square');

function canAdd(square, map) {
  if (square.isValid() && !map.has(square.toString())) {
    map.set(square.toString(), square);
  }
}

function operateAddSub(square, a, b) {
  const x = square.x + a;
  const y = square.y - b;
  return new Square(String.fromCharCode(x), y);
}

function operateAddAdd(square, a, b) {
  const x = square.x + a;
  const y = square.y + b;
  return new Square(String.fromCharCode(x), y);
}

function operateSubSub(square, a, b) {
  const x = square.x - a;
  const y = square.y - b;
  return new Square(String.fromCharCode(x), y);
}

function operateSubAdd(square, a, b) {
  const x = square.x - a;
  const y = square.y + b;
  return new Square(String.fromCharCode(x), y);
}

function calculate(square, squaresMap) {
  let squareResult = operateSubSub(square, 2, 1);
  canAdd(squareResult, squaresMap);

  squareResult = operateAddSub(square, 2, 1);
  canAdd(squareResult, squaresMap);

  squareResult = operateSubAdd(square, 2, 1);
  canAdd(squareResult, squaresMap);

  squareResult = operateAddAdd(square, 2, 1);
  canAdd(squareResult, squaresMap);


  squareResult = operateSubSub(square, 1, 2);
  canAdd(squareResult, squaresMap);

  squareResult = operateAddSub(square, 1, 2);
  canAdd(squareResult, squaresMap);

  squareResult = operateSubAdd(square, 1, 2);
  canAdd(squareResult, squaresMap);

  squareResult = operateAddAdd(square, 1, 2);
  canAdd(squareResult, squaresMap);

  return squaresMap;
}

module.exports = {
  calculatePositions: function calculatePositions(req, res, next) {
    let squaresMap = new Map();
    const square = new Square(req.params.square[0], req.params.square[1]);

    squaresMap = calculate(square, squaresMap);

    const keys = Array.from(squaresMap.keys());

    for (const key of keys) {
      const squareStep = new Square(key[0], key[1]);
      squaresMap = calculate(squareStep, squaresMap);
    }

    res.locals.squareMap = Array.from(squaresMap.keys());

    next();
  },
};
