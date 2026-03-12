import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { CTASection } from '@/components/CTASection';
import { useInView } from '@/hooks/useInView';
import { heroContents, services, portfolioItems, stats, testimonials } from '@/data/mockData';

export function Home() {
  const hero = heroContents.home;
  const [statsRef, statsInView] = useInView(0.1);
  const [testimonialsRef, testimonialsInView] = useInView(0.1);

  return (
    <>
      {/* Hero */}
      <HeroSection
        title={hero.title}
        highlight={hero.highlight}
        subtitle={hero.subtitle}
        ctaText={hero.ctaText}
        ctaLink={hero.ctaLink}
        backgroundImage={hero.backgroundImage}
        showSecondary
      />

      {/* Stats */}
      <section ref={statsRef} className="py-16 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${statsInView ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-black text-neon-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Nossos <span className="text-neon-gradient">Serviços</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Soluções completas em locação de equipamentos e estruturas para eventos de todos os portes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Nosso <span className="text-neon-gradient">Portfólio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Confira alguns dos eventos que já realizamos e a qualidade dos nossos serviços.
          </p>
        </div>
        <PortfolioGallery items={portfolioItems} />
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              O que nossos <span className="text-neon-gradient">clientes</span> dizem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`p-6 rounded-xl bg-card/50 border border-border/50 ${
                  testimonialsInView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-neon">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
