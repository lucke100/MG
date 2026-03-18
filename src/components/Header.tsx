import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { navigationLinks, type NavLink } from '@/data/mockData';

interface HeaderProps {
  readonly className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  const isScrolled = useScrollHeader(50);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent border-b border-transparent'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="MG Locações e Eventos"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <NavItem key={link.href} link={link} isActive={isActive} />
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden md:inline-flex bg-neon-gradient text-slate-950 font-bold hover:brightness-110 shadow-neon-sm border-0"
          >
            <Link to="/contato">Orçamento</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-background/95 backdrop-blur-xl border-border"
            >
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <div className="flex flex-col gap-4 mt-8 px-4">
                <Link to="/" className="mb-4">
                  <img src="/logo.png" alt="MG Locações" className="h-10 w-auto object-contain" />
                </Link>
                {navigationLinks.map((link) => (
                  <MobileNavItem
                    key={link.href}
                    link={link}
                    isActive={isActive}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}
                <Button
                  asChild
                  className="mt-4 bg-neon-gradient text-slate-950 font-bold hover:brightness-110 shadow-neon-sm border-0"
                >
                  <Link to="/contato" onClick={() => setMobileOpen(false)}>
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

interface NavItemProps {
  readonly link: NavLink;
  readonly isActive: (href: string) => boolean;
}

function NavItem({ link, isActive }: NavItemProps) {
  const [open, setOpen] = useState(false);

  if (link.children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-neon ${
            isActive(link.href) ? 'text-neon' : 'text-foreground/80'
          }`}
        >
          {link.label}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50">
            <div className="bg-card/95 backdrop-blur-xl rounded-lg border border-border shadow-xl py-2 animate-fade-in">
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-neon hover:bg-neon/5 transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={link.href}
      className={`text-sm font-medium transition-colors hover:text-neon ${
        isActive(link.href) ? 'text-neon' : 'text-foreground/80'
      }`}
    >
      {link.label}
    </Link>
  );
}

interface MobileNavItemProps {
  readonly link: NavLink;
  readonly isActive: (href: string) => boolean;
  readonly onClose: () => void;
}

function MobileNavItem({ link, isActive, onClose }: MobileNavItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          to={link.href}
          onClick={onClose}
          className={`text-base font-medium py-2 transition-colors hover:text-neon ${
            isActive(link.href) ? 'text-neon' : 'text-foreground/80'
          }`}
        >
          {link.label}
        </Link>
        {link.children && (
          <button onClick={() => setExpanded(!expanded)} className="p-2">
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>
      {link.children && expanded && (
        <div className="ml-4 flex flex-col gap-1 border-l border-border pl-4">
          {link.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={onClose}
              className="text-sm py-1.5 text-muted-foreground hover:text-neon transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
