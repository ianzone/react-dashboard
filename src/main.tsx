import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/index.css';

const app = document.createElement('div');
app.style.height = '100%';
document.getElementsByTagName('body')[0].appendChild(app);

createRoot(app).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
