import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CheckCircle2, ShieldCheck, Zap, Layers } from "lucide-react";

export default function PlatformOverview() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-superior-pine" />,
      title: "Secure Administration",
      description: "Robust logging, transparent audits, and role-based access control for complex organizational structures.",
    },
    {
      icon: <Zap className="w-8 h-8 text-superior-pine" />,
      title: "AI-Enhanced Efficiency",
      description: "Automate grading, standardize interviews, and reduce manual HR workload by up to 80%.",
    },
    {
      icon: <Layers className="w-8 h-8 text-superior-pine" />,
      title: "Multi-Group Scale",
      description: "Manage multiple divisions, sub-groups, and sister organizations from a single unified platform.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-superior-pine" />,
      title: "Consistent Staff Systems",
      description: "Eliminate bias and standardize progression pathways with automated rank centers.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-superior-mist-light dark:bg-[#0f1721] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="The Platform"
          title="Professional Roblox Operations"
          subtitle="Superior provides modern, premium tooling designed specifically for the complex administrative needs of large-scale Roblox communities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-20">
          {features.map((feature, idx) => (
            <AnimatedReveal
              key={feature.title}
              direction="up"
              delay={0.1 * idx}
              className="relative p-8 rounded-2xl bg-white dark:bg-superior-blue-dark/50 border border-superior-slate-light/20 dark:border-superior-slate-dark/30 hover:border-superior-pine/40 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <div className="mb-6 p-4 inline-flex items-center justify-center rounded-xl bg-superior-mist dark:bg-superior-slate-dark/50">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-superior-blue-dark dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-superior-slate dark:text-superior-mist-dark leading-relaxed font-medium text-sm md:text-base">
                {feature.description}
              </p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}