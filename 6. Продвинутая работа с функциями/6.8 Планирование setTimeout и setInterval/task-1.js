function printNumbersInterval(from, to) {
  const timerId = setInterval(() => {
    console.log(from++);
    if (from > to) clearInterval(timerId);
  }, 1000);
}

function printNumberTimeout(from, to) {
  console.log(from++);
  if (from <= to) {
    setTimeout(printNumberTimeout, 1000, from, to);
  }
}

printNumbersInterval(1, 5);

printNumberTimeout(1, 5);
