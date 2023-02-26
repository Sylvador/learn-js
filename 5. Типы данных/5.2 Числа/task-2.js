function readNumber() {
  let n;
  while(!isFinite(n)) {
    n = prompt('number', '');
  }
  return (n === null || n === '') ? null : n;
}

alert(readNumber());