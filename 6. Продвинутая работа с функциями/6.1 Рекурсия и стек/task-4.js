// В моём варианте решения в списке может быть любое количество переменных,
// но в итеративном способе количество переменных в каждом элементе списка должно быть одинаковым.
// Хотя это можно исправить если в цикл добавить keys = Object.keys(nextList)

function printList(list) {
  for (let [key, value] of Object.entries(list)) {
    if (key === 'next') {
      if (value === null) break;
      printList(value);
    } else {
      console.log(value);
    }
  }
}
function printList2(list) {
  let keys = Object.keys(list);
  let nextList = list;
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 'next') {
      if (nextList.next === null) break;
      nextList = nextList.next;
      i = -1;
    } else {
      console.log(nextList[keys[i]]);
    }
  }
}
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
printList(list);

printList2(list);
