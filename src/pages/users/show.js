export default class UserShowViewModel {

  constructor({user_id}) {
    this._id  = user_id;
    this.name = ko.observable();
    this.age  = ko.observable();
  }

  static get name() {
    return 'user-show';
  }

  static get template() {
    return {element: 'user-show-template'};
  }
}
