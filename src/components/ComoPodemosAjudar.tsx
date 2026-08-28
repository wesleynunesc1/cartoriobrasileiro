import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Globe2, MapPin, Building2, Briefcase, Key } from 'lucide-react';

const categories = [
  {
    id: 'documentos-brasileiros',
    title: 'DOCUMENTOS BRASILEIROS',
    description: 'Registros, regularizações e certidões do Brasil.',
    examples: ['Passaporte', 'CPF', 'Título Eleitoral', 'Certidões'],
    icon: FileText,
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
    description: 'Resolva necessidades documentais no Brasil mesmo estando nos Estados Unidos.',
    examples: ['Segunda via', 'Pesquisa de cartório', 'Certidões', 'Courier'],
    icon: Building2,
  },
  {
    id: 'solucoes-empresariais',
    title: 'SOLUÇÕES EMPRESARIAIS',
    description: 'Organização e suporte administrativo para empresários e empresas.',
    examples: ['LLC', 'EIN', 'DBA', 'Annual Report'],
    icon: Briefcase,
  }
];

export const ComoPodemosAjudar: React.FC = () => {
  return (
    <section id="servicos" className="py-20 sm:py-24 bg-white relative">
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0D1B3D] font-semibold mb-4">
            COMO PODEMOS AJUDAR VOCÊ?
          </h2>
          <p className="text-[#0D1B3D]/70 text-base sm:text-lg">
            Escolha uma categoria e descubra como podemos organizar seu processo documental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="flex flex-col bg-[#F2EFE6]/30 border border-[#0D1B3D]/10 rounded-2xl p-6 sm:p-8 hover:border-[#C6A166]/50 transition-all group">
                <div className="w-12 h-12 bg-[#0D1B3D] text-[#C6A166] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[#0D1B3D] font-bold mb-3 tracking-wide">
                  {cat.title}
                </h3>
                <p className="text-[#0D1B3D]/80 text-sm mb-6 flex-grow">
                  {cat.description}
                </p>
                <div className="mb-8">
                  <p className="text-xs font-semibold text-[#0D1B3D]/60 uppercase tracking-widest mb-3">Exemplos</p>
                  <ul className="flex flex-wrap gap-2">
                    {cat.examples.map(ex => (
                      <li key={ex} className="text-xs text-[#0D1B3D] bg-white border border-[#0D1B3D]/10 px-2.5 py-1 rounded-md">
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/servicos/${cat.id}`}
                  className="inline-flex items-center text-sm font-bold text-[#0D1B3D] hover:text-[#C6A166] transition-colors group-hover:underline decoration-[#C6A166] underline-offset-4"
                >
                  VER DETALHES <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}

          {/* Concierge Highlight Card */}
          <div className="flex flex-col bg-[#0D1B3D] border border-[#C6A166]/30 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:shadow-[#0D1B3D]/10 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#162B5E] to-transparent opacity-50" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#C6A166] text-[#0D1B3D] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white font-bold mb-3 tracking-wide">
                CONCIERGE DOCUMENTAL
              </h3>
              <p className="text-white/80 text-sm mb-6 flex-grow">
                Não sabe por onde começar? Nós ajudamos a organizar o caminho.
              </p>
              <div className="mb-8">
                <p className="text-xs font-semibold text-[#C6A166] uppercase tracking-widest mb-3">Inclui</p>
                <ul className="flex flex-wrap gap-2">
                  {['Diagnóstico', 'Coordenação', 'Conferência', 'Acompanhamento'].map(ex => (
                    <li key={ex} className="text-xs text-white bg-white/10 border border-white/20 px-2.5 py-1 rounded-md">
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/concierge-documental"
                className="inline-flex items-center text-sm font-bold text-[#C6A166] transition-colors group-hover:text-white"
              >
                COMEÇAR MINHA ANÁLISE <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
