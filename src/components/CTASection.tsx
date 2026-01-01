import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h2 className="editorial-heading mb-6 text-4xl md:text-5xl lg:text-6xl">
            Ready to begin?
          </h2>
          <p className="editorial-body mx-auto mb-12 max-w-xl text-lg leading-relaxed md:text-xl">
            Your journey starts with a conversation. Book a consultation to 
            explore how we can help you achieve your aesthetic goals—no pressure, 
            just honest guidance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="editorial" size="editorial-lg">
              Begin your consultation
            </Button>
            <Button variant="editorial-ghost" size="editorial">
              Questions? Get in touch
            </Button>
          </div>

          {/* Returning Clients */}
          <div className="mt-16 border-t border-border pt-12">
            <p className="mb-4 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Returning Client?
            </p>
            <p className="editorial-body mb-6 text-lg">
              Welcome back. Your account and treatment history are just a click away.
            </p>
            <Button variant="editorial-outline" size="editorial">
              Access your account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
