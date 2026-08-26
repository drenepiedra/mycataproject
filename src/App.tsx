import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SystemArchitecture } from './components/SystemArchitecture';
import { ActiveDeployments } from './components/ActiveDeployments';
import { CoreCompetencies } from './components/CoreCompetencies';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { DeveloperModal } from './components/DeveloperModal';
import { ConnectModal } from './components/ConnectModal';
import { LiveTelemetryDrawer } from './components/LiveTelemetryDrawer';
import { LegalModal } from './components/LegalModal';
import { AmbientPixelField } from './components/AmbientPixelField';
import { DEPLOYMENTS_DATA, COMPETENCIES_DATA } from './data/deployments';
import { Deployment } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedDeployment, setSelectedDeployment] = useState<Deployment | null>(null);
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [connectDefaultTopic, setConnectDefaultTopic] = useState('General Collaboration');
  const [isTelemetryDrawerOpen, setIsTelemetryDrawerOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConnectWithTopic = (topic: string) => {
    setConnectDefaultTopic(topic);
    setIsConnectModalOpen(true);
  };

  return (
    <div className="bg-[#131315] text-[#e5e1e4] min-h-screen flex flex-col dot-bg relative selection:bg-[#c5c0ff] selection:text-[#281590] overflow-x-hidden">
      {/* Subtle Ambient Pixel Dispersal Across the Page */}
      <AmbientPixelField />

      {/* Top Navbar */}
      <Navbar
        onOpenConnect={() => handleOpenConnectWithTopic('General Collaboration')}
        onOpenTelemetry={() => setIsTelemetryDrawerOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => handleNavigate('projects')}
          onDeveloperClick={() => setIsDeveloperModalOpen(true)}
        />

        {/* System Architecture & Biology */}
        <SystemArchitecture />

        {/* Active Deployments */}
        <ActiveDeployments
          deployments={DEPLOYMENTS_DATA}
          onSelectDeployment={(dept) => setSelectedDeployment(dept)}
        />

        {/* Core Competencies */}
        <CoreCompetencies
          competencies={COMPETENCIES_DATA}
          onConsultationRequest={(title) => handleOpenConnectWithTopic(title)}
        />

        {/* Global Feline Mesh Community */}
        <CommunitySection
          onJoinDeveloperNetwork={() => setIsDeveloperModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConnect={() => handleOpenConnectWithTopic('Developer Discord & Community')}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Modals & Overlays */}
      <ProjectDetailModal
        deployment={selectedDeployment}
        onClose={() => setSelectedDeployment(null)}
        onOpenDeveloper={() => setIsDeveloperModalOpen(true)}
      />

      <DeveloperModal
        isOpen={isDeveloperModalOpen}
        onClose={() => setIsDeveloperModalOpen(false)}
      />

      <ConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        defaultTopic={connectDefaultTopic}
      />

      <LiveTelemetryDrawer
        isOpen={isTelemetryDrawerOpen}
        onClose={() => setIsTelemetryDrawerOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
