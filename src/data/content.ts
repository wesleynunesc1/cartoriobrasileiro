import { ServiceItem, LifeMoment, FaqItem, PartnerTag } from '../types';

export const QUICK_SERVICES: ServiceItem[] = [
  {
    id: 'passaporte',
    title: 'Passaporte Brasileiro',
    shortDesc: 'Organize sua renovação sem transformar o processo em um quebra-cabeça.',
    fullDesc: 'Orientação documental completa para primeiro passaporte ou renovação de passaporte para adultos e menores nos EUA. Conferência prévia de formulários, fotos e documentação comprobatória.',
    indicatedFor: 'Brasileiros com passaporte vencido, próximo do vencimento, extraviado ou que precisam emitir o primeiro passaporte do filho nos EUA.',
    howWeHelp: [
      'Orientação sobre os documentos exigidos para cada situação',
      'Conferência minuciosa de formulários e fotografias nos padrões oficiais',
      'Acompanhamento das etapas até o protocolo',
      'Instruções claras sobre autorizações de viagem para menores'
    ],
    iconName: 'BookMarked',
    category: 'viagem',
    triagePreset: 'Passaporte'
  },
  {
    id: 'nascimento',
    title: 'Registro de Nascimento',
    shortDesc: 'O vínculo documental do seu filho com o Brasil começa aqui.',
    fullDesc: 'Preparação e conferência de todo o dossiê para registro consular de nascimento de filhos de brasileiros nascidos nos Estados Unidos.',
    indicatedFor: 'Pais brasileiros que tiveram filhos nos Estados Unidos e desejam assegurar a nacionalidade brasileira originária da criança.',
    howWeHelp: [
      'Conferência da certidão americana e documentos dos genitores',
      'Instruções sobre documentação de estado civil dos pais',
      'Organização do requerimento consular para evitar retrabalho',
      'Orientação sobre o posterior traslado no Brasil'
    ],
    iconName: 'Baby',
    category: 'civil',
    triagePreset: 'Registro de Nascimento'
  },
  {
    id: 'casamento',
    title: 'Registro de Casamento',
    shortDesc: 'Organize seu casamento também perante o Brasil.',
    fullDesc: 'Assessoria para registro consular de casamento realizado nos Estados Unidos, garantindo a regularidade do estado civil perante a legislação brasileira.',
    indicatedFor: 'Brasileiros casados nos Estados Unidos (com brasileiro ou estrangeiro) que precisam atualizar seu estado civil no Brasil.',
    howWeHelp: [
      'Verificação da certidão de casamento americana',
      'Conferência de pacto antenupcial ou regime de bens, quando houver',
      'Preparação dos formulários consulares pertinentes',
      'Orientações sobre atualização de nome e documentos'
    ],
    iconName: 'HeartHandshake',
    category: 'civil',
    triagePreset: 'Registro de Casamento'
  },
  {
    id: 'cpf',
    title: 'CPF',
    shortDesc: 'Cuide de um dos documentos essenciais para sua vida no Brasil.',
    fullDesc: 'Inscrição, regularização, alteração cadastral ou emissão de comprovante de CPF para residentes no exterior.',
    indicatedFor: 'Quem está com o CPF suspenso, pendente de regularização, precisa incluir nome de casado(a) ou emitir primeira via.',
    howWeHelp: [
      'Diagnóstico da situação cadastral atual junto à Receita Federal',
      'Preparação e conferência do formulário de solicitação no exterior',
      'Acompanhamento do envio e conferência do comprovante emitido',
      'Desbloqueio de pendências cadastrais administrativas'
    ],
    iconName: 'CreditCard',
    category: 'civil',
    triagePreset: 'CPF'
  },
  {
    id: 'titulo-eleitor',
    title: 'Título de Eleitor',
    shortDesc: 'Mantenha sua situação eleitoral organizada mesmo vivendo no exterior.',
    fullDesc: 'Alistamento eleitoral, transferência de domicílio para a Zona do Exterior (ZZ) e regularização de pendências com a Justiça Eleitoral.',
    indicatedFor: 'Brasileiros que se mudaram para os EUA, jovens que completaram 18 anos ou quem deixou de votar nas últimas eleições.',
    howWeHelp: [
      'Verificação da certidão de quitação eleitoral',
      'Preparação do requerimento via sistema Título Net Exterior',
      'Orientação sobre justificativas eleitorais e quitação de multas',
      'Acompanhamento até a validação pelo cartório eleitoral do exterior'
    ],
    iconName: 'Vote',
    category: 'civil',
    triagePreset: 'Título de Eleitor'
  },
  {
    id: 'servico-militar',
    title: 'Serviço Militar',
    shortDesc: 'Regularize sua situação militar com orientação em cada etapa.',
    fullDesc: 'Alistamento militar inicial para jovens no exterior, pedido de adiamento de incorporação ou emissão de Certificado de Dispensa de Incorporação (CDI).',
    indicatedFor: 'Jovens brasileiros do sexo masculino no ano em que completam 18 anos vivendo no exterior, ou homens com pendências militares.',
    howWeHelp: [
      'Identificação da etapa militar aplicável ao caso',
      'Conferência dos comprovantes de residência no exterior',
      'Organização do pedido junto à repartição competente',
      'Acompanhamento da emissão da documentação militar'
    ],
    iconName: 'ShieldCheck',
    category: 'civil',
    triagePreset: 'Serviço Militar'
  },
  {
    id: 'procuracoes',
    title: 'Procurações',
    shortDesc: 'Quando você precisa resolver no Brasil sem estar no Brasil.',
    fullDesc: 'Auxílio administrativo na organização e conferência documental para emissão de procuração pública consular ou modelo particular com notarização.',
    indicatedFor: 'Quem precisa vender/comprar imóvel, movimentar contas bancárias, inventários, casamento ou representação legal no Brasil.',
    howWeHelp: [
      'Adequação dos poderes e dados qualificativos no modelo administrativo',
      'Conferência prévia do texto junto aos envolvidos no Brasil',
      'Instruções sobre agendamento consular ou notarização e apostila',
      'Coordenação de envio seguro do documento físico quando necessário'
    ],
    iconName: 'FileSignature',
    category: 'internacional',
    triagePreset: 'Procurações'
  },
  {
    id: 'apostila-haia',
    title: 'Apostila de Haia',
    shortDesc: 'Prepare seus documentos americanos para utilização no Brasil.',
    fullDesc: 'Coordenação e gestão de apostilamento de documentos emitidos nos EUA (certidões, diplomas, procurações, sentenças) perante a autoridade estadual competente para validade jurídica no Brasil.',
    indicatedFor: 'Qualquer pessoa que precise apresentar um documento oficial emitido nos EUA perante órgãos, cartórios, universidades ou empresas no Brasil.',
    howWeHelp: [
      'Análise de elegibilidade do documento para apostilamento',
      'Coordenação com a Secretaria de Estado competente nos EUA',
      'Gestão de taxas e remessas seguras com rastreamento',
      'Orientação sobre posterior tradução e registro no Brasil'
    ],
    iconName: 'Stamp',
    category: 'internacional',
    triagePreset: 'Apostila de Haia'
  },
  {
    id: 'traducoes',
    title: 'Traduções',
    shortDesc: 'Documentos traduzidos com o cuidado que cada finalidade exige.',
    fullDesc: 'Gestão de tradução certificada nos EUA (padrão ATA/USCIS/universidades) e articulação com tradutores públicos juramentados no Brasil para documentos que ingressam no território nacional.',
    indicatedFor: 'Processos migratórios, validação de diplomas, processos judiciais, certidões civis, contratos e declarações bancárias.',
    howWeHelp: [
      'Identificação da modalidade exata de tradução exigida pelo órgão receptor',
      'Coordenação com tradutores qualificados e certificados',
      'Revisão de formatação, dados vitais e fidelidade terminológica',
      'Entrega digital segura em alta resolução e envio físico quando solicitado'
    ],
    iconName: 'Globe2',
    category: 'internacional',
    triagePreset: 'Traduções'
  },
  {
    id: 'notary-public',
    title: 'Notary Public',
    shortDesc: 'Notarização e suporte documental na Flórida.',
    fullDesc: 'Serviços de Notary Public autorizado no Estado da Flórida para reconhecimentos (acknowledgments), juramentos (jurats), affidavits, autorizações de viagem e cópias certificadas nos limites legais.',
    indicatedFor: 'Pessoas e empresas que precisam notarizar documentos com validade nos EUA ou como etapa preparatória para Apostila de Haia.',
    howWeHelp: [
      'Conferência da identificação válida dos signatários',
      'Notarização presencial em Orlando e região ou via Mobile Notary',
      'Preparação articulada com subsequente apostilamento quando aplicável',
      'Atendimento em português com rigor e conformidade com as leis da Flórida'
    ],
    iconName: 'FileCheck2',
    category: 'notary',
    triagePreset: 'Notary Public'
  },
  {
    id: 'certidoes',
    title: 'Certidões',
    shortDesc: 'Encontre e organize os documentos brasileiros de que você precisa.',
    fullDesc: 'Localização, pesquisa e solicitação de segundas vias atualizadas de certidões de nascimento, casamento, óbito e certidões negativas cíveis/criminais em cartórios de todo o território brasileiro.',
    indicatedFor: 'Brasileiros nos EUA que precisam de certidão em inteiro teor, certidão reprográfica ou cópia atualizada para renovações, cidadanias ou processos consulares.',
    howWeHelp: [
      'Pesquisa e localização do cartório de registro original no Brasil',
      'Emissão de certidões em inteiro teor ou breve relato atualizadas',
      'Coordenação de apostilamento de Haia no Brasil quando necessário',
      'Envio internacional seguro para os Estados Unidos com tracking'
    ],
    iconName: 'ScrollText',
    category: 'civil',
    triagePreset: 'Certidões'
  },
  {
    id: 'outro-servico',
    title: 'Outro serviço',
    shortDesc: 'Não encontrou sua necessidade? Conte para nós o que precisa resolver.',
    fullDesc: 'Diagnóstico preliminar para casos particulares, combinação de múltiplos serviços ou conexões documentais personalizadas entre Brasil e EUA.',
    indicatedFor: 'Casos com particularidades específicas, reorganizações familiares, documentação corporativa (LLC/EIN) ou transições internacionais.',
    howWeHelp: [
      'Escuta atenta e mapeamento do problema',
      'Verificação do melhor caminho administrativo',
      'Encaminhamento à rede de parceiros especializados quando houver atividade regulada',
      'Planejamento de uma trilha documental clara'
    ],
    iconName: 'HelpCircle',
    category: 'outro',
    triagePreset: 'Outro serviço'
  }
];

