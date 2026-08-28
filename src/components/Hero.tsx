import React from 'react';
import { ArrowRight, CheckCircle2, Compass, ShieldCheck, FileCheck, Globe, Plane, Clock, MessageCircle } from 'lucide-react';
import { CBMonogram } from './BrandLogo';

interface HeroProps {
  onOpenTriage: (servicePreset?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTriage, onExploreServices }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#F2EFE6]"
    >
      {/* Elemento gráfico de fundo com Monograma CB em marca d'água muito sutil */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.035] select-none max-w-full overflow-hidden"
        aria-hidden="true"
      >
        <CBMonogram size={700} color="#0D1B3D" />
      </div>

      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Coluna Esquerda: Conteúdo Editorial & Conversão (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Dourado Oficial */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C6A166]/10 border border-[#C6A166]/30 mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A166]" />
              <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] text-[#A68249] uppercase">
                SUA PONTE DE CONFIANÇA COM O BRASIL.
              </span>
            </div>

            {/* Headline Principal Serifada */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] leading-[1.14] font-semibold text-[#0D1B3D] tracking-tight mb-5 sm:mb-6">
              Seu tempo é precioso.{' '}
              <span className="italic font-normal block sm:inline text-[#0D1B3D]/90">
                A burocracia, deixe com a gente.
              </span>
            </h1>

            {/* Descrição Institucional Clara */}
            <p className="text-sm sm:text-base lg:text-lg text-[#0D1B3D]/80 leading-relaxed font-sans max-w-2xl mb-8">
              Assessoria documental para brasileiros nos Estados Unidos. Organizamos, orientamos, conferimos e acompanhamos cada etapa para você avançar com mais clareza e tranquilidade.
            </p>

            {/* CTAs Primário e Secundário */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-9 sm:mb-10">
              <button
                id="hero-primary-cta"
                onClick={() => onOpenTriage()}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider text-white uppercase bg-[#0D1B3D] hover:bg-[#162B5E] active:bg-[#070E21] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer border border-[#C6A166]/40 group min-h-[48px]"
              >
                <span>Começar minha análise</span>
                <ArrowRight className="w-4 h-4 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-secondary-cta"
                href="https://wa.me/16892582180"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0D1B3D] bg-white/90 hover:bg-white active:bg-gray-100 border border-[#0D1B3D]/20 hover:border-[#C6A166] rounded-xl transition-all shadow-2xs cursor-pointer min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-[#2F6B57]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Indicadores de Confiança / Trust Badges */}
            <div className="pt-6 border-t border-[#0D1B3D]/10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2F6B57] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#0D1B3D]/90">
                  Atendimento em português
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2F6B57] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#0D1B3D]/90">
                  Organização de ponta a ponta
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2F6B57] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#0D1B3D]/90">
                  Brasil ↔ Estados Unidos
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Fotografia Humana & Elementos (5 colunas) */}
          <div className="lg:col-span-5 relative flex flex-col gap-4">
            {/* Foto Superior Larga */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[21/9]">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?auto=format&fit=crop&q=80&w=800" 
                alt="Famílias"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-white text-xs font-semibold">Pessoas e famílias cuidadas com respeito</span>
                <span className="text-[10px] font-bold text-[#DFC89B] tracking-wider uppercase">ORLANDO, FL</span>
              </div>
            </div>

            {/* Grid Inferior (2 Fotos) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400" 
                  alt="Conferência"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3D] via-transparent to-transparent opacity-90" />
                <span className="absolute bottom-3 left-3 text-white text-[11px] font-semibold leading-tight pr-2">Conferência Rigorosa</span>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32f7?auto=format&fit=crop&q=80&w=400" 
                  alt="Acolhimento"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3D] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-white text-[11px] font-semibold leading-tight pr-2">Acolhimento Humano</span>
              </div>
            </div>

            {/* Card Flutuante Abaixo */}
            <div className="mt-2 bg-white rounded-xl p-3.5 shadow-sm border border-[#0D1B3D]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0D1B3D] text-[#C6A166] flex items-center justify-center shadow-inner">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-[#0D1B3D] leading-tight">Assessoria Documental Privada</span>
                  <span className="text-[10px] text-[#0D1B3D]/60 leading-tight">Atendimento em todos os 50 estados dos EUA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
