import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2800;
    const interval = 20;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      // Eased progress for smooth feel
      const t = current / steps;
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setProgress(Math.min(Math.round(eased * 100), 100));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800);
        }, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Grid background – refined */}
          <div className="absolute inset-0 grid-bg opacity-[0.2]" />

          {/* Scanline effect */}
          <div className="absolute inset-0 scanline pointer-events-none" />

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * -200],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Glowing lines – softer */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent translate-y-20" />

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-8">
            <motion.img
              src="/logo.png"
              alt="AIM"
              className="h-24 md:h-32 w-auto max-w-[280px] object-contain drop-shadow-[0_0_32px_rgba(185,28,28,0.4)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.p
              className="text-sm md:text-base font-body tracking-[0.5em] uppercase text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Automated Industrial Machinery
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="w-64 md:w-80 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="relative h-[2px] bg-border rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="text-center mt-4 font-mono text-lg tracking-widest text-primary">
                {progress}%
              </p>
            </motion.div>
          </div>

          {/* Corner decorations – subtler */}
          <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-glow opacity-30" />
          <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-glow opacity-30" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-glow opacity-30" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-glow opacity-30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
