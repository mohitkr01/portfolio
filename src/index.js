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
    green:  { bg: '#0a1a0e', bgCard: '#0e2214', bgRgb: '10, 26, 14',  primary: '#78cc6d', pRgb: '120, 204, 109' },
    purple: { bg: '#0f0a20', bgCard: '#160e2e', bgRgb: '15, 10, 32',  primary: '#a78bfa', pRgb: '167, 139, 250' },
    blue:   { bg: '#071020', bgCard: '#0b182e', bgRgb: '7, 16, 32',   primary: '#38bdf8', pRgb: '56, 189, 248'  },
    orange: { bg: '#1a0e06', bgCard: '#22130a', bgRgb: '26, 14, 6',   primary: '#f97316', pRgb: '249, 115, 22'  },
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
