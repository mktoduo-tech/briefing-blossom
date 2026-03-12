import { Calendar, Zap, Package, CreditCard } from "lucide-react";

const items = [
  { icon: Calendar, label: "+2 anos", sub: "no mercado" },
  { icon: Zap, label: "Entrega", sub: "rápida" },
  { icon: Package, label: "Variedade", sub: "de equipamentos" },
  { icon: CreditCard, label: "Pagamento", sub: "facilitado" },
];

const TrustBar = () => {
  return (
    <section className="bg-primary py-6">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 justify-center">
              <item.icon className="text-primary-foreground/80 shrink-0" size={28} />
              <div>
                <p className="text-primary-foreground font-bold text-lg leading-tight font-sans">{item.label}</p>
                <p className="text-primary-foreground/80 text-sm font-sans normal-case">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
