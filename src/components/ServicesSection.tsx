import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Bot, Smartphone, Layers } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    path: "/videos",
    description: "High-performance, scalable web applications built with modern technologies. From corporate platforms to complex SaaS products.",
    features: ["React & Next.js", "Custom CMS", "E-Commerce", "API Integration"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    path: "/videos",
    description: "Intelligent workflow automation that eliminates repetitive tasks and optimizes business processes using advanced AI systems.",
    features: ["Workflow Automation", "AI Agents", "Data Pipelines", "Process Optimization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    path: "/videos",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    features: ["React Native", "iOS & Android", "UI/UX Design", "App Store Launch"],
  },
  {
    icon: Layers,
    title: "Major Project",
    path: "/videos",
    description: "End-to-end solutions combining web, AI automation, and mobile in one integrated delivery. Ideal for large-scale digital transformation and multi-platform products.",
    features: ["Web Development", "AI Automation", "App Development", "Unified Strategy"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.08]" />

      <div className="container mx-auto px-6 relative max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <Link key={service.title} to={service.path} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg">
              <motion.div
                className="group glass-card rounded-lg p-8 h-full hover:border-primary/20 transition-all duration-500 relative overflow-hidden card-hover cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 shrink-0 bg-gradient-to-b from-primary/15 to-primary/5 border border-primary/20 group-hover:border-primary/30 group-hover:box-glow-hover shadow-[inset_0_1px_0_0_hsl(0_0%_100%_/_0.04)]">
                    <service.icon className="text-primary" size={24} />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 tracking-tight">{service.title}</h3>
                  <p className="font-body text-muted-foreground mb-6 leading-[1.7]">{service.description}</p>

                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="font-body text-sm text-muted-foreground flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
