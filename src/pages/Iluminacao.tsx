import { ServicePage } from './ServicePage';
import { heroContents } from '@/data/mockData';

export function Iluminacao() {
  return (
    <ServicePage
      hero={heroContents.iluminacao}
      sectionTitle="Projetos de"
      sectionHighlight="Iluminação"
      description={[
        'A iluminação é capaz de transformar completamente a atmosfera de um evento. Na MG Locações, criamos projetos de iluminação cênica, arquitetural e decorativa que elevam qualquer ambiente.',
        'Nosso acervo inclui moving heads, wash, beam, strobo, par LEDs e efeitos especiais. Todos os equipamentos são de marcas renomadas e passam por manutenção constante.',
        'Contamos com técnicos de iluminação (LDs) experientes que criam desenhos de luz personalizados para cada tipo de evento, do mais intimista ao mais grandioso.',
      ]}
      features={[
        'Moving heads Beam, Spot e Wash',
        'LED RGBWA-UV e efeitos especiais',
        'Mesas de luz profissionais (GrandMA, Avolites)',
        'Máquina de fumaça e haze',
        'Projeto luminotécnico personalizado',
        'LD (Lighting Designer) durante o evento',
      ]}
      images={[
        '/portfolio/iluminacao-profissional.jpg',
        '/portfolio/palco-led-mg.jpg',
        '/portfolio/palco-mg-locacoes.jpg',
      ]}
      videos={[
        '/portfolio/iluminacao/WhatsApp_Video_2026-03-17_at_20.27.40.mp4',
        '/portfolio/iluminacao/WhatsApp_Video_2026-03-17_at_20.28.23.mp4',
      ]}
      ctaTitle="Quer uma iluminação impactante?"
    />
  );
}
