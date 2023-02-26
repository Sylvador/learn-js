let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
  const map = new Map();
  for (let elem of arr) {
    let sortedElem = elem.toLowerCase().split('').sort().join();
    if(!map.has(sortedElem)) {
      map.set(sortedElem, elem);
    }
  }
  return [...map.values()]
}