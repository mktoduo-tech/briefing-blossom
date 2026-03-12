import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import Diferenciais from "@/components/Diferenciais";
import ComoFunciona from "@/components/ComoFunciona";
import Equipamentos from "@/components/Equipamentos";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <Equipamentos />
      <TrustBar />
      <Diferenciais />
      <ComoFunciona />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
