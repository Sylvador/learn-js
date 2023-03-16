function debounce(f, ms) {
  let timerReady = true;

  return function (...args) {
    if(!timerReady) return;
    timerReady = false;
    f.apply(this, args);
    setTimeout(() => {
      timerReady = true;
    }, ms)
  }
}