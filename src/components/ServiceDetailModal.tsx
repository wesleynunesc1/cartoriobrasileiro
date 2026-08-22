import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { X, ArrowRight, CheckCircle2, MessageCircle, ShieldAlert } from 'lucide-react';
import { getWhatsAppUrl } from '../config/brand';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onStartTriage: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onStartTriage,
}) => {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [service]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && service) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#0D1B3D]/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FDFCF9] rounded-2xl border border-[#C6A166]/40 shadow-2xl overflow-hidden my-4 sm:my-8 max-h-[90dvh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#0D1B3D] via-[#C6A166] to-[#0D1B3D] flex-shrink-0" />

        {/* Modal Header */}
        <div className="p-5 sm:p-7 bg-[#F2EFE6]/80 border-b border-[#0D1B3D]/10 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full text-[#0D1B3D]/60 hover:text-[#0D1B3D] hover:bg-white/80 transition-all cursor-pointer focus:outline-hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pr-10">
            <div className="w-12 h-12 rounded-xl bg-[#0D1B3D] text-[#C6A166] flex items-center justify-center flex-shrink-0 shadow-sm">
              <DynamicIcon name={service.iconName} className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10.5px] font-bold text-[#A68249] uppercase tracking-widest">
                Assessoria Documental
              </span>
              <h2
                id="service-modal-title"
                className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0D1B3D] mt-0.5"
              >
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#0D1B3D]/75 font-medium mt-1">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-7 space-y-5 overflow-y-auto flex-1">
          {/* Visão Geral */}
          <div>
            <h3 className="text-xs font-bold text-[#0D1B3D] uppercase tracking-wider mb-2">
              Visão Geral do Atendimento
            </h3>
            <p className="text-xs sm:text-sm text-[#0D1B3D]/85 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Para quem é indicado */}
          <div className="p-4 rounded-xl bg-[#F2EFE6]/80 border border-[#0D1B3D]/5">
            <h3 className="text-xs font-bold text-[#0D1B3D] uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6A166]" />
              Para quem geralmente é indicado
            </h3>
            <p className="text-xs sm:text-sm text-[#0D1B3D]/80 leading-relaxed">
              {service.indicatedFor}
            </p>
          </div>

          {/* Como a nossa assessoria ajuda */}
          <div>
            <h3 className="text-xs font-bold text-[#0D1B3D] uppercase tracking-wider mb-3">
              Como nossa assessoria atua no seu caso:
            </h3>
            <div className="space-y-2.5">
              {service.howWeHelp.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2F6B57] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#0D1B3D]/85">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nota de Transparência e Limite Institucional */}
          <div className="p-3.5 rounded-lg bg-white border border-[#0D1B3D]/10 flex items-start gap-2.5 text-[11px] text-[#0D1B3D]/70">
            <ShieldAlert className="w-4 h-4 text-[#C6A166] flex-shrink-0 mt-0.5" />
            <p>
              Atuamos na organização administrativa e conferência prévia. A aprovação e os prazos finais dependem dos órgãos oficiais competentes.
            </p>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-4 sm:p-6 bg-[#F2EFE6]/60 border-t border-[#0D1B3D]/10 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <a
            href={getWhatsAppUrl(`Olá! Gostaria de entender mais sobre o serviço de ${service.title} com a equipe do Cartório do Brasileiro.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#0D1B3D] bg-white border border-[#0D1B3D]/15 rounded-xl hover:border-[#C6A166] transition-colors min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 text-[#2F6B57]" />
            <span>Tirar dúvidas no WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onStartTriage(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-sm transition-all cursor-pointer group min-h-[44px]"
          >
            <span>Iniciar análise deste serviço</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

