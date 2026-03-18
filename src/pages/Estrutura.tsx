import { ServicePage } from './ServicePage';
import { heroContents } from '@/data/mockData';

export function Estrutura() {
  return (
    <ServicePage
      hero={heroContents.estrutura}
      sectionTitle="Estrutura"
      sectionHighlight="Completa"
      description={[
        'A MG Locações oferece soluções completas de estrutura para eventos com grid, torres, portais e cenografia metalica.',
        'Nossos equipamentos incluem box truss em alumínio nos perfis Q15, Q25 e Q30, com capacidade para suportar iluminação, painéis de LED e cobertura.',
        'Realizamos todo o projeto estrutural, montagem e desmontagem com equipe técnica especializada e dentro das normas de segurança.',
      ]}
      features={[
        'Grid de iluminação em alumínio',
        'Torres de sustentação Q25 e Q30',
        'Portais para entradas e saídas',
        'Cenografia metalica personalizada',
        'Montagem e desmontagem inclusa',
        'Laudo técnico de engenharia',
      ]}
      images={[
        '/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_19.55.37.jpeg',
        '/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_14.26.12.jpeg',
        '/portfolio/estruturas/WhatsApp_Image_2026-03-17_at_20.28.22.jpeg',
      ]}
      videos={[
        '/portfolio/estruturas/WhatsApp_Video_2026-03-17_at_20.28.23.mp4',
      ]}
      ctaTitle="Precisa de uma estrutura completa?"
    />
  );
}
