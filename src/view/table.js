import Abstract from './abstract';
const CODE = {
  A: 65,
  Z: 90
};

const toCell = (_, index) => {
  return `<div class="cell" contenteditable data-col="${index}"></div>`;
};

const toColumn = (col, index) => {
  return (
    `<div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>`
    )
  };

const createRow = (index, content) => {
  const resizer = index
    ? `<div class="row-resize" data-resize="row"></div>`
    : ``;

  return (
    `<div class="row" data-type="resizable">
        <div class="row-info">
          ${index ? index : ``}
          ${resizer}
        </div>
        <div class="row-data">${content}</div>
    </div>`
  );
};

const toCHar = (_, index) => String.fromCharCode(CODE.A + index);

const createTableTemplate = (rowsCount) => {
  const colsCount = CODE.Z - CODE.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill(``)
    .map(toCHar)
    .map(toColumn)
    .join(``);

  rows.push(createRow(null, cols));

  for (let i = 1; i <= rowsCount; i++) {
    const cells = new Array(rowsCount)
      .fill(``)
      .map(toCell)
      .join(``);

    rows.push(createRow(i, cells));
  }

  return `<div class="excel__table">${rows.join(``)}</div>`;
};

export default class Table extends Abstract {
  constructor(colsCount = 15) {
    super();
    this._colsCount = colsCount;

    this._tableMousedownHandler = this._tableMousedownHandler.bind(this);
  }

  getTemplate() {
    return createTableTemplate(this._colsCount);
  }

  _tableMousedownHandler(evt) {
    this._callback.tableMousedown(evt, this.getElement());

  }

  setTableMousedownHandler(callback) {
    this._callback.tableMousedown = callback;
    this.getElement().addEventListener(`mousedown`, this._tableMousedownHandler);
  }
}
