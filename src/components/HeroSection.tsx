import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid bg – refined opacity */}
      <div className="absolute inset-0 grid-bg opacity-[0.12]" />

      {/* Radial glow – softer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[140px]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

      <div className="relative container mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-8"
        >
          <p className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase text-primary mb-6">
            Engineering Tomorrow's Solutions
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="text-foreground">We Build</span>
            <br />
            <span className="gradient-text">The Future</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-[1.7]">
            AIM delivers cutting-edge web development, AI automation, and mobile app solutions that transform businesses into industry leaders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary w-full sm:w-auto"
            >
              Explore Services
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline w-full sm:w-auto"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
