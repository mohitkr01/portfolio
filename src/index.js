import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Disable browser scroll restoration before React mounts
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Apply saved theme before first paint to avoid colour flash on reload
(function () {
  const THEMES = {
    green:  { bg: '#1a3824', bgCard: '#224830', bgRgb: '26, 56, 36',  primary: '#78cc6d', pRgb: '120, 204, 109' },
    purple: { bg: '#1e1240', bgCard: '#281852', bgRgb: '30, 18, 64',  primary: '#a78bfa', pRgb: '167, 139, 250' },
    blue:   { bg: '#0e2244', bgCard: '#142c58', bgRgb: '14, 34, 68',  primary: '#38bdf8', pRgb: '56, 189, 248'  },
    orange: { bg: '#38180a', bgCard: '#48220e', bgRgb: '56, 24, 10',  primary: '#f97316', pRgb: '249, 115, 22'  },
  };
  const t = THEMES[localStorage.getItem('theme')] || THEMES.green;
  const r = document.documentElement;
  r.style.setProperty('--bg', t.bg);
  r.style.setProperty('--bg-card', t.bgCard);
  r.style.setProperty('--bg-rgb', t.bgRgb);
  r.style.setProperty('--primary', t.primary);
  r.style.setProperty('--primary-dim', `rgba(${t.pRgb}, 0.12)`);
  r.style.setProperty('--primary-border', `rgba(${t.pRgb}, 0.3)`);
  r.style.setProperty('--primary-glow', `rgba(${t.pRgb}, 0.07)`);
}());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
