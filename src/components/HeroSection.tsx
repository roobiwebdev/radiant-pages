import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Tagline */}
            <p className="mb-6 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground animate-fade-up">
              New at Holistic Rising
            </p>

            {/* Heading */}
            <h1 className="editorial-heading mb-8 text-5xl leading-[1.1] animate-fade-up stagger-1 md:text-6xl lg:text-7xl">
              Introducing Rhea <span className="text-primary inline-block">🌿</span>
            </h1>

            {/* Subheading */}
            <p className="editorial-body mb-12 max-w-xl text-lg leading-relaxed animate-fade-up stagger-2 md:text-xl text-muted-foreground">
              We’re so excited to welcome Rhea, founder of <span className="text-foreground font-medium italic">Bodies By RS</span>, to the Holistic Rising family, forming a beautiful partnership rooted in ethics, healing and compassionate aesthetic care.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up stagger-3">
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

          {/* Hero Image */}
          <div className="relative animate-fade-up stagger-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/assets/img1.jpeg"
                alt="Rhea - Bodies By RS"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900 animate-fade-up stagger-4 hidden md:block">
              <p className="font-serif text-lg italic text-primary">“Beauty rooted in healing”</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Personalized Care</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden lg:block">
        <div className="flex flex-col items-center gap-2">
          <div className="h-12 w-px bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
