import React, { useState, useEffect } from 'react';
import { LIFE_MOMENTS } from '../data/content';
import { LifeMoment } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ArrowRight, CheckCircle, Compass, X, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/brand';
import { Link } from 'react-router-dom';

interface LifeMomentsProps {
  onStartTriage: (serviceName: string) => void;
}

export const LifeMoments: React.FC<LifeMomentsProps> = ({ onStartTriage }) => {
  const [activeMoment, setActiveMoment] = useState<LifeMoment | null>(null);

  useEffect(() => {
    if (activeMoment) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMoment]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeMoment) {
        setActiveMoment(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMoment]);

  return (
    <section id="momentos-de-vida" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A166]/10 border border-[#C6A166]/20 mb-3">
            <Compass className="w-3.5 h-3.5 text-[#A68249]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#A68249] uppercase">
              SOLUÇÕES POR MOMENTO DE VIDA
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3D] tracking-tight mb-4">
            Documentos mudam conforme a vida muda.
          </h2>

          <p className="text-sm sm:text-base text-[#0D1B3D]/70 font-sans leading-relaxed">
            Cada fase exige exigências específicas. Encontre a solução organizada sob medida para a etapa que você ou sua família estão vivendo.
          </p>
        </div>

        {/* Life Moments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIFE_MOMENTS.slice(0, 4).map((moment) => (
            <div
              key={moment.id}
              onClick={() => setActiveMoment(moment)}
              className="p-6 rounded-2xl bg-[#FDFCF9] border border-[#0D1B3D]/10 hover:border-[#C6A166] transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B3D]/5 group-hover:bg-[#0D1B3D] text-[#0D1B3D] group-hover:text-[#C6A166] flex items-center justify-center transition-colors">
                    <DynamicIcon name={moment.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A68249] bg-[#C6A166]/10 px-2.5 py-1 rounded-full">
                    {moment.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#0D1B3D] mb-2 group-hover:text-[#0D1B3D]">
                  {moment.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#0D1B3D]/75 leading-relaxed font-sans mb-4">
                  {moment.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-[#0D1B3D]/5">
                  {moment.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#0D1B3D]/80">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2F6B57] flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0D1B3D]/10 flex items-center justify-between text-xs font-semibold text-[#0D1B3D] hover:text-[#C6A166] transition-colors">
                <span>VER DETALHES</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/momentos-de-vida"
            className="inline-flex items-center text-sm font-bold text-[#0D1B3D] hover:text-[#C6A166] transition-colors hover:underline decoration-[#C6A166] underline-offset-4"
          >
            VER TODOS OS MOMENTOS <ArrowRight className="w-4 h-4 ml-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Modal de Detalhes do Momento de Vida */}
      {activeMoment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#0D1B3D]/70 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveMoment(null)}
        >
          <div
            className="relative w-full max-w-xl bg-[#FDFCF9] rounded-2xl border border-[#C6A166]/40 shadow-2xl overflow-hidden my-4 sm:my-8 max-h-[90dvh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 bg-gradient-to-r from-[#0D1B3D] via-[#C6A166] to-[#0D1B3D] flex-shrink-0" />

            <div className="p-5 sm:p-7 bg-[#F2EFE6]/80 border-b border-[#0D1B3D]/10 relative flex-shrink-0">
              <button
                onClick={() => setActiveMoment(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full text-[#0D1B3D]/60 hover:text-[#0D1B3D] hover:bg-white/80 transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 pr-10">
                <div className="w-12 h-12 rounded-xl bg-[#0D1B3D] text-[#C6A166] flex items-center justify-center flex-shrink-0">
                  <DynamicIcon name={activeMoment.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10.5px] font-bold text-[#A68249] uppercase tracking-wider">
                    Plano Personalizado
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0D1B3D]">
                    {activeMoment.title} — {activeMoment.subtitle}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-7 space-y-5 overflow-y-auto flex-1">
              <p className="text-xs sm:text-sm text-[#0D1B3D]/80 leading-relaxed">
                {activeMoment.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-[#0D1B3D] uppercase tracking-wider mb-3">
                  Documentos e Etapas Envolvidas:
                </h4>
                <div className="space-y-2.5">
                  {activeMoment.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#0D1B3D]/5">
                      <CheckCircle className="w-4 h-4 text-[#2F6B57] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-[#0D1B3D]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F2EFE6] text-xs text-[#0D1B3D]/70 leading-relaxed border border-[#C6A166]/20">
                💡 <strong className="text-[#0D1B3D]">Atendimento Coordenado:</strong> Em vez de tratar cada documento de forma isolada e pagar fretes múltiplos ou refazer agendamentos, nossa assessoria organiza a cadeia documental em uma única jornada.
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-[#F2EFE6]/60 border-t border-[#0D1B3D]/10 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
              <a
                href={getWhatsAppUrl(`Olá! Gostaria de uma análise para a solução documental de ${activeMoment.title} (${activeMoment.subtitle}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#0D1B3D] bg-white border border-[#0D1B3D]/15 rounded-xl hover:border-[#C6A166] min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-[#2F6B57]" />
                <span>FALAR NO WHATSAPP</span>
              </a>

              <button
                onClick={() => {
                  const serviceName = activeMoment.title;
                  setActiveMoment(null);
                  onStartTriage(`Solução: ${serviceName}`);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-sm cursor-pointer min-h-[44px]"
              >
                <span>COMEÇAR MINHA ANÁLISE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6A166]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

