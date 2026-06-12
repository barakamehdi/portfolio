"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Zap, Code2, Terminal, Database, Globe, Cpu } from "lucide-react";

interface Experience {
  project: string;
  description: string;
  skills: string[];
  type: "piscine" | "exam" | "project";
}

const experiences: Experience[] = [
  {
    project: "ft_ls",
    description: "Unix ls command implementation",
    skills: ["C", "System Calls", "Directory Parsing"],
    type: "project"
  },
  {
    project: "ft_printf",
    description: "Custom printf implementation",
    skills: ["C", "Variadic Functions", "Formatting"],
    type: "project"
  },
  {
    project: "get_next_line",
    description: "Efficient line reading from file descriptors",
    skills: ["C", "Buffer Management", "File I/O"],
    type: "project"
  },
  {
    project: "born2beroot",
    description: "Virtual machine setup and system administration",
    skills: ["Linux", "Virtualization", "Security"],
    type: "project"
  },
  {
    project: "push_swap",
    description: "Optimal sorting algorithm",
    skills: ["Algorithms", "Data structures", "Optimization"],
    type: "project"
  },
  {
    project: "minitalk",
    description: "Signal-based inter_process communication",
    skills: ["Signals", "Processes", "Unix"],
    type: "project"
  },
  {
    project: "philosophers",
    description: "Dining philosophers problem - concurrency",
    skills: ["Multi-threading", "Mutex", "Semaphores"],
    type: "project"
  },
  {
    project: "cub3d",
    description: "Wolfenstein 3D-style raycasting engine",
    skills: ["Graphics", "Raycasting", "Maths"],
    type: "project"
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case "piscine":
      return Zap;
    case "exam":
      return Award;
    default:
      return Code2;
  }
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono mb-4 block">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold">
            42 <span className="text-accent">curriculum</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Rigorous peer-to-peer learning. No lectures. No teachers. Just problems and solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent to-transparent opacity-30" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.project}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-4 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-bg-secondary border-2 border-accent flex items-center justify-center z-10">
                    <Icon className="w-3 h-3 text-accent" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] p-5 rounded-xl bg-bg-secondary border border-border hover:border-accent/50 transition-all duration-300 ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-accent">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-medium font-mono">
                        {exp.project}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs rounded bg-bg-tertiary text-text-tertiary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Final Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: experiences.length * 0.1 + 0.2 }}
            className="relative flex justify-center mt-12"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-accent-glow border border-accent">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">42 Graduate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}