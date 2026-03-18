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
        'Trabalhamos com diferentes pitches para se adequar ao tipo de evento e distância de visualização do público.',
      ]}
      features={[
        'Painéis indoor e outdoor',
        'Painéis de LED de P2.9, P3.9',
        'Montagem modular em qualquer formato',
        'Processador de vídeo profissional incluso',
        'Técnico operador durante o evento',
        'Conteúdo personalizado sob demanda',
      ]}
      images={[
        '/portfolio/painel-led/WhatsApp_Image_2026-03-17_at_14.26.12.jpeg',
        '/portfolio/painel-led/WhatsApp_Image_2026-03-17_at_14.26.12_copy.jpeg',
        '/portfolio/painel-led/WhatsApp_Image_2026-03-17_at_19.58.57.jpeg',
      ]}
      videos={[
        '/portfolio/painel-led/WhatsApp_Video_2026-03-17_at_20.06.49.mp4',
        '/portfolio/painel-led/WhatsApp_Video_2026-03-17_at_20.27.40.mp4',
      ]}
      ctaTitle="Quer impactar com painéis de LED?"
    />
  );
}
