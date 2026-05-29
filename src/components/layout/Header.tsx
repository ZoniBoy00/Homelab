import { useState, useEffect } from 'react';
import { useUptime } from '../../hooks/useUptime';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import { typingCommands, services } from '../../data/services';
import { Hexagon } from '../common/Icons';

function useClock() {
  const [t, setT] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setT(
        String(d.getHours()).padStart(2, '0') + ':' +
        String(d.getMinutes()).padStart(2, '0') + ':' +
        String(d.getSeconds()).padStart(2, '0')
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function useNetSpeed() {
  const [s, setS] = useState('—');
  useEffect(() => {
    const tick = () => setS(`${Math.floor(Math.random() * 250 + 50)} Mbps`);
    tick();
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, []);
  return s;
}

const sysItems = [
  { label: 'STATUS', value: <span className="text-xs font-medium text-cyber-green animate-blink flex items-center justify-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-cyber-green inline-block" />ONLINE</span> },
  { label: 'UPTIME', value: null },
  { label: 'CLOCK', value: null },
  { label: 'NODES', value: <span className="text-xs font-mono text-cyber-text text-center block w-full">{services.length} ACTIVE</span> },
  { label: 'NETWORK', value: null },
];

export default function Header() {
  const uptime = useUptime();
  const typedText = useTypingAnimation(typingCommands);
  const clock = useClock();
  const netSpeed = useNetSpeed();

  const values: Record<string, React.ReactNode> = {
    UPTIME: <span className="text-xs font-mono text-cyber-text text-center block w-full">{uptime}</span>,
    CLOCK: <span className="text-xs font-mono text-cyber-text text-center block w-full">{clock}</span>,
    NETWORK: <span className="text-xs font-mono text-cyber-text text-center block w-full">{netSpeed}</span>,
  };

  return (
    <header className="px-6 pt-8 pb-5 bg-black/35 border-x border-cyber-green/10 text-center animate-fade-in">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-cyber-green/20 bg-cyber-green/[0.03] rounded font-mono text-[0.55rem] tracking-widest text-cyber-green mb-5 relative">
        <Hexagon className="w-2.5 h-2.5" />
        <span>PGP SIGNATURE VERIFIED</span>
        <span className="absolute -inset-0.5 rounded border border-cyber-green animate-pulse-ring opacity-0" />
      </div>

      <div className="flex items-center justify-center gap-2 font-mono text-xs sm:text-xs mb-3 sm:mb-5 min-h-[1.6em] sm:min-h-[1.8em]">
        <span className="text-cyber-green whitespace-nowrap">root@homelab:~$</span>
        <span className="text-cyber-muted pr-2 sm:pr-4">{typedText}</span>
        <span className="text-cyber-green animate-cursor-blink text-sm">▊</span>
      </div>

      <div className="mb-2 sm:mb-3">
        <h1 className="glitch-text text-[clamp(2rem,8vw,4rem)] sm:text-[clamp(3rem,10vw,6rem)] font-black tracking-tighter sm:tracking-tighter text-cyber-text leading-[1.1] sm:leading-[1.1]" data-text="HOMELAB">
          HOMELAB
        </h1>
      </div>

      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-5">
        <span className="text-cyber-green/35 text-xs">│</span>
        <p className="text-cyber-muted text-xs sm:text-xs font-medium tracking-widest sm:tracking-widest font-mono">PRIVATE INFRASTRUCTURE DASHBOARD</p>
        <span className="text-cyber-green/35 text-xs">│</span>
      </div>

      <div className="flex justify-center gap-3 sm:gap-6 md:gap-8 flex-wrap py-2 sm:py-3 border-y border-cyber-10">
        {sysItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-0.5 min-w-[60px] sm:min-w-[80px]">
            <span className="font-mono text-[0.5rem] sm:text-[0.55rem] text-cyber-dim tracking-widest text-center">{item.label}</span>
            <div className="w-full text-center">
              {item.value ?? values[item.label]}
            </div>
          </div>
        ))}
      </div>

      <div className="text-cyber-dim text-[0.5rem] sm:text-[0.55rem] font-mono tracking-widest mt-2 sm:mt-3">
        <span>© {new Date().getFullYear()} HOMELAB</span><span className="mx-1 sm:mx-1.5">·</span><span>v3.1.8</span><span className="mx-1 sm:mx-1.5">·</span><span>{services.length} ACTIVE NODES</span>
      </div>
    </header>
  );
}
