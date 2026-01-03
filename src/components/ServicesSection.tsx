import { ArrowRight, Star } from "lucide-react";

interface ServiceCategory {
  title: string;
  description: string;
  quote: string;
}

const services: ServiceCategory[] = [
  {
    title: "Body Contouring",
    description: "Helps you feel lighter, less physically tense, and more comfortable in your body.",
    quote: "“After my first session I already feel less bloated… like my body can breathe again.”",
  },
  {
    title: "Dermal Fillers",
    description: "Subtle facial balancing to restore a sense of looking like yourself again, especially when fatigue is showing in the face.",
    quote: "“I don’t look different, I just look like me… before the exhaustion kicked in.”",
  },
  {
    title: "Anti-Wrinkle Injections",
    description: "Softens stress-held tension in facial muscles that can contribute to feeling tired, tense or weighed down.",
    quote: "“I didn’t realise how much my face was holding onto the week until it finally unclenched.”",
  },
  {
    title: "Vitamin Injections & Boosters",
    description: "Supports energy levels, immunity and mental clarity when you’re running on empty.",
    quote: "“I actually feel awake in my own skin again.”",
  },
  {
    title: "Skin Boosters",
    description: "Deep hydration for dull, tired skin — bringing back glow that emotional and physical burnout can dim.",
    quote: "“My skin finally looks like it’s had a full night’s sleep.”",
  },
  {
    title: "Weight-Loss Support Treatments",
    description: "For those wanting support in feeling healthier, lighter, more energised and more aligned in themselves.",
    quote: "“It’s not just the weight — it’s the brain fog lifting too.”",
  },
];

const ServiceCard = ({ service, index }: { service: ServiceCategory; index: number }) => {
  return (
    <article className="group cursor-pointer rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
      {/* Title */}
      <h3 className="editorial-heading mb-3 text-xl md:text-2xl text-foreground">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="mb-6 font-sans text-muted-foreground leading-relaxed flex-grow">
        {service.description}
      </p>

      {/* Quote */}
      <div className="mt-auto rounded-xl bg-secondary/50 p-4">
        <div className="mb-2 flex gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
            ))}
        </div>
        <p className="font-serif text-sm italic text-foreground/80 leading-relaxed">
            {service.quote}
        </p>
      </div>
    </article>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
             South Woodford Clinic
          </p>
          <h2 className="editorial-heading mb-6 text-3xl md:text-4xl leading-tight">
            Rhea now offers the following at our South Woodford clinic only (Southwark Clinic), under her brand — <span className="text-primary">Bodies By RS</span>:
          </h2>
        </div>

        {/* Service Cards Grid - Simple 3x2 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>

        {/* Closing Text */}
        <div className="mt-20 max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <p className="editorial-heading text-xl md:text-2xl font-medium leading-relaxed">
            Each service is delivered with Holistic Rising’s heart-led intention, blending healing, presence and integrity with aesthetic support.
          </p>
          
          <div className="py-8 relative">
             <div className="absolute left-1/2 -translate-x-1/2 top-0 h-px w-24 bg-border" />
             <p className="editorial-file text-lg md:text-xl text-muted-foreground italic">
                This is care-focused rejuvenation, not augmentation.<br/>
                It’s about alignment to self, not moving away from it.
             </p>
             <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-px w-24 bg-border" />
          </div>

          <div className="space-y-6">
              <p className="editorial-body text-lg leading-relaxed">
                We’re so proud to offer this gentle, profound and grounded form of aesthetic care for those of you seeking rejuvenation that feels uplifting, familiar and supportive — not separate from who you are.
              </p>
              
              <div className="flex flex-col items-center gap-4">
                  <h3 className="editorial-heading text-2xl text-primary">
                    Welcome, Rhea — we’re honoured to walk this path with you. 🌿
                  </h3>
                  <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase max-w-lg mt-4 leading-loose">
                    #HolisticRising #EthicalAesthetics #MindBodyWellbeing #AestheticsWithIntegrity #FeelLikeYourselfAgain
                  </p>
              </div>

              <a 
                href="https://bodiesbyrs.as.me/schedule/5732e964"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-sans text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                Book Your Session with Rhea
                <ArrowRight className="h-4 w-4" />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
