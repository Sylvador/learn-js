async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) return await response.json()
  else throw new Error(response.status);
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404