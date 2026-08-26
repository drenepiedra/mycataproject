import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SystemArchitecture } from './components/SystemArchitecture';
import { ActiveDeployments } from './components/ActiveDeployments';
import { CoreCompetencies } from './components/CoreCompetencies';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { AmbientPixelField } from './components/AmbientPixelField';
import { COMPETENCIES_DATA } from './data/deployments';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#131315] text-[#e5e1e4] min-h-screen flex flex-col dot-bg relative selection:bg-[#c5c0ff] selection:text-[#281590] overflow-x-hidden">
      {/* Subtle Ambient Pixel Dispersal Across the Page */}
      <AmbientPixelField />

      {/* Top Navbar */}
      <Navbar
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => handleNavigate('projects')}
          onAboutClick={() => handleNavigate('about')}
        />

        {/* Sección: ¿Quiénes somos? */}
        <SystemArchitecture />

        {/* Sección: Tienda Online & Actividad (1 sola tarjeta ajustada con enlace a component.aewhitedevs.com) */}
        <ActiveDeployments />

        {/* Sección: Core Competencies / Servicios Especializados */}
        <CoreCompetencies
          competencies={COMPETENCIES_DATA}
          onContactClick={() => handleNavigate('community')}
        />

        {/* Sección: Contacto Directo con correo drenepiedra@gmail.com */}
        <CommunitySection />
      </main>

      {/* Footer con fecha 2026 y Todos los derechos reservados */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Modales Legales en Español */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
