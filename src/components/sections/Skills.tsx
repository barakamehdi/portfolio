"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Server, Wrench } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: Code2,
    skills: [
      { name: "C", level: 95 },
      { name: "C++", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 75 }
    ]
  },
  {
    name: "Frontend",
    icon: Palette,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TailwindCSS", level: 90 },
      { name: "Framer Motion", level: 80 }
    ]
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Redis", level: 70 },
      { name: "REST APIs", level: 85 }
    ]
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Vim", level: 95 }
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono mb-4 block">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Engineered <span className="text-accent">expertise</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl bg-bg-secondary border border-border hover:border-accent/50 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent-glow">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-medium">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-text-secondary">
                        {skill.name}
                      </span>
                      <span className="text-xs text-text-tertiary font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 bg-bg-tertiary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 0.8,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, var(--accent) 0%, ${
                            skill.level > 85
                              ? "#10B981"
                              : skill.level > 70
                              ? "#6366F1"
                              : "#22D3EE"
                          } 100%)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}