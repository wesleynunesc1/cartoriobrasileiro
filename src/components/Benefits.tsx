import React from 'react';
import { UserCheck, Layers, Eye, MessagesSquare } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      number: '01',
      title: 'Um único ponto de contato',
      description:
        'Você fala com a nossa equipe e não precisa começar a explicação do zero em cada etapa.',
      icon: UserCheck,
      detail: 'Atendimento centralizado e histórico preservado'
    },
    {
      number: '02',
      title: 'Organização de ponta a ponta',
      description:
        'Estruturamos seu atendimento para você saber o que acontece agora e qual será o próximo passo.',
      icon: Layers,
      detail: 'Previsibilidade e fluxo ordenado'
    },
    {
      number: '03',
      title: 'Clareza em cada etapa',
      description:
        'Informações objetivas e acompanhamento para reduzir dúvidas, erros e retrabalho.',
      icon: Eye,
      detail: 'Sem termos herméticos ou burocratês'
    },
    {
      number: '04',
      title: 'Atendimento em português',
      description:
        'Comunicação clara, humana e sem barreiras de idioma para você se sentir em casa.',
      icon: MessagesSquare,
      detail: 'Acolhimento da nossa comunidade'
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-[#F2EFE6] border-y border-[#0D1B3D]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold tracking-[0.24em] text-[#A68249] uppercase block mb-3">
            POR QUE CARTÓRIO DO BRASILEIRO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3D] tracking-tight leading-tight">
            Burocracia é o que fazemos.{' '}
            <span className="italic font-normal text-[#0D1B3D]/80 block sm:inline">
              Tempo é o que devolvemos.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#0D1B3D]/70 font-sans max-w-2xl leading-relaxed">
            O valor de uma assessoria de excelência não está apenas em preencher formulários, mas na tranquilidade de saber que você tem ao seu lado quem conhece o caminho.
          </p>
        </div>

        {/* 4 Benefits Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="relative p-7 rounded-2xl bg-[#FDFCF9] border border-[#0D1B3D]/10 shadow-xs hover:border-[#C6A166] transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Big Elegant Number and Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0D1B3D]/10">
                    <span className="font-serif text-3xl font-light text-[#C6A166] tracking-tight group-hover:scale-105 transition-transform">
                      {item.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-[#0D1B3D]/5 text-[#0D1B3D] group-hover:bg-[#0D1B3D] group-hover:text-[#C6A166] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#0D1B3D] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0D1B3D]/75 leading-relaxed font-sans mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#0D1B3D]/5 text-[11px] font-medium text-[#A68249]">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
