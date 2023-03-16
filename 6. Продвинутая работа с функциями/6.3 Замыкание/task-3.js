function byField(str) {
  return function(a, b) {
    return a[str] > b[str] ? 1 : -1;
  }
}