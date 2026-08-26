export interface Deployment {
  id: string;
  name: string;
  version: string;
  tags: { label: string; type: 'primary' | 'secondary' }[];
  description: string;
  iconName: 'router' | 'my_location' | 'security' | 'activity' | 'cpu';
  fullSpecs: {
    status: 'ACTIVE_DEPLOYED' | 'BETA_STAGING' | 'HARDWARE_CERTIFIED';
    firmwareVersion: string;
    powerConsumption: string;
    connectivity: string[];
    mcu: string;
    felineSafetyStandard: string;
    keyFeatures: string[];
    liveTelemetry: {
      metricName: string;
      value: string;
      unit: string;
      trend: 'up' | 'down' | 'stable';
      status: 'nominal' | 'warning' | 'optimal';
    }[];
  };
}

export interface Competency {
  id: string;
  title: string;
  description: string;
  iconName: 'terminal' | 'developer_board' | 'psychology';
  deliverables: string[];
  specs: string;
}

export interface TelemetryLog {
  timestamp: string;
  device: string;
  nodeId: string;
  event: string;
  type: 'info' | 'telemetry' | 'alert' | 'success';
}
