import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { ContactForm } from '@/components/ContactForm';
import { useInView } from '@/hooks/useInView';
import { heroContents, companyInfo } from '@/data/mockData';

export function Contato() {
  const hero = heroContents.contato;
  const [infoRef, infoInView] = useInView(0.1);

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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-2">
                Envie sua <span className="text-neon-gradient">mensagem</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo e enviaremos sua mensagem diretamente para nosso WhatsApp.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div ref={infoRef} className={`${infoInView ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-3xl font-black tracking-tight mb-2">
                Informações de <span className="text-neon-gradient">contato</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Estamos disponíveis para atendê-lo através dos canais abaixo.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Telefone', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                  { icon: MessageCircle, label: 'WhatsApp', value: companyInfo.phone, href: `https://wa.me/${companyInfo.whatsapp}` },
                  { icon: Mail, label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                  { icon: MapPin, label: 'Endereço', value: companyInfo.address, href: '#' },
                  { icon: Clock, label: 'Horário', value: 'Seg - Sex: 8h às 18h | Sáb: 8h às 13h', href: '#' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-neon/30 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-neon/10 text-neon group-hover:bg-neon/20 transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                      <p className="text-base font-semibold text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border/50 h-64">
                <iframe
                  title="Localização MG Locações"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488722!2d-46.8754915!3d-23.6820635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
