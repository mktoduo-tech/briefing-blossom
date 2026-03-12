import { HardHat, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5565992779620?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20equipamentos.";

const equipamentos = [
  "Betoneiras",
  "Andaimes",
  "Compactadores",
  "Escoras",
  "Ferramentas Elétricas",
  "Outros Equipamentos",
];

const Equipamentos = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Nossos <span className="text-primary">Equipamentos</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-sans normal-case">
            Confira algumas categorias disponíveis. Entre em contato para saber tudo que temos para a sua obra.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {equipamentos.map((eq) => (
            <Card key={eq} className="rounded-sm border-border bg-card hover:border-primary/50 transition-colors overflow-hidden group">
              <div className="h-40 bg-muted flex items-center justify-center">
                <HardHat className="text-muted-foreground/40 group-hover:text-primary/40 transition-colors" size={56} />
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-card-foreground text-lg mb-3">{eq}</h3>
                <Button asChild variant="outline" className="w-full rounded-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} className="mr-2" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipamentos;
