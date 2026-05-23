import { useState } from 'react';
import { services } from '../../data/services';
import { Play } from '../common/Icons';

export default function QuickLinks() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="animate-fade-in my-3 sm:my-4" style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
      <div className="flex items-center gap-1.5 mb-2 sm:mb-3 font-mono text-xs sm:text-[0.6rem] text-cyber-dim tracking-widest">
        <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-cyber-green" />
        <h3>QUICK ACCESS</h3>
        <span className="text-cyber-dim">]</span>
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-1.5">
        {services.map((s) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Quick access to ${s.name}`}
            className="inline-flex px-2 sm:px-3 py-1.5 sm:py-1 font-mono text-xs sm:text-xs font-medium no-underline bg-black/25 border transition-all duration-250 hover:-translate-y-0.5 sm:hover:-translate-y-0.5"
            style={{
              borderColor: hovered === s.id ? s.accent : 'rgba(0,255,65,0.1)',
              color: hovered === s.id ? s.accent : undefined,
              boxShadow: hovered === s.id ? `0 0 18px ${s.accent}1a` : undefined,
            }}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {s.name.toLowerCase()}
          </a>
        ))}
      </div>
    </section>
  );
}
