import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { MobileStickyBar } from '../components/MobileStickyBar';
import { ConversationalTriage } from '../components/ConversationalTriage';
import { useTriage } from '../contexts/TriageContext';

export function MainLayout() {
  const { isOpen, preset, closeTriage, openTriage } = useTriage();

  return (
    <div className="min-h-screen bg-[#F2EFE6] text-[#0D1B3D] flex flex-col antialiased selection:bg-[#C6A166]/20 selection:text-[#0D1B3D]">
      <Header onOpenTriage={() => openTriage()} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar onOpenTriage={() => openTriage()} />

      <ConversationalTriage
        isOpen={isOpen}
        onClose={closeTriage}
        initialService={preset}
      />
    </div>
  );
}
