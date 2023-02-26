let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

function Calculator() {
  this.read = () => {
    this.a = +prompt('a', 0);
    this.b = +prompt('b', 0);
  }
  this.sum = () => {
    return this.a + this.b;
  };
  this.mul = () => {
    return this.a * this.b;
  }
}