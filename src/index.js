import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Weather from './Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <div className="container">
    <Weather defaultCity="Napa"/>
    </div>
    <footer>
      <div className="end">
          <small className="end-text"><a href="https://github.com/saywachuji/weather-react-app" rel="noreferrer" target="_blank">Open source code</a> by Saywa Chuji</small>
      </div>
      </footer>
    </div>
  </React.StrictMode>
);

