import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fortawesome/react-fontawesome";
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios  from "axios";
import { configureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

import * as dotenv from "dotenv";

axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.withCredentials = true;
const store = configureStore();
console.log("ENV DATA", process.env );


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
