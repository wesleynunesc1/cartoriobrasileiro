import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTriage } from '../contexts/TriageContext';

export const PastaDocumentalPage: React.FC = () => {
  const { openTriage } = useTriage();

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-[#0D1B3D]/70 hover:text-[#C6A166] mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o início
        </Link>
        
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0D1B3D] mb-6 leading-tight">
          Pasta Documental Personalizada
        </h1>
        <h2 className="text-xl text-[#C6A166] mb-10">Sua vida documental organizada em um único lugar.</h2>

        <div className="space-y-6 text-[#0D1B3D]/80 text-lg leading-relaxed mb-12">
          <p>
            Entendemos sua composição familiar, auditamos seus registros e entregamos tudo estruturado.
          </p>
          <p>
            Depois de uma análise aprofundada, você recebe em casa uma pasta física personalizada com divisórias definidas especialmente para a sua realidade (ex: Identidade, Passaportes, Casamento, Imóveis, Procurações). 
          </p>
          <p>
            Além disso, realizamos uma <strong>sessão online de organização</strong> para indicar vencimentos, o que precisa ser atualizado e como manter a estrutura em dia.
          </p>
        </div>

        <button
          onClick={() => openTriage('Pasta Documental Personalizada')}
          className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-xl transition-all group"
        >
          <span>QUERO ORGANIZAR MEUS DOCUMENTOS</span>
          <ArrowRight className="w-4 h-4 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
