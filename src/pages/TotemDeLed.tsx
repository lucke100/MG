import { ServicePage } from './ServicePage';
import { heroContents } from '@/data/mockData';

export function TotemDeLed() {
  return (
    <ServicePage
      hero={heroContents.totemDeLed}
      sectionTitle="Totens de"
      sectionHighlight="LED"
      description={[
        'Os totens de LED da MG Locações são a solução perfeita para sinalização, publicidade e branding em eventos corporativos, feiras, convenções e festas.',
        'Com design elegante e tela de alta resolução, nossos totens exibem conteúdo dinâmico que captura a atenção do público. São portáteis, fáceis de posicionar e proporcionam alto impacto visual.',
        'Oferecemos totens com gerenciamento de conteúdo em tempo real e suporte técnico durante todo o evento.',
      ]}
      features={[
        'Tela LED de alta resolução',
        'Design portátil com rodízios',
        'Gerenciamento de conteúdo em tempo real',
        'Medidas em 1,94cm x 64cm',
        'Branding personalizado',
        'Suporte técnico durante o evento',
      ]}
      images={[
        '/portfolio/totem-led/WhatsApp_Image_2026-03-17_at_19.53.12.jpeg',
      ]}
      videos={[
        '/portfolio/totem-led/WhatsApp_Video_2026-03-17_at_20.28.23.mp4',
      ]}
      ctaTitle="Quer totens de LED no seu evento?"
    />
  );
}
