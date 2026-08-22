import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, Scale } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  return (
    <section id="como-atuamos" className="py-20 bg-white border-b border-[#0D1B3D]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F2EFE6]/80 border border-[#C6A166]/30 shadow-xs relative overflow-hidden">
          {/* Subtle Top Gold Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D1B3D] via-[#C6A166] to-[#0D1B3D]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Texto Principal (7 colunas) */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold tracking-[0.24em] text-[#A68249] uppercase block mb-2">
                LIMITES & DIRETRIZES ÉTICAS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0D1B3D] mb-4">
                Como atuamos
              </h2>
              <p className="text-sm sm:text-base text-[#0D1B3D]/80 leading-relaxed font-sans mb-4">
                O <strong className="text-[#0D1B3D]">Cartório do Brasileiro</strong> atua dentro do escopo de assessoria documental e assistência administrativa. Nosso papel é organizar, orientar, conferir e acompanhar demandas documentais dentro dos limites aplicáveis.
              </p>
              <p className="text-xs sm:text-sm text-[#0D1B3D]/70 leading-relaxed font-sans">
                Não somos órgão governamental, consulado ou cartório oficial. Garantimos o rigor no preparo e na conferência para que você nunca precise lidar sozinho com a complexidade administrativa.
              </p>
            </div>

            {/* 3 Indicadores de Confiança (5 colunas) */}
            <div className="lg:col-span-5 space-y-3.5">
              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-[#0D1B3D]/10 shadow-2xs">
                <div className="p-2 rounded-lg bg-[#2F6B57]/10 text-[#2F6B57]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0D1B3D]">Transparência Total</h3>
                  <p className="text-xs text-[#0D1B3D]/70">
                    Distinção clara entre honorários de assessoria e taxas oficiais governamentais.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-[#0D1B3D]/10 shadow-2xs">
                <div className="p-2 rounded-lg bg-[#0D1B3D]/10 text-[#0D1B3D]">
                  <ShieldCheck className="w-5 h-5 text-[#C6A166]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0D1B3D]">Conformidade Regulatória</h3>
                  <p className="text-xs text-[#0D1B3D]/70">
                    Atuação em estrito respeito aos limites das legislações americana e brasileira.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-[#0D1B3D]/10 shadow-2xs">
                <div className="p-2 rounded-lg bg-[#0D1B3D]/10 text-[#0D1B3D]">
                  <Scale className="w-5 h-5 text-[#C6A166]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0D1B3D]">Segurança & Sigilo</h3>
                  <p className="text-xs text-[#0D1B3D]/70">
                    Tratamento responsável e sigiloso de cada dado e documento familiar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
