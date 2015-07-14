import Router from 'knockout-router';
import pages  from './pages';

const site_routes = [
  {
    path: '/users/:user_id',
    handler: 'userShowHandler',
    page: pages.users.ShowViewModel
  }, {
    path: '/users',
    handler: 'usersListHandler',
    page: pages.users.ListViewModel
  }, {
    path: '/404',
    page: pages.errors.NotFoundViewModel,
    meta: {replace_state: true}
  }, {
    path: '/500',
    page: pages.errors.InternalServerErrorViewModel,
    meta: {replace_state: true}
  }
]

export default class SiteRouter extends Router {
  constructor(app) {
    super(app, site_routes);
  }

  userShowHandler(params) {
    this.app.title(`Person ${params.name}`);
    return Promise.resolve({name: params.name});
  }

  usersListHandler(params) {
    this.app.title("Users List");
    return Promise.resolve(params);
  }

  unrecognizedRouteHandler(path) {
    return super.unrecognizedRouteHandler(path).catch(err => {
      this.handlePath('/404', {change_path: false});
      return Promise.resolve();
    });
  }

  preHandle(path, handler, params) {
    if (!!params.change_path) {
      if (params.replace_state) {
        window.history.replaceState({handler, params}, null, path);
      } else {
        window.history.pushState({handler, params}, null, path);
      }
    }
  }
}
