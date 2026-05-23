export interface Service {
  id: string;
  name: string;
  url: string;
  description: string;
  accent: string;
  accentDim: string;
  protocol: string;
  type: string;
  tag: string;
}

export interface LogMessage {
  type: 'ok' | 'info' | 'warn';
  text: string;
}

export interface SystemStats {
  cpu: number;
  ramUsed: number;
  ramTotal: number;
  diskUsed: number;
  diskTotal: number;
}
