import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { heroContents, services } from '@/data/mockData';

export function Servicos() {
  const hero = heroContents.servicos;

  return (
    <>
      <HeroSection
        title={hero.title}
        highlight={hero.highlight}
        subtitle={hero.subtitle}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        backgroundImage={hero.backgroundImage}
        compact
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Todos os nossos <span className="text-neon-gradient">serviços</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Oferecemos soluções completas para eventos de qualquer porte, com equipamentos de
              última geração e equipe técnica especializada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
