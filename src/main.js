import ExcelPresenter from './presenters/excel';

const rootElement = document.querySelector(`#app`);

const excelPresenter = new ExcelPresenter(rootElement);

excelPresenter.init();
