let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

function shuffle(arr) {
  arr.sort(() => Math.random() - Math.random());
}