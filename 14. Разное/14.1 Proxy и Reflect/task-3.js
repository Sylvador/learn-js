function makeObservable(target) {
  target.handlers = [];
  target.observe = function (handler) {
    this.handlers.push(handler);
  }
  return new Proxy(target, {
    set(target, p, value, reciever) {
      let success = Reflect.set(...arguments);
      target.handlers.forEach(handler => {
        handler.apply(reciever, [p, value]);
      })
      return success;
    }
  })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = "John";