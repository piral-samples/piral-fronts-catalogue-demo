import Header from './Header';
import HomePage from './HomePage';

export function setup(app: any) {
  app.registerPage('/', HomePage);

  app.registerExtension('header', Header);
}
