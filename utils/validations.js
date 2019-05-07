class Validations {
  isValidSquare(squareString) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

    return squareString.length === 2
     && letters.includes(squareString[0])
     && numbers.includes(squareString[1]);
  };
};

module.exports = new Validations();