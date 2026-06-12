"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python"],
    proficiency: 95
  },
  {
    category: "Backend",
    skills: ["REST APIs", "WebSockets", "Databases", "System Design", "Architecture"],
    proficiency: 90
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "Framer Motion", "UI/UX"],
    proficiency: 85
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD", "Linux", "Performance Optimization"],
    proficiency: 80
  }
];

const experience = [
  {
    year: "2024-Present",
    title: "Full-Stack Engineer",
    org: "42 Network",
    desc: "Building systems, mentoring peers, shipping production features"
  },
  {
    year: "2023-2024",
    title: "Systems Programming",
    org: "42 Cursus",
    desc: "Deep dive into low-level C/C++, algorithms, and system architecture"
  },
  {
    year: "2022-2023",
    title: "Web Development",
    org: "42 Projects",
    desc: "Full-stack development with modern frameworks and best practices"
  }
];

export default function SkillsSlide() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-accent font-mono mb-4 block">
              Skills & Experience
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-2">
              What I <span className="text-accent">can do</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-text-secondary">Technical Skills</h3>
              <div className="space-y-10">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="p-6 rounded-xl bg-bg-secondary border border-border hover:border-accent/30 transition-all"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-lg">{category.category}</h4>
                      <span className="text-base text-accent font-mono font-bold">{category.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-bg-tertiary rounded-full overflow-hidden mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.proficiency}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: false }}
                        className="h-full bg-gradient-to-r from-accent to-indigo-500"
                      />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-2 text-xs bg-bg-tertiary rounded-lg border border-border text-text-secondary hover:border-accent transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-text-secondary">Journey</h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="p-6 rounded-xl bg-bg-secondary border border-border hover:border-accent/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-accent text-lg">{item.title}</h4>
                      <span className="text-xs text-text-tertiary font-mono bg-bg-tertiary px-3 py-1 rounded">{item.year}</span>
                    </div>
                    <p className="text-sm text-text-secondary mb-2 font-medium">{item.org}</p>
                    <p className="text-xs text-text-tertiary leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
