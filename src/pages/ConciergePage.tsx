import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTriage } from '../contexts/TriageContext';

export const ConciergePage: React.FC = () => {
  const { openTriage } = useTriage();

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-[#0D1B3D]/70 hover:text-[#C6A166] mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o início
        </Link>
        
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0D1B3D] mb-6 leading-tight">
          Concierge Documental
        </h1>
        
        <div className="space-y-6 text-[#0D1B3D]/80 text-lg leading-relaxed mb-12">
          <p>
            Você não precisa saber quem procurar. Precisa saber com quem contar.
          </p>
          <p>
            O serviço de Concierge é o coração do Cartório do Brasileiro. Nós organizamos administrativamente o seu processo, fazemos o diagnóstico, conduzimos a coordenação e a conferência de ponta a ponta.
          </p>
        </div>

        <button
          onClick={() => openTriage('Concierge Documental')}
          className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-xl transition-all group"
        >
          <span>COMEÇAR MINHA ANÁLISE</span>
          <ArrowRight className="w-4 h-4 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
