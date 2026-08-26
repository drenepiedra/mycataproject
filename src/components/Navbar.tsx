import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { OriginalCatLogo } from './OriginalCatLogo';

interface NavbarProps {
  onOpenConnect: () => void;
  onOpenTelemetry: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConnect,
  onOpenTelemetry,
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
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'community', label: 'Community' },
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
          <OriginalCatLogo size={32} glow={true} className="transition-transform group-hover:scale-110" />
          <span className="font-bold text-[24px] text-[#c5c0ff] tracking-tighter leading-none">
            mycatproject
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-10 items-center">
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
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-3">
          {/* Live Telemetry Pulse indicator */}
          <button
            id="nav-telemetry-btn"
            onClick={onOpenTelemetry}
            title="Open Live Feline Telemetry Feed"
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded bg-[#201f21] border border-white/10 hover:border-[#c5c0ff]/40 text-[#c8c4d5] hover:text-[#c5c0ff] text-xs transition-all font-mono-tech"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5c0ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5c0ff]"></span>
            </span>
            <span className="hidden lg:inline">TELEMETRY</span>
            <Activity className="w-3.5 h-3.5 text-[#c5c0ff]" />
          </button>

          {/* Connect button */}
          <button
            id="nav-connect-btn"
            onClick={onOpenConnect}
            className="bg-[#c5c0ff] text-[#281590] font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded cyber-glow hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(197,192,255,0.15)]"
          >
            Connect
          </button>

          {/* Mobile menu trigger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#c8c4d5] hover:text-[#c5c0ff] p-2 focus:outline-none"
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
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTelemetry();
              }}
              className="flex items-center gap-2 text-xs font-mono-tech text-[#c5c0ff] py-1"
            >
              <Activity className="w-4 h-4" />
              Live Telemetry Stream
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
