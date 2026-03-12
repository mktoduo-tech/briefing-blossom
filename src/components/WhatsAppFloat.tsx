import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565992779620?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white p-4 rounded-full shadow-lg shadow-black/20 transition-all hover:scale-110 hover:-translate-y-1"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFloat;
