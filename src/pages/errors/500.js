export default class InternalServerErrorViewModel {

  constructor({error}) {
    this.message = error.message;
    this.stack   = error.stack;
  }

  static get name() {
    return 'error-500';
  }

  static get template() {
    return {element: 'error-500-template'};
  }
}
