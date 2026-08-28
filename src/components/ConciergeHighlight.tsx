import React from 'react';
import { ArrowRight, Key } from 'lucide-react';
import { useTriage } from '../contexts/TriageContext';
import { CBMonogram } from './BrandLogo';

export const ConciergeHighlight: React.FC = () => {
  const { openTriage } = useTriage();

  return (
    <section className="py-20 bg-[#FDFCF9] relative overflow-hidden border-y border-[#0D1B3D]/10">
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none"
        aria-hidden="true"
      >
        <CBMonogram size={600} color="#0D1B3D" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B3D]/5 border border-[#0D1B3D]/10 mb-6">
              <Key className="w-4 h-4 text-[#C6A166]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0D1B3D] uppercase">
                NÃO SABE POR ONDE COMEÇAR?
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3D] leading-tight mb-6">
              Conte o que precisa resolver.{' '}
              <span className="italic font-normal text-[#C6A166] block mt-1">A gente organiza o caminho.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#0D1B3D]/80 leading-relaxed font-sans mb-8">
              Uma situação pode envolver diferentes documentos, prestadores e etapas. Você não precisa descobrir sozinho quem procurar ou qual deve ser o próximo passo. Nossa equipe ajuda a organizar administrativamente o processo contratado e, quando necessário, conecta você a profissionais independentes habilitados.
            </p>

            <blockquote className="pl-5 border-l-2 border-[#C6A166] text-[#0D1B3D] font-serif text-lg italic mb-10">
              "Você não precisa saber quem procurar. Precisa saber com quem contar."
            </blockquote>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Diagnóstico', 'Coordenação', 'Conferência', 'Acompanhamento'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C6A166]" />
                  <span className="text-sm font-semibold text-[#0D1B3D]">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openTriage()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase bg-[#0D1B3D] hover:bg-[#162B5E] active:bg-[#070E21] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer border border-[#C6A166]/40 group"
            >
              <span>COMEÇAR MINHA ANÁLISE</span>
              <ArrowRight className="w-4 h-4 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
             <div className="relative rounded-2xl bg-white border border-[#C6A166]/30 shadow-2xl p-8 lg:p-12">
               <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0D1B3D] via-[#C6A166] to-[#0D1B3D]" />
               
               <div className="text-center mb-8">
                 <div className="w-16 h-16 mx-auto bg-[#0D1B3D] rounded-full flex items-center justify-center mb-4 text-[#C6A166]">
                    <Key className="w-8 h-8" />
                 </div>
                 <h3 className="font-serif text-2xl font-semibold text-[#0D1B3D] mb-2">Concierge Documental</h3>
                 <p className="text-sm text-[#0D1B3D]/60">Sua central privada de organização documental Brasil ↔ EUA</p>
               </div>

               <div className="space-y-4">
                 {[
                   'Mapeamento completo da sua necessidade',
                   'Conexão com advogados ou contadores (quando necessário)',
                   'Gestão do fluxo burocrático de ponta a ponta',
                   'Acesso direto e personalizado pelo WhatsApp'
                 ].map((benefit, i) => (
                   <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#F2EFE6]/50 border border-[#0D1B3D]/5">
                     <div className="w-5 h-5 rounded-full bg-[#2F6B57]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                       <span className="text-[#2F6B57] text-[10px]">✓</span>
                     </div>
                     <span className="text-sm text-[#0D1B3D]/80 font-medium leading-tight">{benefit}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
