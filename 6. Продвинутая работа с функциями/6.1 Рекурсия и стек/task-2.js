function factorial(n) {
  return n > 1 ? factorial(n - 1) * n : n;
}

console.log(factorial(3))