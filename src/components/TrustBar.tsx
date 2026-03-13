import { Calendar, Zap, Package, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Calendar, label: "+2 anos", sub: "no mercado" },
  { icon: Zap, label: "Entrega", sub: "rápida" },
  { icon: Package, label: "Variedade", sub: "de equipamentos" },
  { icon: CreditCard, label: "Pagamento", sub: "facilitado" },
];

const TrustBar = () => {
  return (
    <section className="gradient-primary py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,hsl(0_0%_100%/0.06)_50%,transparent_75%)]" />
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 justify-center"
            >
              <div className="p-3 bg-primary-foreground/10 rounded-xl">
                <item.icon className="text-primary-foreground" size={24} />
              </div>
              <div>
                <p className="text-primary-foreground font-bold text-lg leading-tight font-sans">{item.label}</p>
                <p className="text-primary-foreground/70 text-sm font-sans normal-case">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
