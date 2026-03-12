import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5565992779620?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary">
      {/* Diagonal accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-primary rotate-45 rounded-sm" />
        <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] bg-primary rotate-12 rounded-sm" />
      </div>
      {/* Texture overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 60px,
          hsla(0,0%,100%,0.02) 60px,
          hsla(0,0%,100%,0.02) 61px
        )`
      }} />

      <div className="container relative z-10 py-20 px-4">
        <div className="max-w-3xl">
          <div className="inline-block bg-primary px-4 py-1 mb-6 rounded-sm">
            <span className="text-primary-foreground text-sm font-semibold tracking-wider uppercase font-sans">
              +2 anos no mercado
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-secondary-foreground leading-[1.1] mb-6">
            Equipamentos para sua obra,{" "}
            <span className="text-primary">sem complicação</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary-foreground/80 mb-10 max-w-xl font-sans normal-case">
            Locação ágil e segura de equipamentos para construção civil. 
            Entrega rápida, pagamento facilitado e atendimento que entende sua necessidade.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-sm font-sans font-bold shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={22} />
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
