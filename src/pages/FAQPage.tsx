import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQSection } from '../components/FAQSection';

export const FAQPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-[#0D1B3D]/70 hover:text-[#C6A166] mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o início
        </Link>
      </div>
      <FAQSection />
    </div>
  );
};
