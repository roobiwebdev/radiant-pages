import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <section id="treatments">
        <ServicesSection />
      </section>
      <section id="results">
        <ResultsSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="consultation">
        <CTASection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
};

export default Index;