export const LIFE_MOMENTS: LifeMoment[] = [
  {
    id: 'nascimento-bebe',
    title: 'Nasceu um filho nos EUA?',
    subtitle: 'Nascimento de filho nos EUA',
    description: 'Seu bebê nasceu nos EUA e você deseja garantir a nacionalidade brasileira originária, CPF e passaporte com tranquilidade.',
    iconName: 'Baby',
    highlights: ['Registro de Nascimento', 'Inscrição de CPF', 'Passaporte Brasileiro'],
    relatedServices: ['nascimento', 'passaporte', 'cpf'],
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600',
    imageBadge: 'Cidadania e Vínculo com o Brasil'
  },
  {
    id: 'casamento-moment',
    title: 'Vai se casar?',
    subtitle: 'União civil internacional',
    description: 'Orientação para casamento civil na Flórida ou registro consular do casamento celebrado nos EUA para validade plena no Brasil.',
    iconName: 'HeartHandshake',
    highlights: ['Casamento Civil nos EUA', 'Tradução Certificada', 'Apostilamento de Haia'],
    relatedServices: ['casamento', 'apostila-haia', 'passaporte'],
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600',
    imageBadge: 'Formalização civil e patrimonial'
  },
  {
    id: '18-anos',
    title: 'Completou 18 anos?',
    subtitle: 'Entrada na maioridade civil',
    description: 'Jovens brasileiros completando a maioridade no exterior precisam manter sua situação cívica, eleitoral e militar em dia.',
    iconName: 'GraduationCap',
    highlights: ['Título de Eleitor no Exterior', 'Serviço Militar/Dispensa', 'Atualização de CPF'],
    relatedServices: ['servico-militar', 'titulo-eleitor', 'cpf'],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600',
    imageBadge: 'Transição para a vida adulta cívica'
  },
  {
    id: 'procuracao-brasil-moment',
    title: 'Precisa resolver algo no Brasil?',
    subtitle: 'Representação legal à distância',
    description: 'Assuntos bancários, compra e venda de imóveis, heranças ou emissão de certidões sem a necessidade de viajar ao Brasil.',
    iconName: 'Building2',
    highlights: ['Procurações para uso no Brasil', 'Busca e 2ª Via de Certidões', 'Apostila de Haia'],
    relatedServices: ['procuracoes', 'apostila-haia', 'notary-public'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    imageBadge: 'Gestão à distância com segurança'
  },
  {
    id: 'passaporte-moment',
    title: 'Passaporte',
    subtitle: 'Renovação e primeiro documento',
    description: 'Renovação preventiva para viagens, passaporte urgente por vencimento, primeiro documento de filhos e casos de perda ou extravio.',
    iconName: 'BookMarked',
    highlights: ['Passaporte Adulto / Menor', 'Dossiê Fotográfico e Formulário', 'Tratamento de Perda ou Extravio', 'Autorização de Retorno ao Brasil'],
    relatedServices: ['passaporte', 'certidoes', 'servico-militar']
  },
  {
    id: 'emergencia-moment',
    title: 'Emergência Documental',
    subtitle: 'Viagens imprevistas ou prazos curtos',
    description: 'Avaliação rápida de viabilidade para passaportes com urgência comprovada, autorizações de viagem de última hora ou certidões prioritárias.',
    iconName: 'ClockAlert',
    highlights: ['Triagem Prioritária', 'Verificação Rápida de Exigências', 'Conferência Expressa de Documentos', 'Coordenação Operacional Focada'],
    relatedServices: ['passaporte', 'certidoes', 'procuracoes']
  },
  {
    id: 'mudanca-nome',
    title: 'Mudança de Nome',
    subtitle: 'Harmonização de identidade civil',
    description: 'Atualização e sincronização do nome após casamento, divórcio ou retificação em todos os registros brasileiros e passaporte.',
    iconName: 'UserCheck',
    highlights: ['Atualização de CPF', 'Renovação de Passaporte com Novo Nome', 'Adequação no Título de Eleitor', 'Conferência da Certidão Atualizada'],
    relatedServices: ['cpf', 'passaporte', 'casamento', 'certidoes']
  },
  {
    id: 'divorcio-moment',
    title: 'Divórcio',
    subtitle: 'Averbação e regularização de estado civil',
    description: 'Triagem documental da sentença de divórcio americana, apostilamento, tradução e conexão com profissional habilitado para homologação/averbação no Brasil.',
    iconName: 'FileSpreadsheet',
    highlights: ['Apostilamento da Sentença Americana', 'Tradução Certificada/Juramentada', 'Conexão com Advogado Habilitado', 'Atualização Civil Posterior'],
    relatedServices: ['apostila-haia', 'traducoes', 'certidoes']
  },
  {
    id: 'estudante-moment',
    title: 'Estudante',
    subtitle: 'Estudos e validações acadêmicas',
    description: 'Apostilamento e tradução de diplomas, históricos escolares (high school/universidade) e certidões para validação nos EUA ou no Brasil.',
    iconName: 'GraduationCap',
    highlights: ['Apostila de Diplomas e Históricos', 'Tradução Certificada ATA/Institucional', 'Notarização de Declarações', 'Courier Seguro'],
    relatedServices: ['apostila-haia', 'traducoes', 'notary-public']
  },
  {
    id: 'procuracao-brasil-moment',
    title: 'Procuração Brasil',
    subtitle: 'Representação legal à distância',
    description: 'Para quem precisa comprar ou vender imóvel, movimentar contas bancárias, inventários ou resolver pendências no Brasil sem sair dos EUA.',
    iconName: 'FileSignature',
    highlights: ['Revisão de Texto e Poderes Administrativos', 'Organização de Notarização + Apostila', 'Procuração Pública Consular', 'Logística de Envio Seguro'],
    relatedServices: ['procuracoes', 'apostila-haia', 'notary-public']
  },
  {
    id: 'volta-ao-brasil',
    title: 'Volta ao Brasil',
    subtitle: 'Dossiê de retorno e repatriação documental',
    description: 'Organização de todas as certidões americanas apostiladas, diplomas, documentos consulares e certificados para reestabelecer vida plena no Brasil.',
    iconName: 'PlaneLanding',
    highlights: ['Dossiê de Certidões com Apostila', 'Tradução de Documentos Escolares', 'Comprovante de Tempo no Exterior', 'Regularização Fiscal e Eleitoral'],
    relatedServices: ['apostila-haia', 'traducoes', 'cpf', 'certidoes']
  }
];

export const FEATURED_SERVICES = [
  {
    title: 'Notary Public & Mobile Notary',
    badge: 'Flórida / EUA',
    desc: 'Atendimento notarizado presencial em Orlando e região ou atendimento móvel com hora marcada. Rigor legal, conformidade com a legislação da Flórida e atendimento acolhedor em português.',
    features: ['Acknowledgments & Jurats', 'Affidavits & Autorizações de Viagem', 'Preparação para Apostila de Haia', 'Mobile Notary Corporativo e Familiar'],
    iconName: 'FileCheck2'
  },
  {
    title: 'Apostila de Haia nos EUA',
    badge: 'Validade Internacional',
    desc: 'Gestão completa do processo de apostilamento perante as autoridades estaduais nos EUA, conferindo validade legal direta aos seus documentos americanos perante o Brasil.',
    features: ['Certidões Civis e Sentenças', 'Diplomas e Históricos Escolares', 'Procurações e Documentos Notarizados', 'Rastreamento e Envio Seguro'],
    iconName: 'Stamp'
  },
  {
    title: 'Tradução Certificada & Juramentada',
    badge: 'Padrão Rigoroso',
    desc: 'Traduções certificadas em conformidade com exigências de órgãos consulares, universidades e USCIS, além de articulação com tradutores juramentados no Brasil.',
    features: ['Padrão de Precisão Terminológica', 'Aceita por Órgãos Americanos', 'Encaminhamento para Tradução no Brasil', 'Formatos Digitais e Físicos'],
    iconName: 'Languages'
  },
  {
    title: 'Certidões e Pesquisas no Brasil',
    badge: 'Brasil à Distância',
    desc: 'Busca, localização e emissão de segundas vias atualizadas de certidões de nascimento, casamento, óbito e certidões negativas em qualquer cartório brasileiro.',
    features: ['Inteiro Teor e Cópia Reprográfica', 'Localização de Registros Antigos', 'Apostilamento no Brasil via Parceiro', 'Envio Internacional para os EUA'],
    iconName: 'ScrollText'
  },
  {
    title: 'Passaportes & Registros Consulares',
    badge: 'Documentos Brasileiros',
    desc: 'Estruturação do dossiê completo para solicitações de passaportes de adultos/menores e registros de nascimento ou casamento no exterior sem falhas cadastrais.',
    features: ['Conferência Prévia de Fotos e Formulários', 'Orientação para Menores de Idade', 'Registro Consular de Nascimento e Casamento', 'Instruções para Traslado no Brasil'],
    iconName: 'BookMarked'
  },
  {
    title: 'Concierge Documental',
    badge: 'Assessoria Integral',
    desc: 'Atendimento exclusivo e contínuo para pessoas, famílias e empresas que desejam centralizar todo o seu patrimônio documental em uma gestão profissional.',
    features: ['Diagnóstico Global de Pendências', 'Pasta Digital Organizada', 'Acompanhamento Proativo de Vencimentos', 'Um Único Ponto de Contato'],
    iconName: 'FolderKanban'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Você conta o que precisa',
    description: 'Diga qual é a sua necessidade documental.',
    tag: 'Acolhimento & Escuta'
  },
  {
    number: '02',
    title: 'Nós analisamos seu caso',
    description: 'Nossa equipe entende a necessidade e organiza o caminho inicial.',
    tag: 'Mapeamento de Requisitos'
  },
  {
    number: '03',
    title: 'Organizamos sua documentação',
    description: 'Preparamos, conferimos e coordenamos as etapas que fazem parte do serviço contratado.',
    tag: 'Organização & Rigor'
  },
  {
    number: '04',
    title: 'Acompanhamos cada etapa',
    description: 'Você recebe informações claras sobre andamento e próximos passos.',
    tag: 'Conclusão & Clareza'
  }
];

export const PARTNER_TAGS: PartnerTag[] = [
  { name: 'Immigration Attorney', role: 'Advocacia Migratória', category: 'juridico' },
  { name: 'Family Law Attorney', role: 'Direito de Família', category: 'juridico' },
  { name: 'Estate Planning Attorney', role: 'Planejamento Sucessório', category: 'juridico' },
  { name: 'CPA / Enrolled Agent', role: 'Contabilidade e Tax nos EUA', category: 'tributario' },
  { name: 'Contador no Brasil', role: 'Saída Definitiva e IRPF', category: 'tributario' },
  { name: 'Tradutores Qualificados', role: 'Tradução Certificada ATA', category: 'documental' },
  { name: 'Despachantes no Brasil', role: 'Diligências Cartorárias', category: 'documental' },
  { name: 'Cartórios Parceiros', role: 'Busca e Segundas Vias', category: 'documental' },
  { name: 'Courier Internacional', role: 'Remessa Segura de Documentos', category: 'logistica' },
  { name: 'Wedding Professionals', role: 'Assessoria de Casamentos nos EUA', category: 'eventos' },
  { name: 'Real Estate Professionals', role: 'Corretores Imobiliários', category: 'imoveis' }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O Cartório do Brasileiro é um cartório oficial?',
    answer: 'Não. Somos uma empresa privada de assessoria documental e assistência administrativa, independente de órgãos governamentais, consulados do Brasil ou cartórios oficiais. Atuamos organizando, orientando, conferindo e acompanhando suas demandas para que você poupe tempo e evite erros burocráticos.'
  },
  {
    question: 'Vocês atendem brasileiros em qualquer estado dos EUA?',
    answer: 'Sim. Grande parte do suporte documental é prestada de forma 100% digital e remota para clientes residentes em todos os 50 estados americanos. Determinados atos presenciais, como Notary Public específico no Estado da Flórida, possuem modalidades presenciais locais ou encaminhamento adequado.'
  },
  {
    question: 'Vocês garantem a aprovação de documentos por órgãos públicos?',
    answer: 'Não. Aprovações, deferimentos e decisões finais pertencem exclusivamente às autoridades e órgãos públicos competentes (como Consulados, Receita Federal, Cartórios ou Secretarias de Estado). O que garantimos é o rigor operacional, a conferência minuciosa e a preparação correta para que seu processo não sofra atrasos por falhas documentais.'
  },
  {
    question: 'Vocês oferecem assessoria jurídica?',
    answer: 'Não prestamos aconselhamento jurídico, pareceres legais ou representação processual. Quando sua situação envolver questões reguladas (como estratégia de imigração, disputas judiciais, divórcios litigiosos ou inventários), nós conectamos você a profissionais e advogados independentes devidamente habilitados de nossa rede de parceiros.'
  },
  {
    question: 'Como começo meu atendimento?',
    answer: 'Você pode iniciar diretamente pela ferramenta "Descobrir o que preciso" em nosso site, realizando uma triagem rápida de poucos passos, ou clicar no botão de WhatsApp para falar com nossa equipe de atendimento.'
  },
  {
    question: 'Posso enviar meus documentos de forma 100% online?',
    answer: 'Sim. Você pode compartilhar cópias digitais e imagens de seus documentos para que nossa equipe faça a conferência preliminar. Quando houver necessidade de manuseio de originais físicos (como para Apostila de Haia ou certidões em papel moeda), coordenamos o envio com código de rastreamento seguro.'
  },
  {
    question: 'Vocês realizam serviços relacionados ao Brasil mesmo eu morando nos EUA?',
    answer: 'Sim, essa é exatamente uma de nossas maiores especialidades: atuar como a sua ponte documental com o Brasil, cuidando de certidões, regularizações de CPF, título eleitoral, apostilamentos e procurações sem que você precise viajar.'
  },
  {
    question: 'Não sei exatamente qual serviço preciso. O que devo fazer?',
    answer: 'Não se preocupe. Utilize a opção "Descobrir o que preciso" ou inicie nossa Triagem Conversacional. Nossa equipe fará o diagnóstico da sua situação e indicará o caminho correto com total clareza.'
  }
];

