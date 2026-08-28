import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTriage } from '../contexts/TriageContext';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams();
  const { openTriage } = useTriage();

  return (
    <div className="pt-28 pb-20 min-h-[70vh] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/servicos" className="inline-flex items-center text-sm font-semibold text-[#0D1B3D]/70 hover:text-[#C6A166] mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Ver todas as categorias
        </Link>
        
        <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#0D1B3D] mb-6 capitalize">
          {categorySlug?.replace(/-/g, ' ')}
        </h1>
        <p className="text-lg text-[#0D1B3D]/80 mb-12 max-w-3xl">
          Nesta categoria, nossa equipe coordena os serviços específicos para garantir que sua demanda seja resolvida de forma rápida e segura.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Exemplos genéricos de serviços para a categoria */}
          {[1, 2, 3, 4].map(i => (
             <div key={i} className="p-6 rounded-2xl bg-[#F2EFE6]/30 border border-[#0D1B3D]/10 hover:border-[#C6A166]/50 transition-all">
                <h3 className="font-serif text-xl text-[#0D1B3D] font-bold mb-3">Serviço Exemplo {i}</h3>
                <p className="text-sm text-[#0D1B3D]/70 mb-6">Descrição de como esse serviço funciona dentro da categoria selecionada.</p>
                <button
                  onClick={() => openTriage(`Serviço ${i} da categoria ${categorySlug}`)}
                  className="inline-flex items-center text-xs font-bold tracking-wider text-white bg-[#0D1B3D] hover:bg-[#162B5E] px-4 py-2 rounded-xl transition-all"
                >
                  COMEÇAR MINHA ANÁLISE <ArrowRight className="w-4 h-4 ml-2" />
                </button>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};
