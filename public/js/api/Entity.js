/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  constructor(){
	}

  static URL = "";
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */

  static list(data, callback){
    createRequest({
      url: this.URL,
      method: "GET",
      responseType: "json",
      data: data,
      callback
    });
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
      createRequest({
      url: this.URL,
      data: data,
      method: "PUT",
      responseType: "json",
      callback
    });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback ) {
      createRequest({
      url: this.URL,
      data: data,
      method: "DELETE",
      responseType: "json",
      callback
    });
  }
}
