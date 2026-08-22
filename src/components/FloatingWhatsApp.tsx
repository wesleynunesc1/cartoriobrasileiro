import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/brand';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-4 py-3 bg-[#0D1B3D] hover:bg-[#162B5E] text-white rounded-full border border-[#C6A166]/40 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
        aria-label="Falar com o Cartório do Brasileiro no WhatsApp"
      >
        {/* Indicador de Status Verde Funcional */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F6B57] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2F6B57]" />
        </span>

        <MessageCircle className="w-5 h-5 text-[#C6A166] group-hover:scale-110 transition-transform" />

        <div className="text-left pr-1">
          <span className="block text-[10px] uppercase font-bold tracking-wider text-[#DFC89B]">
            Atendimento
          </span>
          <span className="block text-xs font-semibold text-white">WhatsApp Oficial</span>
        </div>
      </a>
    </div>
  );
};
