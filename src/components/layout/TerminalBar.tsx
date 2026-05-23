export default function TerminalBar() {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-black/70 border border-cyber-green/10 rounded-t-lg font-mono text-xs">
      <span className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </span>
      <span className="text-cyber-muted flex-1">root@homelab:~/dashboard</span>
      <span className="text-cyber-green tracking-widest animate-blink text-[0.6rem]">SYSTEM ONLINE</span>
    </div>
  );
}
