export enum GridStatus {
  Online = 'Online',
  Offline = 'Offline',
  Maintenance = 'Maintenance',
  HighLoad = 'High Load',
}

export interface KPIData {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

export interface ConsumptionData {
  month: string;
  consumption: number;
}

export interface GridAsset {
  id: string;
  name: string;
  type: string;
  status: GridStatus;
  load: number; // in MW
  voltage: number; // in kV
}

export enum AlertLevel {
  Info = 'Info',
  Warning = 'Warning',
  Critical = 'Critical',
}

export interface AlertData {
  id: string;
  level: AlertLevel;
  title: string;
  timestamp: string;
}
