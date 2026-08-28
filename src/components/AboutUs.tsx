import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { CBMonogram } from './BrandLogo';
import { Link } from 'react-router-dom';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-24 bg-[#F2EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Fotografia / Identidade */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#0D1B3D]/5 p-2 sm:p-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Paula e Kamilla"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3D]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-serif font-bold text-lg">Paula & Kamilla</p>
                  <p className="text-white/80 text-sm">Cartório do Brasileiro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Manifesto Institucional */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#A68249] uppercase block">
              QUEM SOMOS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#0D1B3D] tracking-tight leading-tight mb-6">
              Pessoas cuidando de pessoas.
            </h2>
            
            <div className="space-y-4 text-sm sm:text-base text-[#0D1B3D]/80 leading-relaxed font-sans mb-8">
              <p>
                Nosso propósito é servir com excelência e cuidar de cada pessoa com a mesma atenção, responsabilidade e respeito que gostaríamos de receber.
              </p>
              <p>
                Sabemos que, quando alguém nos entrega seus documentos, não está entregando apenas papéis. Está confiando informações pessoais, histórias de família, planos, negócios e decisões importantes. Por isso, tratamos cada processo com discrição, segurança, organização, transparência e responsabilidade.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0D1B3D]/5 border-l-2 border-[#C6A166] mb-8">
              <p className="font-serif italic text-lg text-[#0D1B3D]">
                "Confiança, responsabilidade e excelência fazem parte da nossa marca."
              </p>
            </div>

            <Link
              to="/sobre-nos"
              className="inline-flex items-center text-sm font-bold text-[#0D1B3D] hover:text-[#C6A166] transition-colors group"
            >
              VER DETALHES <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
