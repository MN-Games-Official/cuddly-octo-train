import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function TrustBanner() {
  const brands = [
    { name: "Group Administration", icon: "🏢" },
    { name: "Global HR Teams", icon: "🌐" },
    { name: "Training Centers", icon: "📚" },
    { name: "Enterprise Collectives", icon: "🤝" },
    { name: "Security Commands", icon: "🛡️" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0f1721] border-b border-superior-slate-light/20 dark:border-superior-slate-dark/30">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <AnimatedReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-superior-slate mb-12">
            Trusted by premium Roblox organizations
          </p>
        </AnimatedReveal>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, i) => (
            <AnimatedReveal
              key={brand.name}
              direction="up"
              delay={0.1 * i}
              className="flex items-center gap-3"
            >
              <span className="text-2xl" aria-hidden="true">{brand.icon}</span>
              <span className="font-serif text-xl font-medium text-superior-slate-dark dark:text-superior-mist-dark">
                {brand.name}
              </span>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}