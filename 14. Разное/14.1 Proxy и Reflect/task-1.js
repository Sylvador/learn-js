let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, property, reciever) {
      if (!(property in target)) {
        throw new ReferenceError('Ошибка: такого свойства не существует')
      }
      return Reflect.get(target, property, reciever)
    }
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует