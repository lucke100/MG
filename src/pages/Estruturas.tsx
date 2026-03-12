import { HeroSection } from '@/components/HeroSection';
import { CTASection } from '@/components/CTASection';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { useInView } from '@/hooks/useInView';
import { heroContents, estruturaSpecs, portfolioItems } from '@/data/mockData';
import { CheckCircle } from 'lucide-react';

export function Estruturas() {
  const hero = heroContents.estruturas;
  const [specsRef, specsInView] = useInView(0.1);
  const structureItems = portfolioItems.filter((p) => p.category === 'Estruturas');

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

      <section ref={specsRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Nossas <span className="text-neon-gradient">Estruturas</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Box truss em alumínio de alta qualidade, disponíveis nos perfis Q15, Q25 e Q30 para atender qualquer necessidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(estruturaSpecs).map((spec, i) => (
              <div
                key={spec.name}
                className={`p-6 rounded-xl bg-card/50 border border-border/50 hover:border-neon/30 transition-all ${
                  specsInView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {'image' in spec && spec.image && (
                  <div className="rounded-lg overflow-hidden mb-4 h-40">
                    {spec.image.endsWith('.mp4') ? (
                      <video src={spec.image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    ) : (
                      <img src={spec.image} alt={spec.name} className="w-full h-full object-cover" loading="lazy" />
                    )}
                  </div>
                )}
                <h3 className="text-2xl font-black text-neon mb-2">{spec.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{spec.description}</p>
                <ul className="space-y-2">
                  {spec.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="h-4 w-4 text-neon shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Galeria de <span className="text-neon-gradient">Estruturas</span>
          </h2>
        </div>
        <PortfolioGallery items={structureItems} />
      </section>

      <CTASection title="Precisa de estruturas para seu evento?" />
    </>
  );
}
