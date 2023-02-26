let result = [];
next: for (let i = 2; i < 100; i++) {
  for (let j = 2; j < i; j++){
    if (!(i % j)) continue next;
  }
  result.push(i);
}
console.log(result);