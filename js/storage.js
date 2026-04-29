console.log("storage.js carregado");

function saveData(key, value) {
  const dataAsString = JSON.stringify(value);
  localStorage.setItem(key, dataAsString);
}

function loadData(key) {
  const dataAsString = localStorage.getItem(key);

  if (dataAsString === null) {
    return null;
  }

  return JSON.parse(dataAsString);
}