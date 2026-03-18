export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly children?: ReadonlyArray<NavLink>;
}

export interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly href: string;
  readonly icon: string;
}

export interface PortfolioItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly image: string;
}

export interface CompanyInfo {
  readonly phone: string;
  readonly whatsapp: string;
  readonly email: string;
  readonly address: string;
  readonly instagram: string;
  readonly facebook: string;
  readonly youtube: string;
}

export interface HeroContent {
  readonly title: string;
  readonly highlight: string;
  readonly subtitle: string;
  readonly ctaText: string;
  readonly ctaLink: string;
  readonly backgroundImage?: string;
}

export const navigationLinks: ReadonlyArray<NavLink> = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Estruturas Q15, Q25, Q30", href: "/estruturas" },
      { label: "Painel de LED", href: "/painel-de-led" },
      { label: "Iluminação", href: "/iluminacao" },
      { label: "Palco", href: "/palco" },
      { label: "Totem de LED", href: "/totem-de-led" },
      { label: "Tendas", href: "/tendas" },
    ],
  },
  { label: "Contato", href: "/contato" },
];

export const services: ReadonlyArray<ServiceItem> = [
  {
    id: "estruturas",
    title: "Estruturas Q15, Q25 e Q30",
    description: "Estruturas metálicas de alta resistência para eventos de todos os portes. Box truss em alumínio com opções Q15, Q25 e Q30 para palcos, stands e cenografias.",
    image: "/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_20.28.22.jpeg",
    href: "/estruturas",
    icon: "Grid3x3",
  },
  {
    id: "painel-led",
    title: "Painel de LED",
    description: "Painéis de LED de alta resolução para projeção de conteúdo, cenografia digital e imersão visual completa em eventos corporativos e shows.",
    image: "/portfolio/painel-led/WhatsApp_Image_2026-03-18_at_14.13.48.jpeg",
    href: "/painel-de-led",
    icon: "Monitor",
  },
  {
    id: "iluminacao",
    title: "Iluminação Profissional",
    description: "Projetos de iluminação cênica, arquitetural e decorativa. Moving heads, wash, beam, strobo e efeitos especiais para criar ambientações únicas.",
    image: "/portfolio/iluminacao-profissional.jpg",
    href: "/iluminacao",
    icon: "Lightbulb",
  },
  {
    id: "palco",
    title: "Palco",
    description: "Palcos modulares com estrutura reforçada, pisos de alta resistência e acabamento premium. Montagem rápida e segura para qualquer tipo de evento.",
    image: "/portfolio/palco/WhatsApp_Image_2026-03-17_at_14.26.12_copy.jpeg",
    href: "/palco",
    icon: "LayoutDashboard",
  },
  {
    id: "totem-led",
    title: "Totem de LED",
    description: "Totens de LED portáteis para sinalização, publicidade e branding em eventos. Alta visibilidade e conteúdo dinâmico para impactar seu público.",
    image: "/portfolio/totem-led/WhatsApp_Image_2026-03-17_at_19.53.12.jpeg",
    href: "/totem-de-led",
    icon: "Smartphone",
  },
  {
    id: "tendas",
    title: "Tendas",
    description: "Tendas de alta qualidade para eventos ao ar livre, feiras, casamentos e festas. Proteção e elegância para qualquer tipo de celebração.",
    image: "/portfolio/tenda/WhatsApp_Image_2026-03-17_at_14.26.13.jpeg",
    href: "/tendas",
    icon: "Home",
  },
];

