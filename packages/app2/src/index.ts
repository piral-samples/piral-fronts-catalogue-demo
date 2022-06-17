import App from './App';
import AppLink from './AppLink';

export function setup(app: any) {
  app.registerPage('/app2', App);

  app.registerExtension('homepage-actions', AppLink);
}
