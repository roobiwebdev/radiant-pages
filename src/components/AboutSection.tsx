import { Award, Heart, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="hero-gradient-bg py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Philosophy */}
          <div>
            <p className="mb-4 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Our Philosophy
            </p>
            <h2 className="editorial-heading mb-8 text-4xl md:text-5xl">
              Where expertise meets intention
            </h2>
            <div className="space-y-6">
              <p className="editorial-body text-lg leading-relaxed">
                At Bodies by RS, we believe transformation should feel like a 
                collaboration—not a transaction. Every treatment begins with 
                listening, understanding your vision, and crafting a path that 
                honours both your goals and your wellbeing.
              </p>
              <p className="editorial-body text-lg leading-relaxed">
                Our approach combines advanced techniques with a deep respect 
                for natural beauty. We don't chase trends; we focus on results 
                that feel authentic to who you are.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <Award className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-medium text-foreground">15+</p>
                  <p className="font-sans text-sm text-muted-foreground">Years of expertise</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <Heart className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-medium text-foreground">5,000+</p>
                  <p className="font-sans text-sm text-muted-foreground">Happy clients</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <Sparkles className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-medium text-foreground">Premium</p>
                  <p className="font-sans text-sm text-muted-foreground">Only treatments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Team Introduction */}
          <div className="flex flex-col justify-center">
            <div className="editorial-card p-8 md:p-12">
              <p className="mb-4 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Meet the Team
              </p>
              <h3 className="editorial-heading mb-6 text-3xl md:text-4xl">
                Welcome, Ria
              </h3>
              <p className="editorial-body mb-6 text-lg leading-relaxed">
                We're delighted to welcome Ria to the Bodies by RS family. 
                With her exceptional attention to detail and warm, client-centred 
                approach, Ria brings fresh expertise to our team while upholding 
                the standards of care you've come to expect.
              </p>
              <p className="editorial-body text-lg leading-relaxed">
                Whether you're a returning client or new to our practice, Ria 
                is ready to guide you through your aesthetic journey with the 
                same dedication and professionalism that defines our brand.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop&crop=face"
                    alt="Ria - Aesthetics Specialist"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-foreground">Ria</p>
                  <p className="font-sans text-sm text-muted-foreground">Aesthetics Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
