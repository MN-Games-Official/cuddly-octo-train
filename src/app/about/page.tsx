import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { Trees, Compass, Anchor, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-0 bg-white dark:bg-[#0f1721] min-h-screen">

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <SectionHeader
            eyebrow="Our Story"
            title="Finding calm in the complexity."
            subtitle="Superior was built on a simple belief: Roblox groups deserve the same level of premium, secure, and intuitive operational tooling as any modern enterprise."
          />
        </div>
      </section>

      {/* The Inspiration (Lake Superior) */}
      <section className="py-24 bg-superior-mist-light dark:bg-[#0a0f16] border-y border-superior-slate-light/20 dark:border-superior-slate-dark/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="w-full lg:w-1/2">
              <AnimatedReveal>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-superior-blue-dark dark:text-white mb-6 leading-tight">
                  Inspired by the <br/>North Shore.
                </h2>
              </AnimatedReveal>
              <AnimatedReveal delay={0.1}>
                <p className="text-lg text-superior-slate dark:text-superior-mist-dark leading-relaxed font-medium mb-6">
                  Lake Superior is the largest freshwater lake in the world by surface area. It is massive, cold, deep, and beautifully relentless. The Minnesota North Shore is defined by its rugged cliffs, dense pine forests, dense morning fog, and quiet endurance.
                </p>
                <p className="text-lg text-superior-slate dark:text-superior-mist-dark leading-relaxed font-medium">
                  We drew our brand identity from this environment. Managing a massive online organization can feel like navigating turbulent waters. Superior exists to be the bedrock—the calm, secure, and enduring infrastructure that keeps your operations grounded.
                </p>
              </AnimatedReveal>
            </div>

            <div className="w-full lg:w-1/2">
              <AnimatedReveal delay={0.2} direction="left">
                <div
                  className="w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl relative"
                >
                  {/* Foggy Lake Superior Placeholder Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                    }}
                  />
                  {/* Subtle vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-superior-blue-dark/80 to-transparent" />
                  <div className="absolute inset-0 border border-white/10 rounded-3xl" />
                </div>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-24 bg-white dark:bg-[#0f1721]">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="Core Values"
            title="The Superior Philosophy"
            subtitle="We don't build toys. We build professional tools for serious operators."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-20">
            {[
              {
                icon: <Anchor size={32} className="text-superior-pine" />,
                title: "Stable Systems",
                description: "In complex environments, stability is a feature. Our architecture is designed to be highly available and resilient under massive traffic spikes."
              },
              {
                icon: <Compass size={32} className="text-superior-pine" />,
                title: "Operational Clarity",
                description: "We cut through the noise of messy spreadsheets and fragmented communication. Superior provides a single source of truth for HR data."
              },
              {
                icon: <ShieldCheck size={32} className="text-superior-pine" />,
                title: "Absolute Security",
                description: "We handle your members' data with enterprise-grade encryption and rigorous access controls. Trust is our primary currency."
              },
              {
                icon: <Trees size={32} className="text-superior-pine" />,
                title: "Enduring Scale",
                description: "Built to grow as you do. Whether you manage 500 recruits or a 100,000-member military alliance, the platform doesn't flinch."
              }
            ].map((value, idx) => (
              <AnimatedReveal
                key={value.title}
                direction="up"
                delay={0.1 * idx}
                className="flex flex-col gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-superior-mist-light dark:bg-superior-slate-dark/40 flex items-center justify-center mb-2 shadow-sm border border-superior-slate-light/20 dark:border-superior-slate-dark/30">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-superior-blue-dark dark:text-white">
                  {value.title}
                </h3>
                <p className="text-superior-slate dark:text-superior-mist-dark font-medium leading-relaxed text-sm">
                  {value.description}
                </p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 md:py-32 bg-superior-blue-dark relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop')] mix-blend-overlay" />

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <AnimatedReveal>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              Our Vision
            </h2>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <p className="text-xl md:text-2xl text-superior-mist font-medium leading-relaxed max-w-4xl mx-auto italic">
              &quot;To elevate the standard of operations across the Roblox ecosystem, proving that gaming communities can operate with the same rigor, efficiency, and scale as world-class technology companies.&quot;
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2} className="mt-8">
            <span className="text-superior-pine font-bold uppercase tracking-widest text-sm">— The Superior Team</span>
          </AnimatedReveal>
        </div>
      </section>

      <ClosingCTA />

    </div>
  );
}