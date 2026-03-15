import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Button from "@/components/ui/Button";

export default function ClosingCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-superior-blue-dark">
      {/* Background Image/Texture Placeholder (Foggy/Coastal) */}
      <div
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-superior-blue-dark via-superior-blue-dark/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-superior-blue-dark via-transparent to-superior-blue-dark" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <AnimatedReveal>
          <span className="inline-block py-1 px-3 rounded-full bg-superior-pine-dark/40 border border-superior-pine/30 text-superior-mist-light text-sm font-semibold tracking-widest uppercase mb-8 backdrop-blur-md">
            The Standard for Scale
          </span>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
            Ready for a new era of <br className="hidden md:block" />
            <span className="text-superior-mist-light">administrative clarity?</span>
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <p className="mt-6 text-xl text-superior-slate-light font-medium max-w-2xl leading-relaxed">
            Join the premium organizations using Superior to streamline operations, ensure fairness, and scale their Roblox groups effortlessly.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.3} className="mt-12 flex flex-col sm:flex-row items-center gap-6">
          <Button href="/signup" size="lg" className="w-full sm:w-auto min-w-[200px] shadow-2xl">
            Start Free Today
          </Button>
          <Button
            href="/enterprise"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-w-[200px] border-superior-mist-light/20 text-white hover:bg-white/10 hover:text-white"
          >
            Talk to Sales
          </Button>
        </AnimatedReveal>

        <AnimatedReveal delay={0.4} className="mt-8 text-sm text-superior-slate font-medium">
          No credit card required for standard features.
        </AnimatedReveal>
      </div>
    </section>
  );
}