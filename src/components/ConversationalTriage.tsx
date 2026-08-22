import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  FileText
} from 'lucide-react';
import { BRAND_CONFIG, buildTriageWhatsAppMessage } from '../config/brand';

interface ConversationalTriageProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConversationalTriage: React.FC<ConversationalTriageProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>('Passaporte Brasileiro');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [stateUs, setStateUs] = useState('Flórida (FL)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }
    setIsSubmitted(false);
  }, [initialService, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const servicesList = [
    'Passaporte Brasileiro',
    'Registro de Nascimento',
    'Registro de Casamento',
    'CPF',
    'Título de Eleitor',
    'Serviço Militar',
    'Procurações',
    'Apostila de Haia',
    'Traduções',
    'Notary Public (Flórida)',
    'Certidões no Brasil',
    'Outro serviço documental',
  ];

  const statesList = [
    'Flórida (FL)',
    'Massachusetts (MA)',
    'Nova York (NY)',
    'Nova Jersey (NJ)',
    'Califórnia (CA)',
    'Texas (TX)',
    'Geórgia (GA)',
    'Pensilvânia (PA)',
    'Connecticut (CT)',
    'Illinois (IL)',
    'Outro Estado (EUA)',
  ];

  // Perguntas dinâmicas de acordo com o serviço escolhido
  const getContextualQuestions = () => {
    if (selectedService.toLowerCase().includes('passaporte')) {
      return [
        {
          key: 'beneficiario',
          title: 'Para quem é o passaporte?',
          options: ['Para mim (Adulto)', 'Para meu filho(a) menor de idade', 'Para mais de uma pessoa da família'],
        },
        {
          key: 'situacao',
          title: 'Qual é a situação atual do documento?',
          options: [
            'Vencido',
            'Próximo do vencimento',
            'Primeiro passaporte (nunca teve)',
            'Perdido, roubado ou extraviado',
            'Danificado',
          ],
        },
      ];
    }

    if (selectedService.toLowerCase().includes('nascimento')) {
      return [
        {
          key: 'nascimento_local',
          title: 'A criança nasceu nos Estados Unidos?',
          options: ['Sim, possui certidão de nascimento americana (Birth Certificate)', 'Em outro país'],
        },
        {
          key: 'pais_estado_civil',
          title: 'Qual a situação do registro civil dos pais?',
          options: [
            'Casados com registro brasileiro atualizado',
            'Casados nos EUA (ainda não registrado no Brasil)',
            'Solteiros / União estável',
          ],
        },
      ];
    }

    if (selectedService.toLowerCase().includes('casamento')) {
      return [
        {
          key: 'local_casamento',
          title: 'Onde o casamento foi celebrado?',
          options: ['Nos Estados Unidos (Florida ou outro estado)', 'Em outro país'],
        },
        {
          key: 'mudanca_nome',
          title: 'Houve alteração no sobrenome dos cônjuges?',
          options: ['Sim, houve mudança de nome', 'Não, ambos mantiveram os nomes de solteiro'],
        },
      ];
    }

    if (selectedService.toLowerCase().includes('cpf')) {
      return [
        {
          key: 'cpf_situacao',
          title: 'O que precisa resolver em relação ao CPF?',
          options: [
            'Regularizar CPF suspenso ou pendente',
            'Atualizar nome por motivo de casamento/divórcio',
            'Primeira via / Inscrição inicial',
            'Emitir comprovante de situação cadastral',
          ],
        },
      ];
    }

    if (selectedService.toLowerCase().includes('apostila')) {
      return [
        {
          key: 'origem_doc',
          title: 'Onde o documento que precisa ser apostilado foi emitido?',
          options: ['No Estado da Flórida', 'Em outro Estado dos EUA', 'No Brasil (para uso nos EUA)'],
        },
        {
          key: 'tipo_doc',
          title: 'Qual o tipo de documento?',
          options: ['Certidão de Nascimento/Casamento', 'Diploma / Histórico Escolar', 'Sentença / Procuração', 'Outro documento'],
        },
      ];
    }

    if (selectedService.toLowerCase().includes('notary')) {
      return [
        {
          key: 'tipo_notary',
          title: 'Como prefere realizar a notarização na Flórida?',
          options: [
            'Presencial em Orlando e região',
            'Mobile Notary (atendimento no meu local)',
            'Notarização vinculada a posterior Apostila de Haia',
          ],
        },
      ];
    }

    if (selectedService.toLowerCase().includes('procura')) {
      return [
        {
          key: 'finalidade_procuracao',
          title: 'Qual a finalidade da procuração no Brasil?',
          options: [
            'Compra, venda ou doação de imóvel',
            'Inventário, partilha ou herança',
            'Movimentação bancária / INSS / Empresas',
            'Representação geral e outros poderes',
          ],
        },
      ];
    }

    // Default genérico para outros serviços
    return [
      {
        key: 'objetivo',
        title: 'Qual a prioridade da sua demanda?',
        options: [
          'Necessito de orientação rápida para viagem próxima',
          'Quero organizar documentação familiar com calma',
          'Preciso de assessoria para múltiplos documentos',
          'Gostaria de entender se meu caso é viável',
        ],
      },
    ];
  };

  const questions = getContextualQuestions();

  const handleSelectOption = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = buildTriageWhatsAppMessage({
    service: selectedService,
    fullName,
    stateUs,
    specifics: answers,
    notes,
  });

  const whatsappRedirectUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#0D1B3D]/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="triage-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FDFCF9] rounded-2xl border border-[#C6A166]/40 shadow-2xl overflow-hidden my-4 sm:my-6 flex flex-col max-h-[90dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra Dourada Superior */}
        <div className="h-1.5 bg-gradient-to-r from-[#0D1B3D] via-[#C6A166] to-[#0D1B3D] flex-shrink-0" />

        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-[#F2EFE6]/80 border-b border-[#0D1B3D]/10 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D1B3D] text-[#C6A166] flex items-center justify-center shadow-xs flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#A68249] uppercase tracking-[0.2em]">
                CONCIERGE DOCUMENTAL DIGITAL
              </span>
              <h2 id="triage-modal-title" className="font-serif text-lg sm:text-2xl font-semibold text-[#0D1B3D]">
                Vamos entender primeiro o seu caso.
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#0D1B3D]/60 hover:text-[#0D1B3D] hover:bg-white/80 transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Fechar triagem"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barra de Progresso Suave */}
        {!isSubmitted && (
          <div className="w-full bg-[#0D1B3D]/5 h-1.5 flex-shrink-0">
            <div
              className="bg-[#C6A166] h-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        )}

        {/* Corpo Interativo da Triagem */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {/* TELA DE SUCESSO / CONFIRMAÇÃO */}
          {isSubmitted ? (
            <div className="text-center py-6 sm:py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#2F6B57]/10 text-[#2F6B57] flex items-center justify-center mx-auto border border-[#2F6B57]/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#A68249] uppercase tracking-wider">
                  Triagem Inicial Registrada
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0D1B3D] mt-1 mb-2">
                  Tudo pronto, {fullName.split(' ')[0] || 'Cliente'}!
                </h3>
                <p className="text-sm text-[#0D1B3D]/75 max-w-md mx-auto leading-relaxed">
                  Recebemos suas informações preliminares. Para dar andamento imediato com nossa equipe, continue pelo WhatsApp com os dados já organizados.
                </p>
              </div>

              {/* Resumo do Caso */}
              <div className="p-4 rounded-xl bg-[#F2EFE6] border border-[#0D1B3D]/10 max-w-md mx-auto text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#0D1B3D]/60">Serviço:</span>
                  <span className="font-bold text-[#0D1B3D]">{selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0D1B3D]/60">Estado nos EUA:</span>
                  <span className="font-semibold text-[#0D1B3D]">{stateUs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0D1B3D]/60">WhatsApp:</span>
                  <span className="font-semibold text-[#0D1B3D]">{whatsapp || BRAND_CONFIG.phone}</span>
                </div>
              </div>

              {/* Ação de Transferência Imediata para o WhatsApp */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappRedirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-wider uppercase text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-md transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-[#C6A166]" />
                  <span>Continuar Atendimento no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-4 text-xs font-semibold text-[#0D1B3D] hover:bg-[#0D1B3D]/5 rounded-xl transition-colors cursor-pointer"
                >
                  Fechar janela
                </button>
              </div>

              <div className="pt-3 text-[11px] text-[#0D1B3D]/60 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2F6B57]" />
                <span>Seus dados são tratados com sigilo e rigor ético.</span>
              </div>
            </div>
          ) : (
            <>
              {/* PASSO 1: ESCOLHA DO SERVIÇO */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#A68249] uppercase tracking-wider">
                      Passo 1 de 4
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0D1B3D] mt-1 mb-2">
                      Qual serviço documental você precisa resolver?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0D1B3D]/70">
                      Escolha a opção que mais se aproxima do que você precisa hoje.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[48vh] overflow-y-auto pr-1">
                    {servicesList.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border cursor-pointer ${
                          selectedService === service
                            ? 'bg-[#0D1B3D] text-white border-[#0D1B3D] shadow-sm'
                            : 'bg-white text-[#0D1B3D] border-[#0D1B3D]/10 hover:border-[#C6A166] hover:bg-[#FAF8F2]'
                        }`}
                      >
                        <span>{service}</span>
                        {selectedService === service && (
                          <CheckCircle2 className="w-4 h-4 text-[#C6A166] flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-[#0D1B3D]/10">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-sm cursor-pointer group"
                    >
                      <span>Avançar para perguntas</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* PASSO 2: PERGUNTAS ESPECÍFICAS (UMA POR TELA OU BLOCO CONVERSACIONAL) */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#A68249] uppercase tracking-wider">
                      Passo 2 de 4 • {selectedService}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0D1B3D] mt-1 mb-2">
                      Entendendo as particularidades do seu caso
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0D1B3D]/70">
                      Responda às questões abaixo para mapearmos as exigências certas.
                    </p>
                  </div>

                  <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-1">
                    {questions.map((q) => (
                      <div key={q.key} className="space-y-2.5">
                        <label className="text-xs font-bold text-[#0D1B3D] uppercase tracking-wide block">
                          {q.title}
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {q.options.map((opt) => {
                            const isSelected = answers[q.key] === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => handleSelectOption(q.key, opt)}
                                className={`p-3 rounded-lg text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#0D1B3D] text-white border-[#0D1B3D]'
                                    : 'bg-white text-[#0D1B3D] border-[#0D1B3D]/10 hover:border-[#C6A166] hover:bg-[#FAF8F2]'
                                }`}
                              >
                                <span>{opt}</span>
                                {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C6A166]" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#0D1B3D]/10">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0D1B3D] hover:bg-[#0D1B3D]/5 rounded-lg cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-sm cursor-pointer group"
                    >
                      <span>Ver diagnóstico preliminar</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* PASSO 3: DEMONSTRAÇÃO DE VALOR E CONCIERGE VALUE */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold text-[#A68249] uppercase tracking-wider">
                      Passo 3 de 4 • Diagnóstico Preliminar
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0D1B3D] mt-1 mb-2">
                      Como podemos organizar o seu processo:
                    </h3>
                  </div>

                  {/* Card Editorial de Valor & Resumo */}
                  <div className="p-5 rounded-2xl bg-white border border-[#C6A166]/40 shadow-xs space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0D1B3D] pb-2 border-b border-[#0D1B3D]/10">
                      <ShieldCheck className="w-4 h-4 text-[#C6A166]" />
                      <span>Serviço Selecionado: {selectedService}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F2EFE6] text-xs sm:text-sm text-[#0D1B3D]/85 leading-relaxed font-sans border border-[#0D1B3D]/5">
                      <p className="font-serif font-semibold text-[#0D1B3D] text-sm sm:text-base mb-1.5">
                        “Seu caso possui uma particularidade que merece uma análise da nossa equipe.”
                      </p>
                      <p className="text-xs text-[#0D1B3D]/75">
                        Em vez de perder horas pesquisando exigências soltas em diferentes canais, nossa assessoria confere previamente todo o dossiê, agenda quando aplicável e reduz o risco de recusas burocráticas.
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-[#0D1B3D]">
                      <p className="font-semibold text-[#0D1B3D] uppercase tracking-wider text-[10px]">
                        O que faremos por você:
                      </p>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6B57]" />
                        <span>Mapeamento dos documentos necessários sem lacunas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6B57]" />
                        <span>Conferência de formulários e requisitos antes de qualquer envio</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6B57]" />
                        <span>Acompanhamento e instruções claras para a etapa seguinte</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#0D1B3D]/10">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0D1B3D] hover:bg-[#0D1B3D]/5 rounded-lg cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-sm cursor-pointer group"
                    >
                      <span>Informar dados de contato</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* PASSO 4: CAPTURA DO LEAD (FORMULÁRIO CONVERSACIONAL PREMIUM) */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-[11px] font-bold text-[#A68249] uppercase tracking-wider">
                      Passo 4 de 4 • Finalização
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0D1B3D] mt-1 mb-2">
                      Onde devemos enviar o seu retorno?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0D1B3D]/70">
                      Nossa equipe responderá com a análise inicial e o próximo passo.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome Completo */}
                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D1B3D] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#A68249]" />
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Maria da Silva"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-[#0D1B3D]/20 focus:border-[#C6A166] focus:ring-1 focus:ring-[#C6A166] outline-hidden transition-all text-[#0D1B3D]"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D1B3D] flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#A68249]" />
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (689) 000-0000"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-[#0D1B3D]/20 focus:border-[#C6A166] focus:ring-1 focus:ring-[#C6A166] outline-hidden transition-all text-[#0D1B3D]"
                      />
                    </div>

                    {/* E-mail */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D1B3D] flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#A68249]" />
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-[#0D1B3D]/20 focus:border-[#C6A166] focus:ring-1 focus:ring-[#C6A166] outline-hidden transition-all text-[#0D1B3D]"
                      />
                    </div>

                    {/* Estado onde reside nos EUA */}
                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D1B3D] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#A68249]" />
                        Estado onde reside nos EUA *
                      </label>
                      <select
                        value={stateUs}
                        onChange={(e) => setStateUs(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-[#0D1B3D]/20 focus:border-[#C6A166] focus:ring-1 focus:ring-[#C6A166] outline-hidden transition-all text-[#0D1B3D]"
                      >
                        {statesList.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Observações / Detalhes adicionais */}
                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#0D1B3D] flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#A68249]" />
                        Breve descrição da sua necessidade (opcional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Conte qualquer detalhe ou prazo relevante..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-[#0D1B3D]/20 focus:border-[#C6A166] focus:ring-1 focus:ring-[#C6A166] outline-hidden transition-all text-[#0D1B3D]"
                      />
                    </div>
                  </div>

                  {/* Declaração de Consentimento Obrigatória */}
                  <p className="text-[11px] text-[#0D1B3D]/65 leading-relaxed pt-1">
                    Ao enviar, você concorda em ser contatado pela equipe do Cartório do Brasileiro sobre sua solicitação.
                  </p>

                  {/* Botões de Ação */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#0D1B3D]/10">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0D1B3D] hover:bg-[#0D1B3D]/5 rounded-lg cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-md transition-all cursor-pointer group"
                    >
                      <span>Enviar minha solicitação</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
