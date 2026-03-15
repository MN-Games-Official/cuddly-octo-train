import { cn } from "@/lib/utils";
import AnimatedReveal from "./AnimatedReveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        align === "center" ? "mx-auto text-center items-center" : "text-left items-start",
        className
      )}
    >
      {eyebrow && (
        <AnimatedReveal direction="up" delay={0.1}>
          <span className="text-sm font-semibold uppercase tracking-widest text-superior-slate dark:text-superior-slate-light">
            {eyebrow}
          </span>
        </AnimatedReveal>
      )}

      <AnimatedReveal direction="up" delay={0.2}>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-superior-blue-dark dark:text-white">
          {title}
        </h2>
      </AnimatedReveal>

      {subtitle && (
        <AnimatedReveal direction="up" delay={0.3}>
          <p className="text-lg md:text-xl text-superior-slate dark:text-superior-mist-dark font-medium leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </AnimatedReveal>
      )}
    </div>
  );
}