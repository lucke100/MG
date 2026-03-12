import { Link } from 'react-router-dom';
import { ArrowRight, Grid3x3, Monitor, Lightbulb, LayoutDashboard, Smartphone, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from '@/hooks/useInView';
import type { ServiceItem } from '@/data/mockData';

interface ServiceCardProps {
  readonly service: ServiceItem;
  readonly index?: number;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Grid3x3,
  Monitor,
  Lightbulb,
  LayoutDashboard,
  Smartphone,
  Building2,
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const [ref, isInView] = useInView(0.1);
  const IconComponent = iconMap[service.icon] || Grid3x3;

  return (
    <div
      ref={ref}
      className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={service.href} className="group block h-full">
        <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon/30 transition-all duration-500 hover:shadow-neon-sm">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            <div className="absolute top-3 left-3 p-2 rounded-lg bg-neon/10 backdrop-blur-md border border-neon/20">
              <IconComponent className="h-5 w-5 text-neon" />
            </div>
          </div>

          <CardContent className="p-5">
            <h3 className="text-lg font-bold text-foreground group-hover:text-neon transition-colors mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {service.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-neon opacity-0 group-hover:opacity-100 transition-opacity">
              Saiba mais <ArrowRight className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
