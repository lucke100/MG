import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';
import type { PortfolioItem } from '@/data/mockData';

interface PortfolioGalleryProps {
  readonly items: ReadonlyArray<PortfolioItem>;
  readonly className?: string;
}

export function PortfolioGallery({ items, className = '' }: PortfolioGalleryProps) {
  const [ref, isInView] = useInView(0.05);
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = ['Todos', ...Array.from(new Set(items.map((item) => item.category)))];
  const filtered = activeFilter === 'Todos' ? items : items.filter((i) => i.category === activeFilter);

  return (
    <section ref={ref} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={activeFilter === cat ? 'default' : 'outline'}
              className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                activeFilter === cat
                  ? 'bg-neon text-slate-950 border-neon hover:bg-neon-dark'
                  : 'border-border text-muted-foreground hover:border-neon/50 hover:text-neon'
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                isInView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square overflow-hidden bg-black/20 flex items-center justify-center">
                {item.image.endsWith('.mp4') ? (
                  <video
                    src={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-neon">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-border p-2">
            {selectedImage && (
              <div className="flex flex-col">
                {selectedImage.image.endsWith('.mp4') ? (
                  <video
                    src={selectedImage.image}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[80vh] rounded-lg object-contain bg-black/50"
                  />
                ) : (
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] rounded-lg object-contain bg-black/50"
                  />
                )}
                <div className="p-4 bg-card/50 mt-2 rounded-lg">
                  <h3 className="text-lg font-bold">{selectedImage.title}</h3>
                  <p className="text-sm text-neon">{selectedImage.category}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
