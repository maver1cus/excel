import Abstract from './abstract';

const createFormulaTemplate = () => {
  return (
    `<div class="excel__formula">
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    </div>`
  );
};

export default class Formula extends Abstract {
  constructor() {
    super();

    this._formulaInputHandler = this._formulaInputHandler.bind(this);
  }

  getTemplate() {
    return createFormulaTemplate();
  }

  _formulaInputHandler(evt) {
    evt.preventDefault();
    this._callback.formulaInput(evt);
  }

  setFormulaInputHandler(callback) {
    this._callback.formulaInput = callback;
    this.getElement().querySelector(`.input`).addEventListener(`input`, this._formulaInputHandler);
  }
}
