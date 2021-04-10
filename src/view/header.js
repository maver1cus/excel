import Abstract from './abstract';

const createHeaderTemplate = () => {
  return (
    `<div class="excel__header">

      <input type="text" class="input" value="Новая таблица" />

      <div>

        <div class="button">
          <i class="material-icons">delete</i>
        </div>

        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>

      </div>`
  );
};

export default class Header extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createHeaderTemplate();
  }
}
