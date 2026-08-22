import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, CheckCircle2, MessageSquareText, FileSearch, Cog, ShieldCheck } from 'lucide-react';
import { CBMonogram } from './BrandLogo';

interface HowItWorksProps {
  onStartTriage: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartTriage }) => {
  const stepIcons = [MessageSquareText, FileSearch, Cog, CheckCircle2];

  return (
    <section
      id="como-funciona"
      className="py-24 bg-[#0D1B3D] text-white relative overflow-hidden"
    >
      {/* Monograma CB Gigantesco em Marca d'água sutil no fundo escuro */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.035] select-none"
        aria-hidden="true"
      >
        <CBMonogram size={800} color="#FFFFFF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C6A166]/40 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A166]" />
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#DFC89B] uppercase">
              METODOLOGIA & FLUXO
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-5">
            Você explica o que precisa.{' '}
            <span className="italic font-normal text-[#DFC89B] block sm:inline">
              Nós organizamos o caminho.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed">
            Uma jornada estruturada e transparente do primeiro contato até a conclusão do seu atendimento, com previsibilidade em cada passo.
          </p>
        </div>

        {/* 4 Connected Process Steps with Gold Timeline */}
        <div className="relative">
          {/* Linha Dourada de Conexão no Desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-[#C6A166]/20 via-[#C6A166] to-[#C6A166]/20 -translate-y-12"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C6A166]/60 backdrop-blur-xs transition-all duration-300 hover:bg-white/[0.07] group"
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#070E21] border border-[#C6A166]/50 flex items-center justify-center text-[#C6A166] group-hover:scale-110 group-hover:border-[#C6A166] transition-all shadow-lg">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#C6A166] text-[#0D1B3D] font-bold text-xs flex items-center justify-center shadow-xs">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <span className="text-[10px] font-bold tracking-widest text-[#DFC89B] uppercase mb-1">
                    {step.tag}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartTriage}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0D1B3D] bg-[#C6A166] hover:bg-[#DFC89B] rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer group"
          >
            <ShieldCheck className="w-4 h-4 text-[#0D1B3D]" />
            <span>Iniciar triagem do meu caso</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
