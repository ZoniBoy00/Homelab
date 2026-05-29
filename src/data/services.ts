import type { Service, LogMessage } from '../types';

export const services: Service[] = [
  { id: 'jellyfin', name: 'JELLYFIN', url: 'https://jelly.homelab.cfd/web/#/home', description: 'Media streaming · movies, TV series & music', accent: '#00ff41', accentDim: 'rgba(0,255,65,0.04)', protocol: 'jelly.homelab.cfd:443', type: '[MEDIA]', tag: 'SERVICE_01' },
  { id: 'uptime', name: 'UPTIMEMON', url: 'https://uptime.homelab.cfd', description: 'Service monitoring · real-time status & latency', accent: '#00d4ff', accentDim: 'rgba(0,212,255,0.04)', protocol: 'uptime.homelab.cfd:443', type: '[MONITOR]', tag: 'SERVICE_02' },
  { id: 'casaos', name: 'CASAOS', url: 'https://casa.homelab.cfd/#/', description: 'Server management · system control & apps', accent: '#ff6b35', accentDim: 'rgba(255,107,53,0.04)', protocol: 'casa.homelab.cfd:443', type: '[MANAGE]', tag: 'SERVICE_03' },
  { id: 'twitch-drops', name: 'TWITCH DROPS', url: 'https://twitch-drops.homelab.cfd', description: 'AFK drop miner · auto-claim Tarkov drops', accent: '#9146FF', accentDim: 'rgba(145,70,255,0.04)', protocol: 'twitch-drops.homelab.cfd:443', type: '[MINER]', tag: 'SERVICE_04' },
  { id: 'byte', name: 'BYTE DASHBOARD', url: 'https://byte.homelab.cfd', description: 'AI assistant dashboard · Hermes agent control', accent: '#06b6d4', accentDim: 'rgba(6,182,212,0.04)', protocol: 'byte.homelab.cfd:443', type: '[AGENT]', tag: 'SERVICE_05' },
];

export const logMessages: LogMessage[] = [
  { type: 'ok', text: 'heartbeat check · all services responsive' },
  { type: 'ok', text: 'jellyfin stream — connection verified' },
  { type: 'ok', text: 'uptime monitor — latency nominal (23ms)' },
  { type: 'info', text: 'casaos interface — reachable, 200 OK' },
  { type: 'info', text: 'twitch drops — mining Tarkov campaigns' },
  { type: 'info', text: 'byte dashboard — AI agent online' },
  { type: 'warn', text: 'ssl cert — valid, expires in 30d' },
  { type: 'ok', text: 'dns resolution · all A/AAAA records synced' },
  { type: 'info', text: 'bandwidth · 0.4 TB / 2.0 TB this month' },
  { type: 'ok', text: 'system temperature · 42°C — nominal' },
  { type: 'info', text: 'docker · 7 containers running, 0 stopped' },
  { type: 'ok', text: 'database replication · lag 0.0s' },
];

export const typingCommands = [
  './dashboard --deploy --env=production',
  'systemctl status --all --no-pager',
  'curl -sI https://homelab.cfd/health',
  'docker ps --format "table {{.Names}}"',
  'ping -c 1 8.8.8.8 | tail -1',
  'htop --sort-key PERCENT_MEM',
];
