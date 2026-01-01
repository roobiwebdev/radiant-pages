import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium aesthetics and body contouring"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Tagline */}
            <p className="mb-6 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground animate-fade-up">
              Aesthetics & Body Contouring
            </p>

            {/* Heading */}
            <h1 className="editorial-heading mb-8 text-5xl leading-[1.1] animate-fade-up stagger-1 md:text-6xl lg:text-7xl">
              Expert care,
              <br />
              <em className="font-normal">designed around you</em>
            </h1>

            {/* Subheading */}
            <p className="editorial-body mb-12 max-w-lg text-lg leading-relaxed animate-fade-up stagger-2 md:text-xl">
              Refined treatments and thoughtful results. We combine modern techniques 
              with expert care to help you feel confident in your transformation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up stagger-3">
              <Button variant="editorial" size="editorial-lg">
                Begin your consultation
              </Button>
              <Button variant="editorial-outline" size="editorial-lg">
                Explore treatments
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up stagger-4">
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
            Discover
          </span>
          <div className="h-12 w-px bg-border" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
