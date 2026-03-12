import { Phone } from "lucide-react";
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

const getWhatsAppUrl = (equipamento: string) =>
  `https://wa.me/5565992779620?text=${encodeURIComponent(`Olá, gostaria de mais informações sobre ${equipamento}`)}`;


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
                <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                  <Phone size={12} />
                  (65) 99277-9620
                </p>
                <Button asChild variant="outline" size="sm" className="w-full rounded-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-xs sm:text-sm">
                  <a href={getWhatsAppUrl(eq.nome)} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Solicite seu Orçamento
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
