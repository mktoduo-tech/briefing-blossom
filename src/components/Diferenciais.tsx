import { Truck, Wrench, MessageSquare, CreditCard, ShieldCheck, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Truck, title: "Entrega rápida e pontual", desc: "Equipamentos na sua obra no prazo combinado, sem atrasos." },
  { icon: Wrench, title: "Grande variedade", desc: "Temos os equipamentos certos para cada etapa da sua obra." },
  { icon: MessageSquare, title: "Atendimento personalizado", desc: "Nossa equipe entende sua necessidade e indica a melhor solução." },
  { icon: CreditCard, title: "Pagamento facilitado", desc: "Condições e prazos que cabem no orçamento da sua obra." },
  { icon: ShieldCheck, title: "Equipamentos revisados", desc: "Todos os equipamentos passam por manutenção e revisão antes da entrega." },
  { icon: Handshake, title: "Parceria na sua obra", desc: "Mais do que locar, somos parceiros no sucesso do seu projeto." },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-24 bg-background scroll-mt-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans font-semibold text-sm tracking-widest uppercase mb-3 block">Diferenciais</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher a <span className="text-primary">Jonas Locações</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans normal-case">
            Compromisso, qualidade e agilidade para sua obra não parar.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-primary-glow/50">
                <item.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-bold text-card-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-sans normal-case leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
