"use client";

import { useState } from "react";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const PRICING_TIERS = [
  {
    name: "Starter",
    description: "Essential tools for emerging groups looking to establish structure.",
    monthlyPrice: 19,
    annualPrice: 15,
    popular: false,
    features: [
      "Up to 500 active members",
      "Basic AI Application grading",
      "Standard Rank Center integration",
      "Email support",
      "1 Division",
    ],
    ctaText: "Start Free Trial",
    ctaHref: "/signup",
    variant: "outline" as const,
  },
  {
    name: "Growth",
    description: "Advanced automation for rapidly expanding communities.",
    monthlyPrice: 49,
    annualPrice: 39,
    popular: true,
    features: [
      "Up to 2,500 active members",
      "Advanced AI Application grading",
      "AI Interviewer access (Basic)",
      "Priority email support",
      "Up to 3 Divisions",
      "Basic Analytics dashboard",
    ],
    ctaText: "Get Started",
    ctaHref: "/signup",
    variant: "primary" as const,
  },
  {
    name: "Professional",
    description: "Comprehensive suite for established organizations requiring scale.",
    monthlyPrice: 99,
    annualPrice: 79,
    popular: false,
    features: [
      "Up to 10,000 active members",
      "Custom AI models for your group",
      "Full AI Interviewer access",
      "AI Training Centers",
      "Unlimited Divisions",
      "Advanced Analytics & Auditing",
      "24/7 Priority Support",
    ],
    ctaText: "Get Started",
    ctaHref: "/signup",
    variant: "outline" as const,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for massive alliances and multi-group collectives.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    popular: false,
    features: [
      "Unlimited members & divisions",
      "Dedicated account manager",
      "Custom API integrations",
      "White-label options",
      "SLA guarantees",
      "On-premise deployment options",
      "Strategic consulting",
    ],
    ctaText: "Contact Sales",
    ctaHref: "/enterprise",
    variant: "secondary" as const,
  },
];

const FAQS = [
  {
    question: "How does the AI grading work?",
    answer: "Our AI models are trained on thousands of qualitative data points. You provide the grading rubric and the ideal responses, and our system securely evaluates applications against your specific criteria, flagging anomalies for human review.",
  },
  {
    question: "Can I use Superior for multiple Roblox groups?",
    answer: "Yes. Our Growth, Professional, and Enterprise plans support managing multiple divisions or sister groups from a single centralized dashboard without needing to switch accounts.",
  },
  {
    question: "Do I need technical knowledge to set this up?",
    answer: "No. Superior is designed to be plug-and-play. While we offer advanced API access for Enterprise clients, our core dashboard requires zero coding experience to deploy.",
  },
  {
    question: "What happens if we exceed our member limit?",
    answer: "We will never lock you out of your account. If you consistently exceed your tier's limits, we will notify you and provide a grace period to upgrade your plan seamlessly.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="pt-32 pb-24 bg-superior-mist-light dark:bg-[#0a0f16] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader
            eyebrow="Pricing"
            title="Transparent scale."
            subtitle="Predictable pricing designed to grow alongside your organization. No hidden fees, no complex usage limits."
          />

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <span className={cn(
              "text-sm font-medium transition-colors",
              !isAnnual ? "text-superior-blue-dark dark:text-white" : "text-superior-slate dark:text-superior-mist-dark"
            )}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-superior-slate-light dark:bg-superior-slate-dark transition-colors focus:outline-none focus:ring-2 focus:ring-superior-blue focus:ring-offset-2"
              role="switch"
              aria-checked={isAnnual}
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={cn(
                  "inline-block h-5 w-5 transform rounded-full bg-white transition-transform",
                  isAnnual ? "translate-x-8 bg-superior-pine" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn(
              "text-sm font-medium transition-colors flex items-center gap-2",
              isAnnual ? "text-superior-blue-dark dark:text-white" : "text-superior-slate dark:text-superior-mist-dark"
            )}>
              Annually <span className="text-xs text-superior-pine bg-superior-pine/10 px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
          {PRICING_TIERS.map((tier, idx) => (
            <AnimatedReveal
              key={tier.name}
              delay={0.1 * idx}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl bg-white dark:bg-[#0f1721] border transition-all duration-300",
                tier.popular
                  ? "border-superior-pine shadow-xl shadow-superior-pine/5 dark:shadow-superior-pine/10 scale-105 z-10"
                  : "border-superior-slate-light/30 dark:border-superior-slate-dark/40 shadow-sm hover:shadow-md hover:border-superior-slate"
              )}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-superior-pine text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-superior-blue-dark dark:text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-superior-slate dark:text-superior-mist-dark h-10">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-superior-blue-dark dark:text-white font-serif">
                    {typeof tier.monthlyPrice === "string"
                      ? tier.monthlyPrice
                      : `$${isAnnual ? tier.annualPrice : tier.monthlyPrice}`}
                  </span>
                  {typeof tier.monthlyPrice !== "string" && (
                    <span className="text-superior-slate dark:text-superior-slate-light mb-1 font-medium">/mo</span>
                  )}
                </div>
                {typeof tier.monthlyPrice !== "string" && typeof tier.annualPrice === "number" && isAnnual && (
                  <p className="text-xs text-superior-slate mt-1">Billed annually at ${tier.annualPrice * 12}</p>
                )}
                {typeof tier.monthlyPrice === "string" && (
                  <p className="text-xs text-superior-slate mt-1 opacity-0">Placeholder</p> // Spacer
                )}
              </div>

              <Button
                href={tier.ctaHref}
                variant={tier.variant}
                className="w-full mb-8 py-6"
              >
                {tier.ctaText}
              </Button>

              <div className="flex flex-col gap-4 mt-auto">
                <p className="text-xs font-bold uppercase tracking-wider text-superior-slate-dark dark:text-superior-slate-light">
                  Includes:
                </p>
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-superior-pine shrink-0" />
                    <span className="text-sm text-superior-blue dark:text-superior-mist-light font-medium leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know about billing, features, and scale."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {FAQS.map((faq, idx) => (
              <AnimatedReveal key={idx} delay={0.1 * idx} direction="up" className="bg-white dark:bg-[#0f1721] p-8 rounded-2xl border border-superior-slate-light/20 dark:border-superior-slate-dark/30 shadow-sm">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-superior-slate-light dark:text-superior-slate shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-superior-blue-dark dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-superior-slate dark:text-superior-mist-dark leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal delay={0.4} className="mt-16 text-center">
            <p className="text-superior-slate dark:text-superior-mist-dark font-medium mb-4">
              Still have questions?
            </p>
            <Button href="/contact" variant="outline">
              Contact Support
            </Button>
          </AnimatedReveal>
        </div>
      </div>
    </div>
  );
}