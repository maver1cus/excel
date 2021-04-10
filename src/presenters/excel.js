import ExcelView from '../view/excel';
import HeaderView from '../view/header';
import ToolbarView from '../view/toolbar';
import FormulaView from '../view/formula';
import TableView from '../view/table';
import {render, RenderPosition} from '../utils/render';

export default class Excel {
  constructor(root) {
    this._root = root;

    this._excelComponent = new ExcelView();
    this._headerComponent = new HeaderView();
    this._toolbarComponent = new ToolbarView();
    this._formulaComponent = new FormulaView();
    this._tableComponent = new TableView();

    this._formulaComponent.setFormulaInputHandler(this._handleFormulaInput);
    this._tableComponent.setTableMousedownHandler(this._handleTableMousedown)
  }

  init() {
    render(this._root, this._excelComponent, RenderPosition.AFTERBEGIN);
    render(this._excelComponent, this._headerComponent, RenderPosition.BEFOREEND);
    render(this._excelComponent, this._toolbarComponent, RenderPosition.BEFOREEND);
    render(this._excelComponent, this._formulaComponent, RenderPosition.BEFOREEND);
    render(this._excelComponent, this._tableComponent, RenderPosition.BEFOREEND);
  }

  _handleFormulaInput(evt) {
    console.log(evt.target.textContent.trim());
  }

  _handleTableMousedown(evt, tableElement) {
    console.log(12);
    if (evt.target.dataset.resize) {
      const resizer = evt.target;
      const parent = resizer.closest(`[data-type="resizable"]`);
      const coords = parent.getBoundingClientRect();
      const type = resizer.dataset.resize;
      const sideProp = type === `col` ? `bottom` : `right`;
      let value;

      resizer.style.opacity = 1;
      resizer.style[sideProp] = `-5000px`;

      document.onmousemove = (event) => {
        if (type === `col`) {
          const delta = event.pageX - coords.right;
          value = coords.width + delta;

          resizer.style.right = -delta + `px`;
        } else {
          const delta = event.pageY - coords.bottom;
          value = coords.height + delta;

          resizer.style.bottom = -delta + `px`;
        }
      }

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;

        if (type === 'col') {
          parent.style.width = value + `px`;
          tableElement
            .querySelectorAll(`[data-col="${parent.dataset.col}"]`)
            .forEach(cell => cell.style.width = value + `px`);
        } else {
          parent.style.height = value + `px`;
        }

        resizer.style.opacity = 0;
        resizer.style.bottom = 0;
        resizer.style.right = 0;
      }

    }
  }
}
