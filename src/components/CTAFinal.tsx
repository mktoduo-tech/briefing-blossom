import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5565992779620?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const CTAFinal = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-foreground rotate-45 translate-x-1/2 -translate-y-1/2 rounded-sm" />
      </div>
      <div className="container px-4 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Sua obra não pode parar.
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 font-sans normal-case max-w-lg mx-auto">
          Fale com a gente agora e garanta os equipamentos que você precisa!
        </p>
        <Button
          asChild
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-10 py-6 rounded-sm font-sans font-bold shadow-lg transition-all hover:-translate-y-0.5"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2" size={22} />
            Chamar no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTAFinal;
