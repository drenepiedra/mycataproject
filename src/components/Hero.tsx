import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Cpu, Sparkles, ShoppingBag } from 'lucide-react';
import { PixelCanvasBackground } from './PixelCanvasBackground';
import { OriginalCatLogo } from './OriginalCatLogo';

interface HeroProps {
  onExploreProjects: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onAboutClick,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Real Dynamic Pixel Grid Background (Single Unified Layer with Smooth Fade) */}
      <PixelCanvasBackground />

      {/* Hero Core Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Cat Logo Crest (Purple/Lilac Original Shape) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group cursor-pointer p-3 rounded-2xl bg-[#1b1b1d]/80 border border-[#c5c0ff]/20 hover:border-[#c5c0ff]/50 transition-all duration-300 shadow-[0_0_25px_rgba(197,192,255,0.15)] hover:shadow-[0_0_35px_rgba(197,192,255,0.3)] hover:-translate-y-1"
          onClick={onAboutClick}
        >
          <div className="absolute -inset-4 bg-[#c5c0ff]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <OriginalCatLogo size={84} glow={true} className="relative z-10" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4"
        >
          <h1 className="font-bold text-4xl sm:text-5xl md:text-[52px] text-[#c5c0ff] max-w-3xl leading-[1.1] tracking-[-0.02em] mx-auto">
            Ingeniería &amp; Tecnología para Proyectos de Vanguardia
          </h1>

          <p className="text-[#c8c4d5] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Plataforma especializada en diseño de hardware, soluciones IoT e inteligencia artificial aplicada. Calidad, precisión y soporte técnico dedicado.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md pt-2"
        >
          <button
            id="hero-explore-projects-btn"
            onClick={onExploreProjects}
            className="w-full sm:w-auto min-w-[200px] bg-[#c5c0ff] text-[#281590] font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded cyber-glow hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(197,192,255,0.2)] text-center flex items-center justify-center gap-2"
          >
            <span>Ver Proyectos &amp; Tienda</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <a
            id="hero-store-btn"
            href="https://component.awwhitedevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[200px] bg-transparent text-[#c5c0ff] border border-[#c5c0ff] font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded hover:bg-[#c5c0ff]/10 active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Ir a la Tienda</span>
          </a>
        </motion.div>

        {/* High-Tech System Live Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono-tech text-[#928f9e]"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>ESTADO DEL SISTEMA: <strong className="text-[#e5e1e4]">EN LÍNEA</strong></span>
          </div>
          <div className="hidden sm:inline-block text-white/10">•</div>
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[#c5c0ff]" />
            <span>TIENDA: <strong className="text-[#e5e1e4]">COMPONENT.AWWHITEDEVS.COM</strong></span>
          </div>
          <div className="hidden sm:inline-block text-white/10">•</div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#b8c4ff]" />
            <span>SOPORTE: <strong className="text-[#e5e1e4]">ACTIVO &amp; DISPONIBLE</strong></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
