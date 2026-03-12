import { Truck, Wrench, MessageSquare, CreditCard, ShieldCheck, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="diferenciais" className="py-20 bg-background scroll-mt-16">
      <div className="container px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Por que escolher a <span className="text-primary">Jonas Locações</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans normal-case">
            Compromisso, qualidade e agilidade para sua obra não parar.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.title} className="border-border bg-card rounded-sm hover:border-primary/50 transition-colors group">
              <CardContent className="p-6 flex gap-4">
                <div className="bg-primary/10 p-3 rounded-sm shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-sans normal-case">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
