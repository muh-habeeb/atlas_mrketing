import { HeroSection } from "./_components/HeroSection";
import { WhoWeAre } from "./_components/WhoWeAre";
import { ServicesSection } from "./_components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <WhoWeAre />
      <ServicesSection />
    </main>
  );
}
