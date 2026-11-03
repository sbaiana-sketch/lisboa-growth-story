/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DO WEBSITE — SANDRA BAIANA
 * ============================================================
 *  Este é o ÚNICO ficheiro necessário para personalizar
 *  textos, imagens, contactos e ligações.
 *
 *  • Campos vazios ("") são ocultados automaticamente no site.
 *  • URLs de imagens podem ser links directos (.jpg, .png, .webp...)
 *    ou links de partilha do Google Drive (convertidos automaticamente).
 * ============================================================
 */

// ---------- Tipos ----------
export type ImageKey =
  | "logo"
  | "hero"
  | "signature"
  | "project01"
  | "project02"
  | "project03"
  | "project04"
  | "testimonial01";

export interface ProjectDetail {
  context?: string;
  objectives?: string;
  challenge?: string;
  strategy?: string;
  workDone?: string[];
  tools?: string[];
}

export interface Project {
  title: string;
  category: string;
  badge?: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string;
  visible: boolean;
  details?: ProjectDetail;
}

export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  text: string;
  imageUrl: string;
  visible: boolean;
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  specialization?: string;
  dates: string;
}

export interface ExperienceEntry {
  organization: string;
  role: string;
  responsibilities: string | string[];
  dates: string;
}

export interface Indicator {
  value: string;
  label: string;
  visible: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface CollaborationModel {
  title: string;
  description: string;
  points: string[];
  ctaLabel: string;
  ctaUrl: string;
}

export interface ServiceSkill {
  title: string;
  description: string;
  iconName: "megaphone" | "graduationCap" | "monitorSmartphone";
}

// ---------- Imagens (fonte única de verdade) ----------
export const images: Record<ImageKey, string> = {
  logo: "",
  // FOTOGRAFIA DO HERO: NÃO ALTERAR
  hero: "https://lh3.googleusercontent.com/d/1z1m-8Se2e-qBsINBOnm7y5rdeUYcx_FL",
  signature: "",
  project01: "",
  project02: "",
  project03: "",
  project04: "",
  testimonial01: "",
};

export const siteConfig = {
  // ---------- Identidade ----------
  name: "Sandra Baiana",
  professionalTitle: "Marketing Digital, Comunicação e Estratégia",
  heroTag: "MARKETING DIGITAL · COMUNICAÇÃO",
  heroTitle: "Marketing Digital com estratégia, criatividade e visão.",
  /** Palavras do título destacadas com a cor da marca */
  heroHighlight: ["estratégia, criatividade e visão"],
  heroSubtitle:
    "Ajudo marcas e empresas a comunicar melhor, construir a sua presença digital e transformar ideias em projectos concretos.",
  heroSubtitleHighlight: ["comunicar melhor", "projectos concretos"],
  aboutTitle: "Quem está por detrás da estratégia?",
  aboutText: `Sou a Sandra Baiana e trabalho na intersecção entre Marketing Digital, comunicação e tecnologia.

Ao longo do meu percurso, tive oportunidade de conhecer diferentes realidades empresariais, desde a hotelaria e o turismo até ao trabalho com pequenas e médias empresas.

A experiência profissional, o desenvolvimento da ComunicaCom e a actividade como formadora permitiram-me construir uma visão abrangente do Marketing Digital: sei planear, desenvolver, implementar e explicar.

Gosto de compreender os desafios antes de procurar soluções. Acredito numa comunicação clara, numa estratégia bem pensada e num trabalho que produza resultados concretos.

Hoje, procuro novos desafios que me permitam colocar esta experiência ao serviço de uma equipa, participar em projectos e continuar a crescer profissionalmente.`,

  logoUrl: images.logo,
  heroImageUrl: images.hero,
  signatureImageUrl: images.signature,
  yearsExperience: "",
  location: "Caldas da Rainha, Portugal",
  footerDescription:
    "Marketing Digital, Comunicação e Estratégia. Disponível para novas oportunidades profissionais, integração em equipas e projectos de impacto.",

  images,

  // ---------- Contactos ----------
  contact: {
    email: "sandrabaiana.form@gmail.com",
    phone: "",
    whatsapp: "",
    linkedin: "https://www.linkedin.com/in/sandrabaiana/",
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    website: "",
    location: "Caldas da Rainha, Portugal",
    contactFormEnabled: true,
    /**
     * Endpoint para envio real do formulário (ex.: Formspree "https://formspree.io/f/xxxx", Basin, etc.).
     * Se vazio, o formulário direciona a mensagem via mailto preenchido de forma transparente.
     */
    formEndpoint: "",
  },

  // ---------- Competências (3 cartões destacados) ----------
  skills: [
    {
      title: "Marketing Digital e Comunicação",
      description:
        "Planeamento de estratégias digitais, criação de conteúdos e desenvolvimento de acções de comunicação orientadas para os objectivos das marcas.",
      iconName: "megaphone" as const,
    },
    {
      title: "Formação e Desenvolvimento",
      description:
        "Concepção de conteúdos pedagógicos e dinamização de formação em Marketing Digital, com uma abordagem prática e adaptada a diferentes públicos.",
      iconName: "graduationCap" as const,
    },
    {
      title: "Websites, SEO e Experiência Digital",
      description:
        "Desenvolvimento e optimização de websites em WordPress, organização de conteúdos, SEO e melhoria da experiência dos utilizadores.",
      iconName: "monitorSmartphone" as const,
    },
  ],

  // ---------- Sobre: indicadores opcionais ----------
  aboutIndicators: [] as Indicator[],

  // ---------- Formação e experiência ----------
  education: [
    {
      institution:
        "Escola Superior de Tecnologia e Gestão, Instituto Politécnico de Viana do Castelo",
      qualification: "Licenciatura em Turismo",
      specialization: "",
      dates: "2003–2007",
    },
    {
      institution: "FLAG",
      qualification: "Marketing Digital e E-commerce",
      specialization: "",
      dates: "2019",
    },
    {
      institution: "Formação Contínua",
      qualification: "Actualização contínua",
      specialization: "WordPress, SEO, comunicação digital e ferramentas de Marketing Digital",
      dates: "Contínua",
    },
  ] as EducationEntry[],

  experience: [
    {
      organization: "Formação Profissional",
      role: "Formadora de Marketing Digital",
      dates: "2020–Presente",
      responsibilities: [
        "Desenvolvimento e dinamização de formação profissional em Marketing Digital, em contexto presencial e online.",
        "Preparação de conteúdos pedagógicos.",
        "Desenvolvimento de apresentações e materiais de apoio.",
        "Dinamização de sessões de formação.",
        "Desenvolvimento de exercícios práticos.",
        "Adaptação de conteúdos a diferentes públicos.",
      ],
    },
    {
      organization: "ComunicaCom",
      role: "Fundadora e responsável pela ComunicaCom",
      dates: "2021–Presente",
      responsibilities: [
        "Criação e desenvolvimento de um projecto próprio dedicado à comunicação e presença digital de pequenas e médias empresas.",
        "Desenvolvimento de websites em WordPress.",
        "Optimização SEO.",
        "Estratégia de comunicação digital.",
        "UX e optimização de conteúdos.",
        "Email Marketing e redes sociais.",
        "Gestão e acompanhamento de projectos digitais.",
      ],
    },
    {
      organization: "Hotelaria (Marriott Praia D'El Rey e Turim Hotels)",
      role: "Marketing, E-commerce e Revenue Management",
      dates: "Experiência no sector hoteleiro",
      responsibilities: [
        "Experiência profissional em contextos de hotelaria de referência.",
        "Marketing e comunicação.",
        "Comércio electrónico.",
        "Coordenação de actividades de marketing.",
        "Revenue Management.",
        "Comunicação de produtos e serviços turísticos.",
      ],
    },
  ] as ExperienceEntry[],

  // ---------- Projectos ----------
  projects: [
    {
      title: "ComunicaCom",
      category: "Estratégia Digital · Desenvolvimento Web · SEO",
      badge: "Projecto próprio",
      description:
        "Projecto próprio criado em 2021, dedicado ao desenvolvimento da presença digital de pequenas e médias empresas. Inclui planeamento estratégico, desenvolvimento de websites, SEO e comunicação digital.",
      imageUrl: images.project01,
      tags: ["Estratégia Digital", "WordPress", "SEO", "PMEs"],
      projectUrl: "",
      visible: true,
      details: {
        context:
          "Projecto próprio fundado em 2021 com a missão de apoiar pequenas e médias empresas a construir e consolidar uma presença digital profissional e relevante.",
        objectivos:
          "Dotar marcas de canais digitais próprios, estruturar estratégias de visibilidade orgânica e aproximar as empresas do seu público através de conteúdos pertinentes.",
        desafio:
          "Desenvolver soluções robustas, sustentáveis e fáceis de manter para negócios que precisam de resultados práticos com recursos otimizados.",
        strategy:
          "Diagnóstico estratégico do negócio, desenho de websites rápidos e intuitivos em WordPress, SEO on-page, estratégia de conteúdos e acompanhamento contínuo.",
        workDone: [
          "Definição de estratégias digitais integradas e planos de ação.",
          "Desenvolvimento e configuração de websites em WordPress.",
          "Optimização para motores de busca (SEO técnico, semântico e local).",
          "Gestão de campanhas de email marketing e presença em redes sociais.",
          "Monitorização de métricas e aconselhamento estratégico.",
        ],
        tools: [
          "WordPress",
          "Google Search Console",
          "Google Analytics 4",
          "Yoast / RankMath SEO",
          "Email Marketing",
        ],
      },
    },
    {
      title: "Somas e Teorias",
      category: "Desenvolvimento Web · WordPress · UX",
      badge: "Desenvolvimento web",
      description:
        "Projecto de desenvolvimento e implementação de website em WordPress, com trabalho na organização da informação, apresentação dos serviços e configuração de funcionalidades de contacto.",
      imageUrl: images.project02,
      tags: ["WordPress", "UX Design", "Organização de Conteúdos", "Web"],
      projectUrl: "",
      visible: true,
      details: {
        context:
          "Desenvolvimento e implementação de website institucional em WordPress orientado à clareza na transmissão dos serviços prestados e credibilidade institucional.",
        objectivos:
          "Apresentar a oferta de forma estruturada, com navegação limpa e fluida em qualquer dispositivo, facilitando o contacto direto por potenciais clientes.",
        desafio:
          "Organizar conteúdos especializados numa árvore de informação simples e intuitiva de navegar para o utilizador final.",
        strategy:
          "Abordagem centrada no utilizador (UX), com hierarquia visual bem definida, chamadas para ação (CTAs) claras e formulários de contacto de fácil acesso.",
        workDone: [
          "Estruturação e organização de toda a árvore e páginas de conteúdos.",
          "Desenvolvimento do website em WordPress com design responsivo.",
          "Optimização de usabilidade (UX) e desempenho de carregamento.",
          "Configuração de formulários e pontos de conversão.",
        ],
        tools: ["WordPress", "HTML / CSS", "UX/UI Design", "Formulários e Integrações"],
      },
    },
    {
      title: "Tigela Cheia",
      category: "Branding · Identidade Visual · Comunicação",
      badge: "Projecto conceptual",
      description:
        "Desenvolvimento conceptual de uma identidade de marca para uma loja online de alimentação e produtos para animais, incluindo posicionamento, identidade visual e aplicação da marca em diferentes formatos de comunicação.",
      imageUrl: images.project03,
      tags: ["Branding", "Identidade Visual", "E-commerce", "Conceptual"],
      projectUrl: "",
      visible: true,
      details: {
        context:
          "Projecto conceptual de criação integral de marca voltada para o mercado de nutrição e alimentação natural para animais de estimação.",
        objectivos:
          "Construir uma identidade visual moderna, próxima e acolhedora, com forte apelo visual em canais digitais e suportes de packaging.",
        desafio:
          "Destacar a marca num mercado com forte concorrência, transmitindo qualidade, dedicação e transparência através de elementos gráficos coerentes.",
        strategy:
          "Posicionamento centrado no cuidado genuíno com os animais, usando tons amigáveis, ilustração empática e mensagens simples e diretas.",
        workDone: [
          "Definição do conceito da marca, personalidade e tom de comunicação.",
          "Criação do logótipo, paleta cromática e tipografia de suporte.",
          "Desenvolvimento de maquetes de embalagens e aplicações físicas.",
          "Conceção de templates digitais para redes sociais e maquete conceptual de e-commerce.",
        ],
        tools: ["Branding & Identidade", "Design Gráfico", "Prototipagem", "Mockups Digitais"],
      },
    },
    {
      title: "Formação em Marketing Digital",
      category: "Formação · Conteúdos · Estratégia",
      badge: "Projectos de formação",
      description:
        "Desenvolvimento de materiais pedagógicos, apresentações, exercícios práticos e actividades de aprendizagem em diferentes áreas do Marketing Digital, com foco na aplicação dos conhecimentos à realidade empresarial.",
      imageUrl: images.project04,
      tags: ["Formação Prática", "Pedagogia", "Capacitação", "Workshops"],
      projectUrl: "",
      visible: true,
      details: {
        context:
          "Percurso contínuo de dinamização de formação profissional e workshops práticos em Marketing Digital desde 2020.",
        objectivos:
          "Capacitar profissionais, estudantes e pequenos empresários para aplicarem ferramentas e estratégias digitais de forma autónoma e informada.",
        desafio:
          "Desmistificar conceitos técnicos e fornecer aos formandos metodologias diretamente aplicáveis às suas realidades empresariais.",
        strategy:
          "Metodologia ativa e participativa, combinando exposição teórica fundamentada com análise de casos reais e exercícios no computador.",
        workDone: [
          "Desenho e atualização contínua de planos curriculares e módulos formativos.",
          "Elaboração de manuais pedagógicos, apresentações visuais e guiões passo a passo.",
          "Condução de sessões de formação presenciais e em plataformas de e-learning.",
          "Orientação individualizada e feedback prático a exercícios e projetos de formação.",
        ],
        tools: [
          "Plataformas E-Learning",
          "Manuais Pedagógicos",
          "Apresentações Interactivas",
          "Casos Práticos",
        ],
      },
    },
  ] as Project[],

  // ---------- Modelos de colaboração ----------
  collaboration: [
    {
      title: "Marketing e Comunicação",
      description:
        "Posso contribuir para o planeamento, implementação e acompanhamento de estratégias de Marketing Digital, conteúdos e comunicação de marca.",
      points: ["Estratégia digital", "Planeamento de conteúdos", "SEO", "Comunicação de marca"],
      ctaLabel: "Falar comigo",
      ctaUrl: "#contacto",
    },
    {
      title: "Projectos Digitais",
      description:
        "Posso integrar equipas de desenvolvimento e gestão de projectos digitais, contribuindo com experiência em websites, WordPress, UX e optimização da presença online.",
      points: ["WordPress", "Desenvolvimento web", "Experiência do utilizador", "E-commerce"],
      ctaLabel: "Falar comigo",
      ctaUrl: "#contacto",
    },
    {
      title: "Formação e Desenvolvimento",
      description:
        "Posso contribuir para a criação de conteúdos formativos, desenvolvimento de competências digitais e partilha de conhecimento dentro das organizações.",
      points: [
        "Formação profissional",
        "Materiais pedagógicos",
        "Comunicação técnica",
        "Capacitação digital",
      ],
      ctaLabel: "Falar comigo",
      ctaUrl: "#contacto",
    },
  ] as CollaborationModel[],

  // ---------- Testemunhos (apenas reais) ----------
  testimonials: [] as Testimonial[],

  // ---------- Perguntas frequentes ----------
  faqs: [
    {
      question: "Qual é a tua disponibilidade para novas oportunidades?",
      answer:
        "Estou disponível para avaliar propostas de integração profissional a tempo inteiro, colaboração em equipas de projectos ou dinamização de formação especializada.",
    },
    {
      question: "Que áreas de Marketing Digital dominas com maior profundidade?",
      answer:
        "Estratégia digital, comunicação de marca, planeamento e criação de conteúdos, desenvolvimento e gestão de websites em WordPress, optimização SEO e formação profissional.",
    },
    {
      question: "Qual é a tua abordagem ao desenvolvimento de projectos?",
      answer:
        "Começo sempre por compreender o contexto e os desafios do negócio antes de propor acções. Privilegio a clareza, a consistência estratégica e o foco em resultados mensuráveis.",
    },
    {
      question: "Desenvolves formação personalizada para empresas?",
      answer:
        "Sim. Os conteúdos e exercícios são concebidos à medida das necessidades da organização e do nível dos colaboradores, tanto em formato presencial como online.",
    },
    {
      question: "Como posso entrar em contacto para agendarmos uma conversa?",
      answer:
        "Podes utilizar o formulário de contacto desta página ou enviar directamente uma mensagem para sandrabaiana.form@gmail.com.",
    },
  ] as Faq[],

  // ---------- Outras ligações ----------
  links: {
    privacyPolicyUrl: "",
    cookiesPolicyUrl: "",
    legalNoticeUrl: "",
    cvUrl: "",
    portfolioUrl: "",
  },

  marquee: [
    "Marketing Digital",
    "Estratégia",
    "Comunicação",
    "SEO",
    "Websites",
    "E-commerce",
    "Conteúdos",
    "Formação",
    "WordPress",
  ],
};

export type SiteConfig = typeof siteConfig;
