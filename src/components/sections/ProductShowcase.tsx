"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const PRODUCTS = [
  {
    id: "applications",
    title: "AI Applications",
    shortTitle: "Applications",
    description: "Structured intake systems with AI-powered grading workflows. Reduce manual review time and create cleaner candidate pipelines with intelligent screening.",
    icon: "📋",
    color: "from-blue-500/20 to-cyan-500/20",
    imagePlaceholder: "bg-superior-blue",
  },
  {
    id: "rank-centers",
    title: "AI Rank Centers",
    shortTitle: "Rank Centers",
    description: "Streamlined promotion workflows and ranking logic. Enforce consistent advancement standards and reduce bottlenecks in staff progression.",
    icon: "⭐",
    color: "from-amber-500/20 to-orange-500/20",
    imagePlaceholder: "bg-superior-slate-dark",
  },
  {
    id: "interviewers",
    title: "AI Interviewers",
    shortTitle: "Interviewers",
    description: "Intelligent interview systems that standardize candidate evaluation. Fairer evaluations, reduced workload, and scalable interviewing.",
    icon: "🎤",
    color: "from-purple-500/20 to-pink-500/20",
    imagePlaceholder: "bg-superior-pine-dark",
  },
  {
    id: "training",
    title: "AI Training Centers",
    shortTitle: "Training",
    description: "Structured growth infrastructure for Roblox staff. Guided development, scalable onboarding, and progress visibility.",
    icon: "🎯",
    color: "from-emerald-500/20 to-teal-500/20",
    imagePlaceholder: "bg-superior-driftwood-dark",
  },
];

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0].id);

  const activeData = PRODUCTS.find((p) => p.id === activeProduct) || PRODUCTS[0];

  return (
    <section className="py-32 bg-white dark:bg-[#0f1721] relative overflow-hidden">
      {/* Abstract Background Element inspired by mist/fog */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-superior-mist/40 dark:bg-superior-blue-light/10 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          eyebrow="Core Ecosystem"
          title="Modular Infrastructure"
          subtitle="Superior offers a comprehensive suite of AI-powered tools designed to work together, bringing unparalleled clarity and control to your operations."
        />

        <div className="mt-20 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          {/* Left Column: Navigation & Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product.id)}
                  className={cn(
                    "px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border",
                    activeProduct === product.id
                      ? "bg-superior-blue text-white border-transparent shadow-md dark:bg-superior-mist-light dark:text-superior-blue-dark"
                      : "bg-transparent text-superior-slate hover:text-superior-blue hover:bg-superior-mist/50 border-superior-slate-light/30 dark:border-superior-slate-dark/50 dark:hover:bg-superior-blue-dark"
                  )}
                >
                  <span className="mr-2">{product.icon}</span>
                  {product.shortTitle}
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-superior-blue-dark dark:text-white">
                    {activeData.title}
                  </h3>
                  <p className="text-lg text-superior-slate dark:text-superior-mist-dark font-medium leading-relaxed max-w-lg">
                    {activeData.description}
                  </p>
                  <div>
                    <Button href={`/features#${activeData.id}`} variant="outline">
                      Explore {activeData.shortTitle}
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Visual Mockup Showcase */}
          <div className="w-full lg:w-1/2">
            <AnimatedReveal delay={0.2} direction="left" className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-superior-slate-light/20 dark:border-superior-slate-dark/40 group">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center bg-gradient-to-br",
                    activeData.imagePlaceholder,
                    activeData.color
                  )}
                >
                  {/* Mockup UI Window Placeholder */}
                  <div className="w-[80%] h-[70%] bg-white/95 dark:bg-[#0a0f16]/95 rounded-xl shadow-xl overflow-hidden flex flex-col border border-white/20 dark:border-white/5 backdrop-blur-md">
                    {/* Fake Header */}
                    <div className="h-10 bg-superior-mist-light/50 dark:bg-superior-blue-dark/50 border-b border-superior-slate-light/20 dark:border-superior-slate-dark/30 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                      <div className="ml-4 h-4 w-32 bg-superior-slate-light/30 dark:bg-superior-slate-dark/40 rounded-sm"></div>
                    </div>
                    {/* Fake Content Area */}
                    <div className="flex-1 p-6 flex flex-col gap-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="h-6 w-48 bg-superior-slate-light/40 dark:bg-superior-slate-dark/60 rounded"></div>
                        <div className="h-8 w-24 bg-superior-pine/20 rounded"></div>
                      </div>
                      <div className="flex gap-4 h-full">
                         <div className="w-1/3 flex flex-col gap-3">
                           {[1,2,3,4].map(i => (
                             <div key={i} className="h-12 w-full bg-superior-mist/50 dark:bg-superior-slate-dark/30 rounded-lg"></div>
                           ))}
                         </div>
                         <div className="w-2/3 bg-superior-mist-light/30 dark:bg-superior-blue-dark/20 rounded-lg border border-superior-slate-light/10 dark:border-superior-slate-dark/20 p-4">
                           <div className="h-4 w-3/4 bg-superior-slate-light/40 dark:bg-superior-slate-dark/60 rounded mb-4"></div>
                           <div className="h-3 w-full bg-superior-slate-light/20 dark:bg-superior-slate-dark/30 rounded mb-2"></div>
                           <div className="h-3 w-5/6 bg-superior-slate-light/20 dark:bg-superior-slate-dark/30 rounded mb-2"></div>
                           <div className="h-3 w-4/6 bg-superior-slate-light/20 dark:bg-superior-slate-dark/30 rounded"></div>
                         </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </AnimatedReveal>
          </div>

        </div>
      </div>
    </section>
  );
}