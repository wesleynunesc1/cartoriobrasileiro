import React, { useState } from 'react';
import { QUICK_SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ArrowRight, Sparkles } from 'lucide-react';

interface QuickServiceFinderProps {
  onStartTriage: (serviceTitle: string) => void;
}

export const QuickServiceFinder: React.FC<QuickServiceFinderProps> = ({ onStartTriage }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A166]/10 border border-[#C6A166]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A68249]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#A68249] uppercase">
              O QUE VOCÊ PRECISA RESOLVER HOJE?
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3D] tracking-tight mb-4">
            Encontre rapidamente o serviço que precisa.
          </h2>

          <p className="text-sm sm:text-base text-[#0D1B3D]/70 font-sans leading-relaxed">
            Selecione uma das opções abaixo para conhecer detalhes do atendimento, requisitos e iniciar sua análise preliminar com nossa equipe.
          </p>
        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {QUICK_SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => setSelectedService(service)}
              className="group relative p-6 rounded-xl bg-[#FDFCF9] border border-[#0D1B3D]/10 hover:border-[#C6A166] transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col justify-between"
            >
              {/* Top Card Bar */}
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#0D1B3D]/5 group-hover:bg-[#0D1B3D] text-[#0D1B3D] group-hover:text-[#C6A166] flex items-center justify-center transition-colors mb-4">
                  <DynamicIcon name={service.iconName} className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>

                <h3 className="font-serif text-lg font-semibold text-[#0D1B3D] group-hover:text-[#0D1B3D] tracking-tight mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-[#0D1B3D]/70 leading-relaxed font-sans line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Card Footer Micro-CTA */}
              <div className="mt-5 pt-3 border-t border-[#0D1B3D]/5 flex items-center justify-between text-xs font-semibold text-[#A68249] group-hover:text-[#0D1B3D] transition-colors">
                <span>Conferir detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C6A166]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 px-6 rounded-xl bg-[#F2EFE6] border border-[#C6A166]/30">
            <span className="text-xs sm:text-sm font-medium text-[#0D1B3D]">
              Tem uma necessidade específica ou combina múltiplos documentos?
            </span>
            <button
              onClick={() => onStartTriage('Triagem Geral')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0D1B3D] hover:text-[#A68249] transition-colors underline cursor-pointer"
            >
              <span>Fazer diagnóstico gratuito</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes do Serviço */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onStartTriage={onStartTriage}
      />
    </section>
  );
};
