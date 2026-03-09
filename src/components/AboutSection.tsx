import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Zap, label: "Projects Delivered", value: "150+" },
  { icon: Shield, label: "Client Retention", value: "98%" },
  { icon: TrendingUp, label: "Growth Rate", value: "3x" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Accent glow – softer */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="container mx-auto px-6 relative max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pr-0 lg:pr-8"
          >
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary mb-4">About AIM</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Precision-Engineered <span className="gradient-text">Technology</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-[1.7] mb-6">
              AIM — Automated Industrial Machinery — is a technology company that builds intelligent digital solutions. We combine engineering precision with creative innovation to deliver systems that drive real business results.
            </p>
            <p className="font-body text-muted-foreground leading-[1.7]">
              From AI-powered automation pipelines to pixel-perfect web and mobile applications, we help businesses operate smarter, faster, and at scale.
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass card-hover rounded-lg p-6 flex items-center gap-6 hover:border-primary/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-[inset_0_1px_0_0_hsl(0_0%_100%_/_0.04)]">
                  <stat.icon className="text-primary" size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-3xl font-bold text-primary text-glow tracking-tight">{stat.value}</p>
                  <p className="font-body text-sm text-muted-foreground tracking-wider uppercase mt-0.5">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
