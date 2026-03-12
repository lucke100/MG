import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { companyInfo } from '@/data/mockData';

interface CTASectionProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly ctaText?: string;
  readonly whatsapp?: boolean;
  readonly className?: string;
}

export function CTASection({
  title = 'Pronto para transformar seu evento?',
  subtitle = 'Entre em contato conosco e receba um orçamento personalizado sem compromisso.',
  ctaText = 'Solicitar Orçamento',
  whatsapp = true,
  className = '',
}: CTASectionProps) {
  const [ref, isInView] = useInView(0.1);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento para o meu evento.'
  )}`;

  return (
    <section ref={ref} className={`relative py-20 md:py-28 overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-neon-gradient opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon/10 rounded-full blur-3xl" />

      <div
        className={`relative max-w-3xl mx-auto text-center px-4 md:px-8 flex flex-col items-center gap-6 ${
          isInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button
            asChild
            size="lg"
            className="bg-neon-gradient text-slate-950 font-bold hover:brightness-110 shadow-neon-sm border-0 px-8 py-6 text-base rounded-xl"
          >
            <Link to="/contato">
              {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {whatsapp && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-neon/30 text-neon hover:bg-neon/10 rounded-xl px-8 py-6 text-base"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
