const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Введите имя\n', name => {
  console.log(`Привет, ${name}!`);
  readline.close();
})

// let name = prompt("Введите имя", "");
// alert(name);