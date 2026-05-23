import type { ReactNode } from 'react';
import { useState } from 'react';
import MatrixRain from '../common/MatrixRain';
import Scanlines from '../common/Scanlines';
import CornerDecorations from '../common/CornerDecorations';
import ErrorBootScreen from './ErrorBootScreen';

interface ErrorPageProps {
  code: string;
  title: string;
  description: string;
  terminalLine: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; onClick: () => void };
}

export default function ErrorPage({
  code, title, description, terminalLine,
  primaryAction = { label: '[ RETURN_TO_HOME ]', href: '/' },
  secondaryAction = { label: '[ RETRY ]', onClick: () => location.reload() },
}: ErrorPageProps) {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleBootFinish = () => {
    setShowMainContent(true);
  };

  // Show boot screen for all error codes (401, 404, 500, 502, 503, and unmatched paths)
  const shouldShowBootScreen = ['401', '404', '500', '502', '503'].includes(code) || 
                              (code === '404' && typeof window !== 'undefined' && 
                               !['/', '/readme'].includes(window.location.pathname));

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text font-sans flex items-center justify-center p-8 max-sm:p-4 overflow-hidden relative">
      <MatrixRain />
      <div className="scanlines" aria-hidden="true" />
      <CornerDecorations />

      {shouldShowBootScreen && !showMainContent ? (
        <ErrorBootScreen onFinish={handleBootFinish} errorCode={code} />
      ) : (
        <div className="relative z-[2] w-full max-w-[560px]" role="alert">
          <div className="flex items-center gap-3 px-4 py-2.5 bg-black/70 border border-cyber-red/10 rounded-t-lg font-mono text-xs">
            <span className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </span>
            <span className="text-cyber-muted flex-1">root@homelab:~/errors</span>
            <span className="text-cyber-red tracking-widest animate-blink text-[0.6rem]">ERROR {code}</span>
          </div>

          <div className="px-8 py-10 max-sm:px-4 max-sm:py-6 bg-black/35 border-x border-b border-cyber-red/10 text-center animate-fade-in">
            <GlitchCode code={code} />
            <div className="font-mono text-[0.6rem] text-cyber-dim mb-5">
              <span className="text-cyber-red">root@homelab:~$</span> {terminalLine}
            </div>
            <h1 className="text-lg font-semibold mb-2 tracking-wide text-cyber-text">{title}</h1>
            <p className="text-sm text-cyber-muted leading-relaxed max-w-[380px] mx-auto mb-7">{description}</p>
            <div className="flex gap-2.5 justify-center flex-wrap">
              <a
                href={primaryAction.href}
                aria-label={primaryAction.label.replace(/[[\]]/g, '')}
                className="px-6 py-2.5 text-xs font-mono font-medium no-underline cursor-pointer transition-all duration-250 hover:-translate-y-0.5 text-cyber-text border border-cyber-red/20 hover:bg-cyber-red/[0.04] hover:border-cyber-red hover:text-cyber-red hover:shadow-[0_0_20px_rgba(255,68,68,0.06)]"
              >
                {primaryAction.label}
              </a>
              <button
                onClick={secondaryAction.onClick}
                aria-label={secondaryAction.label.replace(/[[\]]/g, '')}
                className="px-6 py-2.5 text-xs font-mono font-medium cursor-pointer transition-all duration-250 hover:-translate-y-0.5 text-cyber-muted border border-white/[0.04] bg-transparent hover:text-cyber-text hover:border-white/15"
              >
                {secondaryAction.label}
              </button>
            </div>
          </div>

          <div className="px-4 py-3 bg-black/35 border-x border-b border-cyber-red/10 rounded-b-lg text-center animate-fade-in">
            <div className="font-mono text-xs text-cyber-muted flex items-center justify-center gap-1.5">
              <span className="text-cyber-red">root@homelab:~$</span>
              <span className="text-cyber-red animate-cursor-blink">_</span>
            </div>
            <div className="text-cyber-dim text-[0.5rem] font-mono tracking-widest mt-1.5">
              © {new Date().getFullYear()} HOMELAB — ERROR {code}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function GlitchCode({ code }: { code: string }) {
  return (
    <div
      className="glitch-text text-[clamp(5rem,18vw,9rem)] font-black tracking-tighter leading-none inline-block text-cyber-red mb-1"
      data-text={code}
    >
      {code}
    </div>
  );
}
