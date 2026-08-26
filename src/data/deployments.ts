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
      firmwareVersion: 'Online en component.aewhitedevs.com',
      powerConsumption: 'Despacho global y soporte directo',
      connectivity: ['component.aewhitedevs.com', 'Stock Actualizado', 'Envíos Rápidos'],
      mcu: 'Componentes certificados, sensores IoT y placas adaptadas',
      felineSafetyStandard: 'Garantía oficial de compatibilidad y control de calidad riguroso',
      keyFeatures: [
        'Acceso directo a la tienda en línea oficial: component.aewhitedevs.com',
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
    title: 'Desarrollo de Hardware',
    description:
      'Diseño completo de software personalizado para su negocio.',
    iconName: 'developer_board',
    specs: 'HTML, CSS , JAVASCRIPT , LARAVEL , PHP , C#',
    deliverables: [
      'Diseño y fabricación de software',
      'Diseño UI/UX',
      'Integración con su negocio ',
      'Pruebas de optimización ',
    ],
  },
  {
    id: 'ai-automation',
    title: 'Desarrollo de Software a Medida',
    description:'Creamos soluciones digitales escalables, desde aplicaciones web y móviles hasta plataformas SaaS, adaptadas a las necesidades específicas de tu negocio.',
    iconName: 'psychology',
    specs: 'React, Next.js, Node.js, Python, Bases de datos SQL/NoSQL, AWS/Vercel',
    deliverables: [
      'Desarrollo ágil de MVPs (Producto Mínimo Viable) para validar ideas rápido',
      'Aplicaciones web y móviles con interfaces modernas, rápidas y responsivas',
      'Diseño y desarrollo de APIs RESTful y GraphQL robustas y documentadas',
      'Configuración de pipelines de despliegue continuo (CI/CD) y mantenimiento evolutivo',
    ],
  },
 
  {
    id: 'tech-consulting',
    title: 'Consultoría Tecnológica & Estrategia Digital',
    description:'Te acompañamos desde la conceptualización de tu idea hasta su lanzamiento al mercado, asegurando decisiones técnicas sólidas y un camino claro hacia la escalabilidad.',
    iconName: 'terminal', 
    specs: 'Arquitectura Cloud-Native, Metodologías Ágiles, Diseño UX/UI, Ciberseguridad básica',
    deliverables: [
      'Auditorías técnicas y definición de la hoja de ruta (roadmap) del producto',
      'Diseño de arquitecturas de software escalables, seguras y rentables',
      'Asesoramiento en la selección del stack tecnológico y proveedores de infraestructura',
      'Mentoría técnica para founders no técnicos o apoyo a equipos de desarrollo internos',
    ],
  },
];

export const INITIAL_TELEMETRY_LOGS: TelemetryLog[] = [
  { timestamp: '14:22:01', device: 'Servidor Central', nodeId: 'NODE-STORE-01', event: 'Tienda oficial online: component.aewhitedevs.com conectada con éxito.', type: 'success' },
  { timestamp: '14:21:44', device: 'Nodo de Telemetría', nodeId: 'NODE-TRK-77', event: 'Sincronización de parámetros de hardware completada.', type: 'telemetry' },
  { timestamp: '14:20:12', device: 'Módulo Ambiental', nodeId: 'NODE-ENV-03', event: 'Monitoreo de estado de sensores en niveles óptimos.', type: 'info' },
  { timestamp: '14:18:55', device: 'Pasarela Principal', nodeId: 'GATEWAY-MAIN', event: 'Conexión cifrada activa y estable.', type: 'info' },
];
