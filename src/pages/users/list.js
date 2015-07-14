export default class UsersListViewModel {

  constructor() {
    this.users = ko.observableArray([
      {_id: 1, name: 'Jane Doe', age: 34},
      {_id: 2, name: 'John Doe', age: 28}
    ]);
  }

  static get name() {
    return 'users-list';
  }

  static get template() {
    return {element: 'users-list-template'};
  }
}
