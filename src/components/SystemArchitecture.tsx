import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, Cpu, HeartHandshake, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
  const [showReasons, setShowReasons] = useState(false);

  const valueProps = [
    {
      title: '1. Ingeniería de Alta Precisión & Calidad',
      description: 'Diseñamos cada componente y línea de código bajo estándares industriales de máxima fiabilidad. Cuidamos cada detalle técnico para garantizar rendimiento y durabilidad superior.',
      icon: Award,
    },
    {
      title: '2. Soluciones a Medida & Escalables',
      description: 'No creemos en soluciones genéricas. Estudiamos tus necesidades particulares y construimos arquitecturas modulares que evolucionan y crecen al ritmo de tus objetivos.',
      icon: Zap,
    },
    {
      title: '3. Ecosistema Tecnológico Completo',
      description: 'Desde la concepción y prototipado rápido en hardware hasta el despliegue de firmware y software en la nube, cubrimos el ciclo completo sin intermediarios.',
      icon: Cpu,
    },
    {
      title: '4. Trato Directo, Cercano & Transparente',
      description: 'Trabajas directamente con ingenieros y desarrolladores apasionados. Respuestas rápidas, comunicación clara y soporte continuo en cada etapa del camino.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-16 px-6 max-w-6xl mx-auto relative scroll-mt-24">
      <div className="bg-[#1b1b1d] border border-white/10 rounded-lg p-8 sm:p-12 cyber-glow relative overflow-hidden backdrop-blur-sm transition-all hover:border-white/15">
        {/* Top-Right Decorative Chip Graphic */}
        <div className="absolute top-6 right-6 opacity-20 pointer-events-none">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-[#c5c0ff]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
          </svg>
        </div>

        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#c5c0ff]/10 border border-[#c5c0ff]/20 text-[#c5c0ff] text-xs font-mono-tech uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestra Identidad &amp; Filosofía</span>
          </div>

          <h2 className="font-semibold text-2xl sm:text-3xl md:text-[32px] text-[#c5c0ff] mb-6 tracking-tight">
            ¿Quiénes somos?
          </h2>

          <p className="text-[#c8c4d5] text-base sm:text-lg mb-4 leading-relaxed font-normal">
            Somos un equipo especializado de ingenieros , desarrolladores de software y apasionados de la innovación tecnológica. Nuestro objetivo principal es transformar ideas complejas en soluciones prácticas, confiables y de vanguardia.
          </p>


          <p className="text-[#c8c4d5] text-base sm:text-lg leading-relaxed font-normal">
            Creemos firmemente en el código limpio,  las relaciones duraderas con nuestros clientes y colaboradores.
          </p>

          {/* Interactive Desplegable con razones convincentes para elegirnos */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <button
              id="toggle-reasons-btn"
              onClick={() => setShowReasons(!showReasons)}
              className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#c5c0ff] hover:text-white transition-colors group"
            >
              <span>{showReasons ? 'Ocultar razones para elegirnos' : '¿Por qué elegirnos? Haz clic para ver nuestras ventajas'}</span>
              {showReasons ? (
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>

            {showReasons && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                {valueProps.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#201f21] border border-white/10 rounded p-5 cyber-glow flex flex-col justify-between hover:border-[#c5c0ff]/40 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2.5">
                          <div className="p-2 rounded bg-[#353437] text-[#c5c0ff] shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-mono-tech text-xs text-[#c5c0ff] font-semibold">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-[#c8c4d5] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
