import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

interface HeroSectionProps {
  readonly title: string;
  readonly highlight: string;
  readonly subtitle: string;
  readonly ctaText: string;
  readonly ctaLink: string;
  readonly backgroundImage?: string;
  readonly showSecondary?: boolean;
  readonly compact?: boolean;
}

export function HeroSection({
  title,
  highlight,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  showSecondary = false,
  compact = false,
}: HeroSectionProps) {
  const [ref, isInView] = useInView(0.1);

  const isExternal = ctaLink.startsWith('http');

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${compact ? 'py-16 md:py-24' : 'py-20 md:py-32 lg:py-40'}`}
    >
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 gradient-mesh" />
      )}

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div
          className={`flex flex-col items-center text-center gap-6 max-w-3xl mx-auto ${
            isInView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-neon text-xs font-bold uppercase tracking-wider bg-neon/10 border-neon/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
            </span>
            MG Locações e Eventos
          </div>

          {/* Title */}
          <h1
            className={`font-black leading-[1.1] tracking-tight ${
              compact ? 'text-4xl md:text-5xl' : 'text-4xl md:text-6xl lg:text-7xl'
            }`}
          >
            {title}
            <br />
            <span className="text-neon-gradient">{highlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Button
              asChild
              size="lg"
              className="bg-neon-gradient text-slate-950 font-bold hover:brightness-110 shadow-neon-sm border-0 px-8 py-6 text-base rounded-xl"
            >
              {isExternal ? (
                <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                  {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              ) : (
                <Link to={ctaLink}>
                  {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              )}
            </Button>
            {showSecondary && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border bg-secondary/30 hover:bg-secondary/50 rounded-xl px-8 py-6 text-base"
              >
                <Link to="/servicos">Ver Portfólio</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
