function getSecondsToday() {
  let date = new Date();
  let diff = date - new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.round(diff / 1000);
}

console.log(getSecondsToday());