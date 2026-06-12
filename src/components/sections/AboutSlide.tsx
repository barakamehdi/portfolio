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

const stats = [
  { label: "Projects Built", value: "20+" },
  { label: "Years at 42", value: "2+" },
  { label: "Tech Stack", value: "15+" },
  { label: "Code Impact", value: "High" }
];

export default function AboutSlide() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">
      <div className="max-w-6xl w-full max-h-full py-8 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-6 md:mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Full-stack engineer from the{" "}
            <span className="text-accent">42 Network</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed mb-6 md:mb-8"
            >
              I build high-performance systems and ship features that matter.
              Passionate about clean architecture, optimization, and solving hard problems
              through the rigorous peer-learning methodology of the 42 Network.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-3 md:gap-5">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: false }}
                  className="p-4 md:p-6 rounded-xl bg-bg-secondary border border-border hover:border-accent transition-all duration-300 group h-full"
                >
                  <item.icon className="w-5 h-5 md:w-7 md:h-7 text-accent mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-indigo-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-accent/30 hover:border-accent transition-colors duration-300">
                <img
                  src="/profile.jpg"
                  alt="El Baraka"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10 pt-6 md:pt-8 border-t border-border"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-2">
              <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
