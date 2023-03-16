function sum(initValue) {
  function sum(value) {
    sum.totalValue += value;
    return sum
  }
  sum.totalValue = initValue;
  sum.toString = () => sum.totalValue
  return sum;
}

console.log(sum(0)(1)(2)(3)(4)(5).toString());
console.log(sum(1)(2) == 3);
console.log(sum(1)(2)(3) == 6);
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);