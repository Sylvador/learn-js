function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }
  this.calculate = (str) => {
    [a, operator, b] = str.split(' ');
    
    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operator](+a, +b);
  }
  this.addMethod = (name, func) => {
    this.methods[name] = func;
  }
}

let powerCalc = new Calculator;

console.log(powerCalc.calculate("3 + 7"));
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);