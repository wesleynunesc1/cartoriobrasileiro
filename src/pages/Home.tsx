import React from 'react';
import { Hero } from '../components/Hero';
import { ComoPodemosAjudar } from '../components/ComoPodemosAjudar';
import { Benefits } from '../components/Benefits';
import { LifeMoments } from '../components/LifeMoments';
import { FeaturedServices } from '../components/FeaturedServices';
import { HowItWorks } from '../components/HowItWorks';
import { ConciergeHighlight } from '../components/ConciergeHighlight';
import { PastaDocumentalHighlight } from '../components/PastaDocumentalHighlight';
import { PlatformPreview } from '../components/PlatformPreview';
import { ComplianceSection } from '../components/ComplianceSection';
import { PartnerNetwork } from '../components/PartnerNetwork';
import { AboutUs } from '../components/AboutUs';
import { WhoIsItFor } from '../components/WhoIsItFor';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { useTriage } from '../contexts/TriageContext';

export function Home() {
  const { openTriage } = useTriage();

  const handleExploreServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero
        onOpenTriage={() => openTriage()}
        onExploreServices={handleExploreServices}
      />
      <ComoPodemosAjudar />
      <Benefits />
      <LifeMoments onStartTriage={(service) => openTriage(service)} />
      <FeaturedServices onStartTriage={(service) => openTriage(service)} />
      <HowItWorks onStartTriage={() => openTriage()} />
      <ConciergeHighlight />
      <PastaDocumentalHighlight />
      <PlatformPreview onOpenTriage={() => openTriage()} />
      <ComplianceSection />
      <PartnerNetwork />
      <AboutUs />
      <WhoIsItFor onStartTriage={(service) => openTriage(service)} />
      <FAQSection />
      <FinalCTA onOpenTriage={() => openTriage()} />
    </>
  );
}
