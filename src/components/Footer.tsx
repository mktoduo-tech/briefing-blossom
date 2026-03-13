import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logoJonas from "@/assets/logo-jonas.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary py-12 scroll-mt-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src={logoJonas} alt="Jonas Locações" className="h-14 mb-2" />
            <p className="text-secondary-foreground/70 font-sans normal-case text-sm">
              Locação de equipamentos para construção civil. Parceiros no sucesso da sua obra.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-secondary-foreground mb-3 text-sm">Contato</h4>
            <ul className="space-y-2 font-sans normal-case text-sm">
              <li>
                <a href="https://wa.me/5565992779620" className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <Phone size={16} /> (65) 99277-9620
                </a>
              </li>
              <li>
                <a href="mailto:jonas.locacoes@hotmail.com" className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <Mail size={16} /> jonas.locacoes@hotmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/jonas.locacoes" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <Instagram size={16} /> @jonas.locacoes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-secondary-foreground mb-3 text-sm">Localização</h4>
            <p className="text-secondary-foreground/70 font-sans normal-case text-sm flex items-start gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              Av. Perimetral das Samambaias, 3013 N<br />Ind. Norte
            </p>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-secondary-foreground/50 text-xs font-sans normal-case">
            © {new Date().getFullYear()} Jonas Locações. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
