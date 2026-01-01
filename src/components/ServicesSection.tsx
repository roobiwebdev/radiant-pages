import { ArrowRight } from "lucide-react";

interface ServiceCategory {
  id: string;
  name: string;
  descriptor: string;
  treatments: string[];
}

const services: ServiceCategory[] = [
  {
    id: "biorepeel",
    name: "Biorepeel",
    descriptor: "Advanced chemical peel for skin renewal",
    treatments: ["Deep exfoliation", "Skin rejuvenation", "Acne treatment"],
  },
  {
    id: "body-enhancement",
    name: "Body Contouring – Enhancement",
    descriptor: "Non-surgical body sculpting treatments",
    treatments: ["Body sculpting", "Skin tightening", "Muscle toning"],
  },
  {
    id: "body-fat-reduction",
    name: "Body Contouring – Fat Reduction",
    descriptor: "Targeted fat reduction treatments",
    treatments: ["Cryolipolysis", "Cavitation", "Fat freezing"],
  },
  {
    id: "body-radio-frequency",
    name: "Body Contouring – Radio Frequency",
    descriptor: "RF treatments for skin tightening",
    treatments: ["Skin tightening", "Cellulite reduction", "Body sculpting"],
  },
  {
    id: "wood-therapy",
    name: "Body Contouring – Wood Therapy",
    descriptor: "Natural sculpting with wooden tools",
    treatments: ["Lymphatic drainage", "Body contouring", "Cellulite treatment"],
  },
  {
    id: "packages",
    name: "Body Contouring/Weight Loss Packages",
    descriptor: "Combined treatment packages for results",
    treatments: ["Customised packages", "Course treatments", "Bundle savings"],
  },
  {
    id: "consult",
    name: "Consult & Review",
    descriptor: "Personalised consultations and follow-ups",
    treatments: ["Initial consultation", "Treatment review", "Progress check"],
  },
  {
    id: "polynucleotides",
    name: "Polynucleotides",
    descriptor: "Bio-revitalisation for skin regeneration",
    treatments: ["Skin repair", "Collagen boost", "Anti-ageing"],
  },
  {
    id: "botox",
    name: "Botox/Anti Wrinkle Injections",
    descriptor: "Reduce fine lines and wrinkles",
    treatments: ["Forehead lines", "Crow's feet", "Frown lines"],
  },
  {
    id: "dermal-packages",
    name: "Dermal Filler Facial Balancing",
    descriptor: "Harmonise facial proportions",
    treatments: ["Full face balancing", "Profile enhancement", "Symmetry correction"],
  },
  {
    id: "dermal-fillers",
    name: "Dermal Fillers",
    descriptor: "Restore volume and enhance features",
    treatments: ["Lip fillers", "Cheek fillers", "Jawline contouring"],
  },
  {
    id: "fat-dissolving-lemon",
    name: "Fat Dissolving – Lemon Bottle",
    descriptor: "Targeted fat reduction injections",
    treatments: ["Double chin", "Stubborn fat areas", "Body contouring"],
  },
  {
    id: "fat-dissolving-lipo",
    name: "Fat Dissolving – Lipo Lab",
    descriptor: "Advanced fat dissolving treatment",
    treatments: ["Face", "Body", "Targeted areas"],
  },
  {
    id: "liquid-bbl",
    name: "Liquid BBL/Bum & Hip Fillers",
    descriptor: "Non-surgical body enhancement",
    treatments: ["Hip dips", "Bum enhancement", "Curve sculpting"],
  },
  {
    id: "weight-loss",
    name: "Prescription Weight Loss Pens",
    descriptor: "Medically supervised weight management",
    treatments: ["Weight loss injections", "Appetite control", "Metabolism boost"],
  },
  {
    id: "skin-booster",
    name: "Skin Booster",
    descriptor: "Deep hydration for glowing skin",
    treatments: ["Profhilo", "Seventy Hyal", "Skin quality improvement"],
  },
  {
    id: "skin-rejuvenation",
    name: "Skin Rejuvenation – Cellulite",
    descriptor: "Smooth and firm skin treatment",
    treatments: ["Cellulite reduction", "Skin firming", "Texture improvement"],
  },
  {
    id: "existing-clients",
    name: "Existing Clients Sessions",
    descriptor: "Ongoing courses and packages",
    treatments: ["Course sessions", "Package treatments", "Maintenance"],
  },
  {
    id: "lash-lift",
    name: "Lash Lift",
    descriptor: "Natural lash enhancement",
    treatments: ["Lash lift", "Tint", "Brow lamination"],
  },
  {
    id: "microneedling",
    name: "Microneedling",
    descriptor: "Collagen-inducing skin treatment",
    treatments: ["Face", "Scarring", "Skin texture"],
  },
  {
    id: "model-slots",
    name: "Model Slots",
    descriptor: "Discounted treatments for content",
    treatments: ["Training sessions", "Photo content", "Discounted rates"],
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    descriptor: "Professional smile brightening",
    treatments: ["In-clinic whitening", "Stain removal", "Shade improvement"],
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
