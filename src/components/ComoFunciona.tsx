import { MessageCircle, TruckIcon, RotateCcw } from "lucide-react";

const steps = [
  { num: "01", icon: MessageCircle, title: "Solicite o orçamento", desc: "Entre em contato pelo WhatsApp e diga o que precisa." },
  { num: "02", icon: TruckIcon, title: "Receba o equipamento", desc: "Entregamos na sua obra de forma rápida e segura." },
  { num: "03", icon: RotateCcw, title: "Devolva quando quiser", desc: "Ao final da locação, recolhemos o equipamento sem burocracia." },
];

const ComoFunciona = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Como <span className="text-primary">funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-sans normal-case">
            Simples e sem burocracia. Em 3 passos sua obra tem o equipamento certo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />
              )}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-sm bg-secondary mb-6 relative">
                <span className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-sm font-bold w-8 h-8 flex items-center justify-center rounded-sm font-sans">
                  {step.num}
                </span>
                <step.icon className="text-secondary-foreground" size={36} />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-2">{step.title}</h3>
              <p className="text-muted-foreground font-sans normal-case text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
