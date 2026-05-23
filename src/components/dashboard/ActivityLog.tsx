import { useEffect, useRef, useState, useCallback } from 'react';
import { logMessages } from '../../data/services';
import type { LogMessage } from '../../types';
import { Play, Check, Triangle, Square } from '../common/Icons';

interface Entry { msg: LogMessage; time: string }

function fmt(d: Date) {
  return `[${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}]`;
}

const Icon = ({ type }: { type: LogMessage['type'] }) => {
  switch (type) {
    case 'ok':   return <Check className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-cyber-green inline-block align-middle mr-0.5 sm:mr-1" />;
    case 'warn': return <Triangle className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-cyber-orange inline-block align-middle mr-0.5 sm:mr-1" />;
    default:     return <Square className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-cyber-cyan inline-block align-middle mr-0.5 sm:mr-1" />;
  }
};

export default function ActivityLog() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const idx = useRef(0);
  const ref = useRef<HTMLDivElement>(null);

  const add = useCallback(() => {
    const msg = logMessages[idx.current % logMessages.length];
    setEntries((prev) => [...prev.slice(-14), { msg, time: fmt(new Date()) }]);
    idx.current++;
  }, []);

  useEffect(() => { add(); const id = setInterval(add, 3500 + Math.random() * 2000); return () => clearInterval(id); }, [add]);

  useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight; }, [entries]);

  return (
    <section className="animate-fade-in my-3 sm:my-4" style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}>
      <div className="flex items-center gap-1.5 mb-2 sm:mb-3 font-mono text-xs sm:text-[0.6rem] text-cyber-dim tracking-widest">
        <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-cyber-green" />
        <h3>ACTIVITY LOG</h3>
        <span className="text-cyber-dim">]</span>
      </div>
      <div ref={ref} className="bg-black/25 border border-cyber-green/10 p-2.5 sm:p-3 font-mono text-xs sm:text-[0.65rem] leading-relaxed sm:leading-[1.8] h-48 sm:h-[200px] overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#3a3a3a transparent' }}>
        {entries.length === 0 && <div className="text-cyber-dim">[--:--:--] <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-cyber-green inline-block align-middle mr-1" /> initializing system…</div>}
        {entries.map((e, i) => (
          <div key={i} className="text-cyber-muted">
            <span className="text-cyber-dim mr-1">{e.time}</span>
            <Icon type={e.msg.type} />
            {e.msg.text}
          </div>
        ))}
      </div>
    </section>
  );
}
