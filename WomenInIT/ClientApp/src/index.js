import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ScrollToTop from './components/ScrollToTop.js';
import {JobMuligheder} from './components/JobMuligheder';
import "./custom.css";

function pp() {
  return (
    <div className="App">
      <JobMuligheder />
      <ScrollToTop />
    </div>
  );
}


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);


registerServiceWorker();


