"use client";

import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck, Building2, Zap, Server, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const ENTERPRISE_FEATURES = [
  {
    icon: <Building2 />,
    title: "Multi-Group Architecture",
    description: "Manage complex hierarchies, sister alliances, and sub-divisions from a unified operational hub. Perfect for military groups and large roleplay communities.",
  },
  {
    icon: <ShieldCheck />,
    title: "Advanced Security & SLAs",
    description: "Enterprise-grade uptime guarantees, priority hotfixes, and dedicated isolated databases for your group's sensitive HR data.",
  },
  {
    icon: <Zap />,
    title: "Custom AI Model Training",
    description: "We tune our grading and interviewing models specifically to your group's unique lore, rulesets, and qualitative expectations.",
  },
  {
    icon: <Server />,
    title: "API & Webhook Access",
    description: "Integrate Superior directly into your custom Discord bots, internal dashboards, and proprietary ranking systems.",
  },
];

export default function EnterprisePage() {
  return (
    <div className="pt-24 md:pt-32 pb-0 bg-white dark:bg-[#0f1721] min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-superior-blue-dark">
        {/* Background Texture (Foggy/Coastal overlay) */}
        <div
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-superior-blue-dark via-superior-blue-dark/50 to-transparent" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <AnimatedReveal>
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-superior-pine/20 border border-superior-pine/30 text-superior-mist-light text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
              <ShieldCheck size={14} className="text-superior-pine" />
              Superior Enterprise
            </span>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1]">
              Custom solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-superior-mist-light to-superior-slate-light">
                massive collectives.
              </span>
            </h1>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-superior-mist font-medium max-w-2xl leading-relaxed">
              We partner with the largest Roblox organizations to build bespoke, scalable infrastructure. Get dedicated support, custom AI training, and advanced API access.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.3} className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button href="#contact-sales" size="lg" className="w-full sm:w-auto min-w-[220px] shadow-2xl bg-white text-superior-blue-dark hover:bg-superior-mist-light">
              Contact Sales
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[220px] bg-transparent border-superior-slate-light/30 text-white hover:bg-white/10"
            >
              View Standard Pricing
            </Button>
          </AnimatedReveal>
        </div>
      </section>

      {/* Why Enterprise */}
      <section className="py-24 bg-superior-mist-light/50 dark:bg-[#0a0f16]">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="The Capabilities"
            title="Beyond Standard Operations"
            subtitle="Enterprise clients receive white-glove onboarding and exclusive architectural features designed for extreme scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-20 max-w-5xl mx-auto">
            {ENTERPRISE_FEATURES.map((feature, idx) => (
              <AnimatedReveal
                key={feature.title}
                delay={0.1 * idx}
                direction="up"
                className="flex gap-6 p-8 rounded-2xl bg-white dark:bg-[#0f1721] border border-superior-slate-light/20 dark:border-superior-slate-dark/30 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-superior-mist dark:bg-superior-slate-dark/40 text-superior-pine flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-superior-blue-dark dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-superior-slate dark:text-superior-mist-dark font-medium leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* White Glove Onboarding & Trust */}
      <section className="py-24 bg-white dark:bg-[#0f1721] border-y border-superior-slate-light/20 dark:border-superior-slate-dark/30">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <AnimatedReveal>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-superior-blue-dark dark:text-white mb-6 leading-tight">
                White-glove <br/>implementation.
              </h2>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <p className="text-lg text-superior-slate dark:text-superior-mist-dark leading-relaxed font-medium mb-8">
                Migrating tens of thousands of members requires care. Our Enterprise team handles the heavy lifting—from importing legacy data to configuring complex division structures and training your HR leadership on the platform.
              </p>
            </AnimatedReveal>
            <ul className="flex flex-col gap-4">
              {[
                "Dedicated implementation specialist.",
                "Custom data migration from legacy systems.",
                "Live training sessions for group leadership.",
                "Direct Slack/Discord channel with our engineering team."
              ].map((item, i) => (
                <AnimatedReveal key={i} delay={0.2 + (i * 0.1)} direction="left" className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-superior-pine shrink-0" />
                  <span className="text-superior-blue-dark dark:text-superior-mist-light font-medium">
                    {item}
                  </span>
                </AnimatedReveal>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
             {/* Abstract Premium Visual */}
             <AnimatedReveal delay={0.2} direction="right" className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-superior-slate-dark">
                <div className="absolute inset-0 bg-gradient-to-br from-superior-blue-dark to-superior-pine-dark opacity-90" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center border border-white/10 rounded-3xl m-4 backdrop-blur-sm bg-white/5">
                  <PhoneCall size={48} className="text-superior-mist-light mb-6 opacity-80" />
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">Direct Engineering Access</h3>
                  <p className="text-superior-mist text-sm font-medium leading-relaxed max-w-xs">
                    Enterprise clients don&apos;t wait in support queues. You get a direct line to the architects building Superior.
                  </p>
                </div>
             </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Sales Contact Placeholder */}
      <section id="contact-sales" className="py-24 md:py-32 bg-superior-mist-light dark:bg-[#0a0f16] scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="bg-white dark:bg-[#0f1721] rounded-3xl p-8 md:p-16 shadow-xl border border-superior-slate-light/30 dark:border-superior-slate-dark/50">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-superior-blue-dark dark:text-white mb-4">
                Let&apos;s discuss your scale.
              </h2>
              <p className="text-superior-slate dark:text-superior-mist-dark font-medium">
                Fill out the form below and an Enterprise specialist will reach out within 24 hours.
              </p>
            </div>

            {/* Placeholder Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-superior-blue-dark dark:text-superior-mist-light">Full Name</label>
                  <input type="text" id="name" className="w-full h-12 px-4 rounded-lg bg-superior-mist-light dark:bg-[#0a0f16] border border-superior-slate-light/50 dark:border-superior-slate-dark focus:outline-none focus:ring-2 focus:ring-superior-pine transition-shadow dark:text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-superior-blue-dark dark:text-superior-mist-light">Work Email</label>
                  <input type="email" id="email" className="w-full h-12 px-4 rounded-lg bg-superior-mist-light dark:bg-[#0a0f16] border border-superior-slate-light/50 dark:border-superior-slate-dark focus:outline-none focus:ring-2 focus:ring-superior-pine transition-shadow dark:text-white" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="group" className="text-sm font-bold text-superior-blue-dark dark:text-superior-mist-light">Roblox Group Name</label>
                  <input type="text" id="group" className="w-full h-12 px-4 rounded-lg bg-superior-mist-light dark:bg-[#0a0f16] border border-superior-slate-light/50 dark:border-superior-slate-dark focus:outline-none focus:ring-2 focus:ring-superior-pine transition-shadow dark:text-white" placeholder="Example Military" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="size" className="text-sm font-bold text-superior-blue-dark dark:text-superior-mist-light">Group Member Count</label>
                  <select id="size" className="w-full h-12 px-4 rounded-lg bg-superior-mist-light dark:bg-[#0a0f16] border border-superior-slate-light/50 dark:border-superior-slate-dark focus:outline-none focus:ring-2 focus:ring-superior-pine transition-shadow text-superior-slate dark:text-superior-mist-dark">
                    <option value="">Select size...</option>
                    <option value="10k-50k">10,000 - 50,000</option>
                    <option value="50k-100k">50,000 - 100,000</option>
                    <option value="100k+">100,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-superior-blue-dark dark:text-superior-mist-light">How can we help?</label>
                <textarea id="message" rows={4} className="w-full p-4 rounded-lg bg-superior-mist-light dark:bg-[#0a0f16] border border-superior-slate-light/50 dark:border-superior-slate-dark focus:outline-none focus:ring-2 focus:ring-superior-pine transition-shadow dark:text-white resize-none" placeholder="Tell us about your organizational challenges..."></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full py-6 text-lg shadow-xl shadow-superior-pine/20">
                Submit Enterprise Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}