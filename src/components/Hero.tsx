import React from 'react';
import { ArrowRight, CheckCircle2, Compass, ShieldCheck, FileCheck, Globe, Plane, Clock } from 'lucide-react';
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
              Assessoria documental para brasileiros nos Estados Unidos. Organizamos, orientamos, conferimos e acompanhamos seu processo para que você não precise perder horas tentando entender sozinho cada exigência.
            </p>

            {/* CTAs Primário e Secundário */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-9 sm:mb-10">
              <button
                id="hero-primary-cta"
                onClick={() => onOpenTriage()}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider text-white uppercase bg-[#0D1B3D] hover:bg-[#162B5E] active:bg-[#070E21] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer border border-[#C6A166]/40 group min-h-[48px]"
              >
                <span>Quero resolver meu documento</span>
                <ArrowRight className="w-4 h-4 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0D1B3D] bg-white/90 hover:bg-white active:bg-gray-100 border border-[#0D1B3D]/20 hover:border-[#C6A166] rounded-xl transition-all shadow-2xs cursor-pointer min-h-[48px]"
              >
                <Compass className="w-4 h-4 text-[#C6A166]" />
                <span>Descobrir o que preciso</span>
              </button>
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

          {/* Coluna Direita: Composição Visual Editorial Brasil ↔ EUA (5 colunas) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura Principal de Vidro e Fundo Escultural */}
              <div className="relative rounded-2xl bg-white/70 backdrop-blur-md p-6 sm:p-8 border border-[#C6A166]/30 shadow-xl overflow-hidden">
                {/* Linha decorativa dourada no topo */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D1B3D] via-[#C6A166] to-[#0D1B3D]" />

                {/* Header do Card Conceitual */}
                <div className="flex items-center justify-between pb-5 border-b border-[#0D1B3D]/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0D1B3D] flex items-center justify-center text-[#C6A166]">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0D1B3D] uppercase tracking-wider">
                        Eixo Documental
                      </p>
                      <p className="text-[11px] text-[#0D1B3D]/60">Estados Unidos ↔ Brasil</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-[#2F6B57]/10 text-[#2F6B57] border border-[#2F6B57]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F6B57] animate-pulse" />
                    Atendimento Ativo
                  </span>
                </div>

                {/* Representação Visual da Ponte entre os 2 Países */}
                <div className="my-6 py-4 px-4 bg-[#F2EFE6]/60 rounded-xl border border-[#0D1B3D]/5 relative">
                  <div className="flex items-center justify-between relative z-10">
                    {/* Nó EUA */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-11 h-11 rounded-full bg-[#0D1B3D] text-[#C6A166] flex items-center justify-center font-serif font-bold text-sm shadow-sm">
                        EUA
                      </div>
                      <span className="text-[11px] font-bold text-[#0D1B3D] mt-2">Flórida & EUA</span>
                      <span className="text-[9px] text-[#0D1B3D]/60">Residência / Emissão</span>
                    </div>

                    {/* Linha Curva Pontilhada com Ícone de Avião / Trânsito Documental */}
                    <div className="flex-1 mx-3 flex flex-col items-center justify-center relative">
                      <div className="w-full border-t-2 border-dashed border-[#C6A166]/60 relative flex items-center justify-center">
                        <div className="absolute -top-3 bg-[#0D1B3D] text-[#C6A166] p-1 rounded-full shadow-xs">
                          <Plane className="w-3.5 h-3.5 rotate-90" />
                        </div>
                      </div>
                      <span className="text-[9px] font-semibold text-[#A68249] uppercase tracking-widest mt-3">
                        Ponte de Confiança
                      </span>
                    </div>

                    {/* Nó Brasil */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-11 h-11 rounded-full bg-[#0D1B3D] text-[#C6A166] flex items-center justify-center font-serif font-bold text-sm shadow-sm">
                        BR
                      </div>
                      <span className="text-[11px] font-bold text-[#0D1B3D] mt-2">Brasil</span>
                      <span className="text-[9px] text-[#0D1B3D]/60">Cartórios / Órgãos</span>
                    </div>
                  </div>
                </div>

                {/* Mini Cards Flutuantes de Serviços em Ação */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#0D1B3D]/10 shadow-2xs hover:border-[#C6A166]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-[#0D1B3D]/5 text-[#0D1B3D]">
                        <FileCheck className="w-4 h-4 text-[#C6A166]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0D1B3D]">Conferência & Triagem</p>
                        <p className="text-[11px] text-[#0D1B3D]/65">Prevenção de erros e retrabalho</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-[#2F6B57] bg-[#2F6B57]/10 px-2 py-0.5 rounded-sm">
                      100% Supervisionado
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#0D1B3D]/10 shadow-2xs hover:border-[#C6A166]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-[#0D1B3D]/5 text-[#0D1B3D]">
                        <ShieldCheck className="w-4 h-4 text-[#C6A166]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0D1B3D]">Apostila & Notary Public</p>
                        <p className="text-[11px] text-[#0D1B3D]/65">Validade legal nos limites da lei</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-[#0D1B3D]/70 bg-[#0D1B3D]/5 px-2 py-0.5 rounded-sm">
                      Orlando, FL
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#0D1B3D]/10 shadow-2xs hover:border-[#C6A166]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-[#0D1B3D]/5 text-[#0D1B3D]">
                        <Clock className="w-4 h-4 text-[#C6A166]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0D1B3D]">Economia de Tempo</p>
                        <p className="text-[11px] text-[#0D1B3D]/65">Você não enfrenta a burocracia sozinho</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-[#A68249] bg-[#C6A166]/10 px-2 py-0.5 rounded-sm">
                      Concierge
                    </span>
                  </div>
                </div>

                {/* Footer do Card */}
                <div className="mt-5 pt-4 border-t border-[#0D1B3D]/10 flex items-center justify-between text-[11px] text-[#0D1B3D]/70">
                  <span>Assessoria Privada Especializada</span>
                  <span className="font-semibold text-[#0D1B3D]">Orlando • Flórida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
