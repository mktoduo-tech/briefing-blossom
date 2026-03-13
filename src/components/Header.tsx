import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoJonas from "@/assets/logo-jonas.png";

const WHATSAPP_URL = "https://wa.me/5565992779620?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const navItems = [
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border/30">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="/" className="text-2xl font-bold text-primary font-heading tracking-tight">
          JONAS LOCAÇÕES
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-sans font-medium"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-sm font-sans font-bold">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5" size={16} />
              Orçamento
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-secondary border-t border-border/30 px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-sans font-medium py-2"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="w-full rounded-sm font-sans font-bold">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5" size={16} />
              Solicitar Orçamento
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
