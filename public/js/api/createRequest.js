/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;
  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.readyState == xhr.DONE && xhr.status === 200) {
      options.callback(null, xhr.response);
    }
    else {
      options.callback(xhr.error);
    }
  };
  let url = options.url;
  let paramURL = "";
  let data = options.data;
  if (options.method === "GET") {
    for (let key in data) {
      paramURL += paramURL.trim() == "" + key + "=" + data[key] ? "&" : "" + key + "=" + data[key];
    }
    try {
    xhr.open(options.method, options.url+paramURL);
    xhr.send();
    }
    catch ( e ) {
      // перехват сетевой ошибки
      options.callback( e );
    }
  }
  else {
    formData = new FormData;
    for (let key in data) {
      formData.append(key, data[key]);
    }
    try {
    xhr.open(options.method, options.url);
    xhr.send(formData);
    }
    catch ( e ) {
      // перехват сетевой ошибки
      options.callback( e );
    }
  }
};
