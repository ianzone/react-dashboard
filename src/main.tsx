import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/index.css';
import '@ant-design/v5-patch-for-react-19'; // NOTE: https://ant.design/docs/react/v5-for-19-cn

const app = document.createElement('div');
app.style.height = '100%';
document.getElementsByTagName('body')[0].appendChild(app);

createRoot(app).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
