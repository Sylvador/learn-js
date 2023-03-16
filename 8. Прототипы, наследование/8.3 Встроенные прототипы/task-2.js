function f(a, b) {
  console.log( a + b );
}

Function.prototype.defer = function(ms) {
  return (...args) => {
    setTimeout(() => this.apply(this, args), ms);
  }
}

f.defer(1000)(1, 2);