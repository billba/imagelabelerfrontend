import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer, middleware } from './reducers/root';

ReactDOM.render(
    <Provider store={createStore(rootReducer, middleware)}>
        <App />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
