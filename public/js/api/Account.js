/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  constructor(){
	}

  static URL = "/account";

  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback){
    callback = createRequest({
      url: this.URL + "/" + id,
      data: {},
      method: 'GET',
    });
  }
}
