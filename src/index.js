import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Weather />
  </React.StrictMode>
);


reportWebVitals();
