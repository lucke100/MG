import { ServicePage } from './ServicePage';
import { heroContents } from '@/data/mockData';

export function Palco() {
  return (
    <ServicePage
      hero={heroContents.palco}
      sectionTitle="Palcos"
      sectionHighlight="Profissionais"
      description={[
        'Os palcos da MG Locações são projetados para oferecer segurança, versatilidade e visual impecável para qualquer tipo de evento.',
        'Trabalhamos com módulos de 2m x 1m em diferentes alturas (20cm, 40cm, 60cm, 80cm, 1m), permitindo configurações personalizadas de acordo com a necessidade do evento.',
        'Todos os nossos palcos possuem estrutura reforçada em aço, piso antiderrapante e acabamento profissional com saia e carpete.',
      ]}
      features={[
        'Módulos modulares 2m x 1m',
        'Alturas: 20cm, 40cm, 60cm, 80cm, 1m',
        'Piso antiderrapante de alta resistência',
        'Acabamento com saia e carpete',
        'Escadas de acesso com corrimão',
        'Montagem rápida e segura',
      ]}
      images={[
        '/portfolio/palco/WhatsApp_Image_2026-03-17_at_14.26.12_copy.jpeg',
        '/portfolio/palco/WhatsApp_Image_2026-03-17_at_20.11.12.jpeg',
        '/portfolio/palco/WhatsApp_Image_2026-03-17_at_20.27.41.jpeg',
      ]}
      videos={[
        '/portfolio/palco/WhatsApp_Video_2026-03-17_at_20.11.12.mp4',
        '/portfolio/palco/WhatsApp_Video_2026-03-17_at_20.28.22.mp4',
      ]}
      ctaTitle="Precisa de um palco para seu evento?"
    />
  );
}
