function pow(x, n) {
  return x ** n;
}

let x = prompt('x', '');
let n = prompt('n', '');
if (n < 1) {
  alert('Только натуральные числа');
} else {
  alert(pow(x, n));
}