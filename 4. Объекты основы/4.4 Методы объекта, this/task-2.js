const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // показывает текущую ступеньку
    console.log(this.step);
    return this;
  }
};

ladder.showStep().up().showStep().up().up().showStep().down().showStep();