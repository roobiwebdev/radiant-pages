
const results = [
    {
        image: "/assets/img2.jpeg",
        title: "Facial Rejuvenation",
        description: "Subtle facial balancing to restore natural contours and vitality."
    },
    {
        image: "/assets/img3.jpeg",
        title: "Lip Enhancement",
        description: "Ethical and precise lip augmentation for a refreshed, natural look."
    },
    {
        image: "/assets/img4.jpeg",
        title: "Body Contouring",
        description: "Helping you feel more comfortable and aligned in your own body."
    }
];

const ResultsSection = () => {
    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 text-center">
                    <p className="mb-4 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground animate-fade-up">
                        Our Work
                    </p>
                    <h2 className="editorial-heading mb-6 text-4xl md:text-5xl animate-fade-up">
                        Real Results, <span className="text-primary italic">Real Healing</span>
                    </h2>
                    <p className="editorial-body mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-up">
                        Every treatment is delivered with deep respect for your unique features, aiming for subtle rejuvenation that feels like you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {results.map((result, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-3xl bg-secondary animate-fade-up"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            <div className="aspect-[4/5] w-full overflow-hidden">
                                <img
                                    src={result.image}
                                    alt={result.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-8 text-white">
                                <h3 className="editorial-heading text-2xl mb-2">{result.title}</h3>
                                <p className="font-sans text-sm text-zinc-300 leading-relaxed font-light">
                                    {result.description}
                                </p>
                            </div>

                            {/* Desktop Always Visible Label (Optional) */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg transition-transform duration-500 group-hover:translate-y-20 dark:bg-zinc-900/90 md:block">
                                <h3 className="font-serif text-lg text-foreground">{result.title}</h3>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">View Result</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center animate-fade-up">
                    {/* <p className="font-sans text-sm italic text-muted-foreground">
                        * Consent has been provided by all clients for these images to be shared. Results are unique to each individual.
                    </p> */}
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;
