import React from 'react';
import { ShoppingBag, ArrowUpRight, ExternalLink, Cpu, ShieldCheck, CheckCircle2 ,BookOpen, Clock, Code, Award, Github, } from 'lucide-react';

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

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div
          id="store-deployment-card"
          className="bg-[#201f21] border border-white/15 rounded-lg p-6 sm:p-8 cyber-glow flex flex-col group hover:border-[#c5c0ff]/60 transition-all duration-300 relative overflow-hidden"
>
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 font-mono-tech text-[11px] uppercase rounded-[3px] tracking-wider bg-[#c5c0ff]/20 text-[#c5c0ff] border border-[#c5c0ff]/40 whitespace-nowrap">
                Tienda Oficial
              </span>
              <span className="px-2.5 py-1 font-mono-tech text-[11px] uppercase rounded-[3px] tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE EN VIVO
              </span>
            </div>

            <span className="text-xs font-mono-tech text-[#928f9e] break-all">
              component.aewhitedevs.com
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
                 MyCatStore
                </h4>
                <p className="text-xs font-mono-tech text-[#c5c0ff] break-all">
                  https://component.aewhitedevs.com
                </p>
              </div>
            </div>

            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />
          </div>

          {/* Title & Description */}
          <h3 className="font-semibold text-xl sm:text-2xl text-[#e5e1e4] mb-3 group-hover:text-[#c5c0ff] transition-colors">
            Tienda Oficial de Componentes y Hardware
          </h3>

          <p className="text-sm sm:text-base text-[#c8c4d5] leading-relaxed mb-6 font-normal">
            Explora nuestro catálogo en línea con productos de calidad, tenemos los mejores componentes del mercado y los mejores precios para usted.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 font-mono-tech text-xs text-[#c8c4d5]">
            <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5 min-w-0">
              <CheckCircle2 className="w-4 h-4 text-[#c5c0ff] shrink-0" />
              <span>Stock verificado</span>
            </div>
            <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5 min-w-0">
              <CheckCircle2 className="w-4 h-4 text-[#c5c0ff] shrink-0" />
              <span>Soporte directo atención personalizada</span>
            </div>
            <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5 min-w-0">
              <CheckCircle2 className="w-4 h-4 text-[#c5c0ff] shrink-0" />
              <span>Garantía de calidad en hardware</span>
            </div>
            <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5 min-w-0">
              <CheckCircle2 className="w-4 h-4 text-[#c5c0ff] shrink-0" />
              <span>Envíos rápidos</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#928f9e] min-w-0">
              <Cpu className="w-4 h-4 text-[#c5c0ff] shrink-0" />
              <span>Integración directa con nuestro ecosistema</span>
            </div>

            <a
              href="https://component.aewhitedevs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#c5c0ff] text-[#281590] rounded font-semibold text-xs font-mono-tech uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(197,192,255,0.2)]"
            >
              <span>Abrir Tienda Online</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div
  id="academy-learn-card"
  className="bg-[#201f21] border border-white/15 rounded-lg p-6 sm:p-8 cyber-glow flex flex-col group hover:border-[#c5c0ff]/60 transition-all duration-300 relative overflow-hidden"
>
  {/* Header Bar */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
    <div className="flex flex-wrap items-center gap-2">
      <span className="px-2.5 py-1 font-mono-tech text-[11px] uppercase rounded-[3px] tracking-wider bg-[#c5c0ff]/20 text-[#c5c0ff] border border-[#c5c0ff]/40 whitespace-nowrap">
        Academia Digital
      </span>
      <span className="px-2.5 py-1 font-mono-tech text-[11px] uppercase rounded-[3px] tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        ACCESO LIBRE
      </span>
    </div>

    <span className="text-xs font-mono-tech text-[#928f9e] break-all">
      drenepiedra.github.io
    </span>
  </div>

  {/* Visual Showcase Box */}
  <div className="h-52 sm:h-60 bg-[#353437] rounded-lg mb-6 overflow-hidden relative flex flex-col items-center justify-center border border-white/10 group-hover:bg-[#39393b] transition-all">
    <div className="relative z-10 flex flex-col items-center gap-3 text-center px-4">
      <div className="w-16 h-16 rounded-full bg-[#1b1b1d] border border-[#c5c0ff]/40 flex items-center justify-center text-[#c5c0ff] shadow-[0_0_25px_rgba(197,192,255,0.25)] group-hover:scale-110 transition-transform">
        <BookOpen className="w-8 h-8" />
      </div>
      <div>
        <h4 className="font-semibold text-lg text-[#e5e1e4]">
          AcademyLearn
        </h4>
        <p className="text-xs font-mono-tech text-[#c5c0ff] break-all">
          drenepiedra.github.io/AcademyLearn
        </p>
      </div>
    </div>

    {/* Background grid pattern */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />
  </div>

  {/* Title & Description */}
  <h3 className="font-semibold text-xl sm:text-2xl text-[#e5e1e4] mb-3 group-hover:text-[#c5c0ff] transition-colors">
    Academia de Aprendizaje y Desarrollo
  </h3>

  <p className="text-sm sm:text-base text-[#c8c4d5] leading-relaxed mb-6 font-normal">
    Accede a recursos educativos estructurados, guías prácticas y documentación técnica diseñada para potenciar tus habilidades y llevar tu conocimiento al siguiente nivel.
  </p>

  {/* Highlights */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 font-mono-tech text-xs text-[#c8c4d5]">
    <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5 min-w-0">
      <BookOpen className="w-4 h-4 text-[#c5c0ff] shrink-0" />
      <span>Contenido estructurado y progresivo</span>
    </div>
    <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5 min-w-0">
      <Clock className="w-4 h-4 text-[#c5c0ff] shrink-0" />
      <span>Acceso 24/7 a todos los materiales</span>
    </div>
    <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5 min-w-0">
      <Code className="w-4 h-4 text-[#c5c0ff] shrink-0" />
      <span>Recursos prácticos y ejemplos reales</span>
    </div>
    <div className="flex items-center gap-2 bg-[#131315]/80 p-2.5 rounded border border-white/5 min-w-0">
      <Award className="w-4 h-4 text-[#c5c0ff] shrink-0" />
      <span>Aprendizaje a tu propio ritmo</span>
    </div>
  </div>

  {/* Action CTA */}
  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div className="flex items-center gap-2 text-xs font-mono-tech text-[#928f9e] min-w-0">
      <Github className="w-4 h-4 text-[#c5c0ff] shrink-0" />
      <span>Alojado en GitHub Pages</span>
    </div>

    <a
      href="https://drenepiedra.github.io/AcademyLearn/#01-intro.md"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto px-6 py-3 bg-[#c5c0ff] text-[#281590] rounded font-semibold text-xs font-mono-tech uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(197,192,255,0.2)]"
    >
      <span>Explorar la Academia</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  </div>
        </div>
      </div>
    </section>
  );
};
