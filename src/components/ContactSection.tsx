import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    domain: "",
  });

  const domainOptions = [
    "Web Development",
    "AI Automation",
    "Mobile App Development",
    "Major Project",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!supabase) {
      setError("Contact form is not configured.");
      return;
    }
    setLoading(true);
    try {
      const { error: insertError } = await supabase.from("contacts").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        domain: formData.domain || null,
        message: formData.message.trim(),
      });
      if (insertError) throw insertError;
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "", domain: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-background/40 border border-white/[0.08] rounded-sm px-4 py-3.5 font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all duration-200";

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[150px]" />

      <div className="container mx-auto px-6 relative max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 max-w-5xl mx-auto items-start">
          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-lg text-muted-foreground leading-[1.7]">
              Ready to transform your business with cutting-edge technology? Reach out and let's discuss your next project.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-muted-foreground">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:automatedindustrymachinery@gmail.com" className="font-body hover:text-primary transition-colors break-all">
                  automatedindustrymachinery@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="font-body">+91 9121795950</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="font-body">+91 7780764158</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="glass rounded-lg p-8 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            {submitted ? (
              <div className="text-center py-10">
                <p className="font-display text-xl text-primary text-glow mb-2">Message Sent</p>
                <p className="font-body text-muted-foreground leading-[1.7]">We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                {error && (
                  <p className="font-body text-sm text-red-500">{error}</p>
                )}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData((p) => ({ ...p, domain: e.target.value }))}
                    className={`${inputClass} pr-10 appearance-none cursor-pointer [&>option]:bg-background [&>option]:text-foreground`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center' }}
                  >
                    <option value="">Select domain</option>
                    {domainOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    className={`${inputClass} resize-none min-h-[120px]`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