export const portfolioItems: ReadonlyArray<PortfolioItem> = [
  {
    id: "17",
    title: "Montagem de Estruturas",
    category: "Estruturas",
    image: "/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_19.55.37.jpeg",
  },
  {
    id: "18",
    title: "Grid de Alumínio",
    category: "Estruturas",
    image: "/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_14.26.12.jpeg",
  },
  { id: "2", title: "Palco com Painel LED", category: "Painel LED", image: "/portfolio/painel-led/WhatsApp_Image_2026-03-17_at_14.26.12.jpeg" },
  { id: "3", title: "Evento com Painel de LED Imersivo", category: "Painel LED", image: "/portfolio/painel-led/WhatsApp_Image_2026-03-17_at_19.58.57.jpeg" },
  { id: "4", title: "Palco MG Locações", category: "Palco", image: "/portfolio/palco/WhatsApp_Image_2026-03-17_at_20.11.12.jpeg" },
  { id: "5", title: "Iluminação Profissional para Evento", category: "Iluminação", image: "/portfolio/iluminacao-profissional.jpg" },
  { id: "6", title: "Totens de LED MG", category: "Totem LED", image: "/portfolio/totem-led/WhatsApp_Image_2026-03-17_at_19.53.12.jpeg" },
  { id: "7", title: "Estrutura Montagem Profissional", category: "Estruturas", image: "/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_20.28.22.jpeg" },
  { id: "8", title: "Palco para Show", category: "Palco", image: "/portfolio/palco/WhatsApp_Image_2026-03-17_at_20.27.41.jpeg" },
  { id: "9", title: "Tenda para Evento", category: "Tendas", image: "/portfolio/tenda/WhatsApp_Image_2026-03-17_at_19.53.13.jpeg" },
  { id: "10", title: "Painel LED Corporativo", category: "Painel LED", image: "/portfolio/painel-led/WhatsApp_Image_2026-03-17_at_14.26.13.jpeg" },
  { id: "11", title: "Estrutura q30 montada", category: "Estruturas", image: "/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_19.55.37.jpeg" },
  { id: "12", title: "Tenda Elegante", category: "Tendas", image: "/portfolio/tenda/WhatsApp_Image_2026-03-17_at_19.53.26.jpeg" },
];

export const companyInfo: CompanyInfo = {
  phone: "(11) 3858-0696",
  whatsapp: "5511938580696",
  email: "mglocacao@hotmail.com",
  address: "Rua Juca Floriano 125, Casa Verde Média",
  instagram: "https://instagram.com/mglocacoes",
  facebook: "https://facebook.com/mglocacoes",
  youtube: "https://youtube.com/@mglocacoes",
};

export const heroContents: Record<string, HeroContent> = {
  home: {
    title: "SOLUÇÕES COMPLETAS PARA",
    highlight: "EVENTOS DE TODOS OS PORTES",
    subtitle: "Trabalhamos com locação de equipamentos e estruturas para entregar performance, praticidade e impacto em cada projeto.",
    ctaText: "Solicite um Orçamento",
    ctaLink: "/contato",
    backgroundImage: "/portfolio/palco-mg-locacoes.jpg",
  },
  sobre: {
    title: "QUEM SOMOS",
    highlight: "MG LOCAÇÕES",
    subtitle: "Há anos atuando no mercado de eventos, entregamos soluções completas em locação de equipamentos audiovisuais e estruturas para eventos.",
    ctaText: "Conheça Nossos Serviços",
    ctaLink: "/servicos",
    backgroundImage: "/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_14.26.12.jpeg",
  },
  servicos: {
    title: "NOSSOS",
    highlight: "SERVIÇOS",
    subtitle: "Soluções completas em estruturas, iluminação, painéis de LED e muito mais para transformar seu evento em uma experiência inesquecível.",
    ctaText: "Solicite um Orçamento",
    ctaLink: "/contato",
    backgroundImage: "/portfolio/painel-led/WhatsApp_Image_2026-03-17_at_14.26.12.jpeg",
  },
  contato: {
    title: "ENTRE EM",
    highlight: "CONTATO",
    subtitle: "Estamos prontos para transformar seu próximo evento. Solicite um orçamento sem compromisso.",
    ctaText: "WhatsApp",
    ctaLink: "https://wa.me/5511938580696",
    backgroundImage: "/portfolio/palco/WhatsApp_Image_2026-03-17_at_14.26.12_copy.jpeg",
  },
  estruturas: {
    title: "ESTRUTURAS",
    highlight: "Q15, Q25 E Q30",
    subtitle: "Box truss em alumínio — estruturas de alta resistência, modulares e versáteis para eventos de qualquer porte.",
    ctaText: "Orçamento de Estruturas",
    ctaLink: "/contato",
    backgroundImage: "/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_20.28.22.jpeg",
  },
  estrutura: {
    title: "ESTRUTURA",
    highlight: "COMPLETA",
    subtitle: "Soluções estruturais completas: grid, torres, portais e cenografia personalizada para seu evento.",
    ctaText: "Solicite um Orçamento",
    ctaLink: "/contato",
    backgroundImage: "/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_19.55.37.jpeg",
  },
  painelDeLed: {
    title: "PAINEL DE",
    highlight: "LED",
    subtitle: "Painéis de LED de alta resolução para projeção de conteúdo, cenografia digital e imersão visual. Ofereça uma experiência tecnológica completa.",
    ctaText: "Orçamento de Painéis",
    ctaLink: "/contato",
    backgroundImage: "/portfolio/painel-led/WhatsApp_Image_2026-03-17_at_19.58.57.jpeg",
  },
  iluminacao: {
    title: "ILUMINAÇÃO",
    highlight: "PROFISSIONAL",
    subtitle: "Projetos de iluminação cênica que transformam ambientes. Moving heads, wash, beam e efeitos especiais para criar cenografias impactantes.",
    ctaText: "Orçamento de Iluminação",
    ctaLink: "/contato",
    backgroundImage: "/portfolio/iluminacao-profissional.jpg",
  },
  palco: {
    title: "PALCO",
    highlight: "PROFISSIONAL",
    subtitle: "Palcos modulares de alta resistência com acabamento premium. Estrutura segura e montagem ágil para shows, eventos corporativos e festivais.",
    ctaText: "Orçamento de Palcos",
    ctaLink: "/contato",
    backgroundImage: "/portfolio/palco/WhatsApp_Image_2026-03-17_at_20.11.12.jpeg",
  },
  totemDeLed: {
    title: "TOTEM DE",
    highlight: "LED",
    subtitle: "Totens de LED portáteis para sinalização, publicidade e branding em eventos. Alta visibilidade e conteúdo dinâmico.",
    ctaText: "Orçamento de Totens",
    ctaLink: "/contato",
    backgroundImage: "/portfolio/totem-led/WhatsApp_Image_2026-03-17_at_19.53.12.jpeg",
  },
  tendas: {
    title: "TENDAS",
    highlight: "PROFISSIONAIS",
    subtitle: "Tendas de alta qualidade para eventos ao ar livre. Proteção, conforto e elegância para feiras, casamentos, festas e eventos corporativos.",
    ctaText: "Orçamento de Tendas",
    ctaLink: "/contato",
    backgroundImage: "/portfolio/tenda/WhatsApp_Image_2026-03-17_at_14.26.13.jpeg",
  },
};

