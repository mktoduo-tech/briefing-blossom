import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5565992779620?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Jonas Locações - Fachada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent" />
      </div>

      <div className="container relative z-10 py-24 px-4">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 gradient-primary px-5 py-2 mb-8 rounded-full"
          >
            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-semibold tracking-wider uppercase font-sans">
              +2 anos no mercado
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-secondary-foreground leading-[1.05] mb-6 text-balance"
          >
            Equipamentos para sua obra,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))]">
              sem complicação
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-secondary-foreground/70 mb-12 max-w-xl font-sans normal-case leading-relaxed"
          >
            Locação ágil e segura de equipamentos para construção civil. 
            Entrega rápida, pagamento facilitado e atendimento que entende sua necessidade.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="gradient-primary text-primary-foreground text-lg px-10 py-7 rounded-xl font-sans font-bold shadow-primary-glow transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={22} />
                Solicitar Orçamento
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-secondary-foreground/40 text-secondary-foreground bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-lg px-8 py-7 rounded-xl font-sans font-semibold backdrop-blur-sm"
            >
              <a href="#equipamentos">
                Ver Equipamentos
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#equipamentos" className="flex flex-col items-center gap-2 text-secondary-foreground/40 hover:text-secondary-foreground/60 transition-colors">
          <span className="text-xs font-sans uppercase tracking-widest">Explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
