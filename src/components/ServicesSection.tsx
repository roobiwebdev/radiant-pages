import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCategory {
  id: string;
  name: string;
  descriptor: string;
  treatments: string[];
}

const services: ServiceCategory[] = [
  {
    id: "body-contouring",
    name: "Body Contouring",
    descriptor: "Non-surgical sculpting for refined silhouettes",
    treatments: ["Enhancement treatments", "Fat reduction", "Radio frequency", "Wood therapy", "Packages"],
  },
  {
    id: "facial-injectables",
    name: "Facial Injectables",
    descriptor: "Subtle enhancements that honour your natural beauty",
    treatments: ["Botox & Anti-wrinkle", "Dermal fillers", "Facial balancing", "Polynucleotides"],
  },
  {
    id: "skin-treatments",
    name: "Skin Treatments",
    descriptor: "Advanced care for radiant, youthful skin",
    treatments: ["Biorepeel", "Skin boosters", "Microneedling", "Cellulite treatment"],
  },
  {
    id: "fat-dissolving",
    name: "Fat Dissolving",
    descriptor: "Targeted reduction for stubborn areas",
    treatments: ["Lemon bottle", "Lipo Lab injections"],
  },
  {
    id: "body-enhancements",
    name: "Body Enhancements",
    descriptor: "Sculpted curves with expert precision",
    treatments: ["Liquid BBL", "Bum & Hip fillers"],
  },
  {
    id: "weight-loss",
    name: "Weight Loss",
    descriptor: "Medically-guided transformation journeys",
    treatments: ["Prescription weight loss pens", "Wellness packages"],
  },
  {
    id: "beauty-treatments",
    name: "Beauty Treatments",
    descriptor: "Finishing touches for everyday radiance",
    treatments: ["Lash lift", "Teeth whitening"],
  },
  {
    id: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    descriptor: "Restore and renew your natural glow",
    treatments: ["Cellulite treatment", "Skin boosters", "Advanced facials"],
  },
];

const ServiceCard = ({ service, index }: { service: ServiceCategory; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Alternate card heights for visual interest
  const heightClass = index % 3 === 0 ? "md:row-span-2" : "";

  return (
    <article
      className={`editorial-card group relative cursor-pointer overflow-hidden ${heightClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-accent/30 transition-all duration-500 group-hover:from-accent/40 group-hover:to-secondary" />
      
      {/* Decorative Element */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 transition-transform duration-500 group-hover:scale-150" />

      {/* Content */}
      <div className="relative flex h-full min-h-[280px] flex-col justify-between p-6 md:p-8">
        <div>
          {/* Category Name */}
          <h3 className="editorial-heading mb-3 text-xl text-foreground md:text-2xl">
            {service.name}
          </h3>
          
          {/* Descriptor */}
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            {service.descriptor}
          </p>

          {/* Treatments List - Shown on Hover */}
          <div
            className={`mt-4 space-y-1 transition-all duration-300 ${
              isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
            } overflow-hidden`}
          >
            {service.treatments.slice(0, 4).map((treatment, idx) => (
              <p key={idx} className="font-sans text-xs text-muted-foreground/80">
                • {treatment}
              </p>
            ))}
            {service.treatments.length > 4 && (
              <p className="font-sans text-xs text-muted-foreground/60">
                + {service.treatments.length - 4} more
              </p>
            )}
          </div>
        </div>

        {/* Hover CTA */}
        <div
          className={`flex items-center gap-2 font-sans text-sm text-primary transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <span>Explore treatments</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Our Treatments
          </p>
          <h2 className="editorial-heading mb-6 text-4xl md:text-5xl">
            Thoughtfully curated care
          </h2>
          <p className="editorial-body text-lg">
            From body contouring to facial aesthetics, each treatment represents our commitment 
            to excellence—modern techniques, refined results, and care that respects your journey.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            Existing clients can access their ongoing sessions, courses & packages
          </p>
          <a 
            href="https://bodiesbyrs.as.me/schedule/5732e964"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-sans text-sm text-primary transition-colors hover:text-primary/80"
          >
            <span>View all appointment types</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
