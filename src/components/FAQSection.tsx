import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/brand';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 bg-[#F2EFE6] border-b border-[#0D1B3D]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A166]/10 border border-[#C6A166]/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#A68249]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#A68249] uppercase">
              TRANSPARÊNCIA & DÚVIDAS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3D] tracking-tight mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-sm sm:text-base text-[#0D1B3D]/70 font-sans leading-relaxed">
            Respostas claras e transparentes sobre nosso escopo de atuação, prazos e forma de atendimento.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#FDFCF9] border border-[#0D1B3D]/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#0D1B3D]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#0D1B3D]/5 flex items-center justify-center text-[#0D1B3D] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0D1B3D] text-[#C6A166]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#0D1B3D]/80 leading-relaxed font-sans border-t border-[#0D1B3D]/5 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#C6A166]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-lg font-semibold text-[#0D1B3D]">
              Ainda tem alguma dúvida sobre a sua situação?
            </h4>
            <p className="text-xs text-[#0D1B3D]/70 mt-0.5">
              Nossa equipe está à disposição para orientar qual o caminho correto.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Olá! Gostaria de esclarecer uma dúvida sobre um documento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0D1B3D] bg-[#F2EFE6] hover:bg-[#EAE5D8] border border-[#0D1B3D]/10 rounded-xl transition-all flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#2F6B57]" />
            <span>Falar com um atendente</span>
          </a>
        </div>
      </div>
    </section>
  );
};
