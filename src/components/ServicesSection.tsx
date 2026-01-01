import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCategory {
  id: string;
  name: string;
  descriptor: string;
  image: string;
}

const services: ServiceCategory[] = [
  {
    id: "body-contouring",
    name: "Body Contouring",
    descriptor: "Non-surgical sculpting for refined silhouettes",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=800&fit=crop",
  },
  {
    id: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    descriptor: "Advanced treatments for radiant, youthful skin",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop",
  },
  {
    id: "facial-aesthetics",
    name: "Facial Aesthetics",
    descriptor: "Subtle enhancements that honour your natural beauty",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop",
  },
  {
    id: "wellness",
    name: "Wellness & Recovery",
    descriptor: "Holistic care for body and mind restoration",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=800&fit=crop",
  },
];

const ServiceCard = ({ service }: { service: ServiceCategory }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="editorial-card group relative cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="editorial-heading mb-2 text-2xl text-primary-foreground md:text-3xl">
          {service.name}
        </h3>
        <p
          className={`font-sans text-sm text-primary-foreground/80 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {service.descriptor}
        </p>
        
        {/* Hover CTA */}
        <div
          className={`mt-4 flex items-center gap-2 font-sans text-sm text-primary-foreground transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <span>Explore treatments</span>
          <ArrowRight className="h-4 w-4" />
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
            Each treatment category represents our commitment to excellence—modern 
            techniques, refined results, and care that respects your journey.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
