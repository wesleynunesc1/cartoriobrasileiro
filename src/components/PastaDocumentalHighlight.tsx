import React from 'react';
import { ArrowRight, FolderOpen, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PastaDocumentalHighlight: React.FC = () => {
  return (
    <section className="py-20 bg-[#0D1B3D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-[#162B5E] to-[#070E21] border border-[#C6A166]/30 shadow-2xl flex items-center justify-center p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <FolderOpen className="w-64 h-64 text-white" />
               </div>
               
               <div className="relative z-10 w-full max-w-sm bg-[#F2EFE6] rounded-xl shadow-xl transform rotate-2 transition-transform hover:rotate-0 duration-500">
                  <div className="h-12 bg-[#0D1B3D] rounded-t-xl flex items-center px-4 border-b-4 border-[#C6A166]">
                    <div className="w-3 h-3 rounded-full bg-[#C6A166] mr-2" />
                    <span className="text-[10px] font-bold tracking-widest text-[#C6A166] uppercase">
                      Cartório do Brasileiro
                    </span>
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif text-xl font-bold text-[#0D1B3D] mb-1">Pasta Documental</h4>
                    <p className="text-xs text-[#0D1B3D]/60 uppercase tracking-wider mb-6">Família Silva Oliveira</p>
                    
                    <div className="space-y-3">
                      <div className="h-2 w-3/4 bg-[#0D1B3D]/10 rounded-full" />
                      <div className="h-2 w-1/2 bg-[#0D1B3D]/10 rounded-full" />
                      <div className="h-2 w-5/6 bg-[#0D1B3D]/10 rounded-full" />
                      <div className="h-2 w-2/3 bg-[#C6A166]/40 rounded-full mt-6" />
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <FolderOpen className="w-4 h-4 text-[#C6A166]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C6A166] uppercase">
                NOVO SERVIÇO
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5">
              Sua vida documental organizada em um único lugar.
            </h2>
            
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans mb-8">
              Não se trata apenas de uma pasta física, mas de um serviço personalizado de Concierge Documental e organização familiar. Entendemos sua composição familiar, auditamos seus registros e entregamos tudo estruturado.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Organização por pessoa e categoria',
                'Identificação dos documentos importantes',
                'Pasta personalizada enviada para a residência',
                'Divisórias específicas para aquela família',
                'Sessão online de organização conjunta',
                'Identificação de documentos faltantes e vencimentos'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C6A166]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#C6A166]" />
                  </div>
                  <span className="text-sm text-white/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/pasta-documental-personalizada"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider text-[#0D1B3D] uppercase bg-[#C6A166] hover:bg-[#DFC89B] active:bg-[#A68249] rounded-xl transition-all shadow-lg hover:shadow-xl group"
            >
              <span>QUERO ORGANIZAR MEUS DOCUMENTOS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
