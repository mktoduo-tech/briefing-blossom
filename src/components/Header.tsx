import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-secondary shadow-lg shadow-black/10 backdrop-blur-md`}>
      <div className="container flex items-center justify-between h-18 px-4 py-2">
        <a href="/" className="flex items-center">
          <img src={logoJonas} alt="Jonas Locações" className="h-14 md:h-16 transition-all" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm font-sans font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="gradient-primary rounded-md font-sans font-bold shadow-primary-glow hover:shadow-lg transition-all hover:-translate-y-0.5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5" size={16} />
              Orçamento
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-secondary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-80" : "max-h-0"}`}>
        <nav className="bg-secondary border-t border-secondary-foreground/10 px-4 pb-4 pt-2 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-secondary-foreground/80 hover:text-primary hover:bg-secondary-foreground/5 transition-colors text-sm font-sans font-medium py-3 px-3 rounded-md"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="w-full gradient-primary rounded-md font-sans font-bold mt-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5" size={16} />
              Solicitar Orçamento
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
