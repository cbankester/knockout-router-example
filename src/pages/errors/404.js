export default class NotFoundViewModel {

  constructor({error}) {
    this.message = error.message;
    this.stack   = error.stack;
  }

  static get name() {
    return 'error-404';
  }

  static get template() {
    return {element: 'error-404-template'};
  }
}
