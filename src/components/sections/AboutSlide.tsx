"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Systems Engineering",
    description: "Building scalable backend systems and low-level optimizations"
  },
  {
    icon: Zap,
    title: "Full-Stack Development",
    description: "From databases to UI, shipping end-to-end features"
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Tackling complex algorithmic and architectural challenges"
  }
];

export default function AboutSlide() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text Content */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-accent font-mono mb-4 block">
                About Me
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Full-stack engineer from the{" "}
                <span className="text-accent">42 Network</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                I build high-performance systems and ship features that matter. 
                Passionate about clean architecture, optimization, and solving hard problems.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="p-8 rounded-xl bg-bg-secondary border border-border hover:border-accent transition-all duration-300 group h-full"
              >
                <item.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 pt-20 border-t border-border"
          >
            {[
              { label: "Projects Built", value: "20+" },
              { label: "Years at 42", value: "2+" },
              { label: "Tech Stack", value: "15+" },
              { label: "Impact", value: "High" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-accent mb-3">{stat.value}</p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-indigo-500 rounded-3xl blur-2xl opacity-20" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-accent/30 hover:border-accent transition-colors duration-300">
                <img
                  src="/profile.jpg"
                  alt="El Baraka"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
