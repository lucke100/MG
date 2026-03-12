import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { companyInfo, navigationLinks, services } from '@/data/mockData';

interface FooterProps {
  readonly className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-card/50 border-t border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/">
              <img src="/logo.png" alt="MG Locações e Eventos" className="h-12 md:h-16 w-auto object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Produção completa para eventos corporativos de alto impacto. Transformamos visões em experiências memoráveis.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-neon/10 hover:text-neon transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-neon/10 hover:text-neon transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-neon/10 hover:text-neon transition-all"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neon mb-4">Navegação</h3>
            <ul className="flex flex-col gap-2.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-neon transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neon mb-4">Serviços</h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-neon transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neon mb-4">Contato</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {companyInfo.address}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 MG Locações e Eventos. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com <span className="text-neon">♥</span> para eventos de alto impacto.
          </p>
        </div>
      </div>
    </footer>
  );
}
