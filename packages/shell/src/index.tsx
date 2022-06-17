import * as React from 'react';
import { render } from 'react-dom';
import { Piral, createInstance } from 'piral-core';
import Layout from './Layout';

const instance = createInstance({
  state: {
    components: {
      Layout,
    },
  },
  requestPilets() {
    // Ideally replaced by feed service / MF discovery
    return fetch('./pilets.json').then(res => res.json());
  }
});

render(<Piral instance={instance} />, document.querySelector('#app'));
