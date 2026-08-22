import React from 'react';
import { Heart, Compass, ShieldCheck, Sparkles, Building2, Users } from 'lucide-react';
import { CBMonogram } from './BrandLogo';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-24 bg-[#F2EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda: Composição Visual Institucional (5 colunas) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#0D1B3D] text-white p-8 sm:p-10 shadow-2xl overflow-hidden border border-[#C6A166]/40">
              {/* Monograma CB em marca d'água no fundo */}
              <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-10 pointer-events-none">
                <CBMonogram size={400} color="#FFFFFF" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C6A166]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A166]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#DFC89B] uppercase">
                    PROPÓSITO & ORIGEM
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-white">
                  Sua ponte de confiança com o Brasil.
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                  Nascemos em Orlando, Flórida, para acolher e orientar a comunidade brasileira que vive, trabalha e constrói suas famílias nos Estados Unidos sem perder os laços com a sua terra natal.
                </p>

                <div className="pt-6 border-t border-white/15 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A166]">
                      100%
                    </span>
                    <p className="text-[11px] text-white/70 mt-0.5">Empresa Privada de Assessoria</p>
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A166]">
                      Brasil ↔ EUA
                    </span>
                    <p className="text-[11px] text-white/70 mt-0.5">Atendimento Coordenado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Manifesto Institucional (7 colunas) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#A68249] uppercase block">
              QUEM SOMOS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3D] tracking-tight leading-tight">
              Uma assessoria criada para facilitar a vida de brasileiros nos Estados Unidos.
            </h2>

            <p className="text-sm sm:text-base text-[#0D1B3D]/80 font-sans leading-relaxed">
              O <strong className="text-[#0D1B3D]">Cartório do Brasileiro</strong> nasce para reduzir a distância entre a rotina do brasileiro que vive nos Estados Unidos e as demandas documentais que continuam conectando essa pessoa ao Brasil.
            </p>

            <p className="text-sm sm:text-base text-[#0D1B3D]/80 font-sans leading-relaxed">
              A marca existe para transformar processos que parecem confusos em jornadas mais organizadas, compreensíveis e humanas. Acreditamos que você não deve perder horas pesquisando em fóruns ou arriscando atrasos em viagens por conta de exigências técnicas.
            </p>

            {/* Tríade de Pilares: Cuidador + Sábio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-[#0D1B3D]/10 shadow-2xs">
                <div className="flex items-center gap-2 mb-2 text-[#0D1B3D]">
                  <Heart className="w-4 h-4 text-[#C6A166]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">Cuidado Humano</h4>
                </div>
                <p className="text-xs text-[#0D1B3D]/70 leading-relaxed">
                  Por trás de cada certidão, passaporte ou procuração, existe uma pessoa, uma família e uma história de vida.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0D1B3D]/10 shadow-2xs">
                <div className="flex items-center gap-2 mb-2 text-[#0D1B3D]">
                  <Compass className="w-4 h-4 text-[#C6A166]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">Domínio de Processos</h4>
                </div>
                <p className="text-xs text-[#0D1B3D]/70 leading-relaxed">
                  Conhecemos o caminho administrativo correto para você saber exatamente o que acontece agora e o que vem depois.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
