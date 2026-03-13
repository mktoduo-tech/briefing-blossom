import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5565992779620?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const CTAFinal = () => {
  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-primary-foreground/5 rotate-45 translate-x-1/3 -translate-y-1/3 rounded-3xl" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-primary-foreground/5 -rotate-12 -translate-x-1/3 translate-y-1/3 rounded-3xl" />
      </div>
      
      <div className="container px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 text-balance">
            Sua obra não pode parar.
          </h2>
          <p className="text-xl text-primary-foreground/85 mb-10 font-sans normal-case max-w-lg mx-auto leading-relaxed">
            Fale com a gente agora e garanta os equipamentos que você precisa!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-12 py-7 rounded-xl font-sans font-bold shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={22} />
              Chamar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinal;
