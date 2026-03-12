import { ServicePage } from './ServicePage';
import { heroContents } from '@/data/mockData';

export function PainelDeLed() {
  return (
    <ServicePage
      hero={heroContents.painelDeLed}
      sectionTitle="Imersão"
      sectionHighlight="Visual Total"
      description={[
        'Nossos painéis de LED de alta resolução proporcionam uma experiência visual imersiva para qualquer tipo de evento.',
        'Utilizamos tecnologia indoor e outdoor com módulos de alta definição, garantindo imagens nítidas mesmo em grandes distâncias. Ideal para cenografia, transmissão ao vivo, apresentações corporativas e shows.',
        'Trabalhamos com diferentes pitches (P2.5, P3.9, P4.8) para se adequar ao tipo de evento e distância de visualização do público.',
      ]}
      features={[
        'Painéis indoor e outdoor',
        'Alta resolução (P2.5 a P4.8)',
        'Montagem modular em qualquer formato',
        'Processador de vídeo profissional incluso',
        'Técnico operador durante o evento',
        'Conteúdo personalizado sob demanda',
      ]}
      images={[
        '/portfolio/painel-led-evento.jpg',
        '/portfolio/palco-led-mg.jpg',
        '/portfolio/palco-mg-locacoes.jpg',
      ]}
      ctaTitle="Quer impactar com painéis de LED?"
    />
  );
}
