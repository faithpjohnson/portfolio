import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import '../src/style.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/Nav/Nav'

ReactDOM.render(
  <Router><App/></Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
