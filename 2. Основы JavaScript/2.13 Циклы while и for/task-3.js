let input = prompt('Введите число больше 100', '');
while (input && !(input > 100)) {
  input = prompt('Введите число больше 100', '');
}