import { Award, Heart, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="hero-gradient-bg py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          {/* Left Column - Philosophy */}
          <div>
            <p className="mb-4 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
              A Healing Sanctuary
            </p>
            <h2 className="editorial-heading mb-8 text-4xl md:text-5xl">
              Restoring Harmony
            </h2>
            <div className="space-y-6">
              <p className="editorial-body text-lg leading-relaxed">
                Rhea joins us with over 5 years’ experience as an Advanced Beauty Practitioner, bringing a uniquely ethical, grounded and heart-led approach to aesthetics to our healing sanctuary.
              </p>
              <p className="editorial-body text-lg leading-relaxed">
                At Holistic Rising, healing is about restoring harmony to your whole system — energetically, physically and emotionally — not just changing what you see on the surface. Here, we walk beside you through your journey with presence, care and deep respect for your unique experience.
              </p>
              <p className="editorial-body text-lg leading-relaxed italic text-primary">
                Rhea embodies this philosophy fully.
              </p>
            </div>

            {/* What Makes Rhea Different List */}
            <div className="mt-12">
              <h3 className="editorial-heading text-2xl mb-6">What makes Rhea different? 💗</h3>
              <ul className="space-y-4">
                {[
                  "Her work is rooted in compassion, intention and respect for each person’s healing path",
                  "She blends her healing energy alongside her advanced aesthetic expertise",
                  "Her approach supports subtle rejuvenation that helps you feel like your true self again — refreshed, restored, and realigned, not “altered” or unfamiliar",
                  "Every treatment is delivered with ethical integrity, deep product knowledge and a nurturing, grounded presence",
                  "She works with a trusted medical prescriber who oversees any necessary prescriptions with careful diligence and clinical oversight"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Secondary Text */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="editorial-card p-8 md:p-12">
              <p className="editorial-body mb-6 text-lg leading-relaxed">
                We know so many of us feel depleted by stress, exhaustion, emotional weight or the everyday demands of life — juggling careers, family, emotional challenges, physical ailments, or simply the invisible load of doing it all.
              </p>
              <p className="editorial-body text-lg leading-relaxed font-medium text-foreground">
                Sometimes a small aesthetic adjustment — when delivered with care, ethics and the right healing intention — can do more than refresh your appearance; it can help you reconnect with your confidence, your vitality and your sense of self again. 🌟
              </p>
            </div>

            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-secondary shadow-xl">
              <img
                src="/assets/img5.jpeg"
                alt="Rhea's aesthetic care"
                className="h-full w-full object-cover hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
