import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FDFCF9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-[#0D1B3D]/70 hover:text-[#C6A166] mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o início
        </Link>
        
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0D1B3D] mb-10 leading-tight">
          Quem está por trás do Cartório do Brasileiro
        </h1>

        <div className="prose prose-lg text-[#0D1B3D]/80 font-sans space-y-6">
          <p>
            Nosso propósito é servir com excelência e cuidar de cada pessoa com a mesma atenção, responsabilidade e respeito que gostaríamos de receber.
          </p>
          <p>
            Somos duas mulheres que compartilham valores muito parecidos: ética em tudo o que fazemos, cuidado genuíno com o ser humano, compromisso com os detalhes e a certeza de que confiança se conquista em cada atendimento.
          </p>
          <p>
            Sabemos que, quando alguém nos entrega seus documentos, não está entregando apenas papéis. Está confiando informações pessoais, histórias de família, planos, negócios e decisões importantes. Por isso, tratamos cada processo com discrição, segurança, organização, transparência e responsabilidade.
          </p>
          <p>
            Paula une sua habilidade em conexões estratégicas e organização documental. Kamilla traz sua expertise nos processos documentais. Juntas, somamos experiência, atenção aos detalhes e atendimento próximo para tornar caminhos burocráticos mais simples, claros e tranquilos.
          </p>
          <p>
            Queremos que cada cliente se sinta acolhido, bem orientado e seguro de que existe alguém responsável acompanhando seu processo.
          </p>
          <p className="font-semibold text-[#0D1B3D]">
            Porque, para nós, servir bem não é apenas entregar um documento. É cuidar da confiança que foi colocada em nossas mãos.
          </p>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-[#0D1B3D]/5 border-l-4 border-[#C6A166]">
          <p className="font-serif italic text-2xl text-[#0D1B3D]">
            "Confiança, responsabilidade e excelência fazem parte da nossa marca."
          </p>
        </div>
      </div>
    </div>
  );
};
