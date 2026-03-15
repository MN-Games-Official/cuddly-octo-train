"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number | "some" | "all";
};

export default function AnimatedReveal({
  children,
  delay = 0,
  duration = 0.6,
  className,
  direction = "up",
  amount = "some",
}: RevealProps) {
  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directionOffset[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // elegant ease-out
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}