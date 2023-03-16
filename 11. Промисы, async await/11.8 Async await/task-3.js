async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

async function f() {
  return await wait();
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}
function f2() {
  wait().then(result => alert(result));
}

f();