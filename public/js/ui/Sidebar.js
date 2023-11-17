/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const bodyEl = document.body;
    document.addEventListener("click", event => {
      bodyEl.classList.toggle("sidebar-open");
      bodyEl.classList.toggle("sidebar-collapse");
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const menuItemLogin = document.querySelector(".menu-item_login");
    menuItemLogin.addEventListener("click", event => {
      event.preventDefault();
      App.getModal("login").open();
    });

    const menuItemRegister = document.querySelector(".menu-item_register");
    menuItemRegister.addEventListener("click", event => {
      event.preventDefault();
      App.getModal("register").open();
    });

    const menuItemLogout = document.querySelector(".menu-item_logout");
    menuItemLogout.addEventListener("click", event => {
      event.preventDefault();
      User.logout(response => {
        //if (response && response.success) {
        App.setState("init")
        //}
      });

    });
  }
}

