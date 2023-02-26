function sumInput() {
  let arr = [];
  while(true) {
      input = prompt('number', 0);
      if (!isFinite(input) || input === null || input === '') break;
      arr.push(+input);
  }
  alert(arr.reduce((sum, curVal) => sum + curVal, 0));
}

sumInput();