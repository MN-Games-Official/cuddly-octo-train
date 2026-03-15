"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function VideoHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-superior-blue-dark">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder video from Pexels matching the misty coastal theme */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
          poster="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
        >
          {/* Replace this src with your actual North Shore video file when ready */}
          <source
            src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-superior-blue-dark via-superior-blue-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-superior-blue-dark/30 backdrop-blur-[2px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-superior-slate-dark/40 border border-superior-slate-light/20 text-superior-mist-light text-sm font-medium tracking-wide mb-6 backdrop-blur-sm">
            Premium Roblox Management
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1]"
        >
          The calm of efficient, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-superior-mist-light to-superior-slate-light">
            secure Roblox management.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-superior-mist font-medium max-w-2xl leading-relaxed"
        >
          Applications, interviews, rank systems, and training — all in one advanced AI platform. Built for client groups that need structure, scale, and confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button href="/signup" size="lg" className="w-full sm:w-auto min-w-[180px]">
            Get Started
          </Button>
          <Button
            href="/enterprise"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-w-[180px] bg-transparent border-superior-slate-light/30 text-white hover:bg-white/10 hover:text-white"
          >
            Contact Sales
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-superior-slate-light text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-superior-slate-light to-transparent"
        />
      </motion.div>
    </section>
  );
}