import { useState, useCallback } from 'react';
import type { Service } from '../../types';

interface Props {
  service: Service;
  index: number;
}

const icons: Record<Service['id'], React.ReactNode> = {
  jellyfin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" /><path d="M12 8.5V12l1.5 1.5" />
    </svg>
  ),
  uptime: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" /><path d="M12 2v20" /><path d="M2 12h20" />
    </svg>
  ),
  casaos: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" /><path d="M9 21V12h6v9" /><path d="M12 3v6" />
    </svg>
  ),
  'twitch-drops': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M21 12L12 3l-4 4-4-4-1 1v12l5 5 4-4 4 4 5-5V4l-1-1z" /><path d="M12 3v9" /><path d="M9 9l3 3 3-3" />
    </svg>
  ),
  byte: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="9" /><path d="M12 8v4l2 2" /><path d="M8 12h8" /><path d="M12 6v2" />
    </svg>
  ),
};

export default function ServiceCard({ service, index }: Props) {
  const [ping, setPing] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const showPing = useCallback(() => {
    setPing(Math.floor(Math.random() * 40 + 8));
    setTimeout(() => setPing(null), 2500);
  }, []);

  const copy = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(service.protocol).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, [service.protocol]);

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${service.name} — ${service.description}`}
      className="group relative flex flex-col bg-black/35 border border-cyber-green/10 no-underline text-inherit cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1"
      style={{ animation: `card-in 0.6s ease-out backwards`, animationDelay: `${0.1 + index * 0.1}s` }}
      onMouseEnter={showPing}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${service.accentDim}, transparent 65%)` }}
      />

      <div className="flex items-center justify-between px-3 sm:px-5 pt-3 sm:pt-4">
        <div
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-all duration-300 group-hover:drop-shadow-[0_0_10px_var(--accent)] group-hover:scale-110"
          style={{ color: service.accent }}
        >
          {icons[service.id]}
        </div>
        <span
          className="font-mono text-xs sm:text-[0.5rem] text-cyber-dim tracking-widest px-2 py-1 border border-white/5 rounded-sm transition-colors duration-300 group-hover:border-[--accent] group-hover:text-[--accent]"
          style={{ '--accent': service.accent } as React.CSSProperties}
        >
          {service.tag}
        </span>
      </div>

      <div className="px-3 sm:px-5 pb-3 sm:pb-4 pt-1.5 relative z-[1]">
        <h2 className="text-xs sm:text-sm font-bold text-cyber-text tracking-wider">{service.name}</h2>

        <div className="flex items-start gap-2 sm:gap-2 mt-0.5 mb-1 flex-wrap">
          <span
            className="font-mono text-[0.5rem] sm:text-[0.55rem] text-cyber-dim cursor-pointer transition-colors duration-200 hover:text-cyber-text relative flex-1 min-w-0"
            onClick={copy}
            title="Click to copy"
          >
            <span className="truncate block">{service.protocol}</span>
            {copied && (
              <span className="absolute -top-3 sm:-top-4 left-0 text-[0.5rem] text-cyber-green whitespace-nowrap animate-fade-in">
                copied!
              </span>
            )}
          </span>
          <span className="font-mono text-[0.5rem] sm:text-[0.5rem] opacity-50 flex-shrink-0" style={{ color: service.accent }}>
            {service.type}
          </span>
        </div>

        <p className="text-xs text-cyber-muted leading-relaxed">{service.description}</p>

        <div className="flex items-center justify-between mt-2 sm:mt-2.5">
          <span className="flex items-center gap-1.5 font-mono text-[0.5rem] sm:text-[0.6rem]">
            <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-cyber-green" />
            </span>
            <span className="text-cyber-green">ONLINE</span>
            {ping !== null && (
              <span className="text-cyber-dim ml-1 text-[0.4rem] sm:text-[0.5rem]">{ping}ms</span>
            )}
          </span>
          <span
            className="text-sm sm:text-base text-cyber-dim transition-all duration-300 group-hover:text-[--accent] group-hover:translate-x-1"
            style={{ '--accent': service.accent } as React.CSSProperties}
          >
            →
          </span>
        </div>
      </div>

      <div
        className="absolute -inset-px border border-transparent pointer-events-none transition-all duration-300 group-hover:border-[--accent] group-hover:shadow-[0_0_30px_var(--glow)]"
        style={{ '--accent': service.accent, '--glow': `${service.accent}15` } as React.CSSProperties}
      />
    </a>
  );
}
