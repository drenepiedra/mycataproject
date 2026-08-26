import { Deployment, Competency, TelemetryLog } from '../types';

export const DEPLOYMENTS_DATA: Deployment[] = [
  {
    id: 'autofeeder-v24',
    name: 'AutoFeeder v2.4',
    version: 'v2.4.12-rc3',
    tags: [
      { label: 'Hardware', type: 'primary' },
      { label: 'IoT', type: 'secondary' },
    ],
    description:
      'Precision-timed nutritional delivery system with machine learning integration to analyze eating patterns and adjust portions automatically.',
    iconName: 'router',
    fullSpecs: {
      status: 'ACTIVE_DEPLOYED',
      firmwareVersion: 'v2.4.12-build889',
      powerConsumption: '1.2W avg / 4.8W dispense',
      connectivity: ['Wi-Fi 6 (802.11ax)', 'BLE 5.3', 'Thread/Matter'],
      mcu: 'Dual-core ESP32-S3 + FelineML NPU co-processor',
      felineSafetyStandard: 'ISO-23849 Feline Whisker-Clearance Certified',
      keyFeatures: [
        'Acoustic micro-sensor for kibble crunch rate frequency analysis',
        'Load-cell precision scale calibrated to ±0.1g resolution',
        'Anti-jam reverse spiral torque gearbox with whiskers-safe chute',
        'Circadian rhythm-matched macro-nutrient dispense curve',
      ],
      liveTelemetry: [
        { metricName: 'Hopper Capacity', value: '86.4', unit: '%', trend: 'stable', status: 'optimal' },
        { metricName: 'Avg Bowl Consumption', value: '38.2', unit: 'g/meal', trend: 'up', status: 'nominal' },
        { metricName: 'Feeding Cadence', value: '4.2', unit: 'meals/24h', trend: 'stable', status: 'nominal' },
        { metricName: 'Motor Thermal Temp', value: '26.4', unit: '°C', trend: 'stable', status: 'optimal' },
      ],
    },
  },
  {
    id: 'feline-tracker-pro',
    name: 'Feline Tracker Pro',
    version: 'v1.8.0',
    tags: [
      { label: 'Telemetry', type: 'primary' },
      { label: 'App', type: 'secondary' },
    ],
    description:
      'Sub-gram GPS/GLONASS tracking module designed for comfortable collar integration, providing real-time spatial data and boundary alerts.',
    iconName: 'my_location',
    fullSpecs: {
      status: 'ACTIVE_DEPLOYED',
      firmwareVersion: 'v1.8.0-ultra-lowpower',
      powerConsumption: '0.04mW standby / 18mW active fix',
      connectivity: ['Sub-GHz LoRaWAN', 'GNSS (GPS/GLONASS/Galileo)', 'NFC tag'],
      mcu: 'Nordic nRF52840 SoC + Ultra-low-mass Ceramic GNSS Patch',
      felineSafetyStandard: 'Breakaway magnetic clasp release (2.2kg force)',
      keyFeatures: [
        'Total weight of 4.8 grams including rechargeable solid-state cell',
        'Geofenced territory radius mapping with stealth feline alert threshold',
        '3-axis IMU detecting predatory stalking postures vs sprint bursts',
        'Solar trickle harvesting micro-array woven into collar fiber',
      ],
      liveTelemetry: [
        { metricName: 'Battery Reserve', value: '94.8', unit: '%', trend: 'stable', status: 'optimal' },
        { metricName: 'Current Activity Level', value: 'Napping / 12 BPM', unit: 'status', trend: 'stable', status: 'nominal' },
        { metricName: 'Territory Perimeter', value: 'Inside Zone Alpha', unit: 'geo', trend: 'stable', status: 'optimal' },
        { metricName: 'Satellites Locked', value: '14', unit: 'sats', trend: 'up', status: 'optimal' },
      ],
    },
  },
  {
    id: 'cat-safe-env-monitor',
    name: 'Cat-Safe Environment Monitor',
    version: 'v3.1.0',
    tags: [
      { label: 'Security', type: 'primary' },
      { label: 'Sensor', type: 'secondary' },
    ],
    description:
      'Multispectral sensor array detecting toxic flora, harmful airborne particulates, and temperature anomalies in enclosed spaces.',
    iconName: 'security',
    fullSpecs: {
      status: 'ACTIVE_DEPLOYED',
      firmwareVersion: 'v3.1.0-biosentry',
      powerConsumption: '0.8W continuous PoE or USB-C',
      connectivity: ['MQTT over TLS', 'Zigbee 3.0', 'Local HTTP REST API'],
      mcu: 'ARM Cortex-M33 + Sensirion environmental cluster',
      felineSafetyStandard: 'UL 2900-2 Cyber-Physical Feline Habitat Safe',
      keyFeatures: [
        'Spectroscopic volatile organic compound (VOC) sensor tuned to essential oil toxicity (Tea tree, eucalyptus)',
        'Ultrasonic acoustic listening module for high-frequency rodent / insect deterrent calibration',
        'Micro-particulate PM2.5 / PM10 air purity laser scattering',
        'Thermal gradient camera identifying feline favorite sunspots & thermal comfort zones',
      ],
      liveTelemetry: [
        { metricName: 'Indoor Toxicity Index', value: '0.00', unit: 'ppm VOC', trend: 'stable', status: 'optimal' },
        { metricName: 'Ambient Temperature', value: '22.1', unit: '°C', trend: 'stable', status: 'nominal' },
        { metricName: 'PM2.5 Purity', value: '4', unit: 'µg/m³', trend: 'stable', status: 'optimal' },
        { metricName: 'Ultrasonic Noise Floor', value: '14.2', unit: 'kHz ambient', trend: 'down', status: 'nominal' },
      ],
    },
  },
];

