import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Services", "About", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const sectionId = id.toLowerCase();
    if (isHome) {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 glass"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 max-w-7xl">
        <button onClick={() => scrollTo("home")} className="py-1 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
          <img src="/logo.png" alt="AIM" className="h-9 w-auto max-w-[120px] object-contain" />
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block btn-outline px-6 py-2.5 border-primary/40 text-primary hover:bg-primary/5"
        >
          Get Started
        </button>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground p-2 -m-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden glass border-t border-white/[0.06] py-5 px-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <ul className="flex flex-col items-center gap-5">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
