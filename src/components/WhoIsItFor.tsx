import React from 'react';
import { WHO_IS_IT_FOR } from '../data/content';
import { DynamicIcon } from './DynamicIcon';
import { Users2, ArrowRight } from 'lucide-react';

interface WhoIsItForProps {
  onStartTriage: (segmentTitle: string) => void;
}

export const WhoIsItFor: React.FC<WhoIsItForProps> = ({ onStartTriage }) => {
  return (
    <section id="para-quem" className="py-20 bg-white border-b border-[#0D1B3D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A166]/10 border border-[#C6A166]/20 mb-3">
            <Users2 className="w-3.5 h-3.5 text-[#A68249]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#A68249] uppercase">
              PÚBLICOS & SITUAÇÕES
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3D] tracking-tight mb-4">
            Para diferentes momentos da vida.
          </h2>

          <p className="text-sm sm:text-base text-[#0D1B3D]/70 font-sans leading-relaxed">
            Seja para o primeiro passaporte do seu filho, a expansão de um negócio nos EUA ou a administração de um imóvel no Brasil, estamos ao seu lado.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHO_IS_IT_FOR.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onStartTriage(item.title)}
              className="p-6 rounded-2xl bg-[#FDFCF9] border border-[#0D1B3D]/10 hover:border-[#C6A166] transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0D1B3D]/5 group-hover:bg-[#0D1B3D] text-[#0D1B3D] group-hover:text-[#C6A166] flex items-center justify-center transition-colors mb-4">
                  <DynamicIcon name={item.iconName} className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#0D1B3D] tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#0D1B3D]/75 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#0D1B3D]/5 flex items-center justify-between text-xs font-semibold text-[#A68249] group-hover:text-[#0D1B3D] transition-colors">
                <span>Iniciar atendimento para este perfil</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C6A166]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
