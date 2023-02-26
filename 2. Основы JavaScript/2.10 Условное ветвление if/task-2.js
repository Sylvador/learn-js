const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter a number...\n', n => {
  console.log(Math.sign(n));
  /**
   * if (n) {
   * console.log(1)
   * } else if (n < 0) {
   * console.log(-1)
   * } else {
   * console.log(0)
   * }
   */
  readline.close();
});