export const WHO_IS_IT_FOR = [
  {
    title: 'Famílias com filhos nos EUA',
    desc: 'Pais que precisam registrar filhos no consulado, emitir passaportes e organizar autorizações de viagem com segurança.',
    iconName: 'Users'
  },
  {
    title: 'Jovens e Estudantes',
    desc: 'Regularização militar aos 18 anos, primeiro título de eleitor, emissão de CPF e validação/tradução de históricos escolares.',
    iconName: 'GraduationCap'
  },
  {
    title: 'Casais e Recém-Casados',
    desc: 'Brasileiros casados no exterior que precisam registrar a união perante o Brasil e sincronizar nomes em todos os documentos.',
    iconName: 'Heart'
  },
  {
    title: 'Profissionais e Empresários',
    desc: 'Gestão de documentação de empresas nos EUA (LLC/EIN), procurações para negócios no Brasil e serviços de Notary Public.',
    iconName: 'Briefcase'
  },
  {
    title: 'Brasileiros Retornando ao Brasil',
    desc: 'Dossiê completo de retorno com certidões apostiladas, documentos escolares traduzidos e regularizações fiscais/eleitorais.',
    iconName: 'PlaneTakeoff'
  },
  {
    title: 'Bens e Patrimônio entre Brasil e EUA',
    desc: 'Organização de procurações, certidões negativas e certidões imobiliárias para quem administra bens à distância.',
    iconName: 'Landmark'
  }
];
