function F(name) {
  this.name = name;
}

let obj = new F('name 1');

let obj2 = new obj.constructor('name 2');

console.log(obj2.name)

obj.constructor = Object;

let obj3 = new obj.constructor('name 3');

console.log(obj3.name);


