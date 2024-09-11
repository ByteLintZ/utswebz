
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import FooterSection from "@/components/Footer";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContentSection />
      <Carousel />


      <FooterSection />
    </div>
  );
}