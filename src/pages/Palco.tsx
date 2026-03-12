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
        'Trabalhamos com módulos de 2m x 1m em diferentes alturas (60cm, 80cm, 1m e 1,40m), permitindo configurações personalizadas de acordo com a necessidade do evento.',
        'Todos os nossos palcos possuem estrutura reforçada em aço, piso antiderrapante e acabamento profissional com saia e carpete.',
      ]}
      features={[
        'Módulos modulares 2m x 1m',
        'Alturas: 60cm, 80cm, 1m e 1,40m',
        'Piso antiderrapante de alta resistência',
        'Acabamento com saia e carpete',
        'Escadas de acesso com corrimão',
        'Montagem rápida e segura',
      ]}
      images={[
        '/portfolio/palco-mg-locacoes.jpg',
        '/portfolio/palco-led-mg.jpg',
        '/portfolio/montagem-trelica.jpg',
      ]}
      ctaTitle="Precisa de um palco para seu evento?"
    />
  );
}
