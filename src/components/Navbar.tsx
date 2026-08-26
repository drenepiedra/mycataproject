import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { OriginalCatLogo } from './OriginalCatLogo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'Quiénes Somos' },
    { id: 'projects', label: 'Tienda & Proyectos' },
    { id: 'services', label: 'Servicios' },
    { id: 'community', label: 'Contacto' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#131315]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#131315]/80 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Brand */}
        <button
          id="nav-brand-btn"
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <OriginalCatLogo size={52} glow={true} className="transition-transform group-hover:scale-110" />
          <span className="font-bold text-[24px] text-[#c5c0ff] tracking-tighter leading-none">
            mycatproject
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[15px] transition-colors focus:outline-none ${
                  isActive
                    ? 'text-[#c5c0ff] font-medium'
                    : 'text-[#c8c4d5] hover:text-[#c5c0ff] opacity-90 hover:opacity-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          {/* Direct Store Link */}
          <a
            href="https://component.aewhitedevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#c5c0ff]/10 hover:bg-[#c5c0ff]/20 text-[#c5c0ff] border border-[#c5c0ff]/30 text-xs font-mono-tech transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Tienda Online</span>
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="https://component.aewhitedevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#c5c0ff]/10 text-[#c5c0ff] border border-[#c5c0ff]/30 text-[11px] font-mono-tech"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Tienda</span>
          </a>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#c8c4d5] hover:text-[#c5c0ff] p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1b1b1d] border-b border-white/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left py-2 text-base text-[#c8c4d5] hover:text-[#c5c0ff] font-medium"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="https://component.aewhitedevs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono-tech text-[#c5c0ff] py-1"
            >
              <ShoppingBag className="w-4 h-4" />
              Visitar Tienda Oficial (component.aewhitedevs.com)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
