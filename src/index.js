import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/presentational/App';
import store from './reducers/index';

const initialState = [
  {
    ID: Math.random(),
    title: 'learn redux',
    category: 'Redux',
  },
  {
    ID: Math.random(),
    title: 'learn react',
    category: 'React',
  },
  {
    ID: Math.random(),
    title: 'learn Rails',
    category: 'Rails',
  },
  {
    ID: Math.random(),
    title: 'learn good books',
    category: 'good',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
