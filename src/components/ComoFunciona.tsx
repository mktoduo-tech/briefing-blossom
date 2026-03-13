import { MessageCircle, TruckIcon, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", icon: MessageCircle, title: "Solicite o orçamento", desc: "Entre em contato pelo WhatsApp e diga o que precisa." },
  { num: "02", icon: TruckIcon, title: "Receba o equipamento", desc: "Entregamos na sua obra de forma rápida e segura." },
  { num: "03", icon: RotateCcw, title: "Devolva quando quiser", desc: "Ao final da locação, recolhemos o equipamento sem burocracia." },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-24 bg-muted scroll-mt-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans font-semibold text-sm tracking-widest uppercase mb-3 block">Processo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como <span className="text-primary">funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-sans normal-case">
            Simples e sem burocracia. Em 3 passos sua obra tem o equipamento certo.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-2xl bg-card border border-border/50 shadow-md mb-6 relative">
                <span className="absolute -top-3 -right-3 gradient-primary text-primary-foreground text-sm font-bold w-9 h-9 flex items-center justify-center rounded-xl font-sans shadow-sm">
                  {step.num}
                </span>
                <step.icon className="text-primary" size={38} />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-sans normal-case text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
