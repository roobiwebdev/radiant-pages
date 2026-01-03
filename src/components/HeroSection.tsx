import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-background">
      {/* Content */}
      <div className="container mx-auto px-6 text-center lg:px-12">
        <div className="mx-auto max-w-3xl">
          {/* Tagline */}
          <p className="mb-6 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground animate-fade-up">
            New at Holistic Rising
          </p>

          {/* Heading */}
          <h1 className="editorial-heading mb-8 text-5xl leading-[1.1] animate-fade-up stagger-1 md:text-6xl lg:text-7xl">
            Introducing Rhea <span className="text-muted-foreground inline-block">🌿</span>
          </h1>

          {/* Subheading */}
          <p className="editorial-body mx-auto mb-12 max-w-2xl text-lg leading-relaxed animate-fade-up stagger-2 md:text-xl">
            We’re so excited to welcome Rhea founder of Bodies By RS to the Holistic Rising family, forming a beautiful partnership rooted in ethics, healing and compassionate aesthetic care.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up stagger-3">
            <Button 
              variant="editorial" 
              size="editorial-lg"
              asChild
            >
              <a href="#about">
                Read our story
              </a>
            </Button>
            <Button variant="editorial-outline" size="editorial-lg" asChild>
              <a href="#treatments">
               View Treatments
              </a>
            </Button>
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
