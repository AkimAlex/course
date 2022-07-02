async function wait() {
  await new Promise(resolve => setTimeout(resolve, 10000));

  return 20;
}

function f() {
  wait().then(result => alert(result))
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}

f();