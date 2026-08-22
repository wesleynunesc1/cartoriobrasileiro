import React, { useState } from 'react';
import { PARTNER_TAGS } from '../data/content';
import { Network, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../config/brand';

export const PartnerNetwork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Especialidades' },
    { id: 'juridico', label: 'Jurídico & Família' },
    { id: 'tributario', label: 'Fiscal & Contabilidade' },
    { id: 'documental', label: 'Tradução & Cartórios' },
    { id: 'logistica', label: 'Logística & Imóveis' },
  ];

  const filteredTags =
    activeFilter === 'todos'
      ? PARTNER_TAGS
      : PARTNER_TAGS.filter(
          (t) =>
            t.category === activeFilter ||
            (activeFilter === 'logistica' && (t.category === 'logistica' || t.category === 'eventos' || t.category === 'imoveis'))
        );

  return (
    <section id="parceiros" className="py-20 bg-[#FDFCF9] border-b border-[#0D1B3D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A166]/10 border border-[#C6A166]/20 mb-3">
            <Network className="w-3.5 h-3.5 text-[#A68249]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#A68249] uppercase">
              REDE DE PARCEIROS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3D] tracking-tight mb-4">
            Uma rede especializada por trás de cada etapa.
          </h2>

          <p className="text-sm sm:text-base text-[#0D1B3D]/75 font-sans leading-relaxed">
            Algumas situações exigem atividades reguladas ou especialidades externas. Quando necessário, podemos conectar você a profissionais independentes habilitados.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#0D1B3D] text-white shadow-xs'
                  : 'bg-[#F2EFE6] text-[#0D1B3D]/80 hover:bg-[#EAE5D8] border border-[#0D1B3D]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Badges / Chips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTags.map((tag, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#0D1B3D]/10 hover:border-[#C6A166] transition-all duration-200 hover:shadow-sm flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#0D1B3D] block">{tag.name}</span>
                <span className="text-[11px] text-[#A68249] font-medium block mt-0.5">{tag.role}</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#C6A166]" />
            </div>
          ))}
        </div>

        {/* Compliance Note on Partner Network */}
        <div className="mt-12 p-4 rounded-xl bg-[#F2EFE6] border border-[#C6A166]/20 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-[#0D1B3D]/80 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#2F6B57] flex-shrink-0" />
            <span>
              Preservamos com rigor a separação entre nossa assessoria documental e as atividades reguladas de parceiros independentes.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
