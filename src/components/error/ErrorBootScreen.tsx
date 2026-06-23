import { useEffect, useState } from 'react';
import { Hexagon } from '../common/Icons';

interface ErrorBootLine {
  text: string;
  status: 'ok' | 'info' | 'warn' | 'kern' | 'done' | 'error';
}

const errorBootSequence: ErrorBootLine[] = [
  { text: 'Linux version 6.8.0-homelab (root@homelab) #1 SMP PREEMPT_DYNAMIC', status: 'kern' },
  { text: 'Command line: root=/dev/sda1 quiet splash loglevel=3', status: 'kern' },
  { text: 'homelab-dashboard: loading kernel modules...', status: 'kern' },
  { text: 'Mounted proc filesystem.', status: 'ok' },
  { text: 'Mounted sysfs filesystem.', status: 'ok' },
  { text: 'Started udev Kernel Device Manager.', status: 'ok' },
  { text: 'Started homelab-dashboard.service — Homelab Infrastructure Dashboard', status: 'ok' },
  { text: ' homelab-dashboard: ERROR DETECTED', status: 'error' },
  { text: ' homelab-dashboard: loading error handler...', status: 'info' },
  { text: ' homelab-dashboard: error handler initialized', status: 'done' },
];

function fmtKernTimestamp(n: number): string {
  const s = String(n);
  return '[' + ' '.repeat(Math.max(0, 8 - s.length)) + s + ']';
}

interface ErrorBootScreenProps {
  onFinish: () => void;
  errorCode: string;
}

export default function ErrorBootScreen({ onFinish, errorCode }: ErrorBootScreenProps) {
  const [shown, setShown] = useState(() => 0);
  const [done, setDone] = useState(() => false);

  useEffect(() => {
    if (shown >= errorBootSequence.length) {
      const t = setTimeout(() => setDone(true), 500);
      return () => clearTimeout(t);
    }
    const delay = shown < 3
      ? 300 + Math.random() * 200
      : shown < 7
        ? 200 + Math.random() * 150
        : 450; // Longer delay for error messages
    const t = setTimeout(() => setShown((i) => i + 1), delay);
    return () => clearTimeout(t);
  }, [shown]);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(onFinish, 800); // Longer delay for error pages
    return () => clearTimeout(t);
  }, [done, onFinish]);

  const progress = Math.min(shown / errorBootSequence.length, 1);

  return (
    <div
      role="status" aria-live="polite" aria-label="System booting with error"
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${done ? 'opacity-0' : 'opacity-100'}`}
      style={{ background: 'radial-gradient(ellipse at center, #0d0d0d 0%, #000000 100%)' }}
    >
      <div className="w-full max-w-[600px] px-6">
        <div className="mb-5 flex items-center gap-2 font-mono text-[0.55rem] text-cyber-dim tracking-widest">
          <Hexagon className="w-2.5 h-2.5 text-cyber-red" />
          <span>HOMELAB v3.2.0 — ERROR {errorCode}</span>
          <span className="flex-1" />
          <span className="text-cyber-dim">{Math.floor(progress * 100)}%</span>
        </div>

        <div className="font-mono text-xs leading-[1.9]">
          {errorBootSequence.slice(0, shown).map((line, i) => (
            <div key={i} className="flex gap-3">
              <span className="w-[6.5rem] flex-shrink-0"> {/* Increased width for better alignment */}
                {line.status === 'kern' ? (
                  <span className="text-cyber-dim text-[0.55rem]" style={{ fontVariantNumeric: 'tabular-nums' }}>{fmtKernTimestamp(i)}</span>
                ) : (
                  {
                    ok:   <span className="text-cyber-green">[  OK  ]</span>,
                    info: <span className="text-cyber-cyan">[ INFO ]</span>,
                    warn: <span className="text-cyber-orange">[ WARN ]</span>,
                    done: <span className="text-cyber-green font-bold">[ DONE ]</span>,
                    error: <span className="text-cyber-red font-bold">[ERROR]</span>,
                  }[line.status]
                )}
              </span>
              <span className={line.status === 'done' || line.status === 'error' ? 'text-cyber-red' : 'text-cyber-muted'}>
                {line.text}
              </span>
            </div>
          ))}
          {shown < errorBootSequence.length && (
            <div className="flex gap-3">
              <span className="w-[6.5rem] flex-shrink-0 text-cyber-dim">[ .... ]</span>
              <span className="text-cyber-dim animate-pulse">_</span>
            </div>
          )}
        </div>

        <div className="mt-5 h-[2px] bg-white/[0.04] rounded overflow-hidden">
          <div
            className="h-full rounded transition-all duration-300 ease-out"
            style={{
              width: `${progress * 100}%`,
              background: 'linear-gradient(90deg, #ff4444, #ff8844)', // Red gradient for error
            }}
          />
        </div>
      </div>
    </div>
  );
}