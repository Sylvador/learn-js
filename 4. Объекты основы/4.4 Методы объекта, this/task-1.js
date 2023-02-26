const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  /**read() {
   * this.a = +prompt('a', 0);
   * this.b = +prompt('b', 0);
   * } */
};

calculator.read(5, 4);
console.log(calculator.sum());
console.log(calculator.mul());