import React from 'react';
import { FEATURED_SERVICES } from '../data/content';
import { DynamicIcon } from './DynamicIcon';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeaturedServicesProps {
  onStartTriage: (serviceName: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onStartTriage }) => {
  return (
    <section id="destaques" className="py-20 bg-[#F2EFE6] border-b border-[#0D1B3D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#A68249] uppercase block mb-3">
              EXCELÊNCIA & ESPECIALIDADES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3D] tracking-tight">
              Serviços estratégicos em destaque.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#0D1B3D]/70 font-sans max-w-md">
            Atendimento com rigor técnico e conformidade com as legislações vigentes nos Estados Unidos e no Brasil.
          </p>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#FDFCF9] border border-[#C6A166]/30 shadow-xs hover:shadow-xl hover:border-[#C6A166] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0D1B3D] text-[#C6A166] flex items-center justify-center shadow-xs">
                    <DynamicIcon name={item.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-[#0D1B3D] bg-[#0D1B3D]/5 border border-[#0D1B3D]/10 px-3 py-1 rounded-full uppercase">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#0D1B3D] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#0D1B3D]/75 leading-relaxed font-sans mb-6">
                  {item.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-[#0D1B3D]/10 mb-6">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#0D1B3D]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#2F6B57] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onStartTriage(item.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#0D1B3D] group-hover:text-white bg-white group-hover:bg-[#0D1B3D] border border-[#0D1B3D]/20 group-hover:border-[#0D1B3D] rounded-xl transition-all shadow-2xs cursor-pointer"
              >
                <span>Solicitar diagnóstico</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6A166]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
