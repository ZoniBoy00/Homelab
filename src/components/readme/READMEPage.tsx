import MatrixRain from '../common/MatrixRain';
import CornerDecorations from '../common/CornerDecorations';
import TerminalBar from '../layout/TerminalBar';

export default function READMEPage() {
  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text font-sans overflow-hidden relative">
      <MatrixRain />
      <div className="scanlines" aria-hidden="true" />
      <CornerDecorations />

      <div className="relative z-[2] w-full max-w-[4xl] mx-auto px-8 py-8 max-sm:px-4 max-sm:py-6">
        <TerminalBar />
        
        <div className="bg-black/35 border border-cyber-green/10 rounded-b-lg overflow-hidden animate-fade-in">
          <div className="px-8 py-8 max-sm:px-6 max-sm:py-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-4 text-cyber-text">
                ⬡ README v3.1.8
              </h1>
              <p className="text-cyber-muted mb-6">
                A cyber/terminal-themed dashboard for managing homelab services. Built with React 18, TypeScript, and Tailwind CSS 3.
              </p>
              
              <div className="flex gap-4 mb-8">
                <a
                  href="/"
                  className="px-6 py-2.5 text-xs font-mono font-medium no-underline cursor-pointer transition-all duration-250 hover:-translate-y-0.5 text-cyber-text border border-cyber-green/20 hover:bg-cyber-green/[0.04] hover:border-cyber-green hover:text-cyber-green hover:shadow-[0_0_20px_rgba(0,255,65,0.06)]"
                >
                  [ BACK_TO_DASHBOARD ]
                </a>
                <button
                  onClick={() => window.open('/', '_blank')}
                  className="px-6 py-2.5 text-xs font-mono font-medium cursor-pointer transition-all duration-250 hover:-translate-y-0.5 text-cyber-muted border border-white/[0.04] bg-transparent hover:text-cyber-text hover:border-white/15"
                >
                  [ OPEN_IN_NEW ]
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4 text-cyber-text">
                  <span className="inline-block mr-2">🌐</span>SERVICES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/70 border border-cyber-green/10 rounded-lg p-4">
                    <h3 className="font-mono text-sm font-medium mb-2 text-cyber-green">JELLYFIN</h3>
                    <p className="text-xs text-cyber-muted mb-2">Media streaming · movies, TV series & music</p>
                    <p className="text-xs font-mono text-cyber-dim">jelly.homelab.cfd:443</p>
                  </div>
                  <div className="bg-black/70 border border-cyber-green/10 rounded-lg p-4">
                    <h3 className="font-mono text-sm font-medium mb-2 text-cyber-green">UPTIMEMON</h3>
                    <p className="text-xs text-cyber-muted mb-2">Service monitoring · real-time status & latency</p>
                    <p className="text-xs font-mono text-cyber-dim">uptime.homelab.cfd:443</p>
                  </div>
                  <div className="bg-black/70 border border-cyber-green/10 rounded-lg p-4">
                    <h3 className="font-mono text-sm font-medium mb-2 text-cyber-green">CASAOS</h3>
                    <p className="text-xs text-cyber-muted mb-2">Server management · system control & apps</p>
                    <p className="text-xs font-mono text-cyber-dim">casa.homelab.cfd:443</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-cyber-text">
                  <span className="inline-block mr-2">🔧</span>FEATURES
                </h2>
                <div className="space-y-4">
                  <div className="bg-black/70 border border-cyber-green/10 rounded-lg p-4">
                    <h3 className="font-mono text-sm font-medium mb-2 text-cyber-green">UI & VISUALS</h3>
                    <ul className="text-xs text-cyber-muted space-y-1">
                      <li>• Matrix rain canvas background with katakana + ASCII</li>
                      <li>• CRT scanlines + vignette overlay</li>
                      <li>• Glitch text title animation</li>
                      <li>• Terminal window title bar with macOS-style traffic lights</li>
                      <li>• SVG icons throughout</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/70 border border-cyber-green/10 rounded-lg p-4">
                    <h3 className="font-mono text-sm font-medium mb-2 text-cyber-green">DASHBOARD</h3>
                    <ul className="text-xs text-cyber-muted space-y-1">
                      <li>• Typing animation with terminal commands</li>
                      <li>• Live clock + uptime counter</li>
                      <li>• Simulated system stats with animated progress bars</li>
                      <li>• Network activity visualization</li>
                      <li>• Live activity log with fixed 200px height</li>
                      <li>• Keyboard shortcuts (J, U, C)</li>
                    </ul>
                  </div>

                  <div className="bg-black/70 border border-cyber-green/10 rounded-lg p-4">
                    <h3 className="font-mono text-sm font-medium mb-2 text-cyber-green">ERROR PAGES</h3>
                    <ul className="text-xs text-cyber-muted space-y-1">
                      <li>• Themed error pages for 401, 404, 500, 502, 503</li>
                      <li>• Custom routing - unmatched URLs show 404</li>
                      <li>• Matrix rain + CRT effects on all error pages</li>
                      <li>• Navigation back to dashboard</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-cyber-text">
                  <span className="inline-block mr-2">⌨️</span>CONTROLS
                </h2>
                <div className="bg-black/70 border border-cyber-green/10 rounded-lg p-4">
                  <h3 className="font-mono text-sm font-medium mb-3 text-cyber-green">KEYBOARD SHORTCUTS</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-cyber-green/10 border border-cyber-green/20 rounded px-3 py-2 mb-2">
                        <span className="font-mono text-sm text-cyber-green">J</span>
                      </div>
                      <p className="text-xs text-cyber-muted">Open Jellyfin</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-cyber-green/10 border border-cyber-green/20 rounded px-3 py-2 mb-2">
                        <span className="font-mono text-sm text-cyber-green">U</span>
                      </div>
                      <p className="text-xs text-cyber-muted">Open UptimeMon</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-cyber-green/10 border border-cyber-green/20 rounded px-3 py-2 mb-2">
                        <span className="font-mono text-sm text-cyber-green">C</span>
                      </div>
                      <p className="text-xs text-cyber-muted">Open CasaOS</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-cyber-text">
                  <span className="inline-block mr-2">🛠️</span>TECH STACK
                </h2>
                <div className="bg-black/70 border border-cyber-green/10 rounded-lg p-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="font-mono text-cyber-green">Framework:</span>
                      <p className="text-cyber-muted">React 18</p>
                    </div>
                    <div>
                      <span className="font-mono text-cyber-green">Language:</span>
                      <p className="text-cyber-muted">TypeScript 5.9</p>
                    </div>
                    <div>
                      <span className="font-mono text-cyber-green">Build:</span>
                      <p className="text-cyber-muted">Vite 6</p>
                    </div>
                    <div>
                      <span className="font-mono text-cyber-green">Styles:</span>
                      <p className="text-cyber-muted">Tailwind CSS 3</p>
                    </div>
                    <div>
                      <span className="font-mono text-cyber-green">Analytics:</span>
                      <p className="text-cyber-muted">@vercel/analytics</p>
                    </div>
                    <div>
                      <span className="font-mono text-cyber-green">Fonts:</span>
                      <p className="text-cyber-muted">Inter + JetBrains Mono</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-cyber-text">
                  <span className="inline-block mr-2">📖</span>README PAGE
                </h2>
                <div className="bg-black/70 border border-cyber-green/10 rounded-lg p-4">
                  <h3 className="font-mono text-sm font-medium mb-2 text-cyber-green">README FEATURES</h3>
                  <ul className="text-xs text-cyber-muted space-y-1">
                    <li>• Self-documenting page with cyber/terminal theme</li>
                    <li>• Live navigation back to dashboard</li>
                    <li>• Service overview and technical specs</li>
                    <li>• Interactive controls and shortcuts guide</li>
                    <li>• Dark theme with matrix rain background</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          <div className="px-6 py-4 bg-black/35 border-t border-cyber-green/10">
            <div className="font-mono text-xs text-cyber-muted flex items-center justify-center gap-1.5">
              <span className="text-cyber-green">root@homelab:~/dashboard</span>
              <span className="text-cyber-green animate-cursor-blink">_</span>
            </div>
            <div className="text-cyber-dim text-[0.5rem] font-mono tracking-widest mt-1.5 text-center">
              © {new Date().getFullYear()} HOMELAB — DASHBOARD v3.1.8
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}