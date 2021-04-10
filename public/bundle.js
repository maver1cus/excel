/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenters_excel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenters/excel */ "./src/presenters/excel.js");


const rootElement = document.querySelector(`#app`);

const excelPresenter = new _presenters_excel__WEBPACK_IMPORTED_MODULE_0__["default"](rootElement);

excelPresenter.init();


/***/ }),

/***/ "./src/presenters/excel.js":
/*!*********************************!*\
  !*** ./src/presenters/excel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Excel; });
/* harmony import */ var _view_excel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/excel */ "./src/view/excel.js");
/* harmony import */ var _view_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/header */ "./src/view/header.js");
/* harmony import */ var _view_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/toolbar */ "./src/view/toolbar.js");
/* harmony import */ var _view_formula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/formula */ "./src/view/formula.js");
/* harmony import */ var _view_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/table */ "./src/view/table.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");







class Excel {
  constructor(root) {
    this._root = root;

    this._excelComponent = new _view_excel__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._headerComponent = new _view_header__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._toolbarComponent = new _view_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._formulaComponent = new _view_formula__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._tableComponent = new _view_table__WEBPACK_IMPORTED_MODULE_4__["default"]();

    this._formulaComponent.setFormulaInputHandler(this._handleFormulaInput);
    this._tableComponent.setTableMousedownHandler(this._handleTableMousedown)
  }

  init() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._root, this._excelComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].AFTERBEGIN);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._excelComponent, this._headerComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._excelComponent, this._toolbarComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._excelComponent, this._formulaComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._excelComponent, this._tableComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
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


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, renderTemplate, createELement, render, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createELement", function() { return createELement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const renderTemplate = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const createELement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const render = (container, child, place) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {}
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["createELement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/excel.js":
/*!***************************!*\
  !*** ./src/view/excel.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Excel; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createExcelTemplate = () => {
  return (
    `<div class="excel"></div>`
  );
};

class Excel extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  getTemplate() {
    return createExcelTemplate();
  }
}


/***/ }),

/***/ "./src/view/formula.js":
/*!*****************************!*\
  !*** ./src/view/formula.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Formula; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createFormulaTemplate = () => {
  return (
    `<div class="excel__formula">
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    </div>`
  );
};

class Formula extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ }),

/***/ "./src/view/header.js":
/*!****************************!*\
  !*** ./src/view/header.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


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

class Header extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  getTemplate() {
    return createHeaderTemplate();
  }
}


/***/ }),

/***/ "./src/view/table.js":
/*!***************************!*\
  !*** ./src/view/table.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");

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

class Table extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ }),

/***/ "./src/view/toolbar.js":
/*!*****************************!*\
  !*** ./src/view/toolbar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createToolbarTemplate = () => {
  return (
    `<div class="excel__toolbar">

      <div class="button">
        <i class="material-icons">format_align_left</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_center</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_right</i>
      </div>

      <div class="button">
        <i class="material-icons">format_bold</i>
      </div>

      <div class="button">
        <i class="material-icons">format_italic</i>
      </div>

      <div class="button">
        <i class="material-icons">format_underlined</i>
      </div>

    </div>`
  );
};

class Toolbar extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  getTemplate() {
    return createToolbarTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map