import Abstract from './abstract';

const createExcelTemplate = () => {
  return (
    `<div class="excel"></div>`
  );
};

export default class Excel extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createExcelTemplate();
  }
}
