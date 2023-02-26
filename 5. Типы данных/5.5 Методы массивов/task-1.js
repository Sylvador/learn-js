function camelize(str) {
  str = str.split('-');

  str = str.map((word, index) => {
    if (index > 0) {
      return word[0].toUpperCase() + word.slice(1)
    }
    return word;
  })
  return str.join('');
}