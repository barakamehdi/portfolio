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
          className="absolute inset-0 opacity-40"
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
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      {/* Content */}
      <motion.div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-secondary border border-border mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-text-secondary font-mono">Full-Stack Engineer @ 42 Network</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-7xl md:text-8xl font-bold tracking-tight mb-6"
          style={{
            background: "linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          EL BARAKA
        </motion.h1>

        {/* Tagline with Typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-3xl text-text-secondary mb-12 min-h-[40px] font-light"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-8 ml-2 bg-accent align-middle"
          />
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/elbaraka"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-bg-secondary border border-border hover:border-accent hover:bg-accent-glow transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/elbaraka"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-bg-secondary border border-border hover:border-accent hover:bg-accent-glow transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
          </a>
          <a
            href="mailto:elbaraka@student.1337.ma"
            className="p-3 rounded-full bg-bg-secondary border border-border hover:border-accent hover:bg-accent-glow transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