export const stats = [
  { value: "500+", label: "Eventos Realizados" },
  { value: "15+", label: "Anos de Experiência" },
  { value: "100%", label: "Clientes Satisfeitos" },
  { value: "50+", label: "Equipamentos" },
];

export const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor de Eventos - Corp Solutions",
    text: "A MG Locações superou todas as expectativas. A estrutura foi impecável e a iluminação transformou completamente o ambiente do nosso evento corporativo.",
  },
  {
    name: "Ana Paula Santos",
    role: "Produtora - Festival Music BR",
    text: "Profissionalismo do início ao fim. O painel de LED ficou incrível e a equipe de montagem foi extremamente competente e pontual.",
  },
  {
    name: "Roberto Almeida",
    role: "CEO - Kazas Empreendimentos",
    text: "Trabalhamos com a MG em vários eventos e a qualidade sempre se mantém excelente. Recomendo para qualquer evento de grande porte.",
  },
];

export const estruturaSpecs = {
  Q15: {
    name: "Q15",
    description: "Box truss leve ideal para decorações, feiras e eventos de pequeno a médio porte.",
    specs: ["Perfil: 150mm x 150mm", "Material: Alumínio", "Carga: até 100kg/m", "Comprimento: até 4m por módulo"],
    image: "/portfolio/Q15.mp4",
  },
  Q25: {
    name: "Q25",
    description: "Estrutura intermediária versátil para palcos, stands e cenografias com excelente relação custo-benefício.",
    specs: ["Perfil: 250mm x 250mm", "Material: Alumínio", "Carga: até 250kg/m", "Comprimento: até 4m por módulo"],
    image: "/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_14.26.12_copy_2.jpeg", // formerly Q30
  },
  Q30: {
    name: "Q30",
    description: "Box truss de alta capacidade para grandes estruturas, grinds de iluminação e coberturas de palco.",
    specs: ["Perfil: 300mm x 300mm", "Material: Alumínio", "Carga: até 500kg/m", "Comprimento: até 4m por módulo"],
    image: "/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_19.55.37.jpeg", // requested image
  },
};
export const whatsappNumber = companyInfo.whatsapp;
export const defaultWhatsappMessage = "Olá, gostaria de solicitar um orçamento diretamente pelo site!";
