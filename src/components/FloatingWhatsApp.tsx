import { MessageCircle } from 'lucide-react';
import { defaultWhatsappMessage, whatsappNumber } from '@/data/mockData';

export function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(defaultWhatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group flex items-center justify-center animate-fade-in"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-card text-card-foreground text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-border shadow-lg pointer-events-none">
        Faça um orçamento
        {/* Triangle */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-border"></span>
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-[7px] border-transparent border-l-card -ml-[1px]"></span>
      </span>
    </button>
  );
}
