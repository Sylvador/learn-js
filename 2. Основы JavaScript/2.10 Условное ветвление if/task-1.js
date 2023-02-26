const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Какое "официальное" название JavaScript?\n', answer => {
  if(answer === 'ECMAScript') console.log('Верно!')
  else console.log('Не знаете? ECMAScript!');
  readline.close();
})

/*
'use strict'
let value = prompt('Какое "официальное" название JavaScript?', '');

if (value === 'ECMAScript') alert('Верно!')
  else alert('Не знаете? ECMAScript!');
}
*/