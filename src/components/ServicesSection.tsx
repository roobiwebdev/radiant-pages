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
    descriptor: "Non-surgical sculpting treatments",
    treatments: ["Enhancement", "Fat reduction", "Radio frequency", "Wood therapy"],
  },
  {
    id: "facial-injectables",
    name: "Facial Injectables",
    descriptor: "Subtle, natural enhancements",
    treatments: ["Botox", "Dermal fillers", "Facial balancing", "Polynucleotides"],
  },
  {
    id: "fat-dissolving",
    name: "Fat Dissolving",
    descriptor: "Targeted stubborn fat reduction",
    treatments: ["Lemon Bottle", "Lipo Lab", "Double chin", "Body areas"],
  },
  {
    id: "body-enhancements",
    name: "Body Enhancements",
    descriptor: "Curves with expert precision",
    treatments: ["Liquid BBL", "Bum & Hip fillers"],
  },
  {
    id: "skin-treatments",
    name: "Skin Treatments",
    descriptor: "Advanced skin rejuvenation",
    treatments: ["Biorepeel", "Skin boosters", "Microneedling", "Cellulite"],
  },
  {
    id: "weight-loss",
    name: "Weight Loss",
    descriptor: "Medically-guided programmes",
    treatments: ["Prescription pens", "Packages"],
  },
  {
    id: "beauty",
    name: "Beauty Treatments",
    descriptor: "Finishing touches",
    treatments: ["Lash lift", "Teeth whitening"],
  },
  {
    id: "consultations",
    name: "Consultations",
    descriptor: "Personalised care planning",
    treatments: ["New clients", "Reviews", "Existing packages"],
  },
];

const ServiceCard = ({ service }: { service: ServiceCategory }) => {
  return (
    <article className="group cursor-pointer rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Category Name */}
      <h3 className="editorial-heading mb-2 text-lg text-foreground">
        {service.name}
      </h3>
      
      {/* Descriptor */}
      <p className="mb-4 font-sans text-sm leading-relaxed text-muted-foreground">
        {service.descriptor}
      </p>

      {/* Treatments List */}
      <div className="mb-4 space-y-1">
        {service.treatments.slice(0, 3).map((treatment, idx) => (
          <p key={idx} className="font-sans text-xs text-foreground/70">
            • {treatment}
          </p>
        ))}
        {service.treatments.length > 3 && (
          <p className="font-sans text-xs text-muted-foreground">
            + {service.treatments.length - 3} more
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 font-sans text-sm text-primary transition-colors group-hover:text-primary/80">
        <span>Explore treatments</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

        {/* Service Cards Grid - Simple 4x2 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
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