export const COMPETENCIES_DATA: Competency[] = [
  {
    id: 'tech-consulting',
    title: 'Technical Consulting',
    description:
      'Providing expert architectural guidance for integrating feline-specific requirements into existing smart home ecosystems.',
    iconName: 'terminal',
    specs: 'Custom Matter/Thread Bridges & Smart Home APIs',
    deliverables: [
      'Smart home feline accessibility audits',
      'Whisker-fatigue UX analysis for automated dispensers',
      'Protocol bridging (HomeKit, Home Assistant, Google Home)',
      'Feline behavioral edge telemetry architectures',
    ],
  },
  {
    id: 'iot-development',
    title: 'IoT Development',
    description:
      'Custom hardware design and firmware development for low-power, highly reliable sensors and actuators.',
    iconName: 'developer_board',
    specs: 'Embedded C/Rust, Low-Power RF, Flex-PCB Design',
    deliverables: [
      'Sub-5g wearable micro-electronics and antenna matching',
      'Ultra-quiet brushless silent dispensers (<18dB)',
      'Energy harvesting & wireless inductive charging modules',
      'Fail-safe mechanical locks with animal-proof override',
    ],
  },
  {
    id: 'ai-for-felines',
    title: 'AI for Felines',
    description:
      'Machine learning models trained specifically on cat behavioral datasets for predictive health monitoring and activity analysis.',
    iconName: 'psychology',
    specs: 'TinyML on Edge, PyTorch Bio-kinematics, Audio Acoustic CNNs',
    deliverables: [
      'Early feline renal/hydration risk detection from drinking frequency',
      'Purr & vocalization spectrum emotion classifier',
      'Gait anomaly detection via computer vision & IMU fusion',
      'Sleep cycle architecture and stress index telemetry',
    ],
  },
];

export const INITIAL_TELEMETRY_LOGS: TelemetryLog[] = [
  { timestamp: '14:22:01.402', device: 'AutoFeeder_#204', nodeId: 'NODE-AF-US-08', event: 'Dispensed 18.5g kibble (Batch #4901). Crunch acoustic signature verified normal.', type: 'success' },
  { timestamp: '14:21:44.119', device: 'TrackerPro_#812', nodeId: 'NODE-TRK-77', event: 'Cat entered Sunspot Sector Beta. Heart rate baseline 118 bpm (Resting).', type: 'telemetry' },
  { timestamp: '14:20:12.890', device: 'BioMonitor_#109', nodeId: 'NODE-ENV-03', event: 'Spectroscopic flora sweep completed. Zero lilium/essential-oil toxicity detected.', type: 'info' },
  { timestamp: '14:18:55.334', device: 'FelineGateway_#01', nodeId: 'GATEWAY-MAIN', event: 'Mesh sync synchronized across 12 nodes. Ping latency 4.2ms.', type: 'info' },
  { timestamp: '14:16:30.902', device: 'AutoFeeder_#118', nodeId: 'NODE-AF-EU-14', event: 'Hopper level at 84.1%. Scheduled evening hydration mix enabled.', type: 'telemetry' },
];
