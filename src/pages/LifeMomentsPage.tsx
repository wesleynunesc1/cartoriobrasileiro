import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LIFE_MOMENTS } from '../data/content';
import { DynamicIcon } from '../components/DynamicIcon';

export const LifeMomentsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-[#0D1B3D]/70 hover:text-[#C6A166] mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o início
        </Link>
        
        <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#0D1B3D] mb-6">
          Momentos de Vida
        </h1>
        <p className="text-lg text-[#0D1B3D]/80 mb-12 max-w-3xl">
          Documentos mudam conforme a vida muda. Encontre a solução organizada sob medida para a etapa que você ou sua família estão vivendo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIFE_MOMENTS.map((moment) => (
             <div key={moment.id} className="p-6 rounded-2xl bg-white border border-[#0D1B3D]/10 hover:border-[#C6A166]/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0D1B3D]/5 text-[#0D1B3D] flex items-center justify-center mb-4">
                  <DynamicIcon name={moment.iconName} className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#0D1B3D] font-bold mb-2">{moment.title}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A68249] block mb-3">
                  {moment.subtitle}
                </span>
                <p className="text-sm text-[#0D1B3D]/70 mb-4">{moment.description}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};
