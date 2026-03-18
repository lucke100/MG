import { ServicePage } from './ServicePage';
import { heroContents } from '@/data/mockData';

export function Tendas() {
  return (
    <ServicePage
      hero={heroContents.tendas}
      sectionTitle="Tendas"
      sectionHighlight="Profissionais"
      description={[
        'As tendas da MG Locações são a solução ideal para eventos ao ar livre, oferecendo proteção, conforto e elegância em qualquer ocasião.',
        'Trabalhamos com modelos de alta qualidade, resistentes a intempéries e com acabamento premium. Ideais para feiras, casamentos, festas corporativas e eventos ao ar livre de qualquer porte.',
        'Oferecemos montagem e desmontagem completa, com equipe técnica especializada e estrutura segura que segue todas as normas de segurança.',
      ]}
      features={[
        'Tendas para eventos ao ar livre',
        'Modelos resistentes a chuva e vento',
        'Montagem e desmontagem profissional',
        'Diferentes tamanhos disponíveis',
        'Acabamento elegante e premium',
        'Equipe técnica especializada',
      ]}
      images={[
        '/portfolio/tenda/WhatsApp_Image_2026-03-17_at_14.26.13.jpeg',
        '/portfolio/tenda/WhatsApp_Image_2026-03-17_at_19.53.13.jpeg',
        '/portfolio/tenda/WhatsApp_Image_2026-03-17_at_19.53.26.jpeg',
      ]}
      ctaTitle="Precisa de uma tenda para seu evento?"
    />
  );
}
