import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../config/brand';

interface MobileStickyBarProps {
  onOpenTriage: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenTriage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra a barra após o usuário rolar 400px (após o Hero)
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#F2EFE6]/95 backdrop-blur-md border-t border-[#C6A166]/30 p-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <button
          onClick={onOpenTriage}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0D1B3D] active:bg-[#162B5E] rounded-xl shadow-md border border-[#C6A166]/40 cursor-pointer min-h-[44px]"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#C6A166]" />
          <span>Começar análise</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C6A166]" />
        </button>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white text-[#0D1B3D] border border-[#0D1B3D]/15 rounded-xl shadow-2xs flex items-center justify-center flex-shrink-0 active:bg-gray-50 min-w-[44px] min-h-[44px]"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#2F6B57]" />
        </a>
      </div>
    </div>
  );
};
