import { useState, useEffect } from 'react';

export function useUptime() {
  const [uptime, setUptime] = useState('00:00:00');

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const s = Math.floor((Date.now() - start) / 1000);
      setUptime(
        String(Math.floor(s / 3600)).padStart(2, '0') + ':' +
        String(Math.floor((s % 3600) / 60)).padStart(2, '0') + ':' +
        String(s % 60).padStart(2, '0')
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return uptime;
}
