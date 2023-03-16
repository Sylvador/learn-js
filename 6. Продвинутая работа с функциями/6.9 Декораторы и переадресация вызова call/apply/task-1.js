function spy(func) {
  function f(...args) {
    f.calls.push(args)
    return func.apply(this, args);
  }
  f.calls = [];
  return f;
}