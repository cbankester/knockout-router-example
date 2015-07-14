import AppRouter from './router';

class AppViewModel {
  constructor() {
    this.router = new AppRouter(this);
    this.title = ko.observable();
    ko.applyBindings(this);
  }
  navigateTo(path, opts={}) {
    this.router.handlePath(path).catch(err => {
      // 404 is handled by the `unrecognizedRouteHandler`, so we can just ignore it here
      if (err.status !== 404) {
        this.handlePath('/500', {change_path: false, error: err});
      }
    });
  }
}

window.AppViewModel = AppViewModel;
