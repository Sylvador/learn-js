function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => {
    this.value += +prompt('value', 0);
  }
}