import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';
import { CBMonogram } from './BrandLogo';

interface FinalCTAProps {
  onOpenTriage: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTriage }) => {
  return (
    <section className="py-24 bg-[#0D1B3D] text-white relative overflow-hidden">
      {/* Background Decorativo */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.04] select-none"
        aria-hidden="true"
      >
        <CBMonogram size={750} color="#FFFFFF" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C6A166]/40 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#DFC89B]" />
          <span className="text-[11px] font-bold tracking-[0.24em] text-[#DFC89B] uppercase">
            ATENDIMENTO PERSONALIZADO
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
          Você não precisa saber quem procurar.<br />
          <span className="italic font-normal text-[#C6A166]">Precisa saber com quem contar.</span>
        </h2>

        <p className="text-base sm:text-lg text-white/80 font-sans max-w-2xl mx-auto mb-10">
          Dê o primeiro passo. Nossa equipe organizará os requisitos, etapas e prazos para você.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            id="final-primary-cta"
            onClick={() => onOpenTriage()}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#C6A166] hover:bg-[#DFC89B] hover:text-[#0D1B3D] rounded-xl transition-all shadow-xl hover:shadow-2xl cursor-pointer group"
          >
            <span>COMEÇAR MINHA ANÁLISE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            id="final-whatsapp-cta"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wide text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#C6A166] rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#C6A166]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C6A166]" />
            <span className="text-xs sm:text-sm font-medium text-white/80">
              Atendimento em Português
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C6A166]" />
            <span className="text-xs sm:text-sm font-medium text-white/80">
              Segurança e Sigilo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
