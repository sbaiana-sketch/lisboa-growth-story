/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DO WEBSITE
 * ============================================================
 *  Este é o ÚNICO ficheiro que precisa de editar para
 *  personalizar textos, imagens, contactos e ligações.
 *
 *  • Campos vazios ("") são ocultados automaticamente no site.
 *  • URLs de imagens podem ser links directos (.jpg, .png, .webp...)
 *    ou links de partilha do Google Drive (convertidos automaticamente).
 *  • Exemplo ilustrativo (não usar):
 *    "https://dominio-da-minha-cloud.pt/pasta/fotografia.png"
 * ============================================================
 */

// ---------- Tipos ----------
export type ImageKey =
  | "logo" | "hero" | "signature"
  | "project01" | "project02" | "project03" | "project04"
  | "testimonial01" | "blog01" | "blog02" | "blog03";

export interface Project {
  title: string; category: string; description: string;
  imageUrl: string; tags: string[]; projectUrl: string; visible: boolean;
}
export interface BlogPost {
  title: string; category: string; date: string; readingTime: string;
  imageUrl: string; articleUrl: string; visible: boolean;
}
export interface Testimonial {
  name: string; role: string; organization: string; text: string;
  imageUrl: string; visible: boolean;
}
export interface EducationEntry {
  institution: string; qualification: string; specialization: string; dates: string;
}
export interface ExperienceEntry {
  organization: string; role: string; responsibilities: string; dates: string;
}
export interface Indicator { value: string; label: string; visible: boolean }
export interface Faq { question: string; answer: string }
export interface CollaborationModel { title: string; description: string; points: string[]; ctaLabel: string; ctaUrl: string }

// ---------- Imagens (fonte única de verdade) ----------
export const images: Record<ImageKey, string> = {
  logo: "",
  hero: "https://lh3.googleusercontent.com/d/1z1m-8Se2e-qBsINBOnm7y5rdeUYcx_FL",
  signature: "",
  project01: "",
  project02: "",
  project03: "",
  project04: "",
  testimonial01: "",
  blog01: "",
  blog02: "",
  blog03: "",
};

export const siteConfig = {
  // ---------- Identidade ----------
  name: "",
  professionalTitle: "Marketing Digital, Formação e Consultoria",
  heroTag: "MARKETING DIGITAL",
  heroTitle: "Marketing Digital com estratégia e sem complicações.",
  /** Palavras do título destacadas a roxo */
  heroHighlight: ["estratégia"],
  heroSubtitle:
    "Ajudo empresas a melhorar a sua presença digital e partilho conhecimento através de formação prática, estratégia e comunicação.",
  heroSubtitleHighlight: ["presença digital", "formação prática"],
  aboutText: "",
  logoUrl: images.logo,
  heroImageUrl: images.hero,
  signatureImageUrl: images.signature,
  /** Ex.: "10" — vazio oculta o número */
  yearsExperience: "",
  location: "",
  footerDescription:
    "Marketing Digital, formação e consultoria para negócios que querem crescer com estratégia.",

  images,

  // ---------- Contactos ----------
  contact: {
    email: "",
    phone: "",
    /** Formato internacional, ex.: "+351 912 345 678" */
    whatsapp: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    tiktok: "",
    youtube: "",
    website: "",
    location: "",
    contactFormEnabled: true,
    /**
     * Endpoint de um serviço de formulários (ex.: Formspree
     * "https://formspree.io/f/xxxx", Getform, Basin). Recebe POST JSON.
     * Vazio = o formulário mostra que o envio ainda não está activo.
     */
    formEndpoint: "",
  },

  // ---------- Sobre: indicadores opcionais ----------
  aboutIndicators: [
    { value: "", label: "Projectos realizados", visible: false },
    { value: "", label: "Formandos", visible: false },
  ] as Indicator[],

  // ---------- Formação e experiência ----------
  education: [] as EducationEntry[],
  experience: [] as ExperienceEntry[],

  // ---------- Projectos ----------
  projects: [
    { title: "", category: "", description: "", imageUrl: images.project01, tags: [], projectUrl: "", visible: true },
    { title: "", category: "", description: "", imageUrl: images.project02, tags: [], projectUrl: "", visible: true },
    { title: "", category: "", description: "", imageUrl: images.project03, tags: [], projectUrl: "", visible: true },
    { title: "", category: "", description: "", imageUrl: images.project04, tags: [], projectUrl: "", visible: true },
  ] as Project[],

  // ---------- Modelos de colaboração (sem preços) ----------
  collaboration: [
    {
      title: "Consultoria",
      description: "Análise da presença digital e definição de uma estratégia clara e exequível.",
      points: ["Diagnóstico digital", "Plano de acção", "Acompanhamento"],
      ctaLabel: "Pedir informação", ctaUrl: "",
    },
    {
      title: "Projectos digitais",
      description: "Implementação de websites, campanhas e comunicação digital do início ao fim.",
      points: ["Websites e SEO", "Redes sociais", "Campanhas digitais"],
      ctaLabel: "Falar sobre um projecto", ctaUrl: "",
    },
    {
      title: "Formação",
      description: "Sessões práticas para equipas e profissionais, adaptadas ao vosso nível.",
      points: ["Presencial ou online", "Conteúdos práticos", "Grupos ou individual"],
      ctaLabel: "Pedir formação", ctaUrl: "",
    },
  ] as CollaborationModel[],

  // ---------- Testemunhos (apenas reais) ----------
  testimonials: [
    { name: "", role: "", organization: "", text: "", imageUrl: images.testimonial01, visible: false },
  ] as Testimonial[],

  // ---------- Blog ----------
  blog: [
    { title: "", category: "", date: "", readingTime: "", imageUrl: images.blog01, articleUrl: "", visible: true },
    { title: "", category: "", date: "", readingTime: "", imageUrl: images.blog02, articleUrl: "", visible: true },
    { title: "", category: "", date: "", readingTime: "", imageUrl: images.blog03, articleUrl: "", visible: true },
  ] as BlogPost[],

  // ---------- Perguntas frequentes ----------
  faqs: [
    { question: "Com que tipos de negócios trabalhas?", answer: "Trabalho com negócios de diferentes dimensões e sectores. Entra em contacto para analisarmos o teu caso." },
    { question: "Que áreas de Marketing Digital abordas?", answer: "Estratégia digital, comunicação, redes sociais, websites e SEO, bem como formação nestas áreas." },
    { question: "Disponibilizas formação presencial e online?", answer: "Sim, a formação pode ser adaptada ao formato mais adequado. Fala comigo para saberes mais." },
    { question: "Como funciona o processo de contratação?", answer: "Começamos por uma conversa para perceber as tuas necessidades e, a partir daí, defino uma proposta ajustada." },
    { question: "Como posso pedir uma proposta?", answer: "Utiliza o formulário de contacto ou os contactos disponíveis nesta página." },
  ] as Faq[],

  // ---------- Outras ligações ----------
  links: {
    privacyPolicyUrl: "",
    cookiesPolicyUrl: "",
    legalNoticeUrl: "",
    cvUrl: "",
    portfolioUrl: "",
  },

  marquee: ["Marketing Digital", "Formação", "Estratégia", "Websites", "SEO", "Comunicação"],
};

export type SiteConfig = typeof siteConfig;
