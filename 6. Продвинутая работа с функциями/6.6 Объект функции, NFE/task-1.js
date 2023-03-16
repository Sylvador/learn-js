function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.decrease = () => {
    return count--;
  }

  counter.set = value => {
    return count = value;
  }

  return counter;
}