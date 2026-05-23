import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// ── CONSOLE EASTER EGG ──
console.log(
  '%c ⬡ HOMELAB DASHBOARD v3.1.7 ',
  'background:#0a0a0a; color:#00ff41; font-size:14px; font-weight:bold; padding:8px 12px; border:1px solid #00ff41;'
);
console.log(
  '%c root@homelab:~$ systemctl status — all systems nominal ',
  'color:#6a6a6a; font-size:12px; font-family:monospace;'
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
