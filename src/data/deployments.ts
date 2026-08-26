import { Deployment, Competency, TelemetryLog } from '../types';

export const DEPLOYMENTS_DATA: Deployment[] = [
  {
    id: 'awwhite-components-store',
    name: 'Tienda Oficial de Componentes & Módulos Hardware',
    version: 'v3.2.0 - Online',
    tags: [
      { label: 'Tienda Online', type: 'primary' },
      { label: 'Hardware & IoT', type: 'secondary' },
      { label: 'En Vivo', type: 'primary' },
    ],
    description:
      'Catálogo integral de componentes electrónicos, microcontroladores de bajo consumo, sensores biomecánicos y kits de desarrollo listos para despliegue.',
    iconName: 'router',
    fullSpecs: {
      status: 'ACTIVE_DEPLOYED',
      firmwareVersion: 'Online en component.awwhitedevs.com',
      powerConsumption: 'Despacho global y soporte directo',
      connectivity: ['component.awwhitedevs.com', 'Stock Actualizado', 'Envíos Rápidos'],
      mcu: 'Componentes certificados, sensores IoT y placas adaptadas',
      felineSafetyStandard: 'Garantía oficial de compatibilidad y control de calidad riguroso',
      keyFeatures: [
        'Acceso directo a la tienda en línea oficial: component.awwhitedevs.com',
        'Módulos de telemetría, sensores biométricos y chips de comunicación sub-GHz',
        'Placas de desarrollo de ultra bajo consumo y microcontroladores ESP32 / Nordic',
        'Soporte técnico especializado y documentación técnica detallada',
      ],
      liveTelemetry: [
        { metricName: 'Estado de la Tienda', value: '100%', unit: 'Online', trend: 'stable', status: 'optimal' },
        { metricName: 'Disponibilidad de Módulos', value: 'En Stock', unit: 'Verificado', trend: 'up', status: 'optimal' },
        { metricName: 'Latencia de Despacho', value: '< 24h', unit: 'Rápido', trend: 'stable', status: 'nominal' },
        { metricName: 'Protocolo de Seguridad', value: 'TLS 1.3', unit: 'Seguro', trend: 'stable', status: 'optimal' },
      ],
    },
  },
];

export const COMPETENCIES_DATA: Competency[] = [
  {
    id: 'iot-development',
    title: 'Desarrollo de Hardware & IoT',
    description:
      'Diseño completo de circuitos electrónicos, diseño de PCB de precisión y firmware de ultra bajo consumo adaptado a requerimientos exigentes.',
    iconName: 'developer_board',
    specs: 'Embedded C/C++, Rust, Microcontroladores ESP32/Nordic, RF & Sensores',
    deliverables: [
      'Diseño y fabricación de prototipos y PCBs a medida',
      'Desarrollo de firmware robusto de ultra bajo consumo energético',
      'Integración de sensores ambientales, biométricos y de posicionamiento',
      'Pruebas de estrés y certificación de calidad de hardware',
    ],
  },
  {
    id: 'ai-automation',
    title: 'Inteligencia Artificial & Automatización',
    description:
      'Modelos de aprendizaje automático locales (TinyML) y analítica predictiva de datos en tiempo real para optimizar procesos y decisiones.',
    iconName: 'psychology',
    specs: 'TinyML Edge, Python, Modelos de Clasificación & Inferencia en Tiempo Real',
    deliverables: [
      'Inferencia inteligente en microcontroladores y dispositivos edge',
      'Algoritmos de detección de patrones y análisis de comportamiento',
      'Sistemas de alerta temprana y telemetría predictiva',
      'Optimización de consumo y procesamiento de datos local sin latencia',
    ],
  },
  {
    id: 'tech-consulting',
    title: 'Consultoría Tecnológica & Arquitectura',
    description:
      'Acompañamiento integral desde la idea conceptual hasta la producción en serie, resolviendo cuellos de botella técnicos y escalando sistemas.',
    iconName: 'terminal',
    specs: 'Arquitecturas Cloud/Edge, Protocolos Abiertos, APIs REST & MQTT',
    deliverables: [
      'Auditorías de viabilidad técnica y optimización de costes',
      'Diseño de arquitectura de comunicaciones seguras y escalables',
      'Integración con plataformas cloud, domótica y sistemas existentes',
      'Soporte técnico continuo y evolución de producto',
    ],
  },
];

export const INITIAL_TELEMETRY_LOGS: TelemetryLog[] = [
  { timestamp: '14:22:01', device: 'Servidor Central', nodeId: 'NODE-STORE-01', event: 'Tienda oficial online: component.awwhitedevs.com conectada con éxito.', type: 'success' },
  { timestamp: '14:21:44', device: 'Nodo de Telemetría', nodeId: 'NODE-TRK-77', event: 'Sincronización de parámetros de hardware completada.', type: 'telemetry' },
  { timestamp: '14:20:12', device: 'Módulo Ambiental', nodeId: 'NODE-ENV-03', event: 'Monitoreo de estado de sensores en niveles óptimos.', type: 'info' },
  { timestamp: '14:18:55', device: 'Pasarela Principal', nodeId: 'GATEWAY-MAIN', event: 'Conexión cifrada activa y estable.', type: 'info' },
];
