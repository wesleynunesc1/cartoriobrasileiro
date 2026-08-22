import React from 'react';
import {
  FileCheck2,
  Lock,
  Clock,
  ShieldCheck,
  FolderOpen,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { CBMonogram } from './BrandLogo';

interface PlatformPreviewProps {
  onOpenTriage: () => void;
}

export const PlatformPreview: React.FC<PlatformPreviewProps> = ({ onOpenTriage }) => {
  return (
    <section id="plataforma" className="py-24 bg-[#F2EFE6] border-b border-[#0D1B3D]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda: Storytelling e Diferenciais (5 colunas) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A166]/10 border border-[#C6A166]/20 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A68249]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#A68249] uppercase">
                EXPERIÊNCIA DIGITAL & HUMANA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3D] tracking-tight leading-tight mb-6">
              Mais do que documentos.{' '}
              <span className="italic font-normal text-[#0D1B3D]/80 block sm:inline">
                Organização para sua vida continuar.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#0D1B3D]/75 font-sans leading-relaxed mb-8">
              Não somos uma mera intermediária de formulários. Criamos um ecossistema de assessoria onde cada documento é conferido, estruturado e protegido com tecnologia e acompanhamento humano.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#0D1B3D]/5">
                <div className="p-2 rounded-lg bg-[#0D1B3D] text-[#C6A166]">
                  <FolderOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0D1B3D]">Pasta Digital Centralizada</h3>
                  <p className="text-xs text-[#0D1B3D]/70 mt-0.5">
                    Seus documentos conferidos, organizados e disponíveis para futuras necessidades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#0D1B3D]/5">
                <div className="p-2 rounded-lg bg-[#0D1B3D] text-[#C6A166]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0D1B3D]">Rigor Operacional em Dupla Etapa</h3>
                  <p className="text-xs text-[#0D1B3D]/70 mt-0.5">
                    Distinção estrita entre documento recebido e documento conferido/aprovado pela equipe.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#0D1B3D]/5">
                <div className="p-2 rounded-lg bg-[#0D1B3D] text-[#C6A166]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0D1B3D]">Concierge Documental Contínuo</h3>
                  <p className="text-xs text-[#0D1B3D]/70 mt-0.5">
                    Acompanhamento do vencimento de passaportes e prazos civis para toda a família.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenTriage}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0D1B3D] hover:bg-[#162B5E] rounded-xl shadow-sm transition-all cursor-pointer group"
            >
              <span>Experimentar Atendimento</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C6A166] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Coluna Direita: Mockup Interativo da Plataforma Digital (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-white border border-[#C6A166]/30 shadow-2xl p-6 sm:p-8 overflow-hidden">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#0D1B3D]/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0D1B3D]/20" />
                  <div className="w-3 h-3 rounded-full bg-[#C6A166]/40" />
                  <div className="w-3 h-3 rounded-full bg-[#2F6B57]/40" />
                  <span className="text-[11px] font-mono text-[#0D1B3D]/50 ml-2">
                    portal.cartoriodobrasileiro.com/processo/CB-2026-894
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#2F6B57] bg-[#2F6B57]/10 px-2.5 py-0.5 rounded-full">
                  <Lock className="w-3 h-3" />
                  <span>Ambiente Seguro</span>
                </div>
              </div>

              {/* Mockup Header */}
              <div className="my-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-[#A68249] uppercase tracking-wider">
                    Processo Ativo • Protocolo #CB-8942
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0D1B3D]">
                    Passaporte Brasileiro & Registro Civil
                  </h3>
                  <p className="text-xs text-[#0D1B3D]/65">Titular: Família Silveira • Orlando, FL</p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-bold text-white bg-[#0D1B3D] px-3 py-1 rounded-lg">
                    Status: Em Conferência
                  </span>
                </div>
              </div>

              {/* Status Timeline Workflow */}
              <div className="p-4 rounded-xl bg-[#F2EFE6]/70 border border-[#0D1B3D]/10 my-4 space-y-3">
                <p className="text-[11px] font-bold text-[#0D1B3D] uppercase tracking-wider">
                  Linha de Progresso do Atendimento:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2 rounded-lg bg-white border border-[#2F6B57]/30 text-center">
                    <span className="block text-[10px] text-[#2F6B57] font-bold">1. Documentos</span>
                    <span className="text-[11px] font-bold text-[#0D1B3D]">Recebidos</span>
                  </div>

                  <div className="p-2 rounded-lg bg-[#0D1B3D] text-white text-center shadow-xs">
                    <span className="block text-[10px] text-[#C6A166] font-bold">2. Conferência</span>
                    <span className="text-[11px] font-bold text-white">Em Análise Ativa</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white/60 border border-[#0D1B3D]/10 text-center opacity-70">
                    <span className="block text-[10px] text-[#0D1B3D]/60 font-bold">3. Preparação</span>
                    <span className="text-[11px] font-medium text-[#0D1B3D]">Formulários</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white/60 border border-[#0D1B3D]/10 text-center opacity-70">
                    <span className="block text-[10px] text-[#0D1B3D]/60 font-bold">4. Protocolo</span>
                    <span className="text-[11px] font-medium text-[#0D1B3D]">Conclusão</span>
                  </div>
                </div>
              </div>

              {/* Important Visual Distinction: Documento Recebido ≠ Documento Aprovado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-3.5 rounded-xl bg-white border border-[#2F6B57]/30 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#2F6B57]" />
                    <span className="text-xs font-bold text-[#0D1B3D]">Certidão de Nascimento (EUA)</span>
                  </div>
                  <p className="text-[11px] text-[#0D1B3D]/70">
                    Documento conferido e validado com padrão de requisitos consulares.
                  </p>
                  <span className="inline-block mt-2 text-[9px] font-bold uppercase tracking-wider text-[#2F6B57] bg-[#2F6B57]/10 px-2 py-0.5 rounded-sm">
                    Aprovado pela Equipe
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#C6A166]/40 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle className="w-4 h-4 text-[#A68249]" />
                    <span className="text-xs font-bold text-[#0D1B3D]">Foto 2x2 para Passaporte</span>
                  </div>
                  <p className="text-[11px] text-[#0D1B3D]/70">
                    Imagem recebida com sombra no fundo. Solicitamos novo arquivo claro.
                  </p>
                  <span className="inline-block mt-2 text-[9px] font-bold uppercase tracking-wider text-[#A68249] bg-[#C6A166]/10 px-2 py-0.5 rounded-sm">
                    Pendência Preventiva
                  </span>
                </div>
              </div>

              {/* Footer Mockup */}
              <div className="pt-3 border-t border-[#0D1B3D]/10 flex items-center justify-between text-xs text-[#0D1B3D]/70">
                <span>Atendimento acompanhado por Assessora Especialista</span>
                <span className="font-semibold text-[#0D1B3D]">Cartório do Brasileiro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
