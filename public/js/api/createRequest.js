/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;
  xhr.responseType = "json";
  xhr.onload = () => {
    options.callback(null, xhr.response);
  };
  xhr.onerror = () => {
    options.callback(xhr.error);
  };
  let formData = new FormData;
  let paramURL = "";
  let data = options.data;
  if (options.method === "GET") {
    formData = "";
    for (let key in data) {
      paramURL += paramURL.trim() == "" ? "?" + key + "=" + data[key] : "&" + key + "=" + data[key];
    }
  }
  else {
    for (let key in data) {
      formData.append(key, data[key]);
    }
  }

  try {
    xhr.open(options.method, options.url + paramURL);
    xhr.send(formData);
  }
  catch (e) {
    options.callback(e);
  }
};
