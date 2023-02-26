function formatDate(date) {
  const diff = new Date() - date;
  if (diff < 1000) {
    return 'прямо сейчас';
  }
  if (diff < 60000) {
    return `${Math.round(diff / 1000)} сек. назад`;
  }
  if (diff < 600000) {
    return `${Math.round(diff / 60000)} мин. назад`;
  }
  return `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear().toString().slice(-2)} ${date.getHours()}:${date.getMinutes()}`;
}