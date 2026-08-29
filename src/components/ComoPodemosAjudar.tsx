import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Globe2, MapPin, Send, Building2, UserCircle2 } from 'lucide-react';

const categories = [
  {
    id: 'documentos-brasileiros',
    title: 'DOCUMENTOS BRASILEIROS',
    description: 'Registros, regularizações e certidões do Brasil.',
    examples: ['Passaporte', 'CPF', 'Título Eleitoral', 'Certidões'],
    icon: Globe,
  },
  {
    id: 'documentos-internacionais',
    title: 'DOCUMENTOS INTERNACIONAIS',
    description: 'Apostilamento, traduções e documentos para utilização entre países.',
    examples: ['Apostilamento de Haia', 'Tradução Certificada', 'Procurações', 'Courier'],
    icon: Globe2,
  },
  {
    id: 'servicos-nos-eua',
    title: 'SERVIÇOS NOS EUA',
    description: 'Notary Public e suporte documental nos Estados Unidos.',
    examples: ['Notary Public', 'Mobile Notary', 'Casamento', 'Certified Copies'],
    icon: MapPin,
  },
  {
    id: 'brasil-a-distancia',
    title: 'BRASIL À DISTÂNCIA',
    description: 'Resolva no Brasil mesmo estando nos Estados Unidos.',
    examples: ['Segunda Via', 'Pesquisa de Cartório', 'Certidões', 'Courier'],
    icon: Send,
  },
  {
    id: 'solucoes-empresariais',
    title: 'SOLUÇÕES EMPRESARIAIS',
    description: 'Documentação administrativa para empresas e B2B.',
    examples: ['LLC', 'EIN', 'DBA', 'Annual Report'],
    icon: Building2,
  }
];

export const ComoPodemosAjudar: React.FC = () => {
  return (
    <section id="servicos" className="py-20 sm:py-24 bg-[#F2EFE6] relative">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="w-10 h-[2px] bg-[#C6A166] mx-auto mb-6"></div>
          <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#0D1B3D] mb-5 tracking-tight">
            Como podemos ajudar você?
          </h2>
          <p className="font-sans text-[#0D1B3D]/70 text-base sm:text-lg max-w-2xl mx-auto">
            Escolha uma categoria e descubra como podemos organizar seu processo documental.
          </p>
        </div>

        {/* Grid de 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          
          {/* Primeiros 5 Cards Normais */}
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id} 
                className="flex flex-col bg-[#FDFCF9] border border-[#0D1B3D]/[0.06] rounded-[4px] p-8 sm:p-10 hover:shadow-[0_4px_18px_rgba(13,27,61,0.05)] hover:-translate-y-[2px] hover:border-[#C6A166]/40 transition-all duration-250 ease-in-out group h-full"
              >
                {/* Ícone Minimalista */}
                <div className="mb-8 flex items-center justify-center w-12 h-12 text-[#0D1B3D]">
                  <Icon className="w-9 h-9 stroke-[1.25]" />
                </div>
                
                {/* Textos */}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-[1.35rem] leading-tight text-[#0D1B3D] mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-[#0D1B3D]/70 text-[14px] leading-relaxed font-sans">
                    {cat.description}
                  </p>
                </div>
                
                {/* Divisor */}
                <div className="w-full h-px bg-[#0D1B3D]/10 mb-6"></div>

                {/* Lista de Exemplos */}
                <ul className="mb-8 space-y-2.5">
                  {cat.examples.map(ex => (
                    <li key={ex} className="flex items-center text-[13px] text-[#0D1B3D]/80 font-sans">
                      <span className="w-1 h-1 rounded-full bg-[#C6A166] mr-3"></span>
                      {ex}
                    </li>
                  ))}
                </ul>

                {/* CTA Inferior */}
                <Link
                  to={`/servicos/${cat.id}`}
                  className="mt-auto inline-flex items-center text-[13px] uppercase tracking-wider font-semibold text-[#0D1B3D] group-hover:text-[#C6A166] transition-colors"
                >
                  VER DETALHES <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-[3px]" />
                </Link>
              </div>
            );
          })}

          {/* Card 6: CONCIERGE DOCUMENTAL (Destaque Sutil) */}
          <div className="flex flex-col bg-[#FDFCF9] border border-[#C6A166]/50 rounded-[4px] p-8 sm:p-10 hover:shadow-[0_4px_18px_rgba(13,27,61,0.05)] hover:-translate-y-[2px] transition-all duration-250 ease-in-out group h-full">
            <div className="mb-8 flex items-center justify-center w-12 h-12 text-[#0D1B3D]">
              <UserCircle2 className="w-9 h-9 stroke-[1.25]" />
            </div>
            
            <div className="text-center mb-6">
              <h3 className="font-serif text-[1.35rem] leading-tight text-[#0D1B3D] mb-3">
                CONCIERGE DOCUMENTAL
              </h3>
              <p className="text-[#0D1B3D]/70 text-[14px] leading-relaxed font-sans">
                Não sabe por onde começar? Nós organizamos tudo.
              </p>
            </div>
            
            <div className="w-full h-px bg-[#C6A166]/30 mb-6"></div>

            <ul className="mb-8 space-y-2.5">
              {['Diagnóstico', 'Coordenação', 'Conferência', 'Acompanhamento'].map(ex => (
                <li key={ex} className="flex items-center text-[13px] text-[#0D1B3D]/80 font-sans">
                  <span className="w-1 h-1 rounded-full bg-[#C6A166] mr-3"></span>
                  {ex}
                </li>
              ))}
            </ul>

            <Link
              to="/concierge-documental"
              className="mt-auto inline-flex items-center text-[13px] uppercase tracking-wider font-semibold text-[#C6A166] hover:text-[#A68249] transition-colors"
            >
              COMEÇAR MINHA ANÁLISE <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-[3px]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
