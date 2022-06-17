[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> A simple example migrated from Fronts to Piral

:zap: This sample uses the [simple example for Fronts](https://github.com/kokanek/fronts-example) to apply Piral. Compare for yourself.

You can visit this demo at [fronts-catalogue.samples.piral.cloud/](https://fronts-catalogue.samples.piral.cloud/).

## Getting Started

Just install the dependencies using Yarn and then start the application:

```sh
yarn install
```

followed by

```sh
yarn start
```

## Differences

### Removal of Boilerplate Code

Beforehand, you've seen lots of boilerplate code such as the *index.ts* files containing

```js
import('./bootstrap');
```

or the *bootstrap.tsx* files containing:

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { boot } from 'fronts';
import App from './App';

export default function render(element: HTMLElement | null) {
  ReactDOM.render(<App />, element);
  return () => {
    ReactDOM.unmountComponentAtNode(element!);
  };
}

boot(render, document.getElementById('root'));
```

such meaningless code is never useful - especially when repeating.

### Embracing Domain Thinking

Instead of having everything done in a technical split the usage of Piral encourages domain (functional) splitting. This means, that you do not need to care how things are layed out technically - that is the job of Piral. Instead, you just care about what parts really belong in your functional domain.

For this, look at the *index.ts* of `app1`:

```ts
import Header from './Header';
import HomePage from './HomePage';

export function setup(app: any) {
  app.registerPage('/', HomePage);

  app.registerExtension('header', Header);
}
```

Beforehand, `app1` had to include the whole router and everything. This is way too much and makes the whole MF approach quite hard to scale. Now, this particular MF only cares about what it brings to the table - an `Homepage` that should be displayed at `/` and an extension component to be rendered in the `header` slot.

### Tooling Independence

Beforehand, larger Webpack configuration files have been necessary. Now, each team can decide how they want to handle this. For instance, to illustrate a super fast and smooth build process we've picked `esbuild` for the current repository. You could have something else in here, too.

### Decoupling of Micro Frontends

Beforehand, `app1` did directly import `app2`. This is really bad as it will result in feature overlap and therefore need for alignment in the future. Ideally, both micro frontends don't know each other directly - and only use joint loosely coupled contracts, which - in the worst case - will either require runtime checking or just gracefully stop working.

In any case `app2` just registers itself - bringing the `/app2` route to life. To avoid inconcistencies we replaced the link on the `Homepage` of `app1` from

```jsx
<Link to="/app2">
  <Button colorScheme="blue" mt={8}>
    Browse products
  </Button>
</Link>
```

to become just

```jsx
<piral.Extension name="homepage-actions" />
```

and registered that part in `app2`. This way, when `app2` is missing no invalid link will be shown. In addition, any changes to the route later on is exclusively in the hand of the route's owner - namely `app2`.

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
