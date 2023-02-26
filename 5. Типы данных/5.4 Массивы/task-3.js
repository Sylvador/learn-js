function getMaxSubSum(arr) {
  if (Math.max(...arr) <= 0) return 0;
  let arrSums = [];
  let sum = 0;
  for (let startingIndex = 0; startingIndex < arr.length; startingIndex++) {
    for (let i = startingIndex; i < arr.length; i++) {
      for (let j = startingIndex; j <= i; j++) {
        sum += arr[j];
      }
      arrSums.push(sum);
      sum = 0;
    }
  }
  return Math.max(...arrSums);
}

console.log(getMaxSubSum([100, -9, 2, -3, 5]))