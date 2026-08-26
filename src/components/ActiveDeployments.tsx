import React from 'react';
import { ShoppingBag, ArrowUpRight, ExternalLink, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ActiveDeployments: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-[32px] text-[#c5c0ff] tracking-tight">
          Nuestra Tienda &amp; Catálogo Online
        </h2>
        <p className="text-sm font-mono-tech text-[#928f9e] mt-2">
          DISPONIBILIDAD EN VIVO • COMPONENTES CERTIFICADOS • DESPACHO RÁPIDO
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div
          id="store-deployment-card"
          className="bg-[#201f21] border border-white/15 rounded-lg p-6 sm:p-8 cyber-glow flex flex-col group hover:border-[#c5c0ff]/60 transition-all duration-300 relative overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 font-mono-tech text-[11px] uppercase rounded-[3px] tracking-wider bg-[#c5c0ff]/20 text-[#c5c0ff] border border-[#c5c0ff]/40">
                Tienda Oficial
              </span>
              <span className="px-2.5 py-1 font-mono-tech text-[11px] uppercase rounded-[3px] tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE EN VIVO
              </span>
            </div>

            <span className="text-xs font-mono-tech text-[#928f9e]">
              component.awwhitedevs.com
            </span>
          </div>

          {/* Visual Showcase Box */}
          <div className="h-52 sm:h-60 bg-[#353437] rounded-lg mb-6 overflow-hidden relative flex flex-col items-center justify-center border border-white/10 group-hover:bg-[#39393b] transition-all">
            <div className="relative z-10 flex flex-col items-center gap-3 text-center px-4">
              <div className="w-16 h-16 rounded-full bg-[#1b1b1d] border border-[#c5c0ff]/40 flex items-center justify-center text-[#c5c0ff] shadow-[0_0_25px_rgba(197,192,255,0.25)] group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#e5e1e4]">
                  AWWhite Devs Component Store
                </h4>
                <p className="text-xs font-mono-tech text-[#c5c0ff]">
                  https://component.awwhitedevs.com
                </p>
              </div>
            </div>

            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />
          </div>

          {/* Title & Description */}
          <h3 className="font-semibold text-2xl text-[#e5e1e4] mb-3 group-hover:text-[#c5c0ff] transition-colors">
            Tienda Oficial de Componentes, Módulos &amp; Hardware
          </h3>

          <p className="text-base text-[#c8c4d5] leading-relaxed mb-6 font-normal">
            Explora nuestro catálogo en línea con microcontroladores de alto rendimiento, sensores de precisión, módulos de comunicación inalámbrica y piezas electrónicas diseñadas para proyectos de ingeniería exigentes.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 font-mono-tech text-xs text-[#c8c4d5]">
            <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#c5c0ff] shrink-0" />
              <span>Stock verificado en tiempo real</span>
            </div>
            <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#c5c0ff] shrink-0" />
              <span>Documentación y pinouts incluidos</span>
            </div>
            <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#c5c0ff] shrink-0" />
              <span>Garantía de calidad en hardware</span>
            </div>
            <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#c5c0ff] shrink-0" />
              <span>Envíos rápidos y soporte directo</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#928f9e]">
              <Cpu className="w-4 h-4 text-[#c5c0ff]" />
              <span>Integración directa con nuestro ecosistema</span>
            </div>

            <a
              href="https://component.awwhitedevs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#c5c0ff] text-[#281590] rounded font-semibold text-xs font-mono-tech uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(197,192,255,0.2)]"
            >
              <span>Abrir Tienda Online</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
