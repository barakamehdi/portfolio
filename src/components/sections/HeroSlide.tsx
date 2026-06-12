"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HeroSlide() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Scaling systems. Building the future.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30 md:opacity-40"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)
            `,
            animation: "meshGradient 15s ease infinite",
            backgroundSize: "200% 200%"
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <motion.div className="relative z-10 text-center px-4 md:px-6 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-bg-secondary border border-border mb-6 md:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs md:text-sm text-text-secondary font-mono">Full-Stack Engineer @ 42 Network</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-6"
          style={{
            background: "linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          EL BARAKA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-secondary mb-8 md:mb-12 min-h-[28px] md:min-h-[40px] font-light"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-5 md:h-8 ml-1 bg-accent align-middle"
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-4 md:gap-6"
        >
          <a
            href="https://github.com/elbaraka"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 rounded-full bg-bg-secondary border border-border hover:border-accent hover:bg-accent-glow transition-all duration-300 group"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5 text-text-secondary group-hover:text-accent transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/elbaraka"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 rounded-full bg-bg-secondary border border-border hover:border-accent hover:bg-accent-glow transition-all duration-300 group"
          >
            <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-text-secondary group-hover:text-accent transition-colors" />
          </a>
          <a
            href="mailto:elbaraka@student.1337.ma"
            className="p-2.5 md:p-3 rounded-full bg-bg-secondary border border-border hover:border-accent hover:bg-accent-glow transition-all duration-300 group"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 text-text-secondary group-hover:text-accent transition-colors" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
