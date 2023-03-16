function throttle(f, ms) {
  let IsCooldown = false;
  let lastThis;
  let lastArgs;

  return function wrapper(...args) {
    if (IsCooldown) {
      lastArgs = args;
      lastThis = this;
      return;
    }

    IsCooldown = true;
    lastThis = this;
    lastArgs = args;

    f.apply(lastThis, lastArgs);

    setTimeout(() => {
      IsCooldown = false;
      if(lastArgs) {
        wrapper.apply(lastThis, lastArgs);
        lastThis = null;
        lastArgs = null;
      }
    }, ms)
  }
}