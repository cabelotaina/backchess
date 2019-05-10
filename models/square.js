module.exports = class Square {
  constructor(x, y) {
    this.y = parseInt(y);
    this.xLetter = x;
    this.x = x.charCodeAt(0);
  }

  isValid() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    return (this.xLetter + this.y).length === 2
     && letters.includes(this.xLetter)
     && numbers.includes(this.y);
  }

  toString() {
    return this.xLetter + this.y;
  }
};
