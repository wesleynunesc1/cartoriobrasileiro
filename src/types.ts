export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  indicatedFor: string;
  howWeHelp: string[];
  iconName: string;
  category: 'civil' | 'viagem' | 'internacional' | 'notary' | 'outro';
  triagePreset?: string;
}

export interface LifeMoment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
  relatedServices: string[];
  imageUrl?: string;
  imageBadge?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface PartnerTag {
  name: string;
  role: string;
  category: string;
}

export interface TriageStepData {
  service: string;
  serviceCategory?: string;
  specifics: Record<string, string>;
  fullName: string;
  whatsapp: string;
  email: string;
  stateUs: string;
  urgency: string;
  notes: string;
}
