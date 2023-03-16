function printReverseList(list) {
  let listQueue = [];
  for (let [key, value] of Object.entries(list)) {
    if (key === 'next') {
      if (value === null) break;
      printReverseList(value);
    } else {
      listQueue.push(value);
    }
  }
  //Этот цикл начнет выполнятся с последней рекурсии и выведет все элементы списка в обратном порядке
  for (let elem of listQueue) {
    console.log(elem)
  }
}
function printReverseList2(list) {
  let keys = Object.keys(list);
  let nextList = list;
  let listQueue = [];
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 'next') {
      if (nextList.next === null) break;
      nextList = nextList.next;
      i = -1;
    } else {
      listQueue.push(nextList[keys[i]]);
    }
  }

  for (let elem of listQueue.reverse()) {
    console.log(elem);
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
printReverseList(list);

printReverseList2(list);
