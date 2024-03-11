import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

const app = document.createElement('div');
app.setAttribute('style', 'height: 100%;');
document.getElementsByTagName('body')[0].appendChild(app);

ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
