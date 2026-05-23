import { useState, useEffect } from 'react';

export default function Footer() {
  const [sid, setSid] = useState('');
  useEffect(() => { setSid('0x' + Math.floor(Math.random() * 0xFFFFFFFF).toString(16).padStart(8, '0').toUpperCase()); }, []);

  return (
    <footer className="text-center pt-2 animate-fade-in" style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}>
      <div className="flex items-center justify-center gap-1.5 font-mono text-xs text-cyber-muted mb-2">
        <span className="text-cyber-green">root@homelab:~$</span>
        <span className="text-cyber-green animate-cursor-blink">_</span>
      </div>
      <div className="text-cyber-dim text-[0.55rem] font-mono tracking-widest">
        <span>© {new Date().getFullYear()} HOMELAB</span><span className="mx-1.5">·</span><span>v3.1.8</span><span className="mx-1.5">·</span><span>SESSION ID: {sid}</span>
      </div>
    </footer>
  );
}
