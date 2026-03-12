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
        'Oferecemos totens em diferentes tamanhos e formatos, com gerenciamento de conteúdo em tempo real e suporte técnico durante todo o evento.',
      ]}
      features={[
        'Tela LED de alta resolução',
        'Design portátil com rodízios',
        'Gerenciamento de conteúdo em tempo real',
        'Diferentes tamanhos disponíveis',
        'Branding personalizado',
        'Suporte técnico durante o evento',
      ]}
      images={[
        '/portfolio/totem-led-mg.jpg',
        '/portfolio/palco-mg-locacoes.jpg',
        '/portfolio/painel-led-evento.jpg',
      ]}
      ctaTitle="Quer totens de LED no seu evento?"
    />
  );
}
