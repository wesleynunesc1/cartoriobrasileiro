import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';
import { MessageCircle, Mail, MapPin, Instagram, Globe, ShieldAlert, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; text: string } | null>(null);

  const openLegalModal = (type: 'privacidade' | 'termos' | 'aviso') => {
    if (type === 'privacidade') {
      setLegalModalContent({
        title: 'Política de Privacidade',
        text: 'O Cartório do Brasileiro respeita a privacidade de seus clientes e usuários. Os dados cadastrais fornecidos em nossa plataforma e canais de atendimento são utilizados estritamente para o propósito de prestação de serviços de assessoria documental, comunicação e acompanhamento de processos, em conformidade com as boas práticas de segurança digital e proteção de dados.'
      });
    } else if (type === 'termos') {
      setLegalModalContent({
        title: 'Termos de Uso',
        text: 'Ao utilizar o website e os serviços do Cartório do Brasileiro, o usuário declara ter ciência de que a empresa atua na modalidade de assessoria documental e assistência administrativa privada, não constituindo repartição pública ou escritório de advocacia. A contratação dos serviços é formalizada individualmente de acordo com o escopo de cada demanda.'
      });
    } else {
      setLegalModalContent({
        title: 'Aviso Legal e Institucional',
        text: BRAND_CONFIG.complianceNotice
      });
    }
  };

  return (
    <footer id="contato" className="bg-[#070E21] text-white border-t border-[#C6A166]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Coluna 1: Marca & Descrição (4 colunas) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo theme="dark" size="md" />
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans max-w-sm pt-2">
              Sua central de documentos entre o Brasil e os Estados Unidos. Organização, orientação e acompanhamento com seriedade e acolhimento humano.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white hover:text-[#C6A166] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white hover:text-[#2F6B57] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white hover:text-[#C6A166] transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFC89B]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-medium">
              <li>
                <a href="#servicos" className="hover:text-[#C6A166] transition-colors">
                  Serviços Documentais
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#C6A166] transition-colors">
                  Como Funciona o Processo
                </a>
              </li>
              <li>
                <a href="#sobre-nos" className="hover:text-[#C6A166] transition-colors">
                  Sobre o Cartório do Brasileiro
                </a>
              </li>
              <li>
                <a href="#momentos-de-vida" className="hover:text-[#C6A166] transition-colors">
                  Soluções por Momento de Vida
                </a>
              </li>
              <li>
                <a href="#parceiros" className="hover:text-[#C6A166] transition-colors">
                  Rede Especializada de Parceiros
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-[#C6A166] transition-colors">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento & Contato (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFC89B]">
              Atendimento Oficial
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#C6A166] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#2F6B57] flex-shrink-0" />
                <span>{BRAND_CONFIG.phone}</span>
              </a>

              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="flex items-center gap-2.5 hover:text-[#C6A166] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C6A166] flex-shrink-0" />
                <span>{BRAND_CONFIG.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-[#C6A166] flex-shrink-0" />
                <span>{BRAND_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Institucional (2 colunas) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFC89B]">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-medium">
              <li>
                <button
                  onClick={() => openLegalModal('privacidade')}
                  className="hover:text-[#C6A166] transition-colors text-left cursor-pointer"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => openLegalModal('termos')}
                  className="hover:text-[#C6A166] transition-colors text-left cursor-pointer"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  onClick={() => openLegalModal('aviso')}
                  className="hover:text-[#C6A166] transition-colors text-left cursor-pointer"
                >
                  Aviso Legal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* AVISO INSTITUCIONAL OBRIGATÓRIO NO RODAPÉ */}
        <div className="mt-8 p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-justify">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-[#C6A166] flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-white/60 leading-relaxed font-sans">
              <strong className="text-white/80">Aviso Legal Obrigatório: </strong>
              {BRAND_CONFIG.complianceNotice}
            </p>
          </div>
        </div>

        {/* Copyright & Assinatura */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 border-t border-white/5 pt-6">
          <p>© {new Date().getFullYear()} Cartório do Brasileiro — Assessoria Documental. Todos os direitos reservados.</p>
          <p className="text-[11px] text-white/40">Orlando, FL • Presença e Atendimento Digital nos EUA</p>
        </div>
      </div>

      {/* Modal Legal Simples */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1B3D]/70 backdrop-blur-xs">
          <div className="bg-[#FDFCF9] text-[#0D1B3D] p-6 sm:p-8 rounded-2xl max-w-lg w-full border border-[#C6A166]/40 shadow-2xl relative">
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-5 right-5 text-[#0D1B3D]/60 hover:text-[#0D1B3D]"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-2xl font-semibold mb-4 text-[#0D1B3D]">
              {legalModalContent.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#0D1B3D]/80 leading-relaxed font-sans">
              {legalModalContent.text}
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-5 py-2 text-xs font-semibold uppercase text-white bg-[#0D1B3D] rounded-lg"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
