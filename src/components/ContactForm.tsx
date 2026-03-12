import { useState, type FormEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useInView } from '@/hooks/useInView';
import { companyInfo, services } from '@/data/mockData';

interface ContactFormProps {
  readonly className?: string;
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const [ref, isInView] = useInView(0.1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email inválido';
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
    if (!formData.servico) newErrors.servico = 'Selecione um serviço';
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const text = `*Novo Contato via Site - MG Locações*%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Serviço:* ${formData.servico}%0A` +
      `*Mensagem:* ${formData.mensagem}`;

    const url = `https://wa.me/${companyInfo.whatsapp}?text=${text}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setLoading(false);
    }, 500);
  };

  return (
    <div
      ref={ref}
      className={`${isInView ? 'animate-fade-in' : 'opacity-0'} ${className}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Nome */}
        <div>
          <Input
            id="contact-name"
            placeholder="Seu nome completo"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="bg-secondary/30 border-border focus:border-neon/50 h-12 rounded-lg"
          />
          {errors.nome && <p className="text-destructive text-xs mt-1">{errors.nome}</p>}
        </div>

        {/* Email + Telefone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              id="contact-email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-secondary/30 border-border focus:border-neon/50 h-12 rounded-lg"
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.telefone}
              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
              className="bg-secondary/30 border-border focus:border-neon/50 h-12 rounded-lg"
            />
            {errors.telefone && <p className="text-destructive text-xs mt-1">{errors.telefone}</p>}
          </div>
        </div>

        {/* Serviço */}
        <div>
          <Select
            value={formData.servico}
            onValueChange={(value) => setFormData({ ...formData, servico: value })}
          >
            <SelectTrigger id="contact-service" className="bg-secondary/30 border-border focus:border-neon/50 h-12 rounded-lg">
              <SelectValue placeholder="Tipo de serviço" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {services.map((s) => (
                <SelectItem key={s.id} value={s.title}>
                  {s.title}
                </SelectItem>
              ))}
              <SelectItem value="Outro">Outro</SelectItem>
            </SelectContent>
          </Select>
          {errors.servico && <p className="text-destructive text-xs mt-1">{errors.servico}</p>}
        </div>

        {/* Mensagem */}
        <div>
          <Textarea
            id="contact-message"
            placeholder="Conte-nos sobre seu evento..."
            rows={5}
            value={formData.mensagem}
            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
            className="bg-secondary/30 border-border focus:border-neon/50 rounded-lg resize-none"
          />
          {errors.mensagem && <p className="text-destructive text-xs mt-1">{errors.mensagem}</p>}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="bg-neon-gradient text-slate-950 font-bold hover:brightness-110 shadow-neon-sm border-0 h-14 text-base rounded-xl"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
          ) : (
            <Send className="h-5 w-5 mr-2" />
          )}
          {loading ? 'Enviando...' : 'Enviar via WhatsApp'}
        </Button>
      </form>
    </div>
  );
}
