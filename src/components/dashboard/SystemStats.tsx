import { useEffect, useState } from 'react';
import { Play } from '../common/Icons';

export default function SystemStats() {
  const [cpu, setCpu] = useState(27);
  const [ram, setRam] = useState({ used: 1.8, pct: 45 });
  const [disk, setDisk] = useState({ used: 342, pct: 68 });

  useEffect(() => {
    const cpuId = setInterval(() => setCpu(Math.floor(Math.random() * 45 + 10)), 2500);
    const ramId = setInterval(() => {
      const used = +(Math.random() * 1.5 + 1.2).toFixed(1);
      setRam({ used, pct: Math.floor(used / 4 * 100) });
    }, 4000);
    const diskId = setInterval(() => {
      const used = Math.floor(Math.random() * 60 + 310);
      setDisk({ used, pct: Math.floor(used / 500 * 100) });
    }, 6000);
    return () => { clearInterval(cpuId); clearInterval(ramId); clearInterval(diskId); };
  }, []);

  return (
    <div className="bg-black/30 border border-cyber-green/10 p-3 sm:p-4">
      <SectionHeader title="SYSTEM RESOURCES" />
      <StatBar label="CPU" value={`${cpu}%`} pct={cpu} />
      <StatBar label="RAM" value={`${ram.used}/4.0 GB`} pct={ram.pct} />
      <StatBar label="DISK" value={`${disk.used}/500 GB`} pct={disk.pct} />
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1.5 mb-2 sm:mb-3 font-mono text-xs sm:text-[0.6rem] text-cyber-dim tracking-widest">
      <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-cyber-green" />
      <h3>{title}</h3>
    </div>
  );
}

function StatBar({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div className="mb-2 sm:mb-2">
      <div className="flex justify-between font-mono text-xs sm:text-[0.6rem] text-cyber-muted mb-0.5">
        <span>{label}</span>
        <span className="text-cyber-text">{value}</span>
      </div>
      <div className="w-full h-1.5 sm:h-2 bg-white/[0.04] rounded overflow-hidden">
        <div className="h-full rounded transition-[width] duration-1000 ease-in" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #00ff41, #00d4ff)' }} />
      </div>
    </div>
  );
}
