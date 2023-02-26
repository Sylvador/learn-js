function getSecondsToTomorrow() {
  let d = new Date();
  return 86400 - d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}