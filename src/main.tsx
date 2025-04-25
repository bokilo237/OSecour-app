import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/main.css';
import './assets/styles/custom.css';
import './i18n';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
