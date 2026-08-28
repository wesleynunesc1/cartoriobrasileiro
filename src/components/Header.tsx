import { Link, useLocation } from 'react-router-dom';
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

  const location = useLocation();

  // Essential navigation items for desktop
  const desktopNavLinks = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Como funciona', href: '/#como-funciona' },
    { label: 'Sobre nós', href: '/sobre-nos' },
    { label: 'Soluções', href: '/momentos-de-vida' },
    { label: 'Dúvidas', href: '/faq' },
  ];

  // Full navigation items for mobile
  const mobileNavLinks = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Como funciona', href: '/#como-funciona' },
    { label: 'Sobre nós', href: '/sobre-nos' },
    { label: 'Soluções', href: '/momentos-de-vida' },
    { label: 'Dúvidas', href: '/faq' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F2EFE6]/98 backdrop-blur-md shadow-xs py-3 border-b border-[#C6A166]/20'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo oficial com proporções balanceadas */}
          <Link
            to="/"
            className="flex-shrink-0 focus:outline-hidden focus:ring-2 focus:ring-[#C6A166] rounded-sm py-1"
            aria-label="Cartório do Brasileiro - Página Inicial"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Menu Desktop */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13.5px] font-medium tracking-wide text-[#0D1B3D]/80"
            aria-label="Navegação Principal"
          >
            {desktopNavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative py-1 transition-colors hover:text-[#0D1B3D] focus:outline-hidden focus:text-[#0D1B3D] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#C6A166] after:transition-all after:duration-200 ${location.pathname === link.href ? 'text-[#0D1B3D] after:w-full' : 'after:w-0 hover:after:w-full'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Ações Desktop à Direita */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
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

            <button
              id="header-cta-btn"
              onClick={() => onOpenTriage()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase bg-[#0D1B3D] hover:bg-[#162B5E] active:bg-[#070E21] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer border border-[#C6A166]/30 group"
            >
              <span>Começar minha análise</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C6A166] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Botão Menu Mobile no Header */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl border transition-all shadow-sm cursor-pointer min-w-[46px] min-h-[46px] flex items-center justify-center ${
                mobileMenuOpen
                  ? 'bg-[#0D1B3D] text-white border-[#C6A166] ring-2 ring-[#C6A166]/40'
                  : 'bg-white/95 text-[#0D1B3D] border-[#0D1B3D]/20 hover:border-[#C6A166]'
              }`}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white stroke-[2.5]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0D1B3D] stroke-[2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Mobile Completo com botão Fechar visível e de alto contraste */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col justify-start"
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay com blur */}
          <div
            className="fixed inset-0 bg-[#0D1B3D]/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Painel do Drawer */}
          <div
            id="mobile-drawer"
            className="relative z-10 bg-[#F2EFE6] border-b-2 border-[#C6A166] shadow-2xl flex flex-col max-h-[92vh] overflow-y-auto"
          >
            {/* Barra de Topo do Menu com Logo e Botão Fechar bem visível */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#0D1B3D]/10 bg-[#FAF8F3]">
              <BrandLogo size="sm" />
              
              {/* Botão de Fechar Explicito com Texto e Ícone X */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0D1B3D] hover:bg-[#162B5E] text-white text-xs font-semibold uppercase tracking-wider shadow-sm cursor-pointer border border-[#C6A166]/30 transition-all active:scale-95"
                aria-label="Fechar menu"
              >
                <X className="w-4 h-4 text-[#C6A166] stroke-[2.5]" />
                <span>Fechar</span>
              </button>
            </div>

            <div className="p-5 sm:p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-[#0D1B3D]/10 text-xs font-medium text-[#0D1B3D]/80">
                <ShieldCheck className="w-4 h-4 text-[#C6A166] flex-shrink-0" />
                <span>Assessoria Documental Privada • Orlando, Flórida</span>
              </div>

              {/* Links de Navegação */}
              <nav className="flex flex-col gap-1 text-sm font-medium text-[#0D1B3D]" aria-label="Navegação Mobile">
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-3.5 rounded-xl transition-colors flex items-center justify-between group border-b border-[#0D1B3D]/5 ${location.pathname === link.href ? 'bg-[#0D1B3D]/5 text-[#0D1B3D]' : 'hover:bg-white/80 hover:text-[#0D1B3D] active:bg-[#0D1B3D]/10'}`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#C6A166] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </nav>

              {/* Ações de Conversão no Mobile */}
              <div className="flex flex-col gap-3 pt-3 border-t border-[#0D1B3D]/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTriage();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-md cursor-pointer border border-[#C6A166]/30 min-h-[46px]"
                >
                  <span>Começar minha análise</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A166]" />
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#0D1B3D] bg-white border border-[#0D1B3D]/20 rounded-xl hover:border-[#C6A166] min-h-[46px] shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#2F6B57]" />
                  <span>Falar no WhatsApp ({BRAND_CONFIG.phone})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
