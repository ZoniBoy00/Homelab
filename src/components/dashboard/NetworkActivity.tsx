import { useState, useEffect } from 'react';
import { Play, Bolt } from '../common/Icons';

const BAR_COUNT = 36;

export default function NetworkActivity() {
  const [bars, setBars] = useState(() => Array.from({ length: BAR_COUNT }, () => Math.random() * 100));
  const [rx, setRx] = useState(42);
  const [tx, setTx] = useState(18);
  const [conn, setConn] = useState(12);

  useEffect(() => {
    const barId = setInterval(() => setBars(Array.from({ length: BAR_COUNT }, () => Math.random() * 100)), 500);
    const trafficId = setInterval(() => { setRx(Math.floor(Math.random() * 120 + 10)); setTx(Math.floor(Math.random() * 40 + 5)); }, 2500);
    const connId = setInterval(() => setConn(Math.floor(Math.random() * 20 + 6)), 4000);
    return () => { clearInterval(barId); clearInterval(trafficId); clearInterval(connId); };
  }, []);

  return (
    <div className="bg-black/30 border border-cyber-green/10 p-3 sm:p-4">
      <div className="flex items-center gap-1.5 mb-2 sm:mb-3 font-mono text-xs sm:text-[0.6rem] text-cyber-dim tracking-widest">
        <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-cyber-green" />
        <h3>NETWORK ACTIVITY</h3>
      </div>
      <div className="flex items-end gap-1 sm:gap-[2px] h-16 sm:h-10 mb-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 min-w-[2px] sm:min-w-[3px] rounded-t transition-all duration-500 ease-out"
            style={{
              height: `${h}%`,
              background: h > 70 ? 'linear-gradient(to top, #00ff41, #00d4ff)' : h > 40 ? '#00ff41' : 'rgba(0,255,65,0.4)',
              opacity: h > 20 ? 0.8 : 0.3,
            }}
          />
        ))}
      </div>
      <div className="flex justify-between font-mono text-xs sm:text-[0.55rem] text-cyber-muted">
        <span>↓ {rx} KB/s</span>
        <span>↑ {tx} KB/s</span>
        <span><Bolt className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 inline-block align-middle mr-0.5" />{conn} conn</span>
      </div>
    </div>
  );
}
