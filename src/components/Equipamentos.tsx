import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import equipAndaimes from "@/assets/equip-andaimes.jpg";
import equipAndaimeFachadeiro from "@/assets/equip-andaime-fachadeiro.jpg";
import equipAlisadora from "@/assets/equip-alisadora.jpg";
import equipAspirador from "@/assets/equip-aspirador.jpg";
import equipContainer from "@/assets/equip-container.jpg";
import equipCompactador from "@/assets/equip-compactador.jpg";
import equipCompressor from "@/assets/equip-compressor.jpg";
import equipCortadora from "@/assets/equip-cortadora.jpg";
import equipBombaSapo from "@/assets/equip-bomba-sapo.jpg";
import equipBombaSubmersivel from "@/assets/equip-bomba-submersivel.jpg";
import equipDesentupidor from "@/assets/equip-desentupidor.jpg";
import equipEscoras from "@/assets/equip-escoras.jpg";
import equipEsmerilhadeira from "@/assets/equip-esmerilhadeira.jpg";
import equipEnceradeira from "@/assets/equip-enceradeira.jpg";
import equipEscada from "@/assets/equip-escada.jpg";
import equipGerador from "@/assets/equip-gerador.jpg";
import equipIdentificadorVazamento from "@/assets/equip-identificador-vazamento.jpg";
import equipLavadoraGasolina from "@/assets/equip-lavadora-gasolina.jpg";
import equipLavadoraEletrica from "@/assets/equip-lavadora-eletrica.jpg";
import equipLixadeiraGirafa from "@/assets/equip-lixadeira-girafa.jpg";
import equipMartelete from "@/assets/equip-martelete.jpg";
import equipSolda from "@/assets/equip-solda.jpg";
import equipMotobomba from "@/assets/equip-motobomba.jpg";
import equipRompedor from "@/assets/equip-rompedor.jpg";
import equipPlacaVibratoria from "@/assets/equip-placa-vibratoria.jpg";
import equipParafusadeira from "@/assets/equip-parafusadeira.jpg";
import equipPerfurador from "@/assets/equip-perfurador.jpg";
import equipPolitriz from "@/assets/equip-politriz.jpg";
import equipSerraCircular from "@/assets/equip-serra-circular.jpg";
import equipSoprador from "@/assets/equip-soprador.jpg";
import equipTalha from "@/assets/equip-talha.jpg";
import equipVibrador from "@/assets/equip-vibrador.jpg";

const WHATSAPP_URL = "https://wa.me/5565992779620?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20equipamentos.";

const equipamentos = [
  { nome: "Andaimes e Acessórios", img: equipAndaimes },
  { nome: "Andaimes Fachadeiro", img: equipAndaimeFachadeiro },
  { nome: "Alisadora de Piso", img: equipAlisadora },
  { nome: "Aspirador de Pó", img: equipAspirador },
  { nome: "Container para Depósito 3x1,5", img: equipContainer },
  { nome: "Compactador de Solo", img: equipCompactador },
  { nome: "Compressor", img: equipCompressor },
  { nome: "Cortadora de Piso", img: equipCortadora },
  { nome: "Bomba Sapo", img: equipBombaSapo },
  { nome: "Bomba Submersível de Mangote", img: equipBombaSubmersivel },
  { nome: "Desentupidor", img: equipDesentupidor },
  { nome: "Escoras para Laje", img: equipEscoras },
  { nome: "Esmerilhadeira 4\", 7\" e 9\"", img: equipEsmerilhadeira },
  { nome: "Enceradeira", img: equipEnceradeira },
  { nome: "Escada 10m", img: equipEscada },
  { nome: "Gerador 8 a 13kva", img: equipGerador },
  { nome: "Identificador de Vazamentos", img: equipIdentificadorVazamento },
  { nome: "Lavadora à Gasolina", img: equipLavadoraGasolina },
  { nome: "Lavadora Elétrica", img: equipLavadoraEletrica },
  { nome: "Lixadeira Girafa", img: equipLixadeiraGirafa },
  { nome: "Martelete Perfurador", img: equipMartelete },
  { nome: "Máquina de Solda", img: equipSolda },
  { nome: "Motobomba", img: equipMotobomba },
  { nome: "Rompedor 5kg a 31kg", img: equipRompedor },
  { nome: "Placa Vibratória", img: equipPlacaVibratoria },
  { nome: "Parafusadeira de Impacto", img: equipParafusadeira },
  { nome: "Perfurador de Solo", img: equipPerfurador },
  { nome: "Politriz", img: equipPolitriz },
  { nome: "Serra Circular", img: equipSerraCircular },
  { nome: "Soprador", img: equipSoprador },
  { nome: "Talha", img: equipTalha },
  { nome: "Vibrador de Mangote", img: equipVibrador },
];

const Equipamentos = () => {
  return (
    <section id="equipamentos" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Nossos <span className="text-primary">Equipamentos</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-sans normal-case">
            Confira nosso catálogo completo. Entre em contato para saber disponibilidade e valores.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {equipamentos.map((eq) => (
            <Card key={eq.nome} className="rounded-sm border-border bg-card hover:border-primary/50 transition-colors overflow-hidden group">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src={eq.img}
                  alt={eq.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-bold text-card-foreground text-sm sm:text-base mb-2 leading-tight min-h-[2.5rem]">{eq.nome}</h3>
                <Button asChild variant="outline" size="sm" className="w-full rounded-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-xs sm:text-sm">
                  <a href={`${WHATSAPP_URL.replace('equipamentos.', `equipamento: ${eq.nome}.`)}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={14} className="mr-1.5" />
                    Orçamento
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
