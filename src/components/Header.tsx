import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';
import { MessageCircle, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenTriage: (servicePreset?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTriage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Essential navigation items for desktop to maintain luxurious breathing room
  const desktopNavLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Soluções', href: '#momentos-de-vida' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Sobre nós', href: '#sobre-nos' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  // Full navigation items for the mobile drawer
  const mobileNavLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços Documentais', href: '#servicos' },
    { label: 'Soluções por Momento de Vida', href: '#momentos-de-vida' },
    { label: 'Como Funciona o Atendimento', href: '#como-funciona' },
    { label: 'Sobre o Cartório do Brasileiro', href: '#sobre-nos' },
    { label: 'Rede de Parceiros', href: '#parceiros' },
    { label: 'Perguntas Frequentes', href: '#duvidas' },
    { label: 'Contato Oficial', href: '#contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F2EFE6]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#C6A166]/20'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo oficial com proporções balanceadas e link seguro */}
          <a
            href="#hero"
            className="flex-shrink-0 focus:outline-hidden focus:ring-2 focus:ring-[#C6A166] rounded-sm py-1"
            aria-label="Cartório do Brasileiro - Página Inicial"
          >
            <BrandLogo size="md" />
          </a>

          {/* Menu Desktop Centralizado com espaçamento generoso */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13.5px] font-medium tracking-wide text-[#0D1B3D]/80"
            aria-label="Navegação Principal"
          >
            {desktopNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 transition-colors hover:text-[#0D1B3D] focus:outline-hidden focus:text-[#0D1B3D] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C6A166] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações Desktop à Direita */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            {/* WhatsApp Direto */}
            <a
              id="header-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold tracking-wide text-[#0D1B3D] bg-white border border-[#0D1B3D]/15 rounded-xl hover:border-[#C6A166] hover:bg-[#FDFCF9] transition-all shadow-2xs hover:shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#2F6B57]" />
              <span>WhatsApp</span>
            </a>

            {/* CTA Principal */}
            <button
              id="header-cta-btn"
              onClick={() => onOpenTriage()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase bg-[#0D1B3D] hover:bg-[#162B5E] active:bg-[#070E21] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer border border-[#C6A166]/30 group"
            >
              <span>Começar minha análise</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C6A166] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Botão Menu Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#0D1B3D] hover:text-[#C6A166] rounded-xl border border-[#0D1B3D]/15 bg-white/90 focus:outline-hidden focus:ring-2 focus:ring-[#C6A166] shadow-2xs cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop e Drawer Mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay escuro */}
          <div
            className="fixed inset-0 bg-[#0D1B3D]/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Painel do Drawer */}
          <div
            id="mobile-drawer"
            className="relative bg-[#F2EFE6] border-b border-[#C6A166]/30 px-5 sm:px-6 py-6 shadow-2xl overflow-y-auto max-h-[calc(100dvh-70px)]"
          >
            <div className="flex flex-col gap-4 max-w-lg mx-auto">
              <div className="flex items-center gap-2 pb-3 border-b border-[#0D1B3D]/10 text-xs font-medium text-[#0D1B3D]/80">
                <ShieldCheck className="w-4 h-4 text-[#C6A166] flex-shrink-0" />
                <span>Assessoria Documental Privada • Orlando, Flórida</span>
              </div>

              <nav className="flex flex-col gap-1 text-sm font-medium text-[#0D1B3D]" aria-label="Navegação Mobile">
                {mobileNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 rounded-lg hover:bg-white/60 hover:text-[#A68249] transition-colors border-b border-[#0D1B3D]/5"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-3 border-t border-[#0D1B3D]/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTriage();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-md cursor-pointer border border-[#C6A166]/30 min-h-[44px]"
                >
                  <span>Começar minha análise</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A166]" />
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#0D1B3D] bg-white border border-[#0D1B3D]/20 rounded-xl hover:border-[#C6A166] min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#2F6B57]" />
                  <span>Falar no WhatsApp: {BRAND_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

