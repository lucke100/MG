import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { CTASection } from '@/components/CTASection';
import { useInView } from '@/hooks/useInView';
import { heroContents, stats } from '@/data/mockData';
import { Award, Eye, Target, Shield } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function SobreNos() {
  const hero = heroContents.sobre;
  const [histRef, histInView] = useInView(0.1);
  const [missionRef, missionInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.1);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

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

      {/* History */}
      <section ref={histRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center ${histInView ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Nossa <span className="text-neon-gradient">História</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A MG Locações e Eventos nasceu da paixão por transformar espaços comuns em cenários
                  extraordinários. Com mais de 15 anos de experiência no mercado de eventos, nos
                  consolidamos como referência em locação de equipamentos audiovisuais e estruturas
                  metálicas em São Paulo.
                </p>
                <p>
                  Nossa trajetória é marcada pelo compromisso com a excelência, investimento contínuo
                  em tecnologia de ponta e formação de uma equipe altamente qualificada. Cada projeto
                  é tratado com dedicação e profissionalismo, garantindo que a visão de nossos clientes
                  se torne realidade.
                </p>
                <p>
                  Atendemos desde eventos corporativos e convenções até shows, festivais e celebrações
                  particulares, sempre com o mesmo padrão de qualidade que nos diferencia no mercado.
                </p>
              </div>
            </div>
            <div className="relative group cursor-pointer" onClick={() => setSelectedMedia("/portfolio/palco-mg-locacoes.jpg")}>
              <div className="absolute -inset-3 bg-gradient-to-r from-neon/20 to-neon-accent/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img
                  src="/portfolio/palco-mg-locacoes.jpg"
                  alt="MG Locações em ação"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section ref={missionRef} className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Missão, Visão e <span className="text-neon-gradient">Valores</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Missão', text: 'Oferecer soluções completas e inovadoras em locação de equipamentos, superando expectativas e transformando eventos em experiências memoráveis.' },
              { icon: Eye, title: 'Visão', text: 'Ser a empresa referência no mercado de locação para eventos em São Paulo, reconhecida pela excelência, inovação e compromisso com o cliente.' },
              { icon: Shield, title: 'Segurança', text: 'Trabalhamos com rigorosos padrões de segurança em todas as montagens, garantindo a tranquilidade de nossos clientes e seus convidados.' },
              { icon: Award, title: 'Qualidade', text: 'Investimos constantemente em equipamentos de última geração e capacitação da equipe para entregar sempre o melhor resultado.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-6 rounded-xl bg-card/50 border border-border/50 hover:border-neon/20 transition-all ${
                  missionInView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <item.icon className="h-8 w-8 text-neon mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Nossos <span className="text-neon-gradient">Números</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-xl bg-card/50 border border-border/50 ${
                  statsInView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-black text-neon-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Lightbox for Sobre Nos image */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-border p-2">
          {selectedMedia && (
            <div className="flex items-center justify-center">
              <img src={selectedMedia} alt="Media" className="w-full h-auto max-h-[85vh] rounded-lg object-contain bg-black/50" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
