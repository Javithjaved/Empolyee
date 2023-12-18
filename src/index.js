import React from 'react';
import  ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/';
 import interceptors from "../src/interceptors";
 import { Provider } from 'react-redux';
 import store from "../src/redux/store/store.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
interceptors();
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App/>
  </Provider>
  </React.StrictMode>  
);
reportWebVitals();
