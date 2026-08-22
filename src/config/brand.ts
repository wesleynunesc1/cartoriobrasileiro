/**
 * Configurações Centrais da Marca — Cartório do Brasileiro
 * Centraliza contatos, links e diretrizes de comunicação.
 */

export const BRAND_CONFIG = {
  name: "Cartório do Brasileiro",
  descriptor: "Assessoria Documental",
  slogan: "Sua ponte de confiança com o Brasil.",
  primaryCommercialPromise: "Seu tempo é precioso. A burocracia, deixe com a gente.",
  
  // Contatos Oficiais
  phone: "+1 (689) 808-7772",
  phoneRaw: "16898087772",
  phoneSecondary: "+1 (689) 258-2180",
  whatsappNumber: "16898087772",
  email: "cartoriodobrasileiro@gmail.com",
  location: "Orlando, Florida, USA",
  websiteUrl: "https://www.cartoriodobrasileiro.com",

  // Cores Oficiais
  colors: {
    navy: "#0D1B3D",
    gold: "#C6A166",
    offwhite: "#F2EFE6",
    white: "#FFFFFF",
    greenFunctional: "#2F6B57"
  },

  // Mensagens padrão
  defaultWhatsAppMessage: "Olá! Vim pelo site do Cartório do Brasileiro e gostaria de iniciar meu atendimento.",
  
  // Aviso Institucional Obrigatório de Compliance
  complianceNotice: "O Cartório do Brasileiro é uma empresa privada de assessoria documental e não possui vínculo com o Governo Brasileiro, Consulados do Brasil, cartórios oficiais ou outros órgãos públicos. Não prestamos aconselhamento jurídico. Taxas governamentais, consulares, postais, cartorárias e de terceiros, quando aplicáveis, são independentes dos honorários de nossa assessoria.",

  // Redes Sociais
  socialLinks: {
    instagram: "https://instagram.com/cartoriodobrasileiro",
    whatsapp: "https://wa.me/16898087772"
  }
};

/**
 * Constrói link direto para o WhatsApp com mensagem formatada
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || BRAND_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Constrói mensagem de WhatsApp a partir dos dados preenchidos na Triagem
 */
export function buildTriageWhatsAppMessage(data: {
  service: string;
  fullName: string;
  stateUs?: string;
  specifics?: Record<string, string>;
  notes?: string;
}): string {
  let msg = `Olá! Meu nome é *${data.fullName || 'Visitante'}* e realizei a triagem inicial no site do Cartório do Brasileiro.\n\n`;
  msg += `📌 *Serviço de interesse:* ${data.service}\n`;
  if (data.stateUs) {
    msg += `📍 *Estado onde resido (EUA):* ${data.stateUs}\n`;
  }
  if (data.specifics && Object.keys(data.specifics).length > 0) {
    msg += `\n*Detalhes da situação:*\n`;
    Object.entries(data.specifics).forEach(([k, v]) => {
      msg += `• ${k}: ${v}\n`;
    });
  }
  if (data.notes) {
    msg += `\n*Observações:* ${data.notes}\n`;
  }
  msg += `\nGostaria de entender os próximos passos para o meu caso.`;
  return msg;
}
