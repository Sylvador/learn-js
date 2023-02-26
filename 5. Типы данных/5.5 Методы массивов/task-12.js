function betterUnique(arr) {
  return [...new Set(arr)];
}

function unique(arr) {
  let res = [];
  arr.forEach(str => {
    if (!res.includes(str)) res.push(str);
  })
  return res;
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));