"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Layers, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Cpu,
    title: "Systems Thinking",
    description: "I architect solutions from first principles. Every line serves a purpose. Every decision is intentional."
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "Fast is never fast enough. I optimize at every layer—from algorithm to assembly."
  },
  {
    icon: Layers,
    title: "Full-Stack Depth",
    description: "From kernel to UI. I bridge the gap between systems programming and user experience."
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-widest text-accent font-mono mb-4 block"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold mb-8 leading-tight"
            >
              I engineer{' '}
              <span className="text-accent">solutions</span>
              , not just code
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-text-secondary leading-relaxed mb-8"
            >
              From POSIX shells to real-time multiplayer games, I tackle complex problems with systematic thinking. At 42 Network, I learned that the best engineers aren't those who know all the answers—they're those who know how to find them.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-secondary leading-relaxed mb-8"
            >
              My approach combines rigorous problem decomposition with creative architecture. I don't just build features—I design systems that scale, adapt, and evolve.
            </motion.p>

            <motion.a
              href="#projects"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all group"
            >
              <span className="font-medium">Explore my work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Value Cards */}
          <div className="grid gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-bg-secondary border border-border hover:border-accent/50 transition-all duration-500 hover:bg-bg-tertiary"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-bg-tertiary group-hover:bg-accent-glow transition-colors">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}