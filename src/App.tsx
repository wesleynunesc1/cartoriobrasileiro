import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickServiceFinder } from './components/QuickServiceFinder';
import { Benefits } from './components/Benefits';
import { LifeMoments } from './components/LifeMoments';
import { FeaturedServices } from './components/FeaturedServices';
import { HowItWorks } from './components/HowItWorks';
import { ConversationalTriage } from './components/ConversationalTriage';
import { PlatformPreview } from './components/PlatformPreview';
import { ComplianceSection } from './components/ComplianceSection';
import { PartnerNetwork } from './components/PartnerNetwork';
import { AboutUs } from './components/AboutUs';
import { WhoIsItFor } from './components/WhoIsItFor';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [triageOpen, setTriageOpen] = useState(false);
  const [triagePreset, setTriagePreset] = useState<string | undefined>(undefined);

  const handleOpenTriage = (preset?: string) => {
    setTriagePreset(preset);
    setTriageOpen(true);
  };

  const handleCloseTriage = () => {
    setTriageOpen(false);
    setTriagePreset(undefined);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2EFE6] text-[#0D1B3D] flex flex-col antialiased selection:bg-[#C6A166]/20 selection:text-[#0D1B3D]">
      {/* Header Sticky */}
      <Header onOpenTriage={() => handleOpenTriage()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenTriage={() => handleOpenTriage()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Quick Service Finder (12 Cards) */}
        <QuickServiceFinder onStartTriage={(service) => handleOpenTriage(service)} />

        {/* 3. Problem / Benefits (4 Pillars) */}
        <Benefits />

        {/* 4. Escolha pelo Momento da Sua Vida (11 Moments) */}
        <LifeMoments onStartTriage={(service) => handleOpenTriage(service)} />

        {/* 5. Serviços em Destaque */}
        <FeaturedServices onStartTriage={(service) => handleOpenTriage(service)} />

        {/* 6. Como Funciona (Dark Navy #0D1B3D) */}
        <HowItWorks onStartTriage={() => handleOpenTriage()} />

        {/* 7. Diferencial & Plataforma Digital */}
        <PlatformPreview onOpenTriage={() => handleOpenTriage()} />

        {/* 8. Compliance & Como Atuamos */}
        <ComplianceSection />

        {/* 9. Rede de Parceiros Especializada */}
        <PartnerNetwork />

        {/* 10. Sobre Nós & Manifesto */}
        <AboutUs />

        {/* 11. Para Quem É */}
        <WhoIsItFor onStartTriage={(service) => handleOpenTriage(service)} />

        {/* 12. FAQ (Perguntas Frequentes) */}
        <FAQSection />

        {/* 13. CTA Final */}
        <FinalCTA onOpenTriage={() => handleOpenTriage()} />
      </main>

      {/* Footer & Aviso Legal Obrigatório */}
      <Footer />

      {/* Botão Flutuante de WhatsApp (Desktop) */}
      <FloatingWhatsApp />

      {/* Barra de Ação Mobile Fixa */}
      <MobileStickyBar onOpenTriage={() => handleOpenTriage()} />

      {/* Modal da Triagem Conversacional (Concierge Digital) */}
      <ConversationalTriage
        isOpen={triageOpen}
        onClose={handleCloseTriage}
        initialService={triagePreset}
      />
    </div>
  );
}
