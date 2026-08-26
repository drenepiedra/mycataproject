import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer className="bg-[#0e0e10] border-t border-white/5 w-full mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-16 max-w-6xl mx-auto items-center">
        {/* Left branding */}
        <div>
          <div className="font-semibold text-2xl text-[#c5c0ff] mb-2 tracking-tight flex items-center gap-2">
            <span>mycatproject</span>
            <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#201f21] text-[#928f9e] border border-white/5">
              EST. 2024 - 2026
            </span>
          </div>
          <div className="font-mono-tech text-xs text-[#c8c4d5]/70 tracking-wider">
            © 2026 mycatproject. Todos los derechos reservados.
          </div>
        </div>

        {/* Right navigation / legal links */}
        <div className="flex flex-wrap gap-6 md:justify-end items-center font-mono-tech text-xs">
          <button
            onClick={() => onNavigate('about')}
            className="text-[#c8c4d5] hover:text-[#c5c0ff] transition-colors"
          >
            Quiénes Somos
          </button>
          <a
            href="https://component.awwhitedevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c8c4d5] hover:text-[#c5c0ff] transition-colors"
          >
            Tienda Online
          </a>
          <button
            onClick={() => onNavigate('services')}
            className="text-[#c8c4d5] hover:text-[#c5c0ff] transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => onNavigate('community')}
            className="text-[#c8c4d5] hover:text-[#c5c0ff] transition-colors"
          >
            Contacto
          </button>
          <button
            onClick={() => onOpenLegal('terms')}
            className="text-[#c8c4d5] hover:text-[#c5c0ff] transition-colors"
          >
            Términos
          </button>
          <button
            onClick={() => onOpenLegal('privacy')}
            className="text-[#c8c4d5] hover:text-[#c5c0ff] transition-colors"
          >
            Privacidad
          </button>
        </div>
      </div>
    </footer>
  );
};
