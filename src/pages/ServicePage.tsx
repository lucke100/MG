import { Link } from 'react-router-dom';
import { HeroSection } from '@/components/HeroSection';
import { CTASection } from '@/components/CTASection';
import { useInView } from '@/hooks/useInView';
import type { HeroContent } from '@/data/mockData';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServicePageProps {
  readonly hero: HeroContent;
  readonly sectionTitle: string;
  readonly sectionHighlight: string;
  readonly description: ReadonlyArray<string>;
  readonly features: ReadonlyArray<string>;
  readonly images: ReadonlyArray<string>;
  readonly videos?: ReadonlyArray<string>;
  readonly ctaTitle?: string;
}

export function ServicePage({
  hero,
  sectionTitle,
  sectionHighlight,
  description,
  features,
  images,
  videos,
  ctaTitle,
}: ServicePageProps) {
  const [contentRef, contentInView] = useInView(0.1);
  const [galleryRef, galleryInView] = useInView(0.1);

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

      {/* Content */}
      <section ref={contentRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className={`grid lg:grid-cols-2 gap-12 items-start ${contentInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                {sectionTitle} <span className="text-neon-gradient">{sectionHighlight}</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/50"
                  >
                    <CheckCircle className="h-5 w-5 text-neon shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="mt-8 bg-neon-gradient text-slate-950 font-bold hover:brightness-110 shadow-neon-sm border-0 rounded-xl"
              >
                <Link to="/contato">
                  Solicitar Orçamento <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Gallery */}
            <div ref={galleryRef} className="grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <div
                  key={`img-${i}`}
                  className={`relative group overflow-hidden rounded-xl border border-border/50 ${
                    i === 0 ? 'col-span-2' : ''
                  } ${galleryInView ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <img
                    src={img}
                    alt=""
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      i === 0 ? 'h-64' : 'h-48'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
              {videos && videos.map((vid, i) => (
                <div
                  key={`vid-${i}`}
                  className={`relative group overflow-hidden rounded-xl border border-border/50 ${
                    galleryInView ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(images.length + i) * 100}ms` }}
                >
                  <video
                    src={vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title={ctaTitle} />
    </>
  );
}
