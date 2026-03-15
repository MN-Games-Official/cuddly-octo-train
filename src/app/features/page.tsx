import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { cn } from "@/lib/utils";
import { CheckCircle2, Workflow, ShieldCheck, BarChart3, Users, Network } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-0">
      {/* Page Hero */}
      <section className="relative py-20 overflow-hidden bg-superior-mist-light dark:bg-[#0a0f16]">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <SectionHeader
            eyebrow="The Ecosystem"
            title="Intelligent Operations"
            subtitle="Explore our comprehensive suite of modular AI products designed specifically for Roblox group management. Built to bring consistency, automation, and scale to your organization."
          />
        </div>
      </section>

      {/* Feature 1: AI Applications */}
      <FeatureSplitSection
        id="applications"
        title="AI Applications"
        description="Structured application intake with AI-powered grading workflows. Transform how your group screens candidates by automating evaluations and highlighting top talent instantly."
        benefits={[
          "Customizable questionnaire logic tailored to specific divisions.",
          "Automated grading based on predefined qualitative rubrics.",
          "Reduced manual review time, enabling faster intake pipelines.",
          "A unified dashboard to review flagged, accepted, or denied candidates."
        ]}
        imageColor="bg-superior-blue"
        imagePlaceholder="application UI"
        reversed={false}
      />

      {/* Feature 2: AI Rank Centers */}
      <FeatureSplitSection
        id="rank-centers"
        title="AI Rank Centers"
        description="A streamlined system for promotion workflows, ranking logic, and progression management. Ensure every staff member advances according to consistent, transparent standards."
        benefits={[
          "Enforce consistent advancement requirements across all divisions.",
          "Reduce promotional bottlenecks during peak activity periods.",
          "Provide members with transparent progression pathways and requirements.",
          "Automatic role assignment syncing with Roblox groups."
        ]}
        imageColor="bg-superior-slate-dark"
        imagePlaceholder="rank progression UI"
        reversed={true}
      />

      {/* Feature 3: AI Interviewers */}
      <FeatureSplitSection
        id="interviewers"
        title="AI Interviewers"
        description="Intelligent conversational interview systems that standardize candidate evaluation. Guarantee fairer evaluations, configure specific workflows, and significantly reduce human interviewer workload."
        benefits={[
          "Standardized question sets with dynamic AI follow-ups.",
          "Real-time sentiment and competency analysis.",
          "Elimination of scheduling conflicts for initial interview phases.",
          "Detailed candidate summaries delivered straight to HR leadership."
        ]}
        imageColor="bg-superior-pine-dark"
        imagePlaceholder="interview assessment UI"
        reversed={false}
      />

      {/* Feature 4: AI Training Centers */}
      <FeatureSplitSection
        id="training"
        title="AI Training Centers"
        description="Structured training and growth infrastructure for staff and candidates. Facilitate scalable onboarding while maintaining rigorous quality control."
        benefits={[
          "Guided, module-based development for new recruits.",
          "Scalable onboarding capable of handling hundreds of users concurrently.",
          "Real-time progress visibility for department heads.",
          "Automated certification and rank promotion upon module completion."
        ]}
        imageColor="bg-superior-driftwood-dark"
        imagePlaceholder="training module UI"
        reversed={true}
      />

      {/* Platform Value Grid */}
      <section className="py-24 bg-white dark:bg-[#0f1721]">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="Beyond The Tools"
            title="A Cohesive Platform Strategy"
            subtitle="Superior is not a collection of fragmented utilities. It is a unified operations suite built to handle complex, multi-group scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            <PlatformValueCard
              icon={<ShieldCheck />}
              title="Auditability"
              description="Comprehensive logging of all administrative actions, grading decisions, and rank changes to ensure total transparency."
            />
            <PlatformValueCard
              icon={<Workflow />}
              title="Standardization"
              description="Eliminate rogue promotions and biased grading by embedding your organization's exact rules into our platform logic."
            />
            <PlatformValueCard
              icon={<Users />}
              title="Administration"
              description="Granular permission systems allowing you to delegate safely to HR staff without compromising root group control."
            />
            <PlatformValueCard
              icon={<BarChart3 />}
              title="Analytics"
              description="Gain insights into application volume, pass rates, and training bottlenecks to optimize your organizational pipeline."
            />
            <PlatformValueCard
              icon={<Network />}
              title="Cross-Group Scalability"
              description="Manage sister groups, sub-divisions, and massive alliances from a single pane of glass without logging in and out."
            />
            <PlatformValueCard
              icon={<CheckCircle2 />}
              title="Operational Clarity"
              description="Replace messy spreadsheets and fragmented Discord channels with a dedicated, professional operational hub."
            />
          </div>
        </div>
      </section>

      {/* Workflow Visual Section */}
      <section className="py-24 bg-superior-mist-light dark:bg-[#0a0f16] border-t border-superior-slate-light/20 dark:border-superior-slate-dark/30">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <SectionHeader
            eyebrow="The Workflow"
            title="Seamless End-to-End Pipeline"
            subtitle="Watch how Superior automates a candidate's journey from their first application to becoming fully trained staff."
          />

          <div className="mt-20 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">

            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-superior-slate-light/50 dark:bg-superior-slate-dark/50 -translate-y-1/2 z-0" />

            {[
              { step: "1", title: "Apply", label: "AI Applications" },
              { step: "2", title: "Interview", label: "AI Interviewers" },
              { step: "3", title: "Train", label: "AI Training Centers" },
              { step: "4", title: "Promote", label: "AI Rank Centers" },
            ].map((item, i) => (
              <AnimatedReveal
                key={item.step}
                delay={i * 0.2}
                direction="up"
                className="relative z-10 flex flex-col items-center bg-white dark:bg-[#0f1721] p-6 rounded-2xl shadow-sm border border-superior-slate-light/20 dark:border-superior-slate-dark/40 w-full md:w-48"
              >
                <div className="w-12 h-12 rounded-full bg-superior-blue text-white dark:bg-superior-mist-light dark:text-superior-blue-dark flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                  {item.step}
                </div>
                <h4 className="font-serif font-bold text-superior-blue-dark dark:text-white text-lg mb-1">{item.title}</h4>
                <span className="text-xs text-superior-slate font-medium uppercase tracking-wider">{item.label}</span>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}

function FeatureSplitSection({
  id,
  title,
  description,
  benefits,
  imageColor,
  imagePlaceholder,
  reversed,
}: {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  imageColor: string;
  imagePlaceholder: string;
  reversed: boolean;
}) {
  return (
    <section id={id} className="py-24 bg-white dark:bg-[#0f1721] odd:bg-superior-mist-light/30 dark:odd:bg-[#0a0f16]/30 border-b border-superior-slate-light/10 dark:border-superior-slate-dark/20 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
          reversed ? "lg:flex-row-reverse" : ""
        )}>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <AnimatedReveal>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-superior-blue-dark dark:text-white">
                {title}
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <p className="text-lg text-superior-slate dark:text-superior-mist-dark leading-relaxed font-medium">
                {description}
              </p>
            </AnimatedReveal>

            <ul className="mt-4 flex flex-col gap-4">
              {benefits.map((benefit, i) => (
                <AnimatedReveal key={i} delay={0.2 + (i * 0.1)} direction="left" className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-superior-pine shrink-0 mt-0.5" />
                  <span className="text-superior-blue-dark dark:text-superior-mist-light font-medium">
                    {benefit}
                  </span>
                </AnimatedReveal>
              ))}
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="w-full lg:w-1/2">
            <AnimatedReveal delay={0.2} direction={reversed ? "left" : "right"}>
              <div className={cn(
                "relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-xl border border-superior-slate-light/20 dark:border-superior-slate-dark/30 flex items-center justify-center p-8",
                imageColor
              )}>
                <div className="w-full h-full bg-white/90 dark:bg-[#0f1721]/90 rounded-xl shadow-inner border border-white/20 dark:border-white/5 backdrop-blur-sm flex flex-col p-6 items-center justify-center opacity-80 transition-opacity hover:opacity-100 cursor-default">
                  <div className="text-superior-slate-light/50 dark:text-superior-slate-dark/50 mb-4 font-serif text-6xl">✨</div>
                  <h4 className="text-superior-slate dark:text-superior-slate-light font-semibold tracking-widest uppercase text-sm">
                    {imagePlaceholder} Visualization
                  </h4>
                  <p className="text-superior-slate-light dark:text-superior-slate-dark mt-2 text-xs font-medium max-w-[200px] text-center">
                    Mockup representation of platform module.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

function PlatformValueCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <AnimatedReveal
      direction="up"
      className="p-8 rounded-2xl border border-superior-slate-light/20 dark:border-superior-slate-dark/30 hover:border-superior-pine/40 transition-colors shadow-sm bg-superior-mist-light/20 dark:bg-[#0a0f16]/50 group"
    >
      <div className="w-12 h-12 rounded-xl bg-superior-mist dark:bg-superior-slate-dark/40 text-superior-pine flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-superior-blue-dark dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-superior-slate dark:text-superior-mist-dark font-medium leading-relaxed text-sm">
        {description}
      </p>
    </AnimatedReveal>
  );
}