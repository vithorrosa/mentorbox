console.log("storage.js carregado");

function saveData(key, value) {
  const dataAsString = JSON.stringify(value);

  localStorage.setItem(key, dataAsString);
}

function loadData(key, fallbackValue = null) {
  const dataAsString = localStorage.getItem(key);

  if (dataAsString === null) {
    return fallbackValue;
  }

  return JSON.parse(dataAsString);
}