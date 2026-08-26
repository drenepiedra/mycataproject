import React, { useState } from 'react';
import { Competency } from '../types';
import { Terminal, Cpu, Brain, CheckCircle2, ChevronRight, Mail } from 'lucide-react';

interface CoreCompetenciesProps {
  competencies: Competency[];
  onContactClick: () => void;
}

export const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({
  competencies,
  onContactClick,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-8 h-8 text-[#c5c0ff]" />;
      case 'developer_board':
        return <Cpu className="w-8 h-8 text-[#c5c0ff]" />;
      case 'psychology':
        return <Brain className="w-8 h-8 text-[#c5c0ff]" />;
      default:
        return <Cpu className="w-8 h-8 text-[#c5c0ff]" />;
    }
  };

  return (
    <section id="services" className="py-16 px-6 max-w-6xl mx-auto border-t border-white/5 mt-16 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-[32px] text-[#c5c0ff] tracking-tight">
          Nuestros Servicios &amp; Especialidades
        </h2>
        <p className="text-sm font-mono-tech text-[#928f9e] mt-2">
          DESARROLLO DE HARDWARE • IOT DE BAJO CONSUMO • INTELIGENCIA ARTIFICIAL &amp; SOFTWARE A MEDIDA
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {competencies.map((comp) => {
          const isExpanded = expandedId === comp.id;

          return (
            <div
              key={comp.id}
              id={`competency-${comp.id}`}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-[#1b1b1d]/60 border border-white/10 hover:border-[#c5c0ff]/40 transition-all duration-300 relative group"
            >
              {/* Circular Badge with Subtle Glow */}
              <div className="w-16 h-16 rounded-full border border-[#c5c0ff]/30 flex items-center justify-center mb-6 bg-[#1b1b1d] shadow-[0_0_20px_rgba(197,192,255,0.15)] group-hover:scale-110 group-hover:border-[#c5c0ff]/60 group-hover:shadow-[0_0_25px_rgba(197,192,255,0.3)] transition-all duration-300">
                {getIcon(comp.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl text-[#e5e1e4] mb-3 group-hover:text-[#c5c0ff] transition-colors">
                {comp.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#c8c4d5] leading-relaxed mb-6 font-normal">
                {comp.description}
              </p>

              {/* Expand details toggle */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : comp.id)}
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#c5c0ff] hover:text-white transition-colors"
              >
                <span>{isExpanded ? 'Ocultar detalles' : 'Ver capacidades y tecnologías'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </button>

              {/* Expanded details card */}
              {isExpanded && (
                <div className="w-full mt-5 pt-4 border-t border-white/10 text-left animate-fadeIn">
                  <div className="text-[11px] font-mono-tech text-[#928f9e] uppercase mb-2">
                    Stack Tecnológico Principal:
                  </div>
                  <div className="text-xs text-[#b8c4ff] font-mono-tech mb-3 bg-[#131315] p-2 rounded border border-white/5">
                    {comp.specs}
                  </div>

                  <div className="text-[11px] font-mono-tech text-[#928f9e] uppercase mb-2">
                    Entregables y Soluciones:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#c8c4d5] mb-4">
                    {comp.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c5c0ff] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onContactClick}
                    className="w-full py-2.5 px-3 bg-[#c5c0ff]/10 hover:bg-[#c5c0ff]/20 text-[#c5c0ff] border border-[#c5c0ff]/30 rounded text-xs font-mono-tech uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Consultar por este servicio</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
