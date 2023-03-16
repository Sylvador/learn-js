function sumTo1(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum;
}
function sumTo2(n) {
  return n > 1 ? sumTo2(n - 1) + n : n
}
function sumTo3(n) {
  return n * (n + 1) / 2;
}
console.log(sumTo1(4));
console.log(sumTo2(4));
console.log(sumTo3(4));