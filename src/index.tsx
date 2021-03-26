import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './redux/redux-store';
import { AppCont } from './AppContainer';
import { reportWebVitals } from './reportWebVitals';

/** Render app */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppCont />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
